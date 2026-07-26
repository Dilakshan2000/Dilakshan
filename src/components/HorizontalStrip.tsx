import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IMAGES } from "../data";

interface StripItem {
  id: string;
  image: string;
  title: string;
  location: string;
  year: string;
  category: string;
}

const STRIP_ITEMS: StripItem[] = [
  {
    id: "veloce-milan",
    image: IMAGES.bike,
    title: "Veloce Staging",
    location: "Milan, Italy",
    year: "2024",
    category: "Product R&D"
  },
  {
    id: "woodcraft-kyoto",
    image: IMAGES.chair,
    title: "Artisanal Joinery",
    location: "Kyoto, Japan",
    year: "2024",
    category: "Studio Feature"
  },
  {
    id: "urbanic-paris",
    image: IMAGES.fashion,
    title: "Urbanic Editorial",
    location: "Paris, France",
    year: "2023",
    category: "Fashion Print"
  },
  {
    id: "workspace-jakarta",
    image: IMAGES.workspace,
    title: "Creative HQ",
    location: "Jakarta, Indonesia",
    year: "2026",
    category: "Tech Lab"
  }
];

export default function HorizontalStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flexRowRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      
      if (scrollHeight <= 0) return;

      // Calculate progress 0 to 1
      const relativeScroll = -rect.top;
      const progress = Math.min(Math.max(relativeScroll / scrollHeight, 0), 1);
      
      // Use requestAnimationFrame for super smooth rendering performance
      requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Translate calculation
  // Total cards are 4, width of each item is ~24vw/350px.
  // We translate horizontally as progress scroll happens.
  const maxTranslateX = 55; // Translate up to -55% of the flex row width
  const translateX = scrollProgress * -maxTranslateX;

  return (
    <div
      id="curated-galleries"
      ref={containerRef}
      className="relative h-[155vh] bg-[#0a0a0a] select-none"
    >
      {/* Sticky viewport content wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center border-b border-white/10">
        
        {/* Background micro grid elements */}
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block"></div>
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block"></div>
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/[0.02] pointer-events-none hidden lg:block"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/[0.02] pointer-events-none hidden lg:block"></div>

        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-10 relative z-10 flex flex-col gap-2">
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red font-semibold">
            03 / CINEMATIC EXPANSION
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-serif font-light text-white text-3xl sm:text-4xl tracking-tight italic">
              Horizontal Index
            </h2>
            <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest leading-none">
              [ Drag to explore / Scroll down to drive slide ]
            </p>
          </div>
        </div>

        {/* Sliding Flex Track Container */}
        <div className="w-full relative overflow-visible z-10">
          <div
            ref={flexRowRef}
            style={{
              transform: `translate3d(${translateX}%, 0, 0)`,
              willChange: "transform",
            }}
            className="flex gap-8 md:gap-12 pl-6 md:pl-12 pr-24 w-[200vw] sm:w-[160vw] md:w-[140vw] lg:w-[125vw] transition-transform duration-100 ease-out"
          >
            {STRIP_ITEMS.map((item, index) => {
              // Calculate specific offset progress of each card to drive scale & settle
              // Each card reaches "center stage" at different progress levels
              const cardTrigger = index / (STRIP_ITEMS.length - 1);
              const distanceFromTrigger = Math.abs(scrollProgress - cardTrigger);
              const isActive = distanceFromTrigger < 0.25;

              // Image scale goes from 1.05 to 1.00 as it settles
              const scale = Math.max(1, 1.05 - Math.max(0, 0.05 - distanceFromTrigger * 0.15));

              return (
                <div
                  key={item.id}
                  className="w-[280px] sm:w-[360px] md:w-[420px] shrink-0 group"
                  data-cursor="EXPLORE"
                >
                  {/* High fidelity image box */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#121212] border border-white/10 rounded-sm">
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                    
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      style={{
                        transform: `scale(${scale})`,
                        transition: "transform 0.4s ease-out",
                      }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
                    />

                    {/* Left overlay badge inside image */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[8px] font-mono tracking-widest text-white/50 bg-[#060606]/80 px-2 py-1 border border-white/5 uppercase rounded-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption row with micro animation fade-in delay (Item 5) */}
                  <div
                    style={{
                      opacity: isActive ? 1 : 0.4,
                      transform: `translateY(${isActive ? "0px" : "4px"})`,
                      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                    }}
                    className="flex justify-between items-start mt-4 border-t border-white/5 pt-3 select-text"
                  >
                    <div className="flex flex-col gap-1">
                      <h4 className="font-serif text-white font-light text-base group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
                        {item.location}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-brand-red/80 font-medium">
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom scrollbar status bar indicator */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mt-12 relative z-10 select-none">
          <div className="w-full h-[1px] bg-white/10 relative">
            <div
              style={{
                width: `${scrollProgress * 100}%`,
                willChange: "width",
              }}
              className="absolute left-0 top-0 h-full bg-brand-red transition-all duration-200 ease-out"
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}
