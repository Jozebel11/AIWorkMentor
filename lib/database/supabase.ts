import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not configured. Using mock data instead.')
}

// Create Supabase client with fallback for missing env vars
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database types
export interface Job {
  id: string
  title: string
  description: string
  image: string
  use_case_count: number
  tags: string[]
  featured: boolean
  created_at: string
  updated_at: string
}

export interface JobPromptStructure {
  id: string
  job_id: string
  title: string
  description: string
  example: string
  order_index: number
  created_at: string
  updated_at: string
}

export interface Tool {
  id: string
  name: string
  description: string
  long_description?: string
  image: string
  category: string
  url: string
  pros: string[]
  cons: string[]
  use_cases: string[]
  created_at: string
  updated_at: string
}

export interface UseCase {
  id: string
  job_id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  time_estimate: string
  tools: string[]
  steps: Array<{
    title: string
    content: string
  }>
  created_at: string
  updated_at: string
}

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  category: string
  created_at: string
  updated_at: string
}

// Mock data for when Supabase is not configured
const mockJobs: Job[] = [
  {
    id: 'teacher',
    title: 'Teacher',
    description: 'Discover how AI can help create engaging lessons, grade assignments, and provide personalized learning experiences for students of all ages.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    use_case_count: 4,
    tags: ['Education', 'Content Creation', 'Automation'],
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'developer',
    title: 'Software Developer',
    description: 'Explore how AI can help write, debug, and document code, as well as explain complex programming concepts and accelerate development workflows.',
    image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg',
    use_case_count: 6,
    tags: ['Coding', 'Documentation', 'Debugging'],
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'marketer',
    title: 'Digital Marketer',
    description: 'Find out how AI can create campaigns, analyze data, generate content, and optimize ad performance across multiple channels and platforms.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    use_case_count: 5,
    tags: ['Marketing', 'Analytics', 'Content Creation'],
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockTools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'A versatile AI assistant that can help with writing, answering questions, and creative tasks.',
    long_description: 'ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text based on the prompts it receives.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    category: 'Language',
    url: 'https://chat.openai.com',
    pros: ['Versatile for many different tasks', 'Accessible interface', 'No coding required'],
    cons: ['May occasionally produce inaccurate information', 'Limited knowledge cutoff date'],
    use_cases: ['Writing and editing content', 'Answering questions', 'Brainstorming ideas'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'An AI art generator that creates images from text descriptions.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    category: 'Image Generation',
    url: 'https://www.midjourney.com',
    pros: ['Creates highly detailed images', 'Intuitive prompt system'],
    cons: ['Subscription required', 'Operates through Discord'],
    use_cases: ['Creating concept art', 'Generating marketing visuals'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockUseCases: UseCase[] = [
  {
    id: 'teacher-lesson-planning',
    job_id: 'teacher',
    title: 'AI-Powered Lesson Planning',
    description: 'Create engaging, standards-aligned lesson plans in minutes instead of hours using AI tools.',
    difficulty: 'Beginner',
    time_estimate: '15-30 minutes',
    tools: ['chatgpt'],
    steps: [
      {
        title: 'Define Your Lesson Parameters',
        content: 'Start by determining the grade level, subject, topic, learning standards, and time allocation for your lesson.'
      },
      {
        title: 'Create a Detailed Prompt',
        content: 'Open ChatGPT and use the Lesson Plan Creation prompt template. Fill in your specific parameters and requirements.'
      }
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockGlossaryTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Artificial Intelligence (AI)',
    definition: 'The simulation of human intelligence in machines that are programmed to think and learn like humans.',
    category: 'Core Concepts',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    term: 'Machine Learning (ML)',
    definition: 'A subset of AI that involves algorithms that enable computers to learn from and make decisions based on data.',
    category: 'Core Concepts',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

// Database service functions with fallback to mock data
export class DatabaseService {
  // Jobs
  static async getAllJobs(): Promise<Job[]> {
    if (!supabase) {
      console.warn('Using mock data for jobs - Supabase not configured')
      return mockJobs
    }

    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('title')
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching jobs from Supabase, using mock data:', error)
      return mockJobs
    }
  }

  static async getJobById(id: string): Promise<Job | null> {
    if (!supabase) {
      return mockJobs.find(job => job.id === id) || null
    }

    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) return mockJobs.find(job => job.id === id) || null
      return data
    } catch (error) {
      console.error('Error fetching job from Supabase, using mock data:', error)
      return mockJobs.find(job => job.id === id) || null
    }
  }

  static async getFeaturedJobs(limit = 3): Promise<Job[]> {
    if (!supabase) {
      return mockJobs.filter(job => job.featured).slice(0, limit)
    }

    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('featured', true)
        .limit(limit)
      
      if (error) throw error
      return data || mockJobs.filter(job => job.featured).slice(0, limit)
    } catch (error) {
      console.error('Error fetching featured jobs from Supabase, using mock data:', error)
      return mockJobs.filter(job => job.featured).slice(0, limit)
    }
  }

  static async getJobPromptStructures(jobId: string): Promise<JobPromptStructure[]> {
    if (!supabase) {
      return []
    }

    try {
      const { data, error } = await supabase
        .from('job_prompt_structures')
        .select('*')
        .eq('job_id', jobId)
        .order('order_index')
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching job prompt structures from Supabase:', error)
      return []
    }
  }

  // Tools
  static async getAllTools(): Promise<Tool[]> {
    if (!supabase) {
      return mockTools
    }

    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('name')
      
      if (error) throw error
      return data || mockTools
    } catch (error) {
      console.error('Error fetching tools from Supabase, using mock data:', error)
      return mockTools
    }
  }

  static async getToolById(id: string): Promise<Tool | null> {
    if (!supabase) {
      return mockTools.find(tool => tool.id === id) || null
    }

    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) return mockTools.find(tool => tool.id === id) || null
      return data
    } catch (error) {
      console.error('Error fetching tool from Supabase, using mock data:', error)
      return mockTools.find(tool => tool.id === id) || null
    }
  }

  static async getToolsByCategory(category: string): Promise<Tool[]> {
    if (!supabase) {
      return mockTools.filter(tool => tool.category === category)
    }

    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .eq('category', category)
        .order('name')
      
      if (error) throw error
      return data || mockTools.filter(tool => tool.category === category)
    } catch (error) {
      console.error('Error fetching tools by category from Supabase, using mock data:', error)
      return mockTools.filter(tool => tool.category === category)
    }
  }

  // Use Cases
  static async getUseCasesByJobId(jobId: string): Promise<UseCase[]> {
    if (!supabase) {
      return mockUseCases.filter(useCase => useCase.job_id === jobId)
    }

    try {
      const { data, error } = await supabase
        .from('use_cases')
        .select('*')
        .eq('job_id', jobId)
        .order('title')
      
      if (error) throw error
      return data || mockUseCases.filter(useCase => useCase.job_id === jobId)
    } catch (error) {
      console.error('Error fetching use cases from Supabase, using mock data:', error)
      return mockUseCases.filter(useCase => useCase.job_id === jobId)
    }
  }

  static async getUseCaseByJobAndId(jobId: string, useCaseId: string): Promise<UseCase | null> {
    if (!supabase) {
      return mockUseCases.find(useCase => useCase.job_id === jobId && useCase.id === useCaseId) || null
    }

    try {
      const { data, error } = await supabase
        .from('use_cases')
        .select('*')
        .eq('job_id', jobId)
        .eq('id', useCaseId)
        .single()
      
      if (error) return mockUseCases.find(useCase => useCase.job_id === jobId && useCase.id === useCaseId) || null
      return data
    } catch (error) {
      console.error('Error fetching use case from Supabase, using mock data:', error)
      return mockUseCases.find(useCase => useCase.job_id === jobId && useCase.id === useCaseId) || null
    }
  }

  // Glossary
  static async getAllGlossaryTerms(): Promise<GlossaryTerm[]> {
    if (!supabase) {
      return mockGlossaryTerms
    }

    try {
      const { data, error } = await supabase
        .from('glossary_terms')
        .select('*')
        .order('term')
      
      if (error) throw error
      return data || mockGlossaryTerms
    } catch (error) {
      console.error('Error fetching glossary terms from Supabase, using mock data:', error)
      return mockGlossaryTerms
    }
  }

  static async getGlossaryTermsByCategory(category: string): Promise<GlossaryTerm[]> {
    if (!supabase) {
      return mockGlossaryTerms.filter(term => term.category === category)
    }

    try {
      const { data, error } = await supabase
        .from('glossary_terms')
        .select('*')
        .eq('category', category)
        .order('term')
      
      if (error) throw error
      return data || mockGlossaryTerms.filter(term => term.category === category)
    } catch (error) {
      console.error('Error fetching glossary terms by category from Supabase, using mock data:', error)
      return mockGlossaryTerms.filter(term => term.category === category)
    }
  }

  static async getGlossaryCategories(): Promise<string[]> {
    if (!supabase) {
      const categories = [...new Set(mockGlossaryTerms.map(term => term.category))]
      return categories
    }

    try {
      const { data, error } = await supabase
        .from('glossary_terms')
        .select('category')
        .order('category')
      
      if (error) throw error
      
      const categories = [...new Set(data?.map(item => item.category) || [])]
      return categories
    } catch (error) {
      console.error('Error fetching glossary categories from Supabase, using mock data:', error)
      const categories = [...new Set(mockGlossaryTerms.map(term => term.category))]
      return categories
    }
  }

  // Search functionality
  static async searchContent(query: string): Promise<{
    jobs: Job[]
    tools: Tool[]
    useCases: UseCase[]
    glossaryTerms: GlossaryTerm[]
  }> {
    const searchTerm = query.trim().toLowerCase()
    
    if (!searchTerm) {
      return { jobs: [], tools: [], useCases: [], glossaryTerms: [] }
    }

    if (!supabase) {
      // Use mock data for search
      const jobs = mockJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.description.toLowerCase().includes(searchTerm)
      )
      
      const tools = mockTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm)
      )
      
      const useCases = mockUseCases.filter(useCase => 
        useCase.title.toLowerCase().includes(searchTerm) || 
        useCase.description.toLowerCase().includes(searchTerm)
      )
      
      const glossaryTerms = mockGlossaryTerms.filter(term => 
        term.term.toLowerCase().includes(searchTerm) || 
        term.definition.toLowerCase().includes(searchTerm)
      )

      return { jobs, tools, useCases, glossaryTerms }
    }

    try {
      // Search jobs
      const { data: jobs } = await supabase
        .from('jobs')
        .select('*')
        .textSearch('title,description', searchTerm)
        .limit(10)

      // Search tools
      const { data: tools } = await supabase
        .from('tools')
        .select('*')
        .textSearch('name,description', searchTerm)
        .limit(10)

      // Search use cases
      const { data: useCases } = await supabase
        .from('use_cases')
        .select('*')
        .textSearch('title,description', searchTerm)
        .limit(10)

      // Search glossary terms
      const { data: glossaryTerms } = await supabase
        .from('glossary_terms')
        .select('*')
        .textSearch('term,definition', searchTerm)
        .limit(10)

      return {
        jobs: jobs || [],
        tools: tools || [],
        useCases: useCases || [],
        glossaryTerms: glossaryTerms || []
      }
    } catch (error) {
      console.error('Error searching content from Supabase, using mock data:', error)
      
      // Fallback to mock data search
      const jobs = mockJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.description.toLowerCase().includes(searchTerm)
      )
      
      const tools = mockTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm)
      )
      
      const useCases = mockUseCases.filter(useCase => 
        useCase.title.toLowerCase().includes(searchTerm) || 
        useCase.description.toLowerCase().includes(searchTerm)
      )
      
      const glossaryTerms = mockGlossaryTerms.filter(term => 
        term.term.toLowerCase().includes(searchTerm) || 
        term.definition.toLowerCase().includes(searchTerm)
      )

      return { jobs, tools, useCases, glossaryTerms }
    }
  }
}