import { setCache, getCache } from "@/lib/redis"

export async function saveUserChat(userId: string, messages: any[]) {
  return await setCache(`chat:${userId}`, messages)
}

export async function getUserChat(userId: string) {
  return await getCache(`chat:${userId}`)
}

export async function logAssistantReply(userId: string, text: string) {
  return await setCache(`reply:${userId}`, text, 300) // 5 min TTL
}
