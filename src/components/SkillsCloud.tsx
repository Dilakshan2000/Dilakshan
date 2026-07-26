import { motion } from "motion/react";
import { IconCloud } from "./ui/interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "php",
  "laravel",
  "mysql",
  "postgresql",
  "mongodb",
  "firebase",
  "vercel",
  "netlify",
  "docker",
  "git",
  "github",
  "figma",
  "wordpress",
  "tailwindcss",
  "sass",
  "redux",
  "vitejs",
  "visualstudiocode",
  "postman",
  "linux",
  "nginx",
];

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "PHP / Laravel", "MySQL", "PostgreSQL"],
  },
  {
    label: "Tools & Cloud",
    skills: ["Git / GitHub", "Docker", "Vercel", "Firebase", "Figma"],
  },
];

export default function SkillsCloud() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
    >
      {/* Decorative vertical grid lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

      {/* Subtle radial glow behind the cloud */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-2 mb-16"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red font-semibold">
            02 / EXPERTISE
          </span>
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <h2 className="font-serif font-light text-white text-3xl md:text-4xl tracking-tight italic">
              Skills &amp; Technologies
            </h2>
            <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase hidden md:block">
              Interactive · Hover to explore
            </span>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Icon Cloud */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center min-h-[420px]"
          >
            {/* Thin ring frame */}
            <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />
            <IconCloud iconSlugs={slugs} />
          </motion.div>

          {/* RIGHT — Skill category lists */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-10"
          >
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="flex flex-col gap-4"
              >
                {/* Category label */}
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-4 bg-brand-red/60" />
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-brand-red">
                    {cat.label}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, borderColor: "rgba(224,36,36,0.5)" }}
                      transition={{ duration: 0.2 }}
                      className="px-3 py-1.5 text-[11px] font-mono tracking-wide text-white/70
                        border border-white/10 rounded-sm bg-white/[0.03]
                        hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Bottom note */}
            <p className="text-white/20 font-mono text-[9px] tracking-widest uppercase mt-2">
              + more in the spinning cloud →
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
