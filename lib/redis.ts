// lib/redis.ts
import { Redis } from "@upstash/redis"

export const redis = Redis.fromEnv()

// Safe helpers
export async function setCache(key: string, value: any, ttlSec = 3600) {
  return await redis.set(key, value, { ex: ttlSec })
}

export async function getCache(key: string) {
  return await redis.get(key)
}

export async function delCache(key: string) {
  return await redis.del(key)
}
