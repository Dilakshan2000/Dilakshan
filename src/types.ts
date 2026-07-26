export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  longDescription: string;
  client: string;
  role: string;
  year: string;
  demoUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: "design" | "tools" | "code" | "other";
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: "Search" | "Lightbulb" | "Pen" | "Code" | "Send";
}
