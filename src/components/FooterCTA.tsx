import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";
import { IMAGES } from "../data";

interface FooterCTAProps {
  onOpenContact: () => void;
}

export default function FooterCTA({ onOpenContact }: FooterCTAProps) {
  const bgGraphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!bgGraphicRef.current) return;
      
      const scrollY = window.scrollY;
      const rect = bgGraphicRef.current.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      
      // Calculate depth translation (moves at 0.08x scroll speed)
      const relativeMove = (scrollY - offsetTop) * -0.08;

      bgGraphicRef.current.style.transform = `translate3d(0, ${relativeMove}px, 0)`;
    };

    const onScrollThrottled = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScrollThrottled, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScrollThrottled);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-28 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-white/10">
      
      {/* Decorative vertical grid lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block"></div>
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block"></div>

      {/* Large Parallax Background Watermark Illustration (Item 11 background layer) */}
      <div
        ref={bgGraphicRef}
        style={{ willChange: "transform" }}
        className="absolute right-[-10%] bottom-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none select-none z-0 opacity-[0.03] text-white transition-transform duration-100 ease-out"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="w-full h-full"
        >
          {/* Complex luxury architectural design sphere/compass wheel */}
          <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" />
          <path d="M50 0 V100 M0 50 H100 M15 15 L85 85 M15 85 L85 15" />
          <path d="M50 20 L80 50 L50 80 L20 50 Z" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Foreground container revealing up gracefully (Item 11 foreground) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10"
      >
        
        {/* Left Column: Call to Action and buttons (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 select-none z-10">
          <div className="flex flex-col gap-4">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red font-semibold">06 / INQUIRIES</span>
            <h2 className="font-serif font-light text-white text-3xl sm:text-4xl md:text-5xl tracking-tight italic leading-tight">
              Let's work<br />
              <span className="font-serif normal-case font-light text-white">together</span>
            </h2>
            
            <p className="text-white/50 font-sans text-sm md:text-base font-light leading-relaxed max-w-sm select-text">
              I'm currently accepting new projects, branding consultations, and collaborative roles. Let's build a visual statement.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="mt-4 flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white hover:border-brand-red hover:text-brand-red font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3.5 rounded-sm transition-all duration-300 w-fit group select-none cursor-pointer"
            data-cursor="CONTACT"
          >
            <span>Start a project</span>
            <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Center Column: Direct Contact Info (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6 z-10">
          <div className="flex flex-col gap-4 border-l border-white/10 pl-6 select-text">
            
            {/* Contact Item: Email */}
            <a
              href="mailto:dilakshankanagarajan@gmail.com"
              className="flex items-center gap-4 text-white/50 hover:text-white transition-all group"
            >
              <span className="p-2 border border-white/10 rounded-sm bg-white/[0.02] group-hover:border-white/20">
                <Mail className="h-3.5 w-3.5 text-brand-red" />
              </span>
              <span className="font-mono text-xs tracking-wider">
                dilakshankanagarajan@gmail.com
              </span>
            </a>

            {/* Contact Item: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kanagarajan-dilakshan-9984a731a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/50 hover:text-white transition-all group"
            >
              <span className="p-2 border border-white/10 rounded-sm bg-white/[0.02] group-hover:border-white/20">
                <Globe className="h-3.5 w-3.5 text-brand-red" />
              </span>
              <span className="font-mono text-xs tracking-wider">
                linkedin.com/in/kanagarajan-dilakshan
              </span>
            </a>

            {/* Contact Item: Phone */}
            <a
              href="tel:+94774085768"
              className="flex items-center gap-4 text-white/50 hover:text-white transition-all group"
            >
              <span className="p-2 border border-white/10 rounded-sm bg-white/[0.02] group-hover:border-white/20">
                <Phone className="h-3.5 w-3.5 text-brand-red" />
              </span>
              <span className="font-mono text-xs tracking-wider">
                +94 77 408 5768
              </span>
            </a>

            {/* Contact Item: Location */}
            <div className="flex items-center gap-4 text-white/40 group">
              <span className="p-2 border border-white/10 rounded-sm bg-white/[0.02]">
                <MapPin className="h-3.5 w-3.5 text-brand-red" />
              </span>
              <span className="font-mono text-xs tracking-wider select-none">
                Kurunegala, Sri Lanka
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: High-end Mockup (col-span-3) */}
        <div className="lg:col-span-3 flex justify-center items-end relative z-10 select-none">
          <div className="w-full max-w-[280px] lg:max-w-none aspect-[16/10] relative rounded-sm overflow-hidden border border-white/10 group shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-black">
            {/* Soft highlight reflection screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none"></div>

            <img
              src={IMAGES.workspace}
              alt="Workspace Laptop Mockup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover relative z-0 transform grayscale group-hover:grayscale-0 group-hover:scale-102 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

      </motion.div>

      {/* Under footer simple copyright bar */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono tracking-widest text-white/30 uppercase select-none relative z-10">
        <span>© 2026 KANAGARAJAN DILAKSHAN. ALL RIGHTS RESERVED</span>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/kanagarajan-dilakshan-9984a731a" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">LINKEDIN</a>
          <a href="mailto:dilakshankanagarajan@gmail.com" className="hover:text-white transition-all">EMAIL</a>
        </div>
      </div>

    </footer>
  );
}
