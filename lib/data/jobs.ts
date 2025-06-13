export interface Job {
  id: string;
  title: string;
  description: string;
  image: string;
  useCaseCount: number;
  tags: string[];
  featured?: boolean;
  promptStructures?: {
    title: string;
    description: string;
    example: string;
  }[];
}

export const jobs: Job[] = [
  {
    id: "teacher",
    title: "Teacher",
    description: "Discover how AI can help create engaging lessons, grade assignments, and provide personalized learning experiences for students of all ages.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    useCaseCount: 4,
    tags: ["Education", "Content Creation", "Automation"],
    featured: true,
    promptStructures: [
      {
        title: "Lesson Plan Creation",
        description: "Structure prompts to create comprehensive, standards-aligned lesson plans",
        example: `Create a detailed 45-minute lesson plan for [grade level] [subject] on [topic]. 

Include:
• Learning objectives aligned with [standards]
• Materials needed
• Warm-up activity (5 minutes)
• Main instruction with examples (20 minutes)
• Guided practice (10 minutes)
• Independent practice (8 minutes)
• Assessment strategy (2 minutes)
• Differentiation for [specific needs]

Make it engaging and interactive with at least 2 hands-on activities.`
      },
      {
        title: "Assessment Design",
        description: "Generate various types of assessments and rubrics",
        example: `Design a [formative/summative] assessment for [grade level] students learning about [topic]. 

Requirements:
• [number] questions of varying difficulty levels
• Include: [question types - multiple choice, short answer, essay, etc.]
• Provide detailed answer key
• Create a 4-point rubric measuring [specific skills/knowledge]
• Ensure questions are age-appropriate and aligned with learning objectives
• Include accommodations for diverse learners`
      },
      {
        title: "Student Feedback",
        description: "Create constructive, personalized feedback for student work",
        example: `Provide constructive feedback for this [type of assignment] from a [grade level] student.

Focus on:
• [specific criteria - content knowledge, writing mechanics, creativity, etc.]
• Highlight 2-3 specific strengths
• Identify 1-2 areas for improvement with specific examples
• Suggest concrete next steps for improvement
• Use encouraging, age-appropriate language
• Include one thought-provoking question to promote deeper thinking

Student work: [paste work here]`
      },
      {
        title: "Differentiation Strategies",
        description: "Adapt content for diverse learning needs",
        example: `Adapt this lesson on [topic] for [grade level] to meet diverse learning needs:

Create modifications for:
1. Students reading below grade level
2. English language learners (beginner/intermediate)
3. Students with ADHD/attention challenges
4. Gifted students needing enrichment
5. Students with learning disabilities

For each group, provide specific modifications for:
• Content (what they learn)
• Process (how they learn it)
• Product (how they show learning)

Maintain core learning objectives while ensuring accessibility.`
      }
    ]
  },
  {
    id: "writer",
    title: "Writer",
    description: "Learn how AI tools can assist with research, drafting, editing, and overcoming writer's block while maintaining your unique voice and style.",
    image: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
    useCaseCount: 5,
    tags: ["Content Creation", "Research", "Editing"],
    promptStructures: [
      {
        title: "Content Ideation",
        description: "Generate creative ideas and overcome writer's block",
        example: `I'm writing [type of content] for [target audience] about [general topic]. 

Generate 10 unique angles or perspectives I could explore:

For each angle, provide:
• Compelling headline
• 2-3 key points to cover
• Unique value proposition
• Potential hook or opening

Consider:
• Current trends in [industry/field]
• Common pain points of [target audience]
• Fresh insights that haven't been covered extensively
• Different content formats (how-to, case study, opinion, etc.)`
      },
      {
        title: "Research Assistant",
        description: "Gather information and organize research efficiently",
        example: `Help me research [specific topic] for [type of writing project].

I need comprehensive information on:

1. Key facts and statistics (with sources to verify)
2. Different perspectives or schools of thought
3. Recent developments or trends (last 2-3 years)
4. Expert quotes or authoritative sources to investigate
5. Related subtopics worth exploring
6. Common misconceptions or debates

Organize this information in a clear, structured format with:
• Main themes/categories
• Bullet points for easy scanning
• Suggested search terms for deeper research
• Questions that need further investigation`
      },
      {
        title: "Draft Enhancement",
        description: "Improve existing content for clarity, flow, and engagement",
        example: `Review this [type of content] draft and suggest improvements:

Evaluate and provide specific feedback on:

1. Clarity and readability
   • Sentence structure and flow
   • Word choice and terminology
   • Logical progression of ideas

2. Engagement and hook strength
   • Opening paragraph effectiveness
   • Compelling examples or stories
   • Call-to-action strength

3. Structure and organization
   • Logical flow between sections
   • Transition quality
   • Conclusion effectiveness

4. Tone consistency for [target audience]
5. Areas needing more detail, examples, or evidence

Maintain my writing voice while enhancing effectiveness.

Draft: [paste content here]`
      },
      {
        title: "Style Adaptation",
        description: "Adapt content for different audiences, platforms, or formats",
        example: `Adapt this content about [topic] for a new context:

Original context:
• Audience: [description]
• Platform: [platform]
• Format: [format]
• Tone: [tone]

New context:
• Audience: [new audience description]
• Platform: [new platform]
• Format: [new format requirements]
• Word count: [limit]

Adjustments needed:
• Tone and formality level
• Technical complexity
• Examples and references
• Structure and formatting
• Platform-specific best practices

Keep the core message while making it perfectly suited for the new context.

Original content: [paste here]`
      }
    ]
  },
  {
    id: "developer",
    title: "Software Developer",
    description: "Explore how AI can help write, debug, and document code, as well as explain complex programming concepts and accelerate development workflows.",
    image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg",
    useCaseCount: 6,
    tags: ["Coding", "Documentation", "Debugging"],
    featured: true,
    promptStructures: [
      {
        title: "Code Generation",
        description: "Generate functional code from requirements",
        example: `Write a [language] function that [specific functionality].

Requirements:
• [list specific requirements]
• Input parameters: [describe inputs]
• Expected output: [describe output]
• Performance considerations: [if any]
• Edge cases to handle: [list edge cases]

Code should include:
• Proper error handling and input validation
• Clear, descriptive variable names
• Comprehensive comments explaining logic
• Unit test examples
• Documentation string/comments

Follow [coding standards/style guide] and optimize for [performance/readability/maintainability].

Additional context: [any relevant background information]`
      },
      {
        title: "Code Review & Debugging",
        description: "Analyze and improve existing code",
        example: `Review this [language] code for issues and improvements:

Please analyze for:

1. Bugs and potential issues
   • Logic errors
   • Runtime exceptions
   • Edge case handling

2. Performance optimizations
   • Algorithm efficiency
   • Memory usage
   • Database queries (if applicable)

3. Code quality and best practices
   • Readability and maintainability
   • Design patterns
   • SOLID principles adherence

4. Security vulnerabilities
   • Input validation
   • Authentication/authorization
   • Data exposure risks

5. Readability improvements
   • Variable naming
   • Function structure
   • Comments and documentation

For each issue found, provide:
• Specific explanation of the problem
• Suggested solution with code example
• Priority level (critical/high/medium/low)

Code to review:
\`\`\`[language]
[paste code here]
\`\`\``
      },
      {
        title: "Documentation Creation",
        description: "Generate comprehensive technical documentation",
        example: `Create comprehensive documentation for this [function/class/API]:

Documentation should include:

1. Overview
   • Clear description of purpose and functionality
   • When and why to use it
   • Key benefits or features

2. Technical Details
   • Parameters with types and descriptions
   • Return values and types
   • Exceptions that may be thrown
   • Dependencies and requirements

3. Usage Examples
   • Basic usage example
   • Advanced usage scenarios
   • Common patterns and best practices
   • Integration examples

4. Additional Information
   • Performance considerations
   • Known limitations
   • Related functions/classes
   • Version history (if applicable)

Format as [README/JSDoc/API docs/etc.] following [style guide].

Code to document:
\`\`\`[language]
[paste code here]
\`\`\``
      },
      {
        title: "Architecture Planning",
        description: "Design system architecture and technical solutions",
        example: `Design a [type of system] for [use case description].

Requirements:
• [list functional requirements]
• [list non-functional requirements - performance, scalability, etc.]
• [list constraints - budget, timeline, technology, etc.]

Please provide:

1. System Architecture Overview
   • High-level component diagram
   • Data flow between components
   • Integration points

2. Technology Stack Recommendations
   • Frontend technologies and justification
   • Backend technologies and justification
   • Database choices and rationale
   • Third-party services/APIs

3. Database Design
   • Entity relationships
   • Key tables and fields
   • Indexing strategy
   • Data migration considerations

4. API Structure
   • Endpoint design
   • Authentication strategy
   • Rate limiting approach
   • Documentation standards

5. Scalability Considerations
   • Performance bottlenecks
   • Caching strategies
   • Load balancing approach
   • Monitoring and logging

6. Security Measures
   • Authentication and authorization
   • Data protection
   • API security
   • Compliance requirements

Include implementation phases and key milestones.`
      }
    ]
  },
  {
    id: "marketer",
    title: "Digital Marketer",
    description: "Find out how AI can create campaigns, analyze data, generate content, and optimize ad performance across multiple channels and platforms.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    useCaseCount: 5,
    tags: ["Marketing", "Analytics", "Content Creation"],
    promptStructures: [
      {
        title: "Campaign Strategy",
        description: "Develop comprehensive marketing campaign strategies",
        example: `Create a comprehensive marketing campaign strategy:

Campaign Overview:
• Product/Service: [description]
• Target Audience: [detailed demographics and psychographics]
• Campaign Goals: [specific, measurable objectives]
• Budget: [total amount]
• Timeline: [duration and key dates]

Develop:

1. Target Audience Analysis
   • Primary and secondary personas
   • Pain points and motivations
   • Preferred communication channels
   • Buying behavior patterns

2. Key Messaging Strategy
   • Primary value proposition
   • Supporting messages for different segments
   • Competitive differentiation
   • Emotional and rational appeals

3. Channel Mix and Tactics
   • Recommended marketing channels with rationale
   • Content types for each channel
   • Posting/campaign frequency
   • Integration between channels

4. Content Calendar Framework
   • Content themes and topics
   • Content formats and types
   • Publishing schedule
   • Seasonal considerations

5. KPIs and Success Metrics
   • Primary success metrics
   • Secondary metrics to track
   • Measurement tools and methods
   • Reporting frequency

6. Budget Allocation
   • Channel-specific budget breakdown
   • Content creation costs
   • Paid advertising allocation
   • Tools and software needs`
      },
      {
        title: "Content Creation",
        description: "Generate engaging marketing content for various platforms",
        example: `Create [type of content] for [platform] promoting [product/service]:

Content Requirements:
• Target Audience: [detailed description]
• Platform: [specific platform with character/format limits]
• Brand Voice: [tone and personality]
• Key Message: [primary message to communicate]
• Call-to-Action: [specific action desired]

Content should include:
• Compelling headline/hook
• Engaging body copy highlighting [key benefits]
• Social proof or credibility elements
• Clear, action-oriented CTA
• Relevant hashtags (if applicable)
• Visual content suggestions

Optimize for:
• [Platform] best practices and algorithm preferences
• [Character/word limits]
• Mobile viewing experience
• Accessibility considerations

Provide 3 variations testing different:
• Headlines/hooks
• Value propositions
• Emotional appeals
• CTA phrases

Additional context: [campaign theme, seasonal relevance, etc.]`
      },
      {
        title: "Ad Copy Optimization",
        description: "Create and optimize advertising copy for better performance",
        example: `Create [number] high-converting ad copy variations for [platform]:

Campaign Details:
• Product/Service: [description]
• Target Audience: [demographics, interests, behaviors]
• Campaign Objective: [awareness, consideration, conversion]
• Key Benefit/Pain Point: [primary focus]
• Budget/Bid Strategy: [if relevant]

For each variation, provide:
• Headline (within [character limit])
• Description/body copy (within [character limit])
• Call-to-action text
• Display URL (if applicable)

Test different elements:
1. Headlines focusing on:
   • Problem/solution
   • Benefits/features
   • Urgency/scarcity
   • Social proof

2. Value propositions emphasizing:
   • Cost savings
   • Time efficiency
   • Quality/results
   • Unique features

3. Emotional triggers:
   • Fear of missing out
   • Desire for improvement
   • Social belonging
   • Achievement/success

4. CTA variations:
   • Action-oriented
   • Benefit-focused
   • Urgency-driven

Ensure compliance with [platform] advertising policies and include suggestions for A/B testing strategy.`
      },
      {
        title: "Data Analysis & Insights",
        description: "Analyze marketing data and extract actionable insights",
        example: `Analyze this marketing performance data and provide actionable insights:

Data Overview:
• Campaign/Channel: [description]
• Time Period: [date range]
• Key Metrics: [list available metrics]
• Goals/Benchmarks: [what success looks like]

Data to analyze:
[Provide data in structured format - tables, CSV, or detailed description]

Please provide:

1. Performance Summary
   • Overall performance vs. goals
   • Key wins and challenges
   • Trend analysis over time period

2. Deep Dive Analysis
   • Top-performing content/campaigns and why
   • Underperforming areas and potential causes
   • Audience behavior patterns
   • Channel/platform performance comparison

3. Audience Insights
   • Demographics and psychographics of best performers
   • Engagement patterns and preferences
   • Customer journey insights
   • Segmentation opportunities

4. Actionable Recommendations
   • Immediate optimizations (next 30 days)
   • Medium-term strategy adjustments (next quarter)
   • Budget reallocation suggestions
   • Content/creative improvements

5. Testing Opportunities
   • A/B test ideas for improvement
   • New channels or tactics to explore
   • Audience segments to target

Present findings in executive-friendly format with clear priorities and expected impact.`
      }
    ]
  },
  {
    id: "designer",
    title: "Designer",
    description: "Discover how AI can generate ideas, create mockups, assist in various design tasks, and streamline your creative workflow from concept to completion.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    useCaseCount: 4,
    tags: ["Design", "Creativity", "Visualization"],
    promptStructures: [
      {
        title: "Design Concept Generation",
        description: "Generate creative design concepts and ideas",
        example: `Generate design concepts for [project type]:

Project Details:
• Client/Brand: [name and description]
• Industry: [industry/sector]
• Target Audience: [detailed demographics and preferences]
• Project Goals: [objectives and desired outcomes]
• Style Preferences: [modern, classic, minimalist, etc.]
• Brand Values: [list key values to reflect]

Requirements:
• [list specific requirements and constraints]
• [dimensions, format, or technical specifications]
• [budget or resource limitations]

Please provide:

1. Five Unique Concept Directions
   For each concept:
   • Concept name and theme
   • Visual style description
   • Key design elements
   • Mood and emotional tone
   • How it addresses project goals

2. Mood Board Suggestions
   • Color palette inspirations
   • Typography style references
   • Visual texture and pattern ideas
   • Photography/illustration style
   • Overall aesthetic direction

3. Creative Rationale
   • How each concept appeals to target audience
   • Alignment with brand values
   • Differentiation from competitors
   • Scalability across different applications

4. Implementation Considerations
   • Technical feasibility
   • Production requirements
   • Timeline implications
   • Budget considerations

Prioritize concepts that are both creative and strategically sound.`
      },
      {
        title: "Visual Asset Creation",
        description: "Create detailed prompts for AI image generation",
        example: `Create a detailed image generation prompt for [type of visual]:

Visual Requirements:
• Subject/Content: [what should be shown]
• Purpose: [how it will be used]
• Target Audience: [who will see it]
• Brand/Style: [aesthetic requirements]
• Technical Specs: [dimensions, resolution, format]

Prompt Structure:

1. Main Subject Description
   • Primary elements to include
   • Composition and layout
   • Specific details and features

2. Style and Aesthetic
   • Artistic style: [photorealistic, illustration, abstract, etc.]
   • Visual mood: [professional, playful, elegant, etc.]
   • Color scheme: [specific colors or palette description]
   • Lighting: [natural, dramatic, soft, etc.]

3. Technical Parameters
   • Image dimensions and aspect ratio
   • Quality and resolution requirements
   • File format needs

4. Elements to Avoid
   • Unwanted visual elements
   • Inappropriate styles or moods
   • Technical limitations to consider

5. Context and Usage
   • Where the image will be displayed
   • Viewing conditions (mobile, print, web)
   • Integration with other design elements

Example prompt format:
"Create a [style] image showing [subject] in [setting]. The mood should be [mood] with [color scheme] colors. [Specific details]. Avoid [unwanted elements]. Style: [artistic direction]. Lighting: [lighting type]. Composition: [layout description]."

Provide 3 prompt variations for different creative directions.`
      },
      {
        title: "Design Critique & Improvement",
        description: "Get feedback and suggestions for design improvements",
        example: `Critique this [type of design] and provide improvement suggestions:

Design Context:
• Purpose: [what the design is meant to achieve]
• Target Audience: [who will interact with it]
• Brand Guidelines: [relevant brand standards]
• Technical Constraints: [platform, size, format limitations]
• Success Metrics: [how effectiveness will be measured]

Please evaluate:

1. Visual Hierarchy and Composition
   • Information prioritization and flow
   • Balance and proportion
   • Use of white space
   • Focal points and emphasis

2. Typography and Readability
   • Font choices and hierarchy
   • Readability across different sizes
   • Text-to-background contrast
   • Alignment and spacing

3. Color Scheme and Visual Impact
   • Color harmony and psychology
   • Brand alignment
   • Accessibility considerations
   • Emotional response

4. User Experience Considerations
   • Ease of navigation/understanding
   • Intuitive interaction patterns
   • Mobile responsiveness (if applicable)
   • Accessibility for diverse users

5. Brand Alignment and Messaging
   • Consistency with brand identity
   • Message clarity and effectiveness
   • Differentiation from competitors
   • Professional appearance

For each area, provide:
• Specific strengths to maintain
• Areas needing improvement with examples
• Concrete suggestions for enhancement
• Priority level for each recommendation

Maintain [design goals] while addressing identified issues.

[Attach or describe the design to be critiqued]`
      },
      {
        title: "Brand Identity Development",
        description: "Develop comprehensive brand identity guidelines",
        example: `Develop a comprehensive brand identity for [company/product]:

Company Overview:
• Name: [company/product name]
• Industry: [industry and market position]
• Mission: [company mission statement]
• Values: [core values and principles]
• Target Audience: [detailed audience description]
• Competitive Landscape: [key competitors and differentiation]

Brand Personality:
• Personality Traits: [list 5-7 key traits]
• Brand Voice: [tone and communication style]
• Emotional Connection: [how brand should make people feel]

Please develop:

1. Logo Concept Directions
   • 3-5 distinct logo concepts
   • Rationale for each approach
   • Scalability considerations
   • Versatility across applications

2. Color Palette System
   • Primary colors (2-3 colors)
   • Secondary colors (3-5 colors)
   • Neutral colors for backgrounds/text
   • Color psychology and meaning
   • Accessibility considerations

3. Typography System
   • Primary typeface for headlines
   • Secondary typeface for body text
   • Display/accent fonts (if needed)
   • Hierarchy and sizing guidelines
   • Web and print considerations

4. Visual Style Guidelines
   • Photography style and treatment
   • Illustration style (if applicable)
   • Iconography approach
   • Graphic elements and patterns
   • Layout principles

5. Brand Voice and Messaging
   • Tone of voice description
   • Key messaging pillars
   • Do's and don'ts for communication
   • Example copy in brand voice

6. Application Examples
   • Business card design concept
   • Website header treatment
   • Social media profile setup
   • Packaging or marketing material

Ensure all elements work cohesively to support brand goals and resonate with target audience.`
      }
    ]
  },
  {
    id: "researcher",
    title: "Researcher",
    description: "Learn how AI can help analyze data, find patterns, summarize papers, generate hypotheses, and accelerate the research process across disciplines.",
    image: "https://images.pexels.com/photos/8326324/pexels-photo-8326324.jpeg",
    useCaseCount: 3,
    tags: ["Research", "Data Analysis", "Summary"],
    promptStructures: [
      {
        title: "Literature Review",
        description: "Systematically review and synthesize research literature",
        example: `Help me conduct a comprehensive literature review on [research topic]:

Research Parameters:
• Specific Topic: [detailed topic description]
• Research Questions: [list 2-3 key questions]
• Scope: [geographical, temporal, or methodological boundaries]
• Time Frame: [publication years to include]
• Disciplines: [relevant academic fields]

Please provide:

1. Key Themes and Findings
   • Major research themes in the literature
   • Consensus findings across studies
   • Significant discoveries or breakthroughs
   • Evolution of understanding over time

2. Methodological Approaches
   • Common research methods used
   • Strengths and limitations of different approaches
   • Innovative methodologies worth noting
   • Gaps in methodological diversity

3. Theoretical Frameworks
   • Dominant theoretical perspectives
   • Emerging theoretical approaches
   • Debates between different schools of thought
   • Integration opportunities

4. Research Gaps and Opportunities
   • Understudied populations or contexts
   • Methodological limitations to address
   • Contradictory findings needing resolution
   • Emerging areas for investigation

5. Conflicting Findings and Debates
   • Areas of disagreement in the literature
   • Potential explanations for contradictions
   • Studies that challenge conventional wisdom
   • Ongoing academic debates

6. Future Research Directions
   • Logical next steps based on current knowledge
   • Interdisciplinary collaboration opportunities
   • Technological advances enabling new research
   • Practical applications needing investigation

Organize findings by [themes/chronology/methodology] and include suggestions for search terms and key authors to investigate further.`
      },
      {
        title: "Data Analysis Planning",
        description: "Design comprehensive data analysis strategies",
        example: `Design a comprehensive analysis plan for my research:

Research Context:
• Research Question: [primary question to answer]
• Hypothesis: [if applicable]
• Study Design: [experimental, observational, longitudinal, etc.]
• Data Type: [quantitative, qualitative, mixed methods]

Data Characteristics:
• Sample Size: [number of participants/observations]
• Variables: [list key variables and their types]
• Data Collection Method: [surveys, interviews, experiments, etc.]
• Data Quality Considerations: [missing data, outliers, etc.]

Please develop:

1. Analysis Strategy Overview
   • Primary analytical approach and rationale
   • Secondary analyses to support findings
   • Exploratory vs. confirmatory analyses
   • Integration plan for multiple data types

2. Statistical Methods Selection
   • Appropriate statistical tests for each research question
   • Assumptions to check for each method
   • Effect size calculations and power analysis
   • Multiple comparison corrections needed

3. Data Preparation Steps
   • Data cleaning and validation procedures
   • Missing data handling strategy
   • Outlier detection and treatment
   • Variable transformation needs

4. Confounding Variables and Controls
   • Potential confounding factors to consider
   • Control variables to include in models
   • Stratification or matching strategies
   • Sensitivity analyses to conduct

5. Visualization Strategy
   • Descriptive plots for data exploration
   • Results visualization for key findings
   • Interactive or dynamic visualizations
   • Publication-ready figure planning

6. Interpretation Guidelines
   • Framework for interpreting results
   • Clinical vs. statistical significance
   • Limitations to acknowledge
   • Alternative explanations to consider

7. Quality Assurance
   • Reproducibility measures
   • Code documentation standards
   • Peer review checkpoints
   • Validation with independent datasets

Include timeline estimates and resource requirements for each analysis phase.`
      },
      {
        title: "Hypothesis Generation",
        description: "Generate testable research hypotheses",
        example: `Generate research hypotheses for studying [phenomenon/relationship]:

Research Context:
• Phenomenon of Interest: [what you want to study]
• Population: [target population or sample]
• Setting: [research context or environment]
• Theoretical Background: [relevant theories or frameworks]

Background Information:
• Previous Findings: [summarize key existing research]
• Research Gaps: [what hasn't been studied]
• Practical Importance: [why this research matters]
• Available Resources: [constraints or opportunities]

Please generate:

1. Primary Research Hypothesis
   • Clear, testable statement
   • Directional prediction (if appropriate)
   • Theoretical rationale and justification
   • Connection to existing literature

2. Alternative Hypotheses
   • Competing explanations for the phenomenon
   • Different directional predictions
   • Alternative theoretical frameworks
   • Null hypothesis formulation

3. Testable Predictions
   • Specific, measurable outcomes
   • Observable behaviors or indicators
   • Quantifiable relationships
   • Timeline for expected effects

4. Variables to Measure
   • Independent variables and their operationalization
   • Dependent variables and measurement methods
   • Control variables to include
   • Potential mediating or moderating factors

5. Mediating and Moderating Factors
   • Variables that might explain the relationship
   • Conditions that might strengthen/weaken effects
   • Individual differences to consider
   • Contextual factors that matter

6. Research Design Implications
   • Experimental vs. observational approaches
   • Longitudinal vs. cross-sectional design
   • Sample size and power considerations
   • Ethical considerations and constraints

For each hypothesis, include:
• Specific prediction statement
• Theoretical justification
• Measurement approach
• Expected effect size
• Potential challenges or limitations

Prioritize hypotheses by feasibility, theoretical importance, and practical significance.`
      }
    ]
  }
];

export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id);
}

export function getFeaturedJobs(limit = 3): Job[] {
  return jobs
    .filter(job => job.featured)
    .slice(0, limit);
}

export function getAllJobs(): Job[] {
  return jobs;
}