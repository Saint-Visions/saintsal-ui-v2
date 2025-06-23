"use client"
import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000) // fade out in 2s
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-1000 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="animate-fade-in text-center">
        <img
          src="/REAL_SVT_LOGO.png"
          alt="SaintSal Logo"
          className="mx-auto mb-4 size-24"
        />
        <h1 className="text-xl font-semibold tracking-wider">
          Cookin’ Knowledge.
        </h1>
      </div>
    </div>
  )
}
