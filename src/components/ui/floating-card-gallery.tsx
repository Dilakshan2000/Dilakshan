import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FloatingCard {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  year: string;
  role: string;
  tags?: string[];
  demoUrl?: string;
}

interface FloatingCardGalleryProps {
  cards: FloatingCard[];
  onSelectCard?: (card: FloatingCard) => void;
  className?: string;
}

export const FloatingCardGallery: React.FC<FloatingCardGalleryProps> = ({
  cards = [],
  onSelectCard,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 30;
      const y = (e.clientY - rect.top - rect.height / 2) / 30;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      style={{ perspective: "1500px" }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{
          transform: `rotateX(${-mousePosition.y * 0.4}deg) rotateY(${mousePosition.x * 0.4}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              type: "spring",
              stiffness: 90,
            }}
            whileHover={{ scale: 1.02 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Red glow on hover */}
            <motion.div
              className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(224,36,36,0.3), transparent 70%)",
                boxShadow: "0 0 32px 2px rgba(224,36,36,0.25)",
                borderRadius: "12px",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Card */}
            <div
              className="relative rounded-xl bg-[#111]/90 backdrop-blur-sm border border-white/[0.07]
                         flex flex-col overflow-hidden cursor-pointer h-full
                         hover:border-brand-red/30 transition-colors duration-500"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
                transformStyle: "preserve-3d",
              }}
              onClick={() => {
                if (onSelectCard) {
                  onSelectCard(card);
                } else {
                  setActiveIndex(activeIndex === index ? null : index);
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (onSelectCard) {
                    onSelectCard(card);
                  } else {
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }
              }}
            >
              {/* Corner red blob */}
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full
                              bg-brand-red/20 blur-2xl pointer-events-none" />

              {/* Image area */}
              <div className="w-full h-48 overflow-hidden relative flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700
                             group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                {/* Number badge */}
                <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.25em]
                                 text-white/50 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                  {card.number} / {String(cards.length).padStart(2, "0")}
                </span>
                {/* Category badge */}
                <span className="absolute top-3 right-3 font-mono text-[8px] tracking-[0.2em] uppercase
                                 text-brand-red bg-black/60 border border-brand-red/30 px-2 py-1 rounded
                                 backdrop-blur-sm">
                  {card.category.replace(" WEBSITE", "").replace(" MAGAZINE", "")}
                </span>
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-serif font-light text-white text-xl tracking-tight
                               group-hover:text-brand-red transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/40 text-xs font-light leading-relaxed line-clamp-2">
                  {card.description}
                </p>

                {/* Footer row */}
                <div className="mt-auto pt-3 border-t border-white/[0.06]
                                flex items-center justify-between">
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                    {card.year}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-mono text-white/30
                                   group-hover:text-brand-red transition-colors uppercase tracking-widest">
                    View Details
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* Expanded overlay */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-[#0d0d0d]/97 backdrop-blur-md rounded-xl
                             p-6 z-50 flex flex-col border border-brand-red/20"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  style={{ boxShadow: "0 0 40px rgba(224,36,36,0.15)" }}
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
                    className="absolute top-4 right-4 text-white/30 hover:text-brand-red
                               transition-colors duration-200"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red mb-2">
                    {card.category}
                  </span>
                  <h2 className="font-serif font-light text-white text-xl mb-3 tracking-tight pr-6">
                    {card.title}
                  </h2>
                  <p className="text-white/50 text-xs font-light leading-relaxed mb-4">
                    {card.longDescription || card.description}
                  </p>

                  {card.tags && card.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {card.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[9px] px-2 py-1 rounded font-mono
                                     bg-brand-red/10 border border-brand-red/20 text-brand-red/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex items-center gap-3">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                      {card.year} · {card.role}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingCardGallery;
