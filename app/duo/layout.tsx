// app/duo/layout.tsx
import React from "react"
import "../../globals.css" // ✅ Make sure global styles are applied

export default function DuoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-black text-white">
          {/* Optional: Add a header, sidebar, or branding elements here */}
          {children}
        </main>
      </body>
    </html>
  )
}
