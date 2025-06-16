import { Database } from "@/supabase/types"
import { createClient } from "@supabase/supabase-js"

export const runtime = "edge"

export async function POST(request: Request) {
  const { username } = await request.json()

  if (!username) {
    return new Response(JSON.stringify({ message: "Username is required." }), {
      status: 400
    })
  }

  try {
    const supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", username)

    if (error) {
      throw error
    }

    const isAvailable = data.length === 0

    return new Response(JSON.stringify({ isAvailable }), {
      status: 200
    })
  } catch (error: any) {
    console.error("Username check failed:", error.message || error)
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500
    })
  }
}
