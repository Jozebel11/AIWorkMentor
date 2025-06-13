import { getToolById, getAllTools } from "@/lib/data/tools"

export class ToolController {
  static async getToolDetails(toolId: string) {
    try {
      const tool = getToolById(toolId)
      if (!tool) {
        return { tool: null, relatedTools: [] }
      }

      const relatedTools = getAllTools()
        .filter(t => t.category === tool.category && t.id !== tool.id)
        .slice(0, 3)

      return {
        tool,
        relatedTools
      }
    } catch (error) {
      console.error('Error fetching tool details:', error)
      throw new Error('Failed to load tool details')
    }
  }
}