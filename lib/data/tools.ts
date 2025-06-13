export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  url: string;
  pros?: string[];
  cons?: string[];
  useCases?: string[];
}

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "A versatile AI assistant that can help with writing, answering questions, and creative tasks.",
    longDescription: "ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text based on the prompts it receives. It excels at conversational AI, content creation, code assistance, research help, and complex problem-solving across virtually any domain.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    category: "Language",
    url: "https://chat.openai.com",
    pros: [
      "Versatile for many different writing and thinking tasks",
      "Accessible interface with no coding required",
      "Can understand context and follow complex instructions",
      "Available in both free and paid versions",
      "Supports multiple languages",
      "Can handle long conversations with context retention"
    ],
    cons: [
      "May occasionally produce inaccurate information",
      "Limited knowledge cutoff date",
      "Text-only output in base version",
      "No direct internet access in base version",
      "Can be verbose and may need prompting for conciseness"
    ],
    useCases: [
      "Writing and editing content",
      "Answering questions and explaining concepts",
      "Brainstorming ideas and creative writing",
      "Drafting emails and professional communications",
      "Summarizing long text and research",
      "Code review and programming assistance",
      "Language translation and learning",
      "Creating lesson plans and educational content"
    ]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "An AI art generator that creates images from text descriptions.",
    longDescription: "Midjourney is a leading AI image generation tool that creates stunning, artistic images based on text prompts. Known for its distinctive aesthetic quality and ability to produce highly detailed artwork, it's particularly popular among artists, designers, and content creators.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    category: "Image Generation",
    url: "https://www.midjourney.com",
    pros: [
      "Creates highly detailed and artistic images",
      "Intuitive prompt system with style modifiers",
      "Rapid generation of multiple variants",
      "Strong community and sharing features",
      "Excellent for concept art and creative projects",
      "Regular updates with improved models"
    ],
    cons: [
      "Subscription required for all usage",
      "Operates primarily through Discord",
      "Learning curve for optimal prompt crafting",
      "Limited control over specific details",
      "Can be expensive for heavy usage",
      "Queue times during peak usage"
    ],
    useCases: [
      "Creating concept art and illustrations",
      "Generating marketing visuals and social media content",
      "Designing book covers and promotional materials",
      "Prototyping visual ideas quickly",
      "Creating mood boards and visual references",
      "Producing artwork for presentations",
      "Generating unique backgrounds and textures"
    ]
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "AI coding assistant that suggests code completions based on context.",
    longDescription: "GitHub Copilot is an AI pair programmer powered by OpenAI's Codex model. It provides intelligent code suggestions, complete functions, and even entire algorithms based on comments and existing code context, dramatically speeding up development workflows.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    category: "Development",
    url: "https://github.com/features/copilot",
    pros: [
      "Suggests complete code blocks and functions",
      "Integrated with popular IDEs and editors",
      "Understands context and programming intent",
      "Supports many programming languages and frameworks",
      "Helps with documentation and comments",
      "Great for learning new languages and patterns"
    ],
    cons: [
      "Subscription cost for individual developers",
      "May suggest incorrect or outdated patterns",
      "Performance varies by language and framework",
      "Occasional inappropriate or inefficient suggestions",
      "Can create dependency on AI assistance",
      "May suggest code with licensing concerns"
    ],
    useCases: [
      "Accelerating code writing and development",
      "Learning new programming languages or frameworks",
      "Automating repetitive coding tasks",
      "Generating boilerplate code and templates",
      "Writing unit tests and documentation",
      "Debugging and code optimization suggestions"
    ]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI-powered writing assistant that checks grammar, spelling, and style.",
    longDescription: "Grammarly is a comprehensive AI-powered writing assistant that goes beyond basic spell-check to provide advanced grammar correction, style suggestions, tone detection, and clarity improvements. It integrates seamlessly across platforms and applications.",
    image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
    category: "Writing",
    url: "https://www.grammarly.com",
    pros: [
      "Real-time grammar and spelling checks",
      "Style, tone, and clarity suggestions",
      "Works across many platforms and applications",
      "Both free and premium versions available",
      "Plagiarism detection in premium version",
      "Goal-setting features for different writing contexts"
    ],
    cons: [
      "Full features require paid subscription",
      "Occasionally gives incorrect suggestions",
      "May not understand specialized terminology",
      "Some platform limitations and compatibility issues",
      "Can be overly prescriptive with style suggestions"
    ],
    useCases: [
      "Proofreading documents and emails",
      "Improving email communications",
      "Enhancing content clarity and readability",
      "Learning better writing practices",
      "Academic and professional writing assistance",
      "Social media and marketing content optimization"
    ]
  },
  {
    id: "dall-e",
    name: "DALL-E",
    description: "OpenAI's image generation model that creates images from textual descriptions.",
    longDescription: "DALL-E is OpenAI's advanced AI image generation system that creates realistic images and art from natural language descriptions. It excels at understanding complex prompts and generating high-quality, contextually appropriate images.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    category: "Image Generation",
    url: "https://openai.com/dall-e-3",
    pros: [
      "Highly accurate interpretation of text prompts",
      "Creates realistic and detailed images",
      "Integrated with ChatGPT in premium versions",
      "Edit and variation capabilities",
      "Strong safety filters and content policies",
      "Excellent for photorealistic images"
    ],
    cons: [
      "Usage limits based on subscription",
      "Cannot generate certain types of content",
      "Less artistic style than some competitors",
      "Occasional misinterpretation of complex prompts",
      "More expensive per image than alternatives"
    ],
    useCases: [
      "Creating custom illustrations and graphics",
      "Visualizing product concepts and prototypes",
      "Generating marketing materials and advertisements",
      "Producing educational visuals and diagrams",
      "Creating social media content",
      "Designing website headers and backgrounds"
    ]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI assistant integrated into Notion for writing, summarizing, and editing content.",
    longDescription: "Notion AI is an AI writing assistant built directly into the Notion workspace that helps users draft, edit, summarize, and brainstorm content. It leverages the context of your existing workspace to provide more relevant and useful suggestions.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    category: "Productivity",
    url: "https://www.notion.so/product/ai",
    pros: [
      "Seamlessly integrated into Notion workspace",
      "Helps with various writing and organizational tasks",
      "Context-aware based on your existing content",
      "Can generate various content types and formats",
      "Works with databases and structured content",
      "Good for team collaboration and knowledge management"
    ],
    cons: [
      "Requires Notion subscription for full features",
      "Limited to Notion platform",
      "Sometimes generates generic content",
      "Usage limits based on plan",
      "Learning curve for advanced features"
    ],
    useCases: [
      "Drafting documents and meeting notes",
      "Summarizing research and long-form content",
      "Creating content outlines and structures",
      "Rephrasing and editing existing content",
      "Generating ideas for projects and brainstorming",
      "Creating templates and standardized content"
    ]
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    description: "AI-powered web development platform that builds full-stack applications from prompts.",
    longDescription: "Bolt.new is an innovative AI development platform that can create complete web applications, including frontend, backend, and database components, directly from natural language descriptions. It's particularly powerful for rapid prototyping and building functional web applications.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    category: "Development",
    url: "https://bolt.new",
    pros: [
      "Creates full-stack applications from text prompts",
      "Supports modern web technologies and frameworks",
      "Rapid prototyping and development",
      "No coding knowledge required to get started",
      "Integrated development environment",
      "Can deploy applications directly"
    ],
    cons: [
      "Limited customization compared to hand-coded solutions",
      "May generate code that needs refinement",
      "Subscription required for advanced features",
      "Learning curve for complex applications",
      "Dependency on platform availability"
    ],
    useCases: [
      "Rapid prototyping of web applications",
      "Creating MVPs and proof-of-concepts",
      "Building internal tools and dashboards",
      "Learning web development concepts",
      "Creating landing pages and marketing sites",
      "Automating repetitive development tasks"
    ]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant focused on helpful, harmless, and honest interactions.",
    longDescription: "Claude is Anthropic's AI assistant designed with a focus on safety, helpfulness, and honest communication. It excels at complex reasoning, analysis, and maintaining context over long conversations while being particularly strong at writing and research tasks.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg",
    category: "Language",
    url: "https://claude.ai",
    pros: [
      "Strong reasoning and analytical capabilities",
      "Excellent at maintaining context in long conversations",
      "High-quality writing and editing assistance",
      "Strong safety and ethical guidelines",
      "Good at complex problem-solving",
      "Transparent about limitations and uncertainties"
    ],
    cons: [
      "Limited availability in some regions",
      "Usage limits on free tier",
      "Less integration with other tools",
      "Smaller ecosystem compared to competitors",
      "May be overly cautious in some responses"
    ],
    useCases: [
      "Research and analysis tasks",
      "Long-form writing and editing",
      "Complex problem-solving and reasoning",
      "Academic and professional writing",
      "Code review and programming assistance",
      "Strategic planning and decision-making"
    ]
  }
];

export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter(tool => tool.category === category);
}