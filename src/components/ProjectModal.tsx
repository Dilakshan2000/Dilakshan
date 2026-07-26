import { AnimatePresence, motion } from "motion/react";
import { X, Calendar, User, Briefcase, ExternalLink, ShieldCheck } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8 select-none">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-0"
          ></motion.div>

          {/* Modal Card Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative bg-[#0a0a0a] border border-white/15 rounded-sm overflow-hidden max-w-4xl w-full z-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] select-text"
          >
            {/* Close Button top right */}
            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="absolute top-5 right-5 z-30 p-2 rounded-sm border border-white/10 bg-[#0a0a0a] hover:bg-brand-red hover:border-brand-red text-white transition-all cursor-pointer select-none"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Column: Huge High-quality preview of the project */}
              <div className="md:col-span-6 relative aspect-[16/11] md:aspect-auto md:min-h-[500px] bg-[#121212] flex items-center justify-center border-r border-white/10">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#0a0a0a] border border-white/10 px-3.5 py-1.5 rounded-sm text-[8px] font-mono tracking-widest text-white uppercase select-none">
                  <ShieldCheck className="h-3 w-3 text-brand-red animate-pulse" />
                  <span>Verified Concept</span>
                </div>
              </div>

              {/* Right Column: Project details specs and explanation text */}
              <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  
                  {/* Category & Index */}
                  <div className="flex justify-between items-center text-brand-red font-mono text-[9px] font-medium tracking-[0.2em] uppercase mb-2 select-none">
                    <span>{project.category}</span>
                    <span className="text-sm font-light text-white/50">{project.number} / 03</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-light text-white text-3xl tracking-tight italic mb-6">
                    {project.title}
                  </h3>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-4 mb-6 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <User className="h-3.5 w-3.5 text-brand-red" />
                      <div>
                        <span className="block text-[8px] uppercase text-white/30 tracking-widest">Client</span>
                        <span className="text-white font-serif font-light text-sm italic">{project.client}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-3.5 w-3.5 text-brand-red" />
                      <div>
                        <span className="block text-[8px] uppercase text-white/30 tracking-widest">My Role</span>
                        <span className="text-white font-serif font-light text-sm italic">{project.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="h-3.5 w-3.5 text-brand-red" />
                      <div>
                        <span className="block text-[8px] uppercase text-white/30 tracking-widest">Year</span>
                        <span className="text-white font-serif font-light text-sm italic">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 font-sans font-light text-xs md:text-sm leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-sm bg-white/[0.02] border border-white/5 text-[8px] font-mono tracking-widest text-white/50 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3 select-none">
                  {project.demoUrl ? (
                    <>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="LAUNCH"
                        className="flex items-center justify-center gap-2 bg-brand-red hover:bg-transparent border border-brand-red hover:text-brand-red text-white font-mono text-[9px] tracking-[0.25em] uppercase py-4 rounded-sm transition-all cursor-pointer"
                      >
                        <span>Launch Live Site</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </>
                  ) : (
                    <div className="flex items-center justify-center gap-2 border border-white/10 text-white/40 font-mono text-[9px] tracking-[0.25em] uppercase py-4 rounded-sm">
                      <ShieldCheck className="h-3 w-3 text-brand-red" />
                      <span>Research / Academic Project</span>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
