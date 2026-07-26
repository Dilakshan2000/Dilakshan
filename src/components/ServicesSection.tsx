import { motion } from "motion/react";
import { Monitor, Palette, Globe, Cpu, Bot, Wrench } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    icon: <Monitor className="h-6 w-6 text-brand-red" />,
    title: "Frontend Development",
    description:
      "Building fast, responsive, and pixel-perfect user interfaces using React.js, Next.js, and TypeScript — optimized for performance and scalability across all devices.",
  },
  {
    id: 2,
    icon: <Palette className="h-6 w-6 text-brand-red" />,
    title: "UI/UX Implementation",
    description:
      "Converting Figma designs into clean, production-ready code with Tailwind CSS and shadcn/ui — pixel-accurate, accessible, and consistent across breakpoints.",
  },
  {
    id: 3,
    icon: <Globe className="h-6 w-6 text-brand-red" />,
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugin integration, and CMS setup for businesses that need a fast, manageable, and SEO-friendly website.",
  },
  {
    id: 4,
    icon: <Cpu className="h-6 w-6 text-brand-red" />,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web application development using Laravel and Next.js — from database design to deployed, production-ready features.",
  },
  {
    id: 5,
    icon: <Bot className="h-6 w-6 text-brand-red" />,
    title: "AI-Integrated Web Solutions",
    description:
      "Adding AI/LLM-powered features into web apps — chatbots, smart automation, and agent integrations — backed by certified knowledge in AI/ML and LLM security (OWASP Top 10).",
  },
  {
    id: 6,
    icon: <Wrench className="h-6 w-6 text-brand-red" />,
    title: "Bug Fixes & Maintenance",
    description:
      "Debugging, performance optimization, and ongoing maintenance for existing React/Next.js/Laravel/WordPress projects.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden"
    >
      {/* Decorative vertical grid lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(224,36,36,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-2 mb-16"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-brand-red font-semibold">
            04 / WHAT I CAN DO FOR YOU
          </span>
          <h2 className="font-serif font-light text-white text-4xl sm:text-5xl tracking-tight italic mt-2">
            Services
          </h2>
          <div className="h-[2px] w-12 bg-brand-red/60 mt-4" />
        </motion.div>

        {/* Services Grid (Reference layout from image: 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#0f0f0f] border border-white/5 hover:border-brand-red/30 p-8 md:p-10 rounded-sm relative group transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="mb-6 p-3 bg-white/[0.02] border border-white/5 w-fit rounded-sm group-hover:border-brand-red/20 group-hover:bg-brand-red/5 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="font-sans font-semibold text-lg text-white group-hover:text-brand-red mb-4 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

