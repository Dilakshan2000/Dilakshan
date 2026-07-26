import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { ArrowRight } from "lucide-react";
import { Project } from "../types";
import { FloatingCardGallery, FloatingCard } from "./ui/floating-card-gallery";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  // Map PROJECTS to FloatingCard format
  const cards: FloatingCard[] = PROJECTS.map((p) => ({
    id: p.id,
    number: p.number,
    title: p.title,
    description: p.description,
    longDescription: p.longDescription,
    image: p.imageUrl,
    category: p.category,
    year: p.year,
    role: p.role,
    tags: p.tags,
    demoUrl: p.demoUrl,
  }));

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10 relative"
    >
      {/* Decorative vertical grid lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

      {/* Subtle ambient red glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-brand-red/5 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between
                     gap-6 border-b border-white/10 pb-8 mb-14"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red font-semibold">
              01 / WORK INDEX
            </span>
            <h2 className="font-serif font-light text-white text-3xl sm:text-4xl tracking-tight italic">
              Selected Projects
            </h2>
          </div>

          <button className="flex items-center gap-3 text-white/50 font-mono text-[10px]
                             tracking-[0.2em] uppercase hover:text-white transition-all duration-300 group">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2
                                   transition-transform duration-300 text-brand-red" />
          </button>
        </motion.div>

        {/* Floating Card Gallery */}
        <FloatingCardGallery
          cards={cards}
          onSelectCard={(card) => {
            const project = PROJECTS.find((p) => p.id === card.id);
            if (project) onSelectProject(project);
          }}
        />

      </div>
    </section>
  );
}
