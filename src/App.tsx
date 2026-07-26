import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Marquee from "./components/Marquee";
import SkillsCloud from "./components/SkillsCloud";
import GearGrid from "./components/GearGrid";
import ServicesSection from "./components/ServicesSection";
import FooterCTA from "./components/FooterCTA";
import ProjectModal from "./components/ProjectModal";
import ContactForm from "./components/ContactForm";
import Preloader from "./components/Preloader";
import { TidalCursor } from "./components/ui/tidal-cursor";
import { Project } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Preloader orchestrator states (Item 1)
  const [showPreloader, setShowPreloader] = useState(true);
  const [heroRevealed, setHeroRevealed] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-brand-red selection:text-white text-white font-sans antialiased overflow-x-hidden">

      {/* Tidal Wave Ripple Cursor */}
      <TidalCursor />

      {/* Cinematic Stroke drawing intro preloader (Item 1) */}
      {showPreloader && (
        <Preloader
          onRevealStart={() => setHeroRevealed(true)}
          onComplete={() => setShowPreloader(false)}
        />
      )}

      {/* Immersive Header Navigation (Item 2 & 3) */}
      {!showPreloader && <Navbar />}

      {/* Main Content Layout Block (Fade-reveal synced with Preloader - Item 1) */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={heroRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }} // easeOutExpo
        className="relative w-full"
      >

        {/* Section 1: Hero Landing Showcase with 3D Parallax tracking (Item 4) */}
        <HeroSection />

        {/* Section 1.5: About Me with wave divider */}
        <AboutSection />

        {/* Section 2: Selected Project Work Showreel with Staggered reveals (Item 9) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 3: Premium Partner Infinite Looping Marquee (Item 8) */}
        <Marquee />

        {/* Section 4: Interactive Skills & Technologies Cloud */}
        <SkillsCloud />

        {/* Section 6: Double-stacked Crossfade Gear Swap Grid (Item 7) */}
        <GearGrid />

        {/* Section 7: Professional Services Section */}
        <ServicesSection />

        {/* Section 8: Contact Action Trigger & Footer Block with lagging watermark (Item 11) */}
        <FooterCTA onOpenContact={() => setIsContactOpen(true)} />

      </motion.main>

      {/* Interactive Project Specifications Modal (Overlay) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Contact & Project Booking Slider (Slide-over drawer) */}
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
