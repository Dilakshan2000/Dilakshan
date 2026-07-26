import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
  onRevealStart: () => void;
}

export default function Preloader({ onComplete, onRevealStart }: PreloaderProps) {
  const [step, setStep] = useState<"drawing" | "logoFade" | "overlaySlide" | "done">("drawing");

  useEffect(() => {
    // 1. Drawing phase takes 1.2s (ease: [0.65, 0, 0.35, 1])
    const drawingTimer = setTimeout(() => {
      setStep("logoFade");
    }, 1500); // 1.2s draw + 0.3s hold

    // 2. Logo scales down and fades over 0.5s
    const logoFadeTimer = setTimeout(() => {
      setStep("overlaySlide");
      // Reveal the hero content behind it 0.3s before overlay fully clears
      onRevealStart();
    }, 2000); // 1.5s + 0.5s fade

    // 3. Overlay slides up over 0.8s
    const overlaySlideTimer = setTimeout(() => {
      setStep("done");
      onComplete();
    }, 2800); // overlay animation ends

    return () => {
      clearTimeout(drawingTimer);
      clearTimeout(logoFadeTimer);
      clearTimeout(overlaySlideTimer);
    };
  }, [onComplete, onRevealStart]);

  if (step === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        animate={
          step === "overlaySlide"
            ? { y: "-100%" }
            : { y: 0 }
        }
        transition={{
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1], // easeInOutQuart-like
        }}
        className="fixed inset-0 bg-[#060606] z-50 flex items-center justify-center select-none overflow-hidden"
      >
        {/* Subtle architectural vertical layout grids inside preloader */}
        <div className="absolute inset-x-12 top-0 bottom-0 flex justify-between pointer-events-none opacity-5">
          <div className="w-[1px] bg-white h-full"></div>
          <div className="w-[1px] bg-white h-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={
            step === "logoFade" || step === "overlaySlide"
              ? { opacity: 0, scale: 0.9 }
              : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.5,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="flex flex-col items-center gap-6"
        >
          {/* Elegant geometric monogram / line-drawing SVG */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* Elegant framing circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#preloaderGrad)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 270 }}
              transition={{
                duration: 1.4,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
            {/* Monogram K Letter Strokes */}
            <motion.path
              d="M35 30 V70 M52 30 L35 50 L52 70"
              stroke="#E31B23"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
            {/* Monogram D Accent Line */}
            <motion.path
              d="M58 30 V70 M58 30 H68 C76 30 80 38 80 50 C80 62 76 70 68 70 H58"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.4,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
            <defs>
              <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E31B23" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Luxury Studio Wordmark */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-serif italic text-sm tracking-[0.2em] text-white">
                K. DILAKSHAN
              </span>
              <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                STUDIO INTRO
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
