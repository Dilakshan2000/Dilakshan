import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Building2, BadgeCheck, ShieldCheck, ExternalLink } from "lucide-react";

export interface CertDetail {
  id: number;
  fullTitle: string;
  issuer: string;
  date: string;
  accentColor: "blue" | "purple" | "emerald";
  detail: string;
  skills: string[];
  credentialUrl?: string;
}

interface CertModalProps {
  cert: CertDetail | null;
  onClose: () => void;
}

const ACCENT: Record<string, { border: string; text: string; bg: string; tag: string; pulse: string; button: string }> = {
  blue:    { border: "border-blue-500/40",    text: "text-blue-400",    bg: "bg-blue-500/10",    tag: "bg-blue-500/10 text-blue-300 border border-blue-500/20",    pulse: "text-blue-400",    button: "bg-blue-600 hover:bg-transparent border-blue-600 hover:text-blue-400" },
  purple:  { border: "border-purple-500/40",  text: "text-purple-400",  bg: "bg-purple-500/10",  tag: "bg-purple-500/10 text-purple-300 border border-purple-500/20",  pulse: "text-purple-400",  button: "bg-purple-600 hover:bg-transparent border-purple-600 hover:text-purple-400" },
  emerald: { border: "border-emerald-500/40", text: "text-emerald-400", bg: "bg-emerald-500/10", tag: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20", pulse: "text-emerald-400", button: "bg-emerald-600 hover:bg-transparent border-emerald-600 hover:text-emerald-400" },
};

export default function CertModal({ cert, onClose }: CertModalProps) {
  if (!cert) return null;
  const accent = ACCENT[cert.accentColor];

  return (
    <AnimatePresence>
      {cert && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8 select-none">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-0"
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative bg-[#0a0a0a] border border-white/15 rounded-sm overflow-hidden max-w-3xl w-full z-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] select-text"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-30 p-2 rounded-sm border border-white/10 bg-[#0a0a0a] hover:bg-brand-red hover:border-brand-red text-white transition-all cursor-pointer select-none"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">

              {/* Left: decorative accent panel */}
              <div className={`md:col-span-5 relative flex flex-col items-center justify-center min-h-[260px] md:min-h-[440px] bg-[#0d0d0d] border-r border-white/10 p-10 gap-6 overflow-hidden`}>
                {/* Radial glow */}
                <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--glow-color),transparent_70%)]`}
                  style={{ "--glow-color": cert.accentColor === "blue" ? "#3b82f6" : cert.accentColor === "purple" ? "#a855f7" : "#34d399" } as React.CSSProperties}
                />

                {/* Big cert number */}
                <span className="font-serif font-light text-[120px] leading-none text-white/5 select-none absolute -bottom-4 -right-2">
                  {String(cert.id + 1).padStart(2, "0")}
                </span>

                {/* Icon ring */}
                <div className={`relative z-10 w-20 h-20 rounded-full border-2 ${accent.border} ${accent.bg} flex items-center justify-center`}>
                  <BadgeCheck className={`size-9 ${accent.text}`} />
                </div>

                {/* Verified stamp */}
                <div className="relative z-10 flex items-center gap-2 bg-[#0a0a0a] border border-white/10 px-3.5 py-1.5 rounded-sm text-[8px] font-mono tracking-widest text-white uppercase select-none">
                  <ShieldCheck className={`h-3 w-3 ${accent.pulse} animate-pulse`} />
                  <span>Verified Certificate</span>
                </div>
              </div>

              {/* Right: details */}
              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-5">

                  {/* Category label */}
                  <div className={`font-mono text-[9px] font-semibold tracking-[0.25em] uppercase ${accent.text}`}>
                    Certification
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-light text-white text-2xl md:text-3xl tracking-tight italic leading-snug">
                    {cert.fullTitle}
                  </h3>

                  {/* Meta grid */}
                  <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-4 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase text-white/30 tracking-widest">Issuer</span>
                        <span className="text-white font-serif font-light text-sm italic">{cert.issuer}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-3.5 w-3.5 text-brand-red shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase text-white/30 tracking-widest">Year</span>
                        <span className="text-white font-serif font-light text-sm italic">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/55 font-sans font-light text-sm leading-relaxed">
                    {cert.detail}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-sm text-[9px] font-mono tracking-widest uppercase ${accent.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Button */}
                {cert.credentialUrl && (
                  <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-2 select-none">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 border text-white font-mono text-[9px] tracking-[0.25em] uppercase py-3.5 rounded-sm transition-all cursor-pointer ${accent.button}`}
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
