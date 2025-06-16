import Head from "next/head"

export default function CustomHead() {
  return (
    <Head>
      <title>SaintSal™ – Cookin’ Knowledge.</title>
      <meta
        name="description"
        content="AI strategy with real execution. Welcome to SaintSal™."
      />
      {/* App Icons */}
      <link rel="icon" href="/favicon.ico" /> {/* fallback */}
      <link
        rel="icon"
        href="/favicon.ico"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/favicon-light.ico"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/favicon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/favicon-256x256.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicon-512x512.png"
      />
      {/* Open Graph for previews and Vercel tile */}
      <meta property="og:title" content="SaintSal™ – Cookin' Knowledge." />
      <meta
        property="og:description"
        content="AI strategy with real execution. Welcome to SaintSal."
      />
      <meta property="og:image" content="/REAL_SVT_LOGO.png" />
      <meta property="og:type" content="website" />
      {/* Theme Branding */}
      <link rel="mask-icon" href="/DARK_SVT_LOGO.png" color="#10161C" />
      <meta name="theme-color" content="#10161C" />
    </Head>
  )
}
