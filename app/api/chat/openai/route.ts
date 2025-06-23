import { openaiStream } from "ai"
// import { StreamingTextResponse } from "ai"
import { StreamingTextResponse } from "ai-edge"
import { NextResponse } from "next/server"
import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"
import { saveUserChat, logAssistantReply } from "@/lib/memory"

export const runtime = "edge"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  const { messages, workspace_id, user_id } = await req.json()

  const userMessage = messages[messages.length - 1]

  // Log in Supabase
  await supabase.from("messages").insert({
    workspace_id,
    role: "user",
    content: userMessage.content
  })

  // Log in Redis (cache)
  await saveUserChat(user_id, messages)

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    stream: true,
    messages
  })

  const stream: ReadableStream<Uint8Array> = openaiStream(response, {
    async onCompletion(completion: string) {
      await supabase.from("messages").insert({
        workspace_id,
        role: "assistant",
        content: completion
      })

      await logAssistantReply(user_id, completion)
    }
  })

  return new StreamingTextResponse(stream)
}
