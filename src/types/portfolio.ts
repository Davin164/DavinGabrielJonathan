export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  type: "client" | "gateway" | "service" | "database" | "security";
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: "featured" | "backend" | "fullstack" | "education";
  status: "Production" | "Ongoing" | "Completed" | "Award Winner";
  badge?: string;
  image?: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  architecture?: {
    overview: string;
    nodes: ArchitectureNode[];
    keyEngineeringDecision: string;
  };
  links?: {
    github?: string;
    live?: string;
    drive?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type:
    | "Leadership & Tech"
    | "Engineering & Community"
    | "Cyber Security & IT"
    | "Industry & Security";
  badge?: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    usedIn: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  highlights: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}
