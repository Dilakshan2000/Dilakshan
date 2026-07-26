import { PerspectiveMarquee } from "./ui/perspective-marquee";

const MARQUEE_ITEMS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Laravel",
  "WordPress",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
  "UI/UX",
  "AI/ML",
  "LLM Integration",
  "AI Agents"
];

export default function Marquee() {
  return (
    <section className="py-4 bg-[#050505] border-b border-white/10 overflow-hidden select-none relative h-28 flex items-center">
      {/* Decorative vertical grid lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block"></div>
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block"></div>

      <div className="w-full h-full relative z-10">
        <PerspectiveMarquee
          items={MARQUEE_ITEMS}
          rotateY={-16}
          rotateX={4}
          perspective={1000}
          fontSize={26}
          color="rgba(255, 255, 255, 0.45)"
          background="transparent"
          fadeColor="#050505"
          speed={0.8}
          pixelsPerFrame={1.5}
        />
      </div>
    </section>
  );
}
