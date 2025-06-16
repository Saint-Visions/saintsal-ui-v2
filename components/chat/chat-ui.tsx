"use client"

import { useChat } from "ai/react"
import { useEffect, useRef } from "react"
import { useParams } from "next/navigation"

export default function ChatUI() {
  const params = useParams()
  const workspace_id = Array.isArray(params.workspace_id)
    ? params.workspace_id[0]
    : params.workspace_id

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      body: { workspace_id }
    })

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex h-screen flex-col p-4">
      <div className="flex-1 space-y-2 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`rounded-md p-2 ${
              m.role === "user"
                ? "self-end bg-blue-100 text-blue-800"
                : "self-start bg-gray-100 text-gray-800"
            }`}
          >
            {m.content}
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 rounded-md border px-4 py-2"
        />
        <button
          type="submit"
          className="rounded-md bg-black px-4 py-2 text-white"
          disabled={isLoading}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </form>
    </div>
  )
}
