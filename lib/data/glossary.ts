export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Artificial Intelligence (AI)",
    definition: "The simulation of human intelligence in machines that are programmed to think and learn like humans, performing tasks that typically require human intelligence.",
    category: "Core Concepts"
  },
  {
    term: "Machine Learning (ML)",
    definition: "A subset of AI that involves algorithms that enable computers to learn from and make decisions or predictions based on data.",
    category: "Core Concepts"
  },
  {
    term: "Large Language Model (LLM)",
    definition: "A type of AI model trained on vast amounts of text data, capable of understanding, generating, and manipulating language in ways that mimic human-like text.",
    category: "AI Models"
  },
  {
    term: "Natural Language Processing (NLP)",
    definition: "A field of AI focused on the interaction between computers and human language, enabling machines to understand, interpret, and generate human language.",
    category: "Core Concepts"
  },
  {
    term: "Prompt Engineering",
    definition: "The process of crafting effective inputs or instructions for AI systems to produce desired outputs, especially important when working with language models.",
    category: "Techniques"
  },
  {
    term: "Computer Vision",
    definition: "A field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.",
    category: "Core Concepts"
  },
  {
    term: "Generative AI",
    definition: "AI systems that can create new content such as text, images, audio, or video based on their training data.",
    category: "AI Models"
  },
  {
    term: "Neural Network",
    definition: "A computing system inspired by the biological neural networks in human brains, consisting of interconnected nodes (neurons) that process information.",
    category: "Core Concepts"
  },
  {
    term: "Fine-tuning",
    definition: "The process of taking a pre-trained AI model and further training it on a specific dataset to adapt it for particular tasks or domains.",
    category: "Techniques"
  },
  {
    term: "Embeddings",
    definition: "Numerical representations of data (like words, sentences, or images) that capture semantic meaning in a way that computers can process.",
    category: "Techniques"
  },
  {
    term: "Tokens",
    definition: "The basic units that language models process. These can be words, parts of words, or characters, depending on the model's tokenization method.",
    category: "AI Models"
  },
  {
    term: "Hallucination (AI)",
    definition: "When an AI generates information that is incorrect, fabricated, or not based on its training data, presenting it as if it were factual.",
    category: "Challenges"
  }
];

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms
    .filter(term => term.category === category)
    .sort((a, b) => a.term.localeCompare(b.term));
}

export function getGlossaryCategories(): string[] {
  return [...new Set(glossaryTerms.map(term => term.category))].sort();
}