import OpenAI from "openai"
import { getServerProfile, checkApiKey } from "@/lib/server/server-chat-helpers"
import { ChatAPIPayload } from "@/types"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as ChatAPIPayload
  const profile = await getServerProfile()

  checkApiKey(profile.azure_openai_api_key, "Azure OpenAI")

  if (!profile.azure_openai_api_key) {
    throw new Error("Azure OpenAI API key is missing.")
  }

  const openai = new OpenAI({
    apiKey: profile.azure_openai_api_key,
    baseURL: `${profile.azure_openai_endpoint}/openai/deployments/${profile.azure_openai_35_turbo_id}`,
    defaultHeaders: {
      "api-key": profile.azure_openai_api_key
    }
  })

  const openaiMessages = messages.map((msg: any) => ({
    role: msg.role,
    content: msg.content
  }))

  const response = await openai.chat.completions.create({
    model: "", // model is blank for Azure deployments
    messages: openaiMessages,
    temperature: 0.7,
    stream: true
  })

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const content = chunk.choices?.[0]?.delta?.content
        if (content) controller.enqueue(encoder.encode(content))
      }
      controller.close()
    }
  })

  return new Response(stream)
}
