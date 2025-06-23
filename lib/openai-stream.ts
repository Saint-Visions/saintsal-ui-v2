// lib/openai-stream.ts
import { ReadableStream } from "web-streams-polyfill/ponyfill"

export async function OpenAIStream(response: Response) {
  const reader = response.body?.getReader()
  const stream = new ReadableStream({
    async start(controller) {
      const decoder = new TextDecoder()
      while (true) {
        const { done, value } = await reader!.read()
        if (done) break
        const chunk = decoder.decode(value)
        controller.enqueue(chunk)
      }
      controller.close()
    }
  })
  return stream
}
