import { Project, Skill, Education, ProcessStep } from "./types";

// Note: Using the exact paths of the generated images
export const IMAGES = {
  portrait: "/src/assets/images/Dilakshan.png",
  bike: "/src/assets/images/veloce_bike_1784050017435.jpg",
  chair: "/src/assets/images/woodcraft_chair_1784050026942.jpg",
  fashion: "/src/assets/images/urbanic_fashion_1784050036008.jpg",
  workspace: "/src/assets/images/workspace_mockup_1784050046274.jpg",
  oziLicence: "/src/assets/images/ozi_licence_preview.png",
  lifelankaTravels: "/src/assets/images/lifelanka_travels_preview.png",
  agroMind: "/src/assets/images/agro_mind_preview.png",
};

export const PROJECTS: Project[] = [
  {
    id: "ozi-licence",
    number: "01",
    title: "OZI LICENCE",
    category: "DRIVING INSTRUCTOR MARKETPLACE",
    imageUrl: IMAGES.oziLicence,
    description: "A large-scale driving instructor marketplace with three user portals, digital wallet payments, and a real-time booking system built with Next.js & TypeScript.",
    longDescription: "Developed the complete frontend architecture for a large-scale driving instructor marketplace using Next.js, TypeScript, and Tailwind CSS (shadcn/ui). The platform features three distinct user portals — Admin, Instructor, and Learner — each with tailored dashboards and workflows. Key features include a digital wallet payment system, complex calendar and booking scheduling, Google Maps API integration for location tracking, and a comprehensive analytics dashboard for revenue and performance monitoring.",
    client: "Ozi Licence",
    role: "Frontend Architect & Lead Developer",
    year: "2024",
    demoUrl: "https://ozi-license.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Google Maps API", "Digital Wallet", "Booking System", "Analytics Dashboard"]
  },
  {
    id: "lifelanka-travels",
    number: "02",
    title: "LIFELANKA TRAVELS",
    category: "TOUR BOOKING WEBSITE",
    imageUrl: IMAGES.lifelankaTravels,
    description: "A tour and holiday package booking platform for a Sri Lanka-based travel agency, built on WordPress with a fully custom theme and booking system.",
    longDescription: "A tour and holiday package booking platform built for a Sri Lanka-based travel agency, designed to showcase curated tour packages and convert visitors into inquiries and bookings. Customized an existing WordPress theme to match the client's branding and travel-industry look and feel. Built out custom features on top of the base theme — including tour package listings, booking and inquiry forms, and destination pages. Handled all frontend implementation including responsive layouts, styling, and UI polish across devices.",
    client: "LifeLanka Travels",
    role: "WordPress Developer & Frontend Engineer",
    year: "2024",
    demoUrl: "https://lifelankatravels.com/",
    tags: ["WordPress", "PHP", "Custom Theme", "HTML/CSS", "Responsive Design", "Booking Forms"]
  },
  {
    id: "agro-mind",
    number: "03",
    title: "AGRO MIND AI",
    category: "AI RESEARCH PROJECT",
    imageUrl: IMAGES.agroMind,
    description: "A research-backed smart agriculture platform using Edge AI, LSTM forecasting, and a real-time farmer-dealer marketplace to minimize post-harvest losses.",
    longDescription: "Co-developed a research-backed smart agriculture platform to minimize post-harvest losses and cultivation risks for Sri Lankan smallholder farmers. Designed and built the Post-Harvest Advisor module, integrating an LSTM neural network for market price forecasting, a real-time farmer-dealer trading marketplace, and dynamic profit/loss tracking. Engineered an on-device Edge AI system using TensorFlow Lite and YOLOv8 for real-time, offline weed identification and growth stage classification.",
    client: "Research Project — SLIIT",
    role: "Co-Developer & Mobile Engineer",
    year: "2025",
    demoUrl: "",
    tags: ["React Native", "TensorFlow Lite", "Python", "Flask", "LSTM", "Firebase", "YOLOv8", "Edge AI"]
  }
];

export const SKILLS: Skill[] = [
  { name: "NEXT.JS", category: "code" },
  { name: "LARAVEL", category: "code" },
  { name: "WORDPRESS", category: "tools" },
  { name: "REACT", category: "code" },
  { name: "TAILWIND CSS", category: "code" },
  { name: "PHP", category: "code" },
  { name: "TYPESCRIPT", category: "code" },
  { name: "FIGMA", category: "tools" },
  { name: "FRONT-END DEV", category: "design" },
  { name: "UI/UX DESIGN", category: "design" },
  { name: "REST APIS", category: "other" }
];

export const EDUCATION: Education[] = [
  {
    degree: "BSc (Hons) in Information Technology",
    school: "SLIIT (Sri Lanka Institute of Information Technology)",
    period: "2022 - 2026"
  },
  {
    degree: "Claude Code in Action Certification",
    school: "Anthropic / Certifications",
    period: "2026"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understanding goals, audience, and project requirements through extensive research.",
    iconName: "Search"
  },
  {
    number: "02",
    title: "IDEATE",
    description: "Planning, wireframing, and creating the right visual and architectural concepts.",
    iconName: "Lightbulb"
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Crafting visual design with a meticulous focus on typography, color harmony, and user experience.",
    iconName: "Pen"
  },
  {
    number: "04",
    title: "DEVELOP",
    description: "Building fast, highly responsive, and smooth-performing front-ends with elegant animations.",
    iconName: "Code"
  },
  {
    number: "05",
    title: "DELIVER",
    description: "Testing extensively across devices, optimizing metrics, and launching with absolute perfection.",
    iconName: "Send"
  }
];

export const METRICS = [
  { value: "1+", label: "YEARS\nEXPERIENCE" },
  { value: "15+", label: "PROJECTS\nCOMPLETED" },
  { value: "11+", label: "SKILLS\nMASTERED" }
];
