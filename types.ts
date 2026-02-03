export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

export interface SkillItem {
  name: string;
  category: 'Tech' | 'Management' | 'Cert';
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  linkedin: string;
  location: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
}