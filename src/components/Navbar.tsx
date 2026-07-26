import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../data";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Mouse move states for menu background parallax drift
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scroll direction check
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }

      // Check if scrolled past hero section (~600px) for blurred header background
      if (currentScrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax tracker for menu overlay hover
  useEffect(() => {
    if (!isOpen) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position -0.5 to 0.5 from center
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  const menuLinks = [
    { label: "Selected Work", href: "#projects", img: IMAGES.bike, number: "01" },
    { label: "Skills & Tech", href: "#skills", img: IMAGES.workspace, number: "02" },
    { label: "Education & Certs", href: "#education", img: IMAGES.fashion, number: "03" },
    { label: "Services", href: "#services", img: IMAGES.chair, number: "04" },
    { label: "Inquiries", href: "#contact", img: IMAGES.portrait, number: "05" },
  ];

  return (
    <>
      {/* Primary Floating Header (Item 2) */}
      <motion.header
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 px-6 py-5 md:px-12 md:py-6 flex justify-between items-center text-[10px] font-mono tracking-[0.2em] uppercase select-none transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent border-b border-white/5"
        }`}
      >
        <a href="#hero" className="flex flex-col items-start leading-[1.6]">
          <span className="text-base md:text-lg font-serif italic tracking-tight text-white normal-case leading-none">
            K. Dilakshan
          </span>
          <span className="text-[8px] opacity-40 mt-1 hidden sm:block">
            Software Engineer & Developer
          </span>
        </a>

        <div className="flex items-center gap-6">
          {/* Status badge */}
          <div className="hidden md:flex items-center gap-2 text-white/50 border border-white/10 px-3 py-1 rounded-sm bg-white/[0.02]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-red"></span>
            </span>
            <span>Available for Projects</span>
          </div>

          {/* Premium Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 text-white hover:text-brand-red transition-colors duration-300 group focus:outline-none cursor-pointer"
            data-cursor="MENU"
          >
            <span className="text-[9px] tracking-[0.2em] uppercase font-mono font-medium opacity-60 group-hover:opacity-100 hidden sm:inline">
              Menu Index
            </span>
            <div className="flex flex-col gap-1 w-5 justify-center items-end">
              <span className="h-[1px] w-5 bg-white group-hover:bg-brand-red transition-all"></span>
              <span className="h-[1px] w-3.5 bg-white group-hover:bg-brand-red transition-all"></span>
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay with Clipping Circle (Item 3) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 bg-[#060606] z-50 flex items-center justify-center p-6 md:p-12 overflow-hidden select-none"
          >
            {/* Background floating thumbnail images with parallax mouse move drift */}
            <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-20 z-0 overflow-hidden hidden md:block">
              {menuLinks.map((item, idx) => {
                // Apply a unique, staggered lag position per image
                const driftX = mousePos.x * (15 + idx * 10);
                const driftY = mousePos.y * (15 + idx * 10);

                return (
                  <motion.div
                    key={`bg-thumb-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.08 }}
                    style={{
                      transform: `translate3d(${driftX}px, ${driftY}px, 0)`,
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      top: `${20 + idx * 14}%`,
                      left: idx % 2 === 0 ? `${10 + idx * 6}%` : `${60 + idx * 5}%`,
                    }}
                    className="absolute w-[180px] aspect-[16/10] overflow-hidden border border-white/5 rounded-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Menu Header / Close button row */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-10">
              <span className="font-serif italic text-base text-white/40">Navigation Index</span>
              
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-white/50 hover:text-brand-red transition-all duration-300 focus:outline-none cursor-pointer"
                data-cursor="CLOSE"
              >
                <span className="font-mono text-[9px] tracking-widest uppercase">Close</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation Links (Staggered Translate revealed - Item 3) */}
            <nav className="flex flex-col gap-4 sm:gap-6 md:gap-8 text-left max-w-2xl w-full z-10 relative pl-3 sm:pl-6 md:pl-12 border-l border-white/10 my-auto">
              {menuLinks.map((link, index) => (
                <div key={link.href} className="overflow-hidden group/link">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-baseline gap-3 sm:gap-4 md:gap-6"
                  >
                    <span className="font-mono text-[9px] sm:text-[10px] text-brand-red/60 group-hover/link:text-brand-red transition-colors duration-300 select-none">
                      {link.number}
                    </span>
                    
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-2xl sm:text-4xl md:text-6xl font-light tracking-tight text-white/70 group-hover/link:text-white group-hover/link:translate-x-2 transition-all duration-300 italic inline-block"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Floating branding watermark */}
            <div className="absolute bottom-6 left-6 md:left-12 z-10 font-mono text-[8px] text-white/20 tracking-[0.25em] uppercase">
              SRI LANKA • CREATIVE PORTFOLIO 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
