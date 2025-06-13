-- Seed initial data for ThriveWithAI
-- This migration populates the database with the existing content

-- Insert jobs
INSERT INTO jobs (id, title, description, image, use_case_count, tags, featured) VALUES
('teacher', 'Teacher', 'Discover how AI can help create engaging lessons, grade assignments, and provide personalized learning experiences for students of all ages.', 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg', 4, ARRAY['Education', 'Content Creation', 'Automation'], true),
('writer', 'Writer', 'Learn how AI tools can assist with research, drafting, editing, and overcoming writer''s block while maintaining your unique voice and style.', 'https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg', 5, ARRAY['Content Creation', 'Research', 'Editing'], false),
('developer', 'Software Developer', 'Explore how AI can help write, debug, and document code, as well as explain complex programming concepts and accelerate development workflows.', 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg', 6, ARRAY['Coding', 'Documentation', 'Debugging'], true),
('marketer', 'Digital Marketer', 'Find out how AI can create campaigns, analyze data, generate content, and optimize ad performance across multiple channels and platforms.', 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', 5, ARRAY['Marketing', 'Analytics', 'Content Creation'], false),
('designer', 'Designer', 'Discover how AI can generate ideas, create mockups, assist in various design tasks, and streamline your creative workflow from concept to completion.', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg', 4, ARRAY['Design', 'Creativity', 'Visualization'], false),
('researcher', 'Researcher', 'Learn how AI can help analyze data, find patterns, summarize papers, generate hypotheses, and accelerate the research process across disciplines.', 'https://images.pexels.com/photos/8326324/pexels-photo-8326324.jpeg', 3, ARRAY['Research', 'Data Analysis', 'Summary'], false);

-- Insert tools
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
ARRAY['Accelerating code writing and development', 'Learning new programming languages or frameworks', 'Automating repetitive coding tasks', 'Generating boilerplate code and templates', 'Writing unit tests and documentation', 'Debugging and code optimization suggestions']),

('grammarly', 'Grammarly', 'AI-powered writing assistant that checks grammar, spelling, and style.', 'Grammarly is a comprehensive AI-powered writing assistant that goes beyond basic spell-check to provide advanced grammar correction, style suggestions, tone detection, and clarity improvements. It integrates seamlessly across platforms and applications.', 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg', 'Writing', 'https://www.grammarly.com',
ARRAY['Real-time grammar and spelling checks', 'Style, tone, and clarity suggestions', 'Works across many platforms and applications', 'Both free and premium versions available', 'Plagiarism detection in premium version', 'Goal-setting features for different writing contexts'],
ARRAY['Full features require paid subscription', 'Occasionally gives incorrect suggestions', 'May not understand specialized terminology', 'Some platform limitations and compatibility issues', 'Can be overly prescriptive with style suggestions'],
ARRAY['Proofreading documents and emails', 'Improving email communications', 'Enhancing content clarity and readability', 'Learning better writing practices', 'Academic and professional writing assistance', 'Social media and marketing content optimization']);

-- Insert glossary terms
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

-- Insert use cases for teacher
INSERT INTO use_cases (id, job_id, title, description, difficulty, time_estimate, tools, steps) VALUES
('teacher-lesson-planning', 'teacher', 'AI-Powered Lesson Planning', 'Create comprehensive, engaging lesson plans using AI to save time and improve educational outcomes.', 'Beginner', '30 minutes', ARRAY['chatgpt'], '[
  {"title": "Define Learning Objectives", "content": "Start by clearly defining what students should know or be able to do by the end of the lesson. Use specific, measurable objectives aligned with curriculum standards."},
  {"title": "Use AI for Content Generation", "content": "Prompt ChatGPT to generate lesson content, activities, and assessments based on your objectives. Be specific about grade level, subject, and learning goals."},
  {"title": "Review and Customize", "content": "Review the AI-generated content and customize it to fit your teaching style, classroom dynamics, and student needs."},
  {"title": "Add Interactive Elements", "content": "Enhance the lesson with interactive activities, discussion questions, and hands-on exercises that engage different learning styles."}
]'),

('teacher-assessment', 'teacher', 'Automated Assessment Creation', 'Generate quizzes, tests, and rubrics quickly while maintaining educational rigor and alignment with learning objectives.', 'Intermediate', '45 minutes', ARRAY['chatgpt'], '[
  {"title": "Specify Assessment Parameters", "content": "Define the type of assessment needed, learning objectives to measure, difficulty level, and question formats."},
  {"title": "Generate Questions", "content": "Use AI to create diverse question types including multiple choice, short answer, and essay questions that test different cognitive levels."},
  {"title": "Create Rubrics", "content": "Generate detailed rubrics that clearly define performance criteria and scoring guidelines for subjective assessments."},
  {"title": "Review for Quality", "content": "Carefully review all generated content for accuracy, appropriateness, and alignment with your learning objectives."}
]');

-- Insert use cases for developer
INSERT INTO use_cases (id, job_id, title, description, difficulty, time_estimate, tools, steps) VALUES
('developer-code-review', 'developer', 'AI-Assisted Code Review', 'Use AI to identify bugs, suggest improvements, and ensure code quality before deployment.', 'Intermediate', '20 minutes', ARRAY['chatgpt', 'copilot'], '[
  {"title": "Prepare Code for Review", "content": "Select the code section you want reviewed and gather any relevant context about its purpose and requirements."},
  {"title": "Submit to AI", "content": "Paste your code into ChatGPT with specific instructions about what to review (bugs, performance, security, style)."},
  {"title": "Analyze Suggestions", "content": "Carefully review AI suggestions, understanding the reasoning behind each recommendation."},
  {"title": "Implement Improvements", "content": "Apply the valuable suggestions while using your judgment to filter out any inappropriate recommendations."}
]'),

('developer-documentation', 'developer', 'Automated Documentation Generation', 'Generate comprehensive documentation for your code, APIs, and projects using AI assistance.', 'Beginner', '25 minutes', ARRAY['chatgpt', 'copilot'], '[
  {"title": "Gather Code Context", "content": "Collect the code files, functions, or APIs that need documentation along with any existing documentation."},
  {"title": "Generate Documentation", "content": "Use AI to create README files, API documentation, code comments, and user guides based on your code structure."},
  {"title": "Review and Enhance", "content": "Review the generated documentation for accuracy and completeness, adding any missing context or examples."},
  {"title": "Format and Publish", "content": "Format the documentation according to your project standards and publish it in your preferred documentation platform."}
]');

-- Update use case counts for jobs
UPDATE jobs SET use_case_count = (
  SELECT COUNT(*) FROM use_cases WHERE use_cases.job_id = jobs.id
);