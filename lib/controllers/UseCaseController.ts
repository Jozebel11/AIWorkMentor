import { getUseCaseByJobAndId } from "@/lib/data/use-cases"
import { getJobById } from "@/lib/data/jobs"
import { getToolById } from "@/lib/data/tools"

export class UseCaseController {
  static async getUseCaseDetails(jobId: string, useCaseId: string) {
    try {
      const job = getJobById(jobId)
      const useCase = getUseCaseByJobAndId(jobId, useCaseId)
      
      if (!job || !useCase) {
        return { job: null, useCase: null, tools: [], sidebarItems: [] }
      }

      // Get tool information
      const tools = useCase.tools.map(toolId => getToolById(toolId)).filter(Boolean)
      
      // Create sidebar items from steps
      const sidebarItems = [
        { title: "Overview", href: "#overview" },
        { title: "Required Tools", href: "#tools" },
        ...(useCase.steps?.map((step, index) => ({
          title: `${index + 1}. ${step.title}`,
          href: `#step-${index + 1}`
        })) || []),
        { title: "Next Steps", href: "#next-steps" }
      ]

      return {
        job,
        useCase,
        tools,
        sidebarItems
      }
    } catch (error) {
      console.error('Error fetching use case details:', error)
      throw new Error('Failed to load use case details')
    }
  }
}