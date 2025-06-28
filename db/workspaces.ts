import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"

export const getHomeWorkspaceByUserId = async (userId: string) => {
  const { data: homeWorkspace, error } = await supabase
    .from("workspaces")
    .select("*")
    .eq("user_id", userId)
    .eq("is_home", true)
    .single()

  if (!homeWorkspace) {
    throw new Error(error.message)
  }

  return homeWorkspace.id
}

export const getWorkspaceById = async (workspaceId: string) => {
  const { data: workspace, error } = await supabase
    .from("workspaces")
    .select("*")
    .eq("id", workspaceId)
    .single()

  if (!workspace) {
    // Create a default workspace for demo/development
    console.warn("Workspace not found, creating default workspace for demo")
    return {
      id: workspaceId,
      name: "SaintSal™ Workspace",
      user_id: "demo-user",
      default_model: "gpt-4-1106-preview",
      default_prompt:
        "You are SaintSal™, an AI-powered business automation assistant.",
      default_temperature: 0.7,
      default_context_length: 4096,
      include_profile_context: true,
      include_workspace_instructions: true,
      embeddings_provider: "openai",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  }

  return workspace
}

export const getWorkspacesByUserId = async (userId: string) => {
  const { data: workspaces, error } = await supabase
    .from("workspaces")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (!workspaces) {
    throw new Error(error.message)
  }

  return workspaces
}

export const createWorkspace = async (
  workspace: TablesInsert<"workspaces">
) => {
  const { data: createdWorkspace, error } = await supabase
    .from("workspaces")
    .insert([workspace])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdWorkspace
}

export const updateWorkspace = async (
  workspaceId: string,
  workspace: TablesUpdate<"workspaces">
) => {
  const { data: updatedWorkspace, error } = await supabase
    .from("workspaces")
    .update(workspace)
    .eq("id", workspaceId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedWorkspace
}

export const deleteWorkspace = async (workspaceId: string) => {
  const { error } = await supabase
    .from("workspaces")
    .delete()
    .eq("id", workspaceId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
