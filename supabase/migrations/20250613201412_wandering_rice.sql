/*
  # Content Management Schema Migration

  1. New Tables
    - `jobs` - Job categories with AI guides and prompt structures
    - `tools` - AI tools directory with detailed information
    - `use_cases` - Job-specific use cases and tutorials
    - `glossary_terms` - AI terminology and definitions
    - `job_prompt_structures` - Prompt templates for each job
    - `tool_use_cases` - Use cases for specific tools

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for admin write access

  3. Indexes
    - Performance indexes for common queries
    - Full-text search indexes for content discovery
*/

-- Jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  use_case_count INTEGER DEFAULT 0,
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Job prompt structures
CREATE TABLE IF NOT EXISTS job_prompt_structures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id TEXT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  example TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
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
  pros TEXT[] DEFAULT '{}',
  cons TEXT[] DEFAULT '{}',
  use_cases TEXT[] DEFAULT '{}',
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
  tools TEXT[] DEFAULT '{}',
  steps JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Glossary terms table
CREATE TABLE IF NOT EXISTS glossary_terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term TEXT NOT NULL UNIQUE,
  definition TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_prompt_structures ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE use_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE glossary_terms ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Jobs are publicly readable"
  ON jobs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Job prompt structures are publicly readable"
  ON job_prompt_structures
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Tools are publicly readable"
  ON tools
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Use cases are publicly readable"
  ON use_cases
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Glossary terms are publicly readable"
  ON glossary_terms
  FOR SELECT
  TO public
  USING (true);

-- Admin write access policies (you'll need to implement admin role checking)
CREATE POLICY "Admins can manage jobs"
  ON jobs
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage job prompt structures"
  ON job_prompt_structures
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage tools"
  ON tools
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage use cases"
  ON use_cases
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage glossary terms"
  ON glossary_terms
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_jobs_featured ON jobs(featured);
CREATE INDEX IF NOT EXISTS idx_jobs_tags ON jobs USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_job_prompt_structures_job_id ON job_prompt_structures(job_id);
CREATE INDEX IF NOT EXISTS idx_job_prompt_structures_order ON job_prompt_structures(job_id, order_index);
CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
CREATE INDEX IF NOT EXISTS idx_use_cases_job_id ON use_cases(job_id);
CREATE INDEX IF NOT EXISTS idx_use_cases_difficulty ON use_cases(difficulty);
CREATE INDEX IF NOT EXISTS idx_glossary_terms_category ON glossary_terms(category);
CREATE INDEX IF NOT EXISTS idx_glossary_terms_term ON glossary_terms(term);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_jobs_search ON jobs USING GIN(to_tsvector('english', title || ' ' || description));
CREATE INDEX IF NOT EXISTS idx_tools_search ON tools USING GIN(to_tsvector('english', name || ' ' || description));
CREATE INDEX IF NOT EXISTS idx_use_cases_search ON use_cases USING GIN(to_tsvector('english', title || ' ' || description));
CREATE INDEX IF NOT EXISTS idx_glossary_search ON glossary_terms USING GIN(to_tsvector('english', term || ' ' || definition));

-- Update timestamps trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update triggers
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_job_prompt_structures_updated_at BEFORE UPDATE ON job_prompt_structures FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tools_updated_at BEFORE UPDATE ON tools FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_use_cases_updated_at BEFORE UPDATE ON use_cases FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_glossary_terms_updated_at BEFORE UPDATE ON glossary_terms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();