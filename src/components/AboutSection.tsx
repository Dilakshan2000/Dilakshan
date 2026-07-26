import { motion } from "motion/react";
import { IMAGES } from "../data";
import { Download, Mail, ArrowRight } from "lucide-react";

const STATS = [
  { value: "1+", label: "Years of\nExperience", position: "top-right" },
  { value: "15+", label: "Projects\nCompleted", position: "mid-left" },
  { value: "25+", label: "Skills & Tech", position: "bottom-center" },
];

export default function AboutSection() {
  return (
    <>
      {/* ── WAVE DIVIDER ─────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden bg-[#080808]"
        style={{ height: "80px", marginBottom: "-2px" }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0 C240,80 480,0 720,40 C960,80 1200,20 1440,60 L1440,80 L0,80 Z"
            fill="#0d0d0d"
          />
        </svg>
        {/* Second wave for depth */}
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full opacity-50"
        >
          <path
            d="M0,20 C360,80 720,10 1080,50 C1260,70 1380,40 1440,60 L1440,80 L0,80 Z"
            fill="#e02424"
            fillOpacity="0.06"
          />
        </svg>
      </div>

      {/* ── ABOUT ME SECTION ─────────────────────────────────────── */}
      <section
        id="about"
        className="relative bg-[#0d0d0d] border-b border-white/10 overflow-hidden"
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Background red glow */}
        <div className="absolute top-1/2 left-[25%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-red/[0.06] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* ═══════════ LEFT: IMAGE + FLOATING BADGES ═══════════ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
              style={{ minHeight: "520px" }}
            >
              {/* Large red circle blob behind image */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[320px] h-[320px] rounded-full bg-brand-red/80"
                style={{ zIndex: 1 }}
              />
              {/* Inner ring */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[360px] h-[360px] rounded-full border border-brand-red/20"
                style={{ zIndex: 1 }}
              />
              {/* Outer dashed ring */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[420px] h-[420px] rounded-full border border-dashed border-white/10"
                style={{ zIndex: 1 }}
              />

              {/* Portrait image */}
              <div
                className="relative z-10 flex items-end justify-center"
                style={{ height: "480px" }}
              >
                <img
                  src={IMAGES.portrait}
                  alt="Dilakshan Kanagarajan"
                  draggable={false}
                  className="h-full w-auto object-cover object-top select-none
                             [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
                             [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                />
              </div>

              {/* ── FLOATING STAT BADGES ── */}

              {/* Top right: Years of Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 120 }}
                className="absolute top-[12%] right-[8%] z-20
                           w-28 h-28 rounded-full bg-[#111]/95
                           border border-white/10 shadow-xl backdrop-blur-sm
                           flex flex-col items-center justify-center gap-1"
              >
                <span className="font-sans font-black text-white text-2xl leading-none tracking-tight">
                  1+
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] text-white/50 uppercase text-center leading-snug px-2">
                  Years of{"\n"}Experience
                </span>
              </motion.div>

              {/* Mid left: Projects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.5, type: "spring", stiffness: 120 }}
                className="absolute top-[40%] left-[0%] z-20
                           w-28 h-28 rounded-full bg-[#111]/95
                           border border-white/10 shadow-xl backdrop-blur-sm
                           flex flex-col items-center justify-center gap-1"
              >
                <span className="font-sans font-black text-white text-2xl leading-none tracking-tight">
                  15+
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] text-white/50 uppercase text-center leading-snug px-2">
                  Projects{"\n"}Completed
                </span>
              </motion.div>

              {/* Bottom center: Skills & Technologies Count */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 120 }}
                className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-20
                           w-28 h-28 rounded-full bg-[#111]/95
                           border border-white/10 shadow-xl backdrop-blur-sm
                           flex flex-col items-center justify-center gap-1"
              >
                <span className="font-sans font-black text-white text-2xl leading-none tracking-tight">
                  25+
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] text-white/50 uppercase text-center leading-snug px-2">
                  Skills &amp;{"\n"}Technologies
                </span>
              </motion.div>
            </motion.div>

            {/* ═══════════ RIGHT: CONTENT ═══════════ */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-brand-red/60" />
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-brand-red font-semibold">
                  Let Me Introduce Myself
                </span>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-1">
                <h2 className="font-sans font-black text-white text-4xl md:text-5xl leading-tight tracking-[-0.02em]">
                  About{" "}
                  <span className="text-brand-red">me</span>
                </h2>
                <p className="font-sans font-semibold text-white/70 text-base md:text-lg leading-snug mt-1">
                  A story of passion and perseverance.
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] w-12 bg-brand-red/40" />

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-4 text-white/55 font-sans text-sm font-light leading-relaxed max-w-[560px]">
                <p>
                  I'm <span className="text-white font-medium">Dilakshan Kanagarajan</span>, a
                  Frontend-focused Software Engineer based in Sri Lanka, currently working as an{" "}
                  <span className="text-white font-medium">Associate Software Engineer at Webtezza</span>{" "}
                  while completing my BSc (Hons) in Information Technology at SLIIT.
                </p>
                <p>
                  My journey into development started with a simple curiosity — how do great digital
                  products actually work? That curiosity turned into a career building real-world web
                  applications, from pixel-perfect UIs to scalable full-stack features using{" "}
                  <span className="text-brand-red/90">React.js, Next.js, TypeScript, Laravel,</span>{" "}
                  and <span className="text-brand-red/90">WordPress</span>.
                </p>
                <p>
                  I care deeply about the details — smooth interactions, clean component architecture,
                  and interfaces that feel effortless to use. Lately, I've also been diving into{" "}
                  <span className="text-white font-medium">AI/ML and LLM security</span>, earning
                  certifications in both.
                </p>
                <p className="text-white/35">
                  When I'm not coding, I'm usually learning something new, refining a side project, or
                  figuring out how to build the next thing a little better than the last.
                </p>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">
                  Contact
                </p>
                <a
                  href="mailto:dilakshan@example.com"
                  className="flex items-center gap-2 text-white/50 hover:text-brand-red
                             transition-colors duration-300 text-sm font-mono w-fit"
                >
                  <Mail className="h-3.5 w-3.5" />
                  dilakshan.kanagarajan@gmail.com
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3
                             bg-brand-red text-white font-sans font-semibold text-sm
                             rounded-full hover:bg-red-700 transition-colors duration-300 group"
                >
                  Hire Me
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
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
