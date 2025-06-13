/*
  # ThriveWithAI Database Seed Data
  
  This file contains all the existing content from the TypeScript data files
  converted to SQL INSERT statements for populating the Supabase database.
*/

-- Insert Jobs
INSERT INTO jobs (id, title, description, image, use_case_count, tags, featured) VALUES
('teacher', 'Teacher', 'Discover how AI can help create engaging lessons, grade assignments, and provide personalized learning experiences for students of all ages.', 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg', 4, ARRAY['Education', 'Content Creation', 'Automation'], true),
('writer', 'Writer', 'Learn how AI tools can assist with research, drafting, editing, and overcoming writer''s block while maintaining your unique voice and style.', 'https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg', 5, ARRAY['Content Creation', 'Research', 'Editing'], false),
('developer', 'Software Developer', 'Explore how AI can help write, debug, and document code, as well as explain complex programming concepts and accelerate development workflows.', 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg', 6, ARRAY['Coding', 'Documentation', 'Debugging'], true),
('marketer', 'Digital Marketer', 'Find out how AI can create campaigns, analyze data, generate content, and optimize ad performance across multiple channels and platforms.', 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', 5, ARRAY['Marketing', 'Analytics', 'Content Creation'], false),
('designer', 'Designer', 'Discover how AI can generate ideas, create mockups, assist in various design tasks, and streamline your creative workflow from concept to completion.', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg', 4, ARRAY['Design', 'Creativity', 'Visualization'], false),
('researcher', 'Researcher', 'Learn how AI can help analyze data, find patterns, summarize papers, generate hypotheses, and accelerate the research process across disciplines.', 'https://images.pexels.com/photos/8326324/pexels-photo-8326324.jpeg', 3, ARRAY['Research', 'Data Analysis', 'Summary'], false);

-- Insert Job Prompt Structures
INSERT INTO job_prompt_structures (job_id, title, description, example, order_index) VALUES
('teacher', 'Lesson Plan Creation', 'Structure prompts to create comprehensive, standards-aligned lesson plans', 'Create a detailed 45-minute lesson plan for [grade level] [subject] on [topic]. 

Include:
• Learning objectives aligned with [standards]
• Materials needed
• Warm-up activity (5 minutes)
• Main instruction with examples (20 minutes)
• Guided practice (10 minutes)
• Independent practice (8 minutes)
• Assessment strategy (2 minutes)
• Differentiation for [specific needs]

Make it engaging and interactive with at least 2 hands-on activities.', 0),
('teacher', 'Assessment Design', 'Generate various types of assessments and rubrics', 'Design a [formative/summative] assessment for [grade level] students learning about [topic]. 

Requirements:
• [number] questions of varying difficulty levels
• Include: [question types - multiple choice, short answer, essay, etc.]
• Provide detailed answer key
• Create a 4-point rubric measuring [specific skills/knowledge]
• Ensure questions are age-appropriate and aligned with learning objectives
• Include accommodations for diverse learners', 1),
('teacher', 'Student Feedback', 'Create constructive, personalized feedback for student work', 'Provide constructive feedback for this [type of assignment] from a [grade level] student.

Focus on:
• [specific criteria - content knowledge, writing mechanics, creativity, etc.]
• Highlight 2-3 specific strengths
• Identify 1-2 areas for improvement with specific examples
• Suggest concrete next steps for improvement
• Use encouraging, age-appropriate language
• Include one thought-provoking question to promote deeper thinking

Student work: [paste work here]', 2),
('teacher', 'Differentiation Strategies', 'Adapt content for diverse learning needs', 'Adapt this lesson on [topic] for [grade level] to meet diverse learning needs:

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

Maintain core learning objectives while ensuring accessibility.', 3);

-- Insert more prompt structures for other jobs
INSERT INTO job_prompt_structures (job_id, title, description, example, order_index) VALUES
('writer', 'Content Ideation', 'Generate creative ideas and overcome writer''s block', 'I''m writing [type of content] for [target audience] about [general topic]. 

Generate 10 unique angles or perspectives I could explore:

For each angle, provide:
• Compelling headline
• 2-3 key points to cover
• Unique value proposition
• Potential hook or opening

Consider:
• Current trends in [industry/field]
• Common pain points of [target audience]
• Fresh insights that haven''t been covered extensively
• Different content formats (how-to, case study, opinion, etc.)', 0),
('writer', 'Research Assistant', 'Gather information and organize research efficiently', 'Help me research [specific topic] for [type of writing project].

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
• Questions that need further investigation', 1);

-- Insert Tools
INSERT INTO tools (id, name, description, long_description, image, category, url, pros, cons, use_cases) VALUES
('chatgpt', 'ChatGPT', 'A versatile AI assistant that can help with writing, answering questions, and creative tasks.', 'ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text based on the prompts it receives. It excels at conversational AI, content creation, code assistance, research help, and complex problem-solving across virtually any domain.', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', 'Language', 'https://chat.openai.com', 
ARRAY['Versatile for many different writing and thinking tasks', 'Accessible interface with no coding required', 'Can understand context and follow complex instructions', 'Available in both free and paid versions', 'Supports multiple languages', 'Can handle long conversations with context retention'],
ARRAY['May occasionally produce inaccurate information', 'Limited knowledge cutoff date', 'Text-only output in base version', 'No direct internet access in base version', 'Can be verbose and may need prompting for conciseness'],
ARRAY['Writing and editing content', 'Answering questions and explaining concepts', 'Brainstorming ideas and creative writing', 'Drafting emails and professional communications', 'Summarizing long text and research', 'Code review and programming assistance', 'Language translation and learning', 'Creating lesson plans and educational content']),

('midjourney', 'Midjourney', 'An AI art generator that creates images from text descriptions.', 'Midjourney is a leading AI image generation tool that creates stunning, artistic images based on text prompts. Known for its distinctive aesthetic quality and ability to produce highly detailed artwork, it''s particularly popular among artists, designers, and content creators.', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg', 'Image Generation', 'https://www.midjourney.com',
ARRAY['Creates highly detailed and artistic images', 'Intuitive prompt system with style modifiers', 'Rapid generation of multiple variants', 'Strong community and sharing features', 'Excellent for concept art and creative projects', 'Regular updates with improved models'],
ARRAY['Subscription required for all usage', 'Operates primarily through Discord', 'Learning curve for optimal prompt crafting', 'Limited control over specific details', 'Can be expensive for heavy usage', 'Queue times during peak usage'],
ARRAY['Creating concept art and illustrations', 'Generating marketing visuals and social media content', 'Designing book covers and promotional materials', 'Prototyping visual ideas quickly', 'Creating mood boards and visual references', 'Producing artwork for presentations', 'Generating unique backgrounds and textures']),

('copilot', 'GitHub Copilot', 'AI coding assistant that suggests code completions based on context.', 'GitHub Copilot is an AI pair programmer powered by OpenAI''s Codex model. It provides intelligent code suggestions, complete functions, and even entire algorithms based on comments and existing code context, dramatically speeding up development workflows.', 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg', 'Development', 'https://github.com/features/copilot',
ARRAY['Suggests complete code blocks and functions', 'Integrated with popular IDEs and editors', 'Understands context and programming intent', 'Supports many programming languages and frameworks', 'Helps with documentation and comments', 'Great for learning new languages and patterns'],
ARRAY['Subscription cost for individual developers', 'May suggest incorrect or outdated patterns', 'Performance varies by language and framework', 'Occasional inappropriate or inefficient suggestions', 'Can create dependency on AI assistance', 'May suggest code with licensing concerns'],
ARRAY['Accelerating code writing and development', 'Learning new programming languages or frameworks', 'Automating repetitive coding tasks', 'Generating boilerplate code and templates', 'Writing unit tests and documentation', 'Debugging and code optimization suggestions']);

-- Insert Use Cases
INSERT INTO use_cases (id, job_id, title, description, difficulty, time_estimate, tools, steps) VALUES
('teacher-lesson-planning', 'teacher', 'AI-Powered Lesson Planning', 'Create comprehensive, engaging lesson plans using AI to save time and improve educational outcomes.', 'Beginner', '30-45 minutes', ARRAY['chatgpt'], '[
  {"title": "Define Learning Objectives", "content": "Start by clearly defining what students should know and be able to do by the end of the lesson. Use AI to help align these with educational standards."},
  {"title": "Generate Lesson Structure", "content": "Use AI prompts to create a detailed lesson structure including warm-up, main instruction, practice activities, and assessment."},
  {"title": "Create Engaging Activities", "content": "Ask AI to suggest interactive activities, real-world examples, and hands-on exercises that match your learning objectives."},
  {"title": "Develop Assessment Strategies", "content": "Use AI to create formative and summative assessment ideas that effectively measure student understanding."},
  {"title": "Plan for Differentiation", "content": "Generate modifications and accommodations for diverse learners using AI suggestions."}
]'),

('developer-code-review', 'developer', 'AI-Assisted Code Review', 'Use AI tools to review code for bugs, performance issues, and best practices.', 'Intermediate', '15-30 minutes', ARRAY['chatgpt', 'copilot'], '[
  {"title": "Prepare Code for Review", "content": "Select the code section you want to review and ensure it''s properly formatted and commented."},
  {"title": "Run AI Analysis", "content": "Use AI tools to analyze your code for potential bugs, security issues, and performance problems."},
  {"title": "Review Suggestions", "content": "Carefully examine AI suggestions and recommendations, understanding the reasoning behind each one."},
  {"title": "Implement Improvements", "content": "Apply the valid suggestions while maintaining your coding standards and project requirements."},
  {"title": "Test Changes", "content": "Thoroughly test any changes made based on AI recommendations to ensure they work correctly."}
]'),

('marketer-campaign-creation', 'marketer', 'AI-Driven Campaign Development', 'Create comprehensive marketing campaigns using AI for ideation, content creation, and strategy.', 'Intermediate', '2-3 hours', ARRAY['chatgpt', 'midjourney'], '[
  {"title": "Define Campaign Goals", "content": "Clearly outline your campaign objectives, target audience, and key performance indicators."},
  {"title": "Generate Campaign Ideas", "content": "Use AI to brainstorm creative campaign concepts, themes, and messaging strategies."},
  {"title": "Create Content Assets", "content": "Leverage AI tools to generate copy, visuals, and other creative assets for your campaign."},
  {"title": "Develop Distribution Strategy", "content": "Use AI to help plan your content distribution across different channels and platforms."},
  {"title": "Set Up Tracking", "content": "Implement tracking and analytics to measure campaign performance and ROI."}
]');

-- Insert Glossary Terms
INSERT INTO glossary_terms (term, definition, category) VALUES
('Artificial Intelligence (AI)', 'The simulation of human intelligence in machines that are programmed to think and learn like humans, performing tasks that typically require human intelligence.', 'Core Concepts'),
('Machine Learning (ML)', 'A subset of AI that involves algorithms that enable computers to learn from and make decisions or predictions based on data.', 'Core Concepts'),
('Large Language Model (LLM)', 'A type of AI model trained on vast amounts of text data, capable of understanding, generating, and manipulating language in ways that mimic human-like text.', 'AI Models'),
('Natural Language Processing (NLP)', 'A field of AI focused on the interaction between computers and human language, enabling machines to understand, interpret, and generate human language.', 'Core Concepts'),
('Prompt Engineering', 'The process of crafting effective inputs or instructions for AI systems to produce desired outputs, especially important when working with language models.', 'Techniques'),
('Computer Vision', 'A field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.', 'Core Concepts'),
('Generative AI', 'AI systems that can create new content such as text, images, audio, or video based on their training data.', 'AI Models'),
('Neural Network', 'A computing system inspired by the biological neural networks in human brains, consisting of interconnected nodes (neurons) that process information.', 'Core Concepts'),
('Fine-tuning', 'The process of taking a pre-trained AI model and further training it on a specific dataset to adapt it for particular tasks or domains.', 'Techniques'),
('Embeddings', 'Numerical representations of data (like words, sentences, or images) that capture semantic meaning in a way that computers can process.', 'Techniques'),
('Tokens', 'The basic units that language models process. These can be words, parts of words, or characters, depending on the model''s tokenization method.', 'AI Models'),
('Hallucination (AI)', 'When an AI generates information that is incorrect, fabricated, or not based on its training data, presenting it as if it were factual.', 'Challenges');