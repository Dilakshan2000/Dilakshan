import { useState } from "react";
import { GraduationCap, Award, Brain, Shield, BadgeCheck } from "lucide-react";
import DisplayCards from "./ui/display-cards";
import CertModal, { CertDetail } from "./CertModal";

// ─── Full certification data ─────────────────────────────────────────────────
const CERTIFICATIONS: CertDetail[] = [
  {
    id: 0,
    fullTitle: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    date: "2025",
    accentColor: "blue",
    detail:
      "Completed Stage 1 of the AI/ML Engineer certification program at SLIIT, covering core concepts of artificial intelligence, machine learning algorithms, supervised and unsupervised learning, and real-world AI application development.",
    skills: ["Python", "Machine Learning", "Neural Networks", "Data Analysis", "Scikit-learn"],
    credentialUrl: "https://code.sliit.org/certificates/nwirrtt1pi",
  },
  {
    id: 1,
    fullTitle: "OWASP Top 10 LLM 2025: AI Security Essentials",
    issuer: "Udemy / LLM Security Certification",
    date: "2025",
    accentColor: "purple",
    detail:
      "Earned certification in OWASP Top 10 for Large Language Model Applications, demonstrating expertise in identifying and mitigating the most critical security risks specific to LLM-based systems, including prompt injection, insecure output handling, and training data poisoning.",
    skills: ["LLM Security", "Prompt Injection", "AI Risk Mitigation", "OWASP", "Secure AI Systems"],
    credentialUrl: "https://ude.my/UC-9f75f31f-e95b-45f3-bea0-ec7afb51f98c",
  },
  {
    id: 2,
    fullTitle: "Claude Code in Action",
    issuer: "Anthropic / Claude Code",
    date: "2026",
    accentColor: "emerald",
    detail:
      "Certified in Claude Code in Action by Anthropic, covering practical agentic AI coding workflows, effective use of Claude as an AI coding partner, building production-ready features with AI assistance, and best practices for human-AI collaboration in software development.",
    skills: ["Agentic AI", "Claude Code", "AI-Assisted Development", "Prompt Engineering", "Anthropic API"],
    credentialUrl: "https://verify.skilljar.com/c/6ebdhgf5k545",
  },
];

// Card display data aligned by index with CERTIFICATIONS
const CERT_CARDS = [
  {
    icon: <Brain className="size-4 text-blue-300" />,
    title: "AI/ML Engineer",
    description: "Stage 1 — SLIIT",
    date: "2025",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0a]/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Shield className="size-4 text-purple-300" />,
    title: "OWASP Top 10 LLM",
    description: "AI Security Essentials",
    date: "2025",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-400",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0a]/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <BadgeCheck className="size-4 text-emerald-300" />,
    title: "Claude Code in Action",
    description: "Anthropic / Claude Code",
    date: "2026",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-400",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export default function GearGrid() {
  const [selectedCert, setSelectedCert] = useState<CertDetail | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setSelectedCert(CERTIFICATIONS[index]);
  };

  return (
    <>
      <section
        id="education"
        className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden"
      >
        {/* Decorative vertical lines */}
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">

          {/* Section Header */}
          <div className="flex flex-col gap-2 mb-14 select-none">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red font-semibold">
              03 / EDUCATION &amp; CERTIFICATIONS
            </span>
            <h2 className="font-serif font-light text-white text-3xl sm:text-4xl tracking-tight italic">
              Academic &amp; Professional Growth
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: Education ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-brand-red" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50">
                  Education
                </span>
              </div>

              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute -left-[5px] top-1 size-2.5 rounded-full border-2 border-brand-red bg-[#0a0a0a]" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif font-light text-white text-xl sm:text-2xl italic leading-snug">
                    BSc (Hons) in Information Technology
                  </h3>
                  <p className="font-sans text-sm text-white/50 font-medium tracking-wide">
                    SLIIT — Specializing in Information Technology
                  </p>
                  <span className="font-mono text-[10px] text-brand-red tracking-wider mt-1">
                    2022 – 2026
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Stacked Display Cards ─────────────────────────────── */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Award className="size-5 text-brand-red" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50">
                  Certifications
                </span>
              </div>

              {/* Cards stack — padded so the offset cards don't clip */}
              <div className="w-full flex items-start justify-center lg:justify-start pl-0 lg:pl-6 pt-4 pb-20">
                <DisplayCards
                  cards={CERT_CARDS}
                  onCardClick={handleCardClick}
                  activeIndex={activeIndex}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certificate detail modal */}
      <CertModal
        cert={selectedCert}
        onClose={() => {
          setSelectedCert(null);
          setActiveIndex(null);
        }}
      />
    </>
  );
}
