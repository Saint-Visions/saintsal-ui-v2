"use client"

import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const { theme } = useTheme()
  const router = useRouter()

  const handleStartCookin = () => {
    console.log("🔥 Start Cookin button clicked!")

    try {
      // Check if we're in Builder.io preview environment
      const isBuilderPreview =
        typeof window !== "undefined" &&
        (window.location.hostname.includes("builder") ||
          window.location.hostname.includes("fly.dev") ||
          window.location.href.includes("projects.builder.codes"))

      console.log(
        "Environment detected:",
        isBuilderPreview ? "Builder.io Preview" : "Local/Production"
      )

      if (isBuilderPreview) {
        // In Builder.io preview, open in new tab to local server
        console.log("Opening operations dashboard in new tab...")
        window.open("http://localhost:3000/en/workspace1/operations", "_blank")
      } else {
        // In normal environment, use Next.js router
        console.log("Navigating with Next.js router...")
        router.push("/en/workspace1/operations")
      }
    } catch (error) {
      console.error("Navigation error:", error)
      // Ultimate fallback - direct navigation
      window.location.href = "/en/workspace1/operations"
    }
  }

  return (
    <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* SaintSal Logo */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative mb-4">
          <Image
            src="https://cdn.builder.io/api/v1/assets/d83998c6a81f466db4fb83ab90c7ba25/real_svt_logo-d03762?format=webp&width=800"
            alt="SaintSal Logo"
            width={320}
            height={320}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-5xl font-bold text-transparent drop-shadow-lg">
            SAINTSAL™
          </h1>
          <p className="mt-2 text-xl font-medium text-yellow-400/80">
            Cookin' Knowledge.
          </p>
        </div>
      </div>

      {/* Enhanced CTA Button - Direct to Operations */}
      <button
        onClick={() => {
          console.log("🔥 Start Cookin button clicked!")
          // Navigate to operations dashboard
          if (typeof window !== "undefined") {
            window.location.href = "/en/operations"
          }
        }}
        className="group relative mt-8 flex w-[280px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-4 font-bold text-black shadow-2xl transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-yellow-500/25 hover:scale-110 hover:-translate-y-1 cursor-pointer"
      >
        <span className="text-lg">🔥 Start Cookin - Operations</span>
        <IconArrowRight
          className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
          size={20}
        />

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
      </button>

      {/* Direct Backup Links */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <a
          href="/en/operations"
          className="text-green-400 underline hover:text-green-300 transition-colors font-semibold"
        >
          🚀 Direct Link: Open Operations Dashboard
        </a>
        <p className="text-gray-500 text-sm">
          (Click above if button doesn't work)
        </p>
      </div>

      {/* Success Message */}
      <div className="mt-6 max-w-md text-center">
        <p className="text-green-400 font-semibold text-lg">
          ✅ Operations Page is Working!
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Click above to access your AI-powered business features
        </p>
      </div>

      {/* Features Preview */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          🚀 What's Inside Your Operations Dashboard
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🔍</div>
            <div className="text-blue-400 font-semibold text-sm">
              Lead Discovery
            </div>
            <div className="text-gray-400 text-xs">AI-powered lookup</div>
          </div>
          <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <div className="text-green-400 font-semibold text-sm">
              Referral Network
            </div>
            <div className="text-gray-400 text-xs">Partner tracking</div>
          </div>
          <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-purple-400 font-semibold text-sm">
              AI Deal Analysis
            </div>
            <div className="text-gray-400 text-xs">GPT-4 insights</div>
          </div>
          <div className="bg-pink-900/20 border border-pink-500/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📱</div>
            <div className="text-pink-400 font-semibold text-sm">
              Mobile Export
            </div>
            <div className="text-gray-400 text-xs">iOS/Android apps</div>
          </div>
        </div>
      </div>

      {/* Enhanced Intro Text */}
      <div className="mt-8 text-center max-w-2xl px-6">
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Welcome to the future of{" "}
          <span className="text-yellow-400 font-semibold">
            intelligent conversations
          </span>
        </p>
        <p className="text-gray-400 leading-relaxed">
          SaintSal's premium AI assistant combines cutting-edge technology with
          intuitive design, delivering{" "}
          <span className="text-yellow-400">real-time insights</span> and{" "}
          <span className="text-yellow-400">dynamic support</span>
          for Saint Vision Technologies and partners.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
          <span className="bg-gray-800/50 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20">
            ⚡ Intelligent Ops
          </span>
          <span className="bg-gray-800/50 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20">
            🧠 Real-time AI
          </span>
          <span className="bg-gray-800/50 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20">
            🔒 Enterprise Ready
          </span>
        </div>
      </div>
    </div>
  )
}
