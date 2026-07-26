import { motion } from "motion/react";
import { IMAGES } from "../data";
import { ArrowRight, Download, Briefcase, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#080808]"
    >

      {/* ── SUBTLE GRID PATTERN ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── RED CIRCLE — DESKTOP (right side) ── */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-[-6vw] top-1/2 -translate-y-1/2
                   w-[46vw] h-[46vw] max-w-[640px] max-h-[640px]
                   rounded-full bg-brand-red/90 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-[-6vw] top-1/2 -translate-y-1/2
                   w-[46vw] h-[46vw] max-w-[640px] max-h-[640px]
                   rounded-full border-[3px] border-white/10 pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* ── RED CIRCLE — MOBILE (centered behind photo) ── */}
      <div
        aria-hidden="true"
        className="lg:hidden absolute top-[6vh] left-1/2 -translate-x-1/2
                   w-[78vw] h-[78vw] max-w-[340px] max-h-[340px]
                   rounded-full bg-brand-red/90 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div
        aria-hidden="true"
        className="lg:hidden absolute top-[6vh] left-1/2 -translate-x-1/2
                   w-[78vw] h-[78vw] max-w-[340px] max-h-[340px]
                   rounded-full border-[3px] border-white/15 pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* ── SPINNING STAMP BADGE ─────────────────────────────────────── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute top-[4%] right-[4%] lg:top-[18%] lg:right-[4%] w-16 h-16 lg:w-20 lg:h-20 z-10 pointer-events-none select-none"
      >
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <path id="circle-text" d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
          </defs>
          <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="28" fill="rgba(224,36,36,0.15)" />
          <text className="fill-white/60" style={{ fontSize: "6.5px", fontFamily: "monospace", letterSpacing: "2px" }}>
            <textPath href="#circle-text">SOFTWARE ENGINEER • WEB DEV • SLIIT •&nbsp;</textPath>
          </text>
          <text x="40" y="44" textAnchor="middle" className="fill-white" style={{ fontSize: "9px", fontWeight: "bold", fontFamily: "monospace" }}>✦</text>
        </svg>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (< lg)
      ══════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col min-h-screen">

        {/* ── PHOTO BLOCK (top half on mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-end justify-center"
          style={{ zIndex: 3, height: "52vh", minHeight: "300px", maxHeight: "420px" }}
        >
          {/* Portrait image */}
          <img
            src={IMAGES.portrait}
            alt="K. Dilakshan"
            draggable={false}
            className="relative z-10 select-none object-cover object-top w-auto
                       [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]
                       [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
            style={{ height: "100%", maxHeight: "420px" }}
          />

          {/* Floating badge: UI/UX Designer — top right of photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
            className="absolute top-[18%] right-[8%] z-20
                       flex items-center gap-2 px-3 py-2
                       bg-[#111]/90 border border-white/10 rounded-xl
                       shadow-xl backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
            <span className="font-mono text-[9px] tracking-[0.18em] text-white/70 uppercase whitespace-nowrap">
              UI/UX Designer
            </span>
          </motion.div>

          {/* Floating badge: Open to Work — top left of photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            className="absolute top-[18%] left-[8%] z-20
                       flex items-center gap-2 px-3 py-2
                       bg-[#111]/90 border border-white/10 rounded-xl
                       shadow-xl backdrop-blur-sm"
          >
            <Briefcase className="h-3 w-3 text-brand-red flex-shrink-0" />
            <span className="font-mono text-[9px] tracking-[0.18em] text-white/70 uppercase whitespace-nowrap">
              Open to Work
            </span>
          </motion.div>

          {/* Floating badge: Web Developer — bottom center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
            className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-20
                       flex items-center gap-2 px-4 py-2
                       bg-brand-red rounded-xl shadow-xl"
          >
            <Code2 className="h-3 w-3 text-white/80" />
            <span className="font-mono text-[9px] tracking-[0.18em] text-white uppercase whitespace-nowrap">
              Web Developer
            </span>
          </motion.div>
        </motion.div>

        {/* ── TEXT BLOCK (bottom half on mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col gap-5 px-6 pt-6 pb-16 relative z-10"
        >
          {/* "Hello There!" pill */}
          <div className="flex items-center gap-2 w-fit">
            <span className="border border-white/20 rounded-full px-4 py-1.5
                             font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase
                             bg-white/[0.04] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              Hello There!
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-0">
            <h1 className="font-signature text-brand-red text-[2.6rem] leading-[1.1]">
              I'm K. Dilakshan,
            </h1>
            <h2 className="font-sans font-black text-white text-[1.8rem] leading-[1.05] tracking-[-0.02em]">
              Software Engineer
            </h2>
            <h2 className="font-sans font-black text-white text-[1.8rem] leading-[1.05] tracking-[-0.02em]">
              based in Sri Lanka.
            </h2>
          </div>

          {/* Bio */}
          <p className="text-white/45 font-sans text-sm font-light leading-relaxed">
            An undergraduate at SLIIT specializing in Information Technology with 1+ years in the field,
            collaborating with various companies and startups.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3
                         bg-brand-red text-white font-sans font-semibold text-sm
                         rounded-full hover:bg-red-700 transition-colors duration-300 group"
            >
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3
                         border border-white/20 text-white/70 font-sans font-semibold text-sm
                         rounded-full hover:border-brand-red hover:text-white
                         transition-colors duration-300"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/[0.07]">
            {[
              { value: "1+", label: "Years Exp." },
              { value: "15+", label: "Projects" },
              { value: "11+", label: "Skills" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-sans font-black text-white text-xl leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (≥ lg) — original two-column layout
      ══════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:grid relative z-10 w-full max-w-[1400px] mx-auto px-16
                      grid-cols-2 gap-0 items-center min-h-screen">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5 pr-10"
        >
          {/* "Hello There!" tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 w-fit"
          >
            <span className="border border-white/20 rounded-full px-4 py-1.5
                             font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase
                             bg-white/[0.04] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              Hello There!
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="flex flex-col gap-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-signature text-brand-red text-[3rem] sm:text-[3.8rem] md:text-[4.5rem] leading-[1.1]"
            >
              I'm K. Dilakshan,
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans font-black text-white text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]
                         leading-[1.05] tracking-[-0.02em]"
            >
              Software Engineer
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-sans font-black text-white text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]
                         leading-[1.05] tracking-[-0.02em]"
            >
              based in Sri Lanka.
            </motion.h2>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-white/45 font-sans text-sm font-light leading-relaxed max-w-[400px]"
          >
            An undergraduate at SLIIT specializing in Information Technology with 1+ years in the field,
            collaborating with various companies and startups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3
                         bg-brand-red text-white font-sans font-semibold text-sm
                         rounded-full hover:bg-red-700 transition-colors duration-300 group"
            >
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3
                         border border-white/20 text-white/70 font-sans font-semibold text-sm
                         rounded-full hover:border-brand-red hover:text-white
                         transition-colors duration-300 group"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-8 mt-4 pt-4 border-t border-white/[0.07]"
          >
            {[
              { value: "1+", label: "Years Experience" },
              { value: "15+", label: "Projects Done" },
              { value: "11+", label: "Skills Mastered" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-sans font-black text-white text-2xl leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative flex items-end justify-center h-full min-h-screen"
        >
          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <img
              src={IMAGES.portrait}
              alt="K. Dilakshan"
              draggable={false}
              className="w-auto max-w-full select-none object-cover object-top
                         [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
                         [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
              style={{ height: "88vh", maxHeight: "820px" }}
            />

            {/* Floating badge: UI/UX Designer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              className="absolute top-[28%] right-[-32px]
                         flex items-center gap-2 px-3 py-2
                         bg-[#111] border border-white/10 rounded-xl
                         shadow-xl backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
              <span className="font-mono text-[9px] tracking-[0.18em] text-white/70 uppercase whitespace-nowrap">
                UI/UX Designer
              </span>
            </motion.div>

            {/* Floating badge: Web Developer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5, type: "spring" }}
              className="absolute bottom-[22%] right-[-56px]
                         flex items-center gap-2 px-3 py-2
                         bg-brand-red rounded-xl shadow-xl"
            >
              <Code2 className="h-3 w-3 text-white/80" />
              <span className="font-mono text-[9px] tracking-[0.18em] text-white uppercase whitespace-nowrap">
                Web Developer
              </span>
            </motion.div>

            {/* Floating badge: Open to Work */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
              className="absolute bottom-[34%] left-[-24px]
                         flex items-center gap-2 px-3 py-2
                         bg-[#111] border border-white/10 rounded-xl
                         shadow-xl backdrop-blur-sm"
            >
              <Briefcase className="h-3 w-3 text-brand-red" />
              <span className="font-mono text-[9px] tracking-[0.18em] text-white/70 uppercase whitespace-nowrap">
                Open to Work
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#080808] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
