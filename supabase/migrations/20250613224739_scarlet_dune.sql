/*
  # ThriveWithAI Database Schema Migration

  1. New Tables
    - `jobs` - Job categories with metadata and use case counts
    - `job_prompt_structures` - Prompt templates for each job category
    - `tools` - AI tools directory with detailed information
    - `use_cases` - Job-specific tutorials and step-by-step guides
    - `glossary_terms` - AI terminology definitions and explanations

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Secure admin operations

  3. Performance
    - Full-text search indexes on content
    - Optimized indexes for common queries
    - Foreign key constraints for data integrity

  4. Features
    - Automatic timestamps
    - JSON support for complex data structures
    - Text search capabilities
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  use_case_count INTEGER NOT NULL DEFAULT 0,
  tags TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Job prompt structures table
CREATE TABLE IF NOT EXISTS job_prompt_structures (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id TEXT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  example TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Tools table
CREATE TABLE IF NOT EXISTS tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  url TEXT NOT NULL,
  pros TEXT[] NOT NULL DEFAULT '{}',
  cons TEXT[] NOT NULL DEFAULT '{}',
  use_cases TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Use cases table
CREATE TABLE IF NOT EXISTS use_cases (
  id TEXT PRIMARY KEY,
  job_id TEXT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  time_estimate TEXT NOT NULL,
  tools TEXT[] NOT NULL DEFAULT '{}',
  steps JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Glossary terms table
CREATE TABLE IF NOT EXISTS glossary_terms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  term TEXT NOT NULL UNIQUE,
  definition TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_jobs_featured ON jobs(featured);
CREATE INDEX IF NOT EXISTS idx_jobs_title_search ON jobs USING gin(to_tsvector('english', title || ' ' || description));

CREATE INDEX IF NOT EXISTS idx_job_prompt_structures_job_id ON job_prompt_structures(job_id);
CREATE INDEX IF NOT EXISTS idx_job_prompt_structures_order ON job_prompt_structures(job_id, order_index);

CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
CREATE INDEX IF NOT EXISTS idx_tools_name_search ON tools USING gin(to_tsvector('english', name || ' ' || description));

CREATE INDEX IF NOT EXISTS idx_use_cases_job_id ON use_cases(job_id);
CREATE INDEX IF NOT EXISTS idx_use_cases_difficulty ON use_cases(difficulty);
CREATE INDEX IF NOT EXISTS idx_use_cases_search ON use_cases USING gin(to_tsvector('english', title || ' ' || description));

CREATE INDEX IF NOT EXISTS idx_glossary_terms_category ON glossary_terms(category);
CREATE INDEX IF NOT EXISTS idx_glossary_terms_search ON glossary_terms USING gin(to_tsvector('english', term || ' ' || definition));

-- Enable Row Level Security
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_prompt_structures ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE use_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE glossary_terms ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for jobs" ON jobs FOR SELECT USING (true);
CREATE POLICY "Public read access for job_prompt_structures" ON job_prompt_structures FOR SELECT USING (true);
CREATE POLICY "Public read access for tools" ON tools FOR SELECT USING (true);
CREATE POLICY "Public read access for use_cases" ON use_cases FOR SELECT USING (true);
CREATE POLICY "Public read access for glossary_terms" ON glossary_terms FOR SELECT USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_job_prompt_structures_updated_at BEFORE UPDATE ON job_prompt_structures FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tools_updated_at BEFORE UPDATE ON tools FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_use_cases_updated_at BEFORE UPDATE ON use_cases FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_glossary_terms_updated_at BEFORE UPDATE ON glossary_terms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();