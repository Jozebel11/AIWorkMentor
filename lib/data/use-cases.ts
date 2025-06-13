export interface UseCase {
  id: string;
  jobId: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeEstimate: string;
  tools: string[];
  steps?: {
    title: string;
    content: string;
  }[];
}

export const useCases: UseCase[] = [
  {
    id: "lesson-planning",
    jobId: "teacher",
    title: "AI-Assisted Lesson Planning",
    description: "Learn how to use AI tools to create engaging, standards-aligned lesson plans in less time.",
    difficulty: "Beginner",
    timeEstimate: "15-20 minutes",
    tools: ["chatgpt", "notion-ai"],
    steps: [
      {
        title: "Define Your Learning Objectives",
        content: "Start by clearly defining what students should learn from this lesson. Be specific about the skills and knowledge students should gain. Include your grade level, subject area, and any curriculum standards that need to be addressed. Consider both content objectives (what students will know) and language objectives (how they will demonstrate understanding). This foundation ensures your AI-generated lesson plan will be focused and purposeful."
      },
      {
        title: "Craft a Comprehensive Lesson Plan Prompt",
        content: "Use a detailed prompt in ChatGPT like: 'Create a detailed 45-minute lesson plan for 5th-grade science on the water cycle. Include: learning objectives aligned with NGSS standards, materials list, 5-minute warm-up activity, 20-minute main instruction with hands-on demonstration, 10-minute guided practice, 8-minute independent work, 2-minute assessment, and differentiation strategies for ELL students and advanced learners.' The more specific your prompt, the more useful your lesson plan will be."
      },
      {
        title: "Review and Customize the Generated Plan",
        content: "Carefully review the AI-generated lesson plan and adapt it to your teaching style and students' specific needs. Look for opportunities to incorporate your classroom routines, available resources, and student interests. Ask follow-up questions like: 'Revise the warm-up activity to include movement' or 'Add three discussion questions that promote critical thinking about water conservation.' Remember, AI provides the framework—you add the personal touch."
      },
      {
        title: "Create Supporting Materials and Assessments",
        content: "Use AI to generate supplementary materials that enhance your lesson. Request: 'Create 5 higher-order thinking questions about the water cycle for class discussion,' 'Design a simple lab worksheet for observing evaporation,' or 'Generate a quick formative assessment with 3 multiple-choice and 2 short-answer questions.' These materials should align with your lesson objectives and provide multiple ways for students to engage with the content."
      },
      {
        title: "Organize and Refine with Notion AI",
        content: "Import your lesson plan into Notion and use Notion AI to help organize and enhance it. Ask Notion AI to: 'Create a preparation checklist for this lesson,' 'Summarize the key concepts in bullet points,' or 'Reorganize this content into a teacher-friendly format with clear timing.' You can also use it to create templates for future lessons or link related resources and materials."
      },
      {
        title: "Plan for Assessment and Reflection",
        content: "Use AI to help design both formative and summative assessments that align with your lesson objectives. Create exit tickets, rubrics, or observation checklists. After teaching the lesson, reflect on its effectiveness and use AI to help analyze what worked well and what could be improved. This creates a cycle of continuous improvement in your lesson planning process."
      }
    ]
  },
  {
    id: "grading-assistance",
    jobId: "teacher",
    title: "AI-Enhanced Grading and Feedback",
    description: "Discover how AI can help streamline the grading process while providing meaningful, personalized feedback to students.",
    difficulty: "Intermediate",
    timeEstimate: "25-30 minutes",
    tools: ["chatgpt", "grammarly"],
    steps: [
      {
        title: "Establish Clear Rubrics and Criteria",
        content: "Before using AI for grading assistance, create detailed rubrics that clearly define expectations for each assignment. Include specific criteria for different performance levels (exemplary, proficient, developing, beginning). Share these rubrics with AI tools to ensure consistent evaluation. For example: 'Use this 4-point rubric to evaluate student essays: Content Knowledge (25%), Organization (25%), Writing Mechanics (25%), Critical Thinking (25%). Provide specific feedback for each criterion.'"
      },
      {
        title: "Generate Constructive Feedback Templates",
        content: "Create a library of feedback templates using ChatGPT for common issues and strengths. Request: 'Generate positive, constructive feedback templates for middle school writing assignments addressing: weak thesis statements, excellent use of evidence, poor paragraph organization, creative introductions, and unclear conclusions. Make feedback specific, actionable, and encouraging.' These templates save time while ensuring consistent, helpful feedback."
      },
      {
        title: "Use AI for Initial Content Analysis",
        content: "For written assignments, use AI to help identify patterns and areas for feedback. Paste anonymized student work and ask: 'Analyze this 8th-grade persuasive essay for: argument strength, evidence quality, counterargument consideration, and logical flow. Identify 2-3 specific strengths and 2-3 areas for improvement with examples from the text.' This helps you focus your detailed review on the most important aspects."
      },
      {
        title: "Enhance Grammar and Mechanics Review",
        content: "Use Grammarly or similar tools to quickly identify grammar, spelling, and mechanics issues in student writing. However, don't just mark errors—use AI to help explain patterns: 'This student frequently confuses their/there/they're. Create a mini-lesson explanation and practice activity to help them master this concept.' Focus on teaching, not just correcting."
      },
      {
        title: "Personalize Feedback for Individual Students",
        content: "Use AI to help tailor feedback to individual student needs and growth areas. Provide context like: 'This student is an English Language Learner who struggles with verb tenses but has excellent ideas. Provide encouraging feedback that acknowledges their strong content while giving specific, gentle guidance on verb usage with examples.' Always review and personalize AI suggestions based on your knowledge of each student."
      },
      {
        title: "Maintain Professional Judgment and Relationships",
        content: "Remember that AI is a tool to enhance, not replace, your professional expertise. Always review AI-generated feedback before sharing it with students. Add personal touches that reflect your relationship with each student and their individual growth journey. Use AI insights to inform your teaching decisions and identify class-wide patterns that need addressing in future lessons."
      }
    ]
  },
  {
    id: "personalized-learning",
    jobId: "teacher",
    title: "Creating Personalized Learning Experiences",
    description: "Learn how to use AI to adapt content, pace, and teaching methods to meet individual student needs and learning styles.",
    difficulty: "Advanced",
    timeEstimate: "35-45 minutes",
    tools: ["chatgpt", "claude", "notion-ai"],
    steps: [
      {
        title: "Assess Individual Student Needs and Learning Profiles",
        content: "Begin by gathering comprehensive data about each student's learning preferences, strengths, challenges, and interests. Use AI to help analyze this information: 'Based on this student profile—visual learner, struggles with reading comprehension, loves science fiction, works well in small groups—suggest 5 specific adaptations for teaching the Revolutionary War unit.' Create detailed learner profiles that inform all your instructional decisions."
      },
      {
        title: "Design Adaptive Content Pathways",
        content: "Use AI to create multiple pathways through the same content based on different learning needs. Request: 'Create three different approaches to teaching fractions to 4th graders: one for visual learners using manipulatives, one for kinesthetic learners using movement activities, and one for analytical learners using number patterns. Each should reach the same learning objectives but use different methods.' This ensures all students can access the content in ways that work for them."
      },
      {
        title: "Generate Differentiated Activities and Assessments",
        content: "Create a variety of activities that address the same learning objectives at different complexity levels and through different modalities. Ask AI: 'Design tiered activities for learning about ecosystems: Level 1 for students reading below grade level, Level 2 for on-grade-level students, Level 3 for advanced learners. Include visual, auditory, and kinesthetic options for each level.' This provides choice and appropriate challenge for all students."
      },
      {
        title: "Implement Real-Time Progress Monitoring",
        content: "Use AI to help design systems for tracking individual student progress and adjusting instruction accordingly. Create prompts like: 'Design a simple progress monitoring system for tracking student mastery of multiplication facts. Include daily check-ins, weekly assessments, and intervention triggers. Suggest how to use this data to adjust instruction for different learners.' Regular monitoring allows for timely adjustments to keep all students progressing."
      },
      {
        title: "Foster Student Agency and Self-Directed Learning",
        content: "Use AI to help students become partners in their own learning journey. Generate tools like: 'Create student-friendly learning goal trackers for 6th-grade writing skills. Include self-reflection questions, progress indicators, and next-step suggestions that students can use independently.' Teach students to use AI tools appropriately for their own learning, such as generating practice problems or explaining concepts in different ways."
      },
      {
        title: "Build Collaborative Learning Communities",
        content: "Design AI-assisted strategies for peer learning and collaboration that leverage individual strengths. Request: 'Create collaborative learning structures where students with different strengths can support each other in learning about the solar system. Include roles for strong readers, visual thinkers, and hands-on learners.' Use AI to suggest optimal grouping strategies and collaborative activities that benefit all participants."
      },
      {
        title: "Engage Families in Personalized Learning",
        content: "Use AI to help communicate with families about their child's personalized learning plan and how they can support at home. Generate: 'Create a family communication template explaining this student's personalized math learning plan, including specific ways parents can support at home, signs of progress to look for, and resources for additional practice.' Strong home-school partnerships amplify the impact of personalized learning."
      }
    ]
  },
  {
    id: "content-research",
    jobId: "writer",
    title: "AI-Powered Content Research and Ideation",
    description: "Learn how to use AI tools to efficiently research topics, gather information, and organize your findings for compelling content creation.",
    difficulty: "Beginner",
    timeEstimate: "20-25 minutes",
    tools: ["chatgpt", "claude"],
    steps: [
      {
        title: "Define Research Parameters and Objectives",
        content: "Start by clearly outlining your research scope and goals. Define your topic, target audience, content type, and specific questions you need answered. Create a research brief like: 'I'm writing a 2,000-word guide about sustainable living for millennials. I need current statistics, expert opinions, practical tips, common misconceptions, and emerging trends. My audience values authenticity and actionable advice.' This focused approach helps AI provide more relevant and useful information."
      },
      {
        title: "Generate Strategic Research Questions",
        content: "Use AI to help brainstorm comprehensive research questions that will uncover valuable insights. Ask: 'I'm researching sustainable living for millennials. Generate 15 research questions that would help me create comprehensive, valuable content. Include questions about motivations, barriers, current practices, emerging trends, and practical solutions.' Good research questions lead to better content and help you avoid missing important angles."
      },
      {
        title: "Conduct Multi-Layered Information Gathering",
        content: "Use AI to gather information at different levels of depth. Start broad: 'Provide a comprehensive overview of sustainable living trends among millennials, including key statistics, major challenges, and current solutions.' Then go deeper: 'What are the top 5 barriers preventing millennials from adopting sustainable practices, and what innovative solutions are emerging to address each barrier?' Layer your research from general to specific."
      },
      {
        title: "Analyze Trends and Identify Unique Angles",
        content: "Ask AI to help identify patterns, trends, and unique perspectives in your research. Use prompts like: 'Based on current sustainable living trends, what emerging topics haven't been extensively covered yet? What unique angles could differentiate my content from existing articles?' Look for gaps in current coverage, emerging trends, or underexplored perspectives that could make your content stand out."
      },
      {
        title: "Organize and Structure Your Findings",
        content: "Use AI to help organize your research into a logical, usable structure. Request: 'Organize this research about sustainable living into a content outline with main themes, supporting points, and suggested flow. Identify which information would work best as statistics, quotes, examples, or actionable tips.' A well-organized research foundation makes the writing process much smoother and more efficient."
      },
      {
        title: "Verify and Expand Key Information",
        content: "Always fact-check important statistics, claims, and expert opinions from authoritative sources. Use AI to help identify what needs verification: 'Which of these claims about sustainable living require fact-checking from authoritative sources? Suggest specific types of sources to verify each claim.' Remember that AI can provide outdated or incorrect information, so verification is crucial for credible content."
      }
    ]
  },
  {
    id: "content-optimization",
    jobId: "writer",
    title: "Content Optimization and SEO Enhancement",
    description: "Master using AI tools to optimize your content for search engines while maintaining readability and engagement for human readers.",
    difficulty: "Advanced",
    timeEstimate: "30-40 minutes",
    tools: ["chatgpt", "claude"],
    steps: [
      {
        title: "Conduct AI-Assisted Keyword Research and Analysis",
        content: "Use AI to help identify and analyze relevant keywords for your content. Ask: 'For an article about sustainable living for millennials, suggest primary and secondary keywords, long-tail keyword opportunities, and related semantic keywords. Consider search intent and competition level for each.' Then request: 'Analyze these keywords for content gaps—what specific questions or subtopics related to these keywords aren't being adequately addressed by existing content?'"
      },
      {
        title: "Optimize Content Structure for Search and Readability",
        content: "Use AI to enhance your content structure for both SEO and user experience. Request: 'Review this article outline about sustainable living and suggest improvements for: SEO-friendly heading structure (H1, H2, H3), logical content flow, featured snippet opportunities, and internal linking possibilities. Ensure the structure serves both search engines and human readers.' Good structure improves both rankings and user engagement."
      },
      {
        title: "Enhance Content Quality and Depth",
        content: "Ask AI to help identify opportunities to add value and depth to your content. Use prompts like: 'Review this draft article and suggest where to add: expert quotes, statistical evidence, practical examples, case studies, or actionable tips. What questions might readers still have after reading this content?' High-quality, comprehensive content performs better in search results and provides more value to readers."
      },
      {
        title: "Optimize Technical SEO Elements",
        content: "Use AI to help craft compelling meta descriptions, title tags, and other SEO elements. Request: 'Create 3 variations of meta descriptions for this sustainable living article. Each should be under 155 characters, include the primary keyword naturally, and compel clicks. Also suggest 5 alternative title tag options that balance SEO and click-through appeal.' These elements significantly impact search visibility and click-through rates."
      },
      {
        title: "Develop Strategic Content Distribution and Promotion",
        content: "Ask AI to help plan how to maximize your content's reach and impact. Use prompts like: 'Suggest a content distribution strategy for this sustainable living article. Include social media adaptations, email newsletter angles, potential guest posting opportunities, and ways to repurpose this content into other formats. What communities or platforms would be most interested in this content?'"
      },
      {
        title: "Monitor Performance and Iterate",
        content: "Use AI to help analyze content performance and suggest improvements. After publication, ask: 'Based on these performance metrics (time on page, bounce rate, social shares, comments), what aspects of the content are working well and what could be improved? Suggest specific optimizations for better engagement and search performance.' Continuous improvement leads to better long-term results."
      }
    ]
  },
  {
    id: "code-debugging",
    jobId: "developer",
    title: "AI-Powered Code Debugging and Optimization",
    description: "Learn how to use AI tools to identify and fix bugs in your code more efficiently while improving code quality and performance.",
    difficulty: "Intermediate",
    timeEstimate: "20-30 minutes",
    tools: ["copilot", "chatgpt"],
    steps: [
      {
        title: "Systematic Bug Identification and Documentation",
        content: "Start by clearly documenting the bug's symptoms and context. Create a detailed description including: what was expected, what actually happened, error messages, steps to reproduce, and the environment where it occurs. Use AI to help structure this information: 'Help me document this bug systematically. The function should return a sorted array but returns undefined when the input array is empty. Here's the error message and code context...' Proper documentation is crucial for effective debugging."
      },
      {
        title: "Leverage GitHub Copilot for Real-Time Assistance",
        content: "With GitHub Copilot installed in your IDE, use inline comments to get immediate debugging suggestions. Write descriptive comments above problematic code like: '// This function throws a TypeError when handling null values. Fix to properly handle edge cases.' or '// Optimize this loop for better performance with large datasets.' Copilot will often provide contextual fixes and improvements based on your comments and surrounding code."
      },
      {
        title: "Use Strategic Prompting for Complex Issues",
        content: "For more complex bugs, use ChatGPT with detailed, structured prompts. Include: the programming language, relevant code snippets, error messages, expected vs. actual behavior, and any debugging steps you've already tried. Example: 'I'm getting a memory leak in this React component. Here's the useEffect hook and the error. The component should clean up event listeners on unmount but seems to be retaining references. What's causing this and how can I fix it?'"
      },
      {
        title: "Analyze Root Causes and Implement Robust Solutions",
        content: "Don't just fix the immediate symptom—use AI to help understand the underlying cause. Ask: 'This fix resolves the immediate error, but what's the root cause of this issue? Are there other places in the codebase where similar problems might occur? How can I prevent this type of bug in the future?' Understanding root causes leads to more robust, maintainable code."
      },
      {
        title: "Implement Comprehensive Testing Strategies",
        content: "Use AI to help create tests that prevent similar bugs in the future. Request: 'Generate unit tests for this function that cover edge cases including: empty inputs, null values, extremely large datasets, and invalid data types. Also suggest integration tests that would catch this type of bug in the broader application context.' Good tests are your best defense against regression bugs."
      },
      {
        title: "Code Review and Knowledge Transfer",
        content: "Before implementing AI-suggested fixes, ensure you understand the solution completely. Ask follow-up questions like: 'Explain why this solution works and what would happen if we used approach X instead.' Document the bug and solution for future reference. Share insights with your team to prevent similar issues. Understanding the 'why' behind fixes makes you a better developer and helps prevent similar bugs."
      }
    ]
  },
  {
    id: "web-app-prototyping",
    jobId: "developer",
    title: "Rapid Web Application Prototyping with AI",
    description: "Learn how to use AI development tools to quickly create functional web application prototypes and MVPs.",
    difficulty: "Intermediate",
    timeEstimate: "30-45 minutes",
    tools: ["bolt-new", "chatgpt", "copilot"],
    steps: [
      {
        title: "Define Comprehensive Application Requirements",
        content: "Start by clearly outlining your application's purpose, core features, and technical requirements. Create a detailed specification including: target users, main user flows, essential features vs. nice-to-haves, technical constraints, and success criteria. Use AI to help refine your requirements: 'Review this app concept for a task management tool. Are there any critical features I'm missing? What potential technical challenges should I consider? How can I simplify this for an MVP?' Clear requirements lead to better prototypes."
      },
      {
        title: "Generate Initial Prototype with Bolt.new",
        content: "Use Bolt.new to create your foundational application structure. Provide a comprehensive prompt like: 'Create a task management web app with user authentication, project creation, task assignment, due date tracking, and team collaboration features. Use React, Node.js, and a modern UI framework. Include responsive design and basic data persistence.' Be specific about functionality but flexible about implementation details."
      },
      {
        title: "Iteratively Add Features and Functionality",
        content: "Once you have the basic structure, use follow-up prompts to add specific features systematically. Request additions like: 'Add drag-and-drop functionality for task reordering,' 'Implement real-time notifications for task updates,' or 'Create a dashboard with project progress visualization.' Build complexity gradually, testing each addition before moving to the next feature."
      },
      {
        title: "Enhance with Custom Code and Optimizations",
        content: "Use GitHub Copilot or ChatGPT to add custom functionality that wasn't generated automatically. Ask for specific implementations: 'Write a function to calculate project completion percentage based on task status,' 'Add input validation for the task creation form,' or 'Implement a search function that filters tasks by title and description.' Custom code makes your prototype more robust and feature-complete."
      },
      {
        title: "Implement Comprehensive Testing and Debugging",
        content: "Test your prototype thoroughly across different scenarios and use AI to help debug issues. When problems arise, use detailed prompts: 'The task deletion feature isn't updating the UI properly. Here's the relevant code and the console errors. The state should update immediately but there's a delay. How can I fix this and prevent similar state management issues?' Systematic testing ensures your prototype works reliably."
      },
      {
        title: "Optimize for Production Readiness",
        content: "Use AI to help identify and address production concerns like performance, security, and scalability. Ask: 'Review this prototype for production readiness. What security vulnerabilities should I address? How can I optimize performance for larger datasets? What error handling and logging should I add?' Even prototypes benefit from production-minded improvements that make them more robust and scalable."
      }
    ]
  },
  {
    id: "api-documentation",
    jobId: "developer",
    title: "Automated API Documentation Generation",
    description: "Discover how to use AI to create comprehensive, user-friendly API documentation that developers actually want to use.",
    difficulty: "Advanced",
    timeEstimate: "25-35 minutes",
    tools: ["chatgpt", "copilot"],
    steps: [
      {
        title: "Analyze and Structure Your API Architecture",
        content: "Begin by having AI help you analyze and document your API's overall structure. Provide your API code or schema and ask: 'Analyze this REST API and create a comprehensive overview including: endpoint categories, authentication methods, data models, error handling patterns, and rate limiting. Identify any inconsistencies or areas that need clarification for documentation.' This creates a solid foundation for detailed documentation."
      },
      {
        title: "Generate Comprehensive Endpoint Documentation",
        content: "For each API endpoint, use AI to create detailed documentation. Use prompts like: 'Document this API endpoint completely: [paste endpoint code]. Include: purpose and use cases, HTTP method and URL, required and optional parameters with types and validation rules, request/response examples with realistic data, possible error responses with codes and messages, and any special considerations or limitations.' Comprehensive endpoint docs are crucial for developer adoption."
      },
      {
        title: "Create Interactive Examples and Code Samples",
        content: "Use AI to generate practical, working code examples in multiple programming languages. Request: 'Create code examples for calling this API endpoint in JavaScript (fetch and axios), Python (requests), cURL, and PHP. Include error handling, authentication headers, and realistic use cases. Make examples copy-pasteable and immediately usable.' Good examples dramatically reduce integration time for developers."
      },
      {
        title: "Develop User-Friendly Guides and Tutorials",
        content: "Beyond reference documentation, create guides that help developers accomplish common tasks. Ask AI: 'Create a step-by-step tutorial for new developers using this API to [specific use case]. Include: getting started steps, authentication setup, making first API call, handling common scenarios, troubleshooting tips, and next steps. Write for developers who are new to this API but experienced with REST APIs generally.'"
      },
      {
        title: "Implement Automated Documentation Updates",
        content: "Use AI to help create systems that keep documentation current with code changes. Request: 'Suggest a workflow for keeping API documentation synchronized with code changes. How can I use code comments, automated tools, and AI assistance to ensure documentation stays current? What checks should be part of the development process?' Outdated documentation is worse than no documentation."
      },
      {
        title: "Optimize for Developer Experience and Discoverability",
        content: "Use AI to review and improve the overall developer experience of your documentation. Ask: 'Review this API documentation for developer experience. How can I improve: navigation and findability, search functionality, visual design and readability, mobile responsiveness, integration with development tools? What are developers likely to struggle with, and how can I address those pain points proactively?' Great documentation is a competitive advantage."
      }
    ]
  },
  {
    id: "campaign-creation",
    jobId: "marketer",
    title: "AI-Driven Marketing Campaign Development",
    description: "Discover how to use AI to develop comprehensive marketing campaigns from strategy to execution, including content creation and performance optimization.",
    difficulty: "Intermediate",
    timeEstimate: "30-40 minutes",
    tools: ["chatgpt", "dall-e"],
    steps: [
      {
        title: "Conduct Market Research and Audience Analysis",
        content: "Begin with comprehensive market research using AI to analyze your target audience, competitors, and market trends. Use prompts like: 'Analyze the market for [product/service] targeting [demographic]. Include: audience pain points and motivations, competitor analysis with strengths/weaknesses, current market trends and opportunities, messaging gaps in the market, and potential positioning strategies.' This research foundation ensures your campaign resonates with the right people."
      },
      {
        title: "Develop Strategic Campaign Framework",
        content: "Use AI to create a comprehensive campaign strategy that aligns with your business goals. Request: 'Create a marketing campaign strategy for [product] targeting [audience]. Include: primary and secondary objectives with KPIs, key messaging pillars and value propositions, recommended channel mix with rationale, budget allocation suggestions, timeline with key milestones, and success metrics for each channel.' A solid strategy guides all tactical decisions."
      },
      {
        title: "Generate Multi-Channel Content Strategy",
        content: "Create a comprehensive content plan that works across all your chosen channels. Ask AI: 'Develop a content strategy for this campaign across social media, email, blog, and paid ads. Include: content themes and topics for each channel, content calendar with posting frequency, content formats and types, cross-channel integration opportunities, and repurposing strategies to maximize content value.' Consistent messaging across channels amplifies campaign impact."
      },
      {
        title: "Create Compelling Visual and Written Assets",
        content: "Use AI tools to generate campaign assets efficiently. For visuals, use DALL-E with prompts like: 'Create a modern, professional social media graphic for [product] that conveys [key message]. Style: clean and minimalist, Colors: [brand colors], Include: [specific elements], Target audience: [description].' For copy, request: 'Write compelling ad copy variations for Facebook ads promoting [product]. Include headlines, descriptions, and CTAs that emphasize [key benefits]. Create 5 variations testing different emotional appeals.'"
      },
      {
        title: "Implement Advanced Targeting and Personalization",
        content: "Use AI to develop sophisticated targeting strategies and personalized messaging. Request: 'Create detailed audience segments for this campaign with specific targeting criteria, personalized messaging for each segment, dynamic content recommendations, and behavioral triggers for automated follow-up. How can I use data to personalize the experience for different user types?' Personalization significantly improves campaign performance."
      },
      {
        title: "Design Optimization and Performance Monitoring Plan",
        content: "Create a comprehensive plan for measuring and optimizing campaign performance. Ask AI: 'Design a performance monitoring and optimization plan for this campaign. Include: key metrics to track for each channel, A/B testing strategies for continuous improvement, automated optimization triggers, reporting schedule and stakeholders, and contingency plans for different performance scenarios.' Continuous optimization maximizes campaign ROI."
      }
    ]
  },
  {
    id: "customer-journey-mapping",
    jobId: "marketer",
    title: "AI-Enhanced Customer Journey Mapping",
    description: "Learn how to use AI to create detailed customer journey maps that identify opportunities for improved engagement and conversion.",
    difficulty: "Advanced",
    timeEstimate: "40-50 minutes",
    tools: ["chatgpt", "claude"],
    steps: [
      {
        title: "Analyze Customer Data and Behavioral Patterns",
        content: "Start by using AI to analyze available customer data and identify patterns in behavior, preferences, and decision-making. Provide AI with anonymized customer data or descriptions and ask: 'Analyze this customer behavior data to identify: common paths to purchase, drop-off points in the funnel, customer segments with different journey patterns, seasonal or temporal patterns, and factors that influence conversion timing.' Data-driven insights create more accurate journey maps."
      },
      {
        title: "Map Detailed Customer Touchpoints and Interactions",
        content: "Use AI to help identify and categorize all potential customer touchpoints across the entire journey. Request: 'Map all potential touchpoints for customers buying [product/service]. Include: awareness stage touchpoints (social media, search, referrals), consideration stage interactions (website visits, content consumption, comparisons), decision stage touchpoints (demos, consultations, reviews), and post-purchase interactions (onboarding, support, advocacy). Identify both digital and offline touchpoints.'"
      },
      {
        title: "Identify Emotional States and Pain Points",
        content: "Ask AI to help analyze the emotional journey customers experience at each stage. Use prompts like: 'For each stage of this customer journey, identify: emotional states customers typically experience, common pain points and frustrations, moments of delight or satisfaction, decision-making factors and concerns, and information needs at each stage. How do emotions change throughout the journey, and what triggers these changes?' Understanding emotions helps create more empathetic marketing."
      },
      {
        title: "Discover Optimization Opportunities and Solutions",
        content: "Use AI to identify specific opportunities for improving the customer experience. Request: 'Based on this customer journey analysis, identify: friction points that cause customer drop-off, opportunities to add value at each stage, content gaps that need to be filled, automation opportunities for better experience, and personalization possibilities. For each opportunity, suggest specific solutions and their potential impact on conversion rates.'"
      },
      {
        title: "Design Personalized Journey Variations",
        content: "Create different journey maps for different customer segments or personas. Ask AI: 'Adapt this customer journey map for different customer segments: [describe segments]. How do journey paths, touchpoint preferences, decision-making factors, and timeline differ for each segment? What personalization strategies would be most effective for each group?' Personalized journeys improve relevance and conversion rates."
      },
      {
        title: "Implement Measurement and Continuous Improvement",
        content: "Use AI to design systems for measuring journey effectiveness and identifying improvement opportunities. Request: 'Create a measurement framework for this customer journey including: KPIs for each journey stage, methods for tracking cross-channel behavior, feedback collection strategies, regular review and optimization processes, and ways to identify emerging journey patterns. How can I use data to continuously refine and improve the customer journey?' Continuous improvement ensures your journey maps stay relevant and effective."
      }
    ]
  },
  {
    id: "design-ideation",
    jobId: "designer",
    title: "AI-Enhanced Design Ideation and Concept Development",
    description: "Learn how to use AI tools to generate creative design concepts, overcome creative blocks, and develop innovative visual solutions.",
    difficulty: "Beginner",
    timeEstimate: "25-30 minutes",
    tools: ["chatgpt", "midjourney", "dall-e"],
    steps: [
      {
        title: "Develop Comprehensive Design Brief and Context",
        content: "Start by creating a detailed design brief that will guide your AI-assisted ideation process. Include: project objectives and success criteria, target audience demographics and preferences, brand personality and values, technical constraints and requirements, competitive landscape analysis, and desired emotional response. Use AI to refine your brief: 'Review this design brief for [project type]. Are there any critical considerations I'm missing? What additional context would help generate more relevant design concepts?' A thorough brief leads to better design solutions."
      },
      {
        title: "Generate Strategic Concept Directions",
        content: "Use AI to brainstorm multiple conceptual approaches to your design challenge. Request: 'Generate 5 distinct design concept directions for [project description]. For each concept, provide: core visual theme and aesthetic approach, key design elements and style characteristics, how it addresses the target audience needs, differentiation from competitors, and potential execution challenges. Consider both conventional and innovative approaches.' Multiple concepts ensure you explore the full solution space."
      },
      {
        title: "Create Detailed Mood Boards and Visual References",
        content: "Develop comprehensive mood boards that capture the essence of your chosen design directions. Ask AI: 'Create detailed mood board concepts for [selected design direction]. Include: color palette with psychological associations, typography styles and personality, photography/illustration style guidelines, texture and pattern suggestions, layout and composition principles, and cultural or aesthetic references. How do these elements work together to support the design goals?'"
      },
      {
        title: "Generate AI-Powered Visual Concepts",
        content: "Use image generation tools to create visual concepts based on your mood boards. Craft detailed prompts like: 'Create a [design type] that embodies [design concept]. Style: [aesthetic description], Mood: [emotional tone], Colors: [specific palette], Include: [key elements], Composition: [layout description], Target audience: [description]. The design should feel [adjectives] and communicate [key message].' Generate multiple variations to explore different executions."
      },
      {
        title: "Develop Comprehensive Design Systems",
        content: "Use AI to help create cohesive design systems that can scale across applications. Request: 'Based on this design concept, develop a comprehensive design system including: logo variations and usage guidelines, color palette with accessibility considerations, typography hierarchy and pairing rules, iconography style and principles, layout grids and spacing systems, and component library basics. How can these elements work together consistently across different applications?'"
      },
      {
        title: "Evaluate and Refine Design Solutions",
        content: "Use AI to critically evaluate your design concepts against project objectives. Ask: 'Evaluate these design concepts for [project] against the original brief. Consider: target audience appeal and relevance, brand alignment and consistency, technical feasibility and constraints, competitive differentiation, scalability across applications, and potential for long-term success. What refinements would strengthen the chosen direction?' Critical evaluation ensures your final design meets all project requirements."
      }
    ]
  },
  {
    id: "user-experience-optimization",
    jobId: "designer",
    title: "AI-Driven User Experience Research and Optimization",
    description: "Discover how to use AI to analyze user behavior, identify UX issues, and design solutions that improve user satisfaction and conversion rates.",
    difficulty: "Advanced",
    timeEstimate: "35-45 minutes",
    tools: ["chatgpt", "claude"],
    steps: [
      {
        title: "Analyze User Behavior Data and Patterns",
        content: "Begin by using AI to analyze available user data and identify behavioral patterns, pain points, and opportunities. Provide AI with user analytics, feedback, or research data and ask: 'Analyze this user behavior data to identify: common user paths and drop-off points, features that drive engagement vs. confusion, user segments with different behavior patterns, seasonal or temporal usage trends, and correlation between user actions and business outcomes.' Data-driven insights form the foundation of effective UX optimization."
      },
      {
        title: "Conduct AI-Assisted User Research and Analysis",
        content: "Use AI to help design and analyze user research initiatives. Request: 'Design a user research plan to understand [specific UX challenge]. Include: research questions to answer, appropriate research methods (surveys, interviews, usability tests), user recruitment criteria, data collection strategies, and analysis frameworks. What specific insights do we need to improve the user experience?' Systematic research provides actionable insights for design decisions."
      },
      {
        title: "Identify and Prioritize UX Issues and Opportunities",
        content: "Ask AI to help categorize and prioritize UX issues based on impact and feasibility. Use prompts like: 'Based on this user research and behavior data, identify and prioritize UX issues. For each issue, provide: impact on user experience and business metrics, frequency of occurrence, difficulty to fix, potential solutions, and recommended priority level. Which issues should we address first for maximum impact?' Prioritization ensures you focus on the most impactful improvements."
      },
      {
        title: "Design User-Centered Solutions and Improvements",
        content: "Use AI to help generate specific, actionable solutions for identified UX issues. Request: 'For each prioritized UX issue, suggest specific design solutions including: interface improvements and layout changes, interaction design enhancements, content strategy adjustments, accessibility improvements, and mobile optimization considerations. How can we test these solutions before full implementation?' User-centered solutions address real needs rather than assumptions."
      },
      {
        title: "Create Comprehensive Testing and Validation Plans",
        content: "Develop systematic approaches to testing your UX improvements. Ask AI: 'Create a testing plan for these UX improvements including: A/B testing strategies for interface changes, usability testing protocols for new features, metrics to track for success measurement, user feedback collection methods, and rollback plans if changes don't perform well. How can we validate improvements before full deployment?' Testing reduces risk and ensures improvements actually improve the user experience."
      },
      {
        title: "Implement Continuous UX Monitoring and Iteration",
        content: "Use AI to design systems for ongoing UX monitoring and improvement. Request: 'Design a continuous UX optimization process including: regular user feedback collection methods, automated monitoring of key UX metrics, quarterly UX review and planning sessions, methods for identifying emerging UX trends, and processes for rapid iteration on user experience. How can we build a culture of continuous UX improvement?' Ongoing optimization ensures your user experience continues to evolve with user needs and expectations."
      }
    ]
  },
  {
    id: "data-analysis",
    jobId: "researcher",
    title: "AI-Assisted Data Analysis and Pattern Recognition",
    description: "Learn how to use AI tools to analyze research data, identify patterns, and generate insights that drive meaningful conclusions.",
    difficulty: "Advanced",
    timeEstimate: "40-50 minutes",
    tools: ["chatgpt", "claude"],
    steps: [
      {
        title: "Design Comprehensive Research and Analysis Framework",
        content: "Begin by establishing a robust framework for your data analysis using AI guidance. Provide details about your research question, data type, and objectives, then ask: 'Help me design an analysis framework for [research topic] with [data description]. Include: appropriate statistical methods for this data type, potential confounding variables to consider, analysis sequence and dependencies, validation strategies, and interpretation guidelines. What are the key assumptions I need to verify before proceeding?' A solid framework ensures rigorous, reliable analysis."
      },
      {
        title: "Implement Strategic Data Preparation and Cleaning",
        content: "Use AI to guide thorough data preparation that ensures analysis validity. Request: 'Design a data preparation strategy for this research dataset. Include: data quality assessment criteria, missing data handling approaches, outlier detection and treatment methods, variable transformation needs, and validation checks. What data preparation steps are critical for this type of analysis, and how can I document these decisions for reproducibility?' Proper data preparation is crucial for valid conclusions."
      },
      {
        title: "Conduct Multi-Layered Statistical Analysis",
        content: "Apply AI guidance to conduct comprehensive statistical analysis that addresses your research questions. Ask: 'Guide me through a systematic analysis of this data to answer [research questions]. Include: descriptive statistics and data exploration, appropriate inferential tests with justification, effect size calculations and practical significance, assumption checking and validation, and sensitivity analyses. What additional analyses would strengthen these findings?' Thorough analysis provides robust evidence for your conclusions."
      },
      {
        title: "Identify Patterns and Generate Insights",
        content: "Use AI to help recognize patterns and generate meaningful insights from your analysis results. Request: 'Analyze these statistical results to identify: significant patterns and relationships, unexpected findings that warrant investigation, practical implications of the findings, limitations and alternative explanations, and areas where additional data or analysis would be valuable. What story do these results tell, and what questions do they raise?' Pattern recognition transforms data into actionable insights."
      },
      {
        title: "Develop Causal Inference and Theoretical Connections",
        content: "Ask AI to help you move beyond correlation to explore potential causal relationships and theoretical implications. Use prompts like: 'Based on these analysis results, help me explore: potential causal mechanisms underlying observed relationships, alternative explanations for the findings, connections to existing theoretical frameworks, implications for current understanding in this field, and suggestions for future research to test causal hypotheses.' Causal thinking strengthens the scientific value of your research."
      },
      {
        title: "Create Comprehensive Reporting and Quality Assurance",
        content: "Use AI to ensure your analysis is properly documented and communicated. Request: 'Help me create a comprehensive analysis report including: clear methodology documentation, transparent reporting of all analyses conducted, appropriate visualizations for key findings, discussion of limitations and potential biases, and recommendations for future research. How can I ensure this analysis meets the highest standards for reproducibility and transparency?' Quality reporting ensures your research can be understood, evaluated, and built upon by others."
      }
    ]
  },
  {
    id: "literature-synthesis",
    jobId: "researcher",
    title: "AI-Enhanced Literature Review and Synthesis",
    description: "Master using AI tools to conduct comprehensive literature reviews, synthesize findings across studies, and identify research gaps and opportunities.",
    difficulty: "Advanced",
    timeEstimate: "45-60 minutes",
    tools: ["chatgpt", "claude"],
    steps: [
      {
        title: "Develop Systematic Literature Search Strategy",
        content: "Create a comprehensive search strategy using AI to ensure you capture all relevant literature. Ask: 'Help me design a systematic literature search strategy for [research topic]. Include: key search terms and Boolean operators, relevant databases and sources to search, inclusion and exclusion criteria, time frame considerations, and methods for tracking and organizing found literature. What search terms might I be missing, and how can I ensure comprehensive coverage?' A systematic approach prevents important studies from being overlooked."
      },
      {
        title: "Implement Efficient Literature Screening and Organization",
        content: "Use AI to help develop efficient systems for screening and organizing large volumes of literature. Request: 'Create a literature screening and organization system for this review. Include: criteria for initial screening and full-text review, methods for extracting key information from each study, organizational frameworks for categorizing literature, tools for tracking review progress, and strategies for managing large volumes of papers. How can I ensure consistency and avoid bias in the screening process?'"
      },
      {
        title: "Conduct Comprehensive Thematic Analysis",
        content: "Ask AI to help identify and analyze major themes across the literature. Use prompts like: 'Analyze this collection of research findings to identify: major themes and patterns across studies, evolution of thinking over time, methodological approaches and their strengths/limitations, consensus areas and ongoing debates, and gaps in current knowledge. How do these themes relate to each other, and what overarching narrative emerges from the literature?'"
      },
      {
        title: "Synthesize Findings and Identify Research Gaps",
        content: "Use AI to help synthesize findings across studies and identify opportunities for future research. Request: 'Synthesize these literature review findings to: integrate results across different studies and methodologies, identify areas of consensus and disagreement, highlight methodological limitations that affect conclusions, pinpoint specific gaps in current knowledge, and suggest priority areas for future research. What questions remain unanswered, and what new questions emerge from this synthesis?'"
      },
      {
        title: "Develop Theoretical Frameworks and Models",
        content: "Ask AI to help you develop theoretical contributions based on your literature synthesis. Use prompts like: 'Based on this literature synthesis, help me: identify opportunities for theoretical advancement, propose conceptual frameworks that integrate existing findings, suggest new theoretical models or refinements to existing ones, and connect findings to broader theoretical debates in the field. How can this review contribute to theoretical understanding beyond just summarizing existing work?'"
      },
      {
        title: "Create Actionable Research Agenda and Recommendations",
        content: "Use AI to help translate your literature review into concrete recommendations for future research and practice. Request: 'Based on this comprehensive literature review, develop: specific research questions that address identified gaps, methodological recommendations for future studies, practical implications for practitioners in this field, policy recommendations based on current evidence, and a prioritized research agenda for the next 5-10 years. What would have the greatest impact on advancing knowledge and practice in this area?'"
      }
    ]
  }
];

export function getUseCasesByJobId(jobId: string): UseCase[] {
  return useCases.filter(useCase => useCase.jobId === jobId);
}

export function getUseCaseById(id: string): UseCase | undefined {
  return useCases.find(useCase => useCase.id === id);
}

export function getUseCaseByJobAndId(jobId: string, useCaseId: string): UseCase | undefined {
  return useCases.find(useCase => useCase.jobId === jobId && useCase.id === useCaseId);
}