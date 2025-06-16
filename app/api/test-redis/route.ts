import { NextResponse } from "next/server"
import { setCache, getCache } from "@/lib/redis"

export async function GET() {
  await setCache("test-key", "🔥 Hello from SaintSal Redis!")
  const value = await getCache("test-key")

  return NextResponse.json({ result: value })
}
