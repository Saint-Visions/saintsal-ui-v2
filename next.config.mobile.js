const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development"
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for mobile builds
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io"
      },
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  // SWC optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  // Mobile-specific optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@tabler/icons-react", "lucide-react"]
  },
  // Capacitor compatibility
  assetPrefix: process.env.NODE_ENV === "production" ? "." : "",
  // Bundle optimization for mobile
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      }
    }

    // Optimize for mobile bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    }

    return config
  },
  // PWA and mobile settings
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Internationalization for mobile
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
