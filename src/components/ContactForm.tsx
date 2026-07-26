import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields before sending.");
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulate database submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end select-none">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-0"
          ></motion.div>

          {/* Contact Slider Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 180 }}
            className="relative bg-[#0a0a0a] border-l border-white/15 w-full max-w-lg h-full z-10 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-[#101010]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-brand-red animate-pulse" />
                <h3 className="font-mono text-[9px] text-white tracking-[0.25em] uppercase">
                  Let's create magic
                </h3>
              </div>
              
              <button
                onClick={onClose}
                data-cursor="CLOSE"
                className="p-2 rounded-sm border border-white/10 text-white hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Form Body */}
            <div className="flex-1 p-6 md:p-8 select-text">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h4 className="font-serif font-light text-white text-2xl tracking-tight italic mb-2">
                        Get In Touch
                      </h4>
                      <p className="text-white/50 font-sans text-xs font-light leading-relaxed">
                        Fill in your details below and describe your project concept. I'll get back to you within 24 hours.
                      </p>
                    </div>

                    {/* Error message card */}
                    {error && (
                      <div className="p-3 bg-red-950/40 border border-brand-red/30 rounded-sm flex items-center gap-3 text-brand-red text-xs font-mono">
                        <AlertTriangle className="h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Input Field: Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[8px] uppercase font-mono text-brand-red/80 tracking-widest select-none">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        className="bg-[#121212] border border-white/10 rounded-sm p-3.5 text-white text-xs font-mono focus:outline-none focus:border-brand-red transition-all placeholder:text-white/20"
                      />
                    </div>

                    {/* Input Field: Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[8px] uppercase font-mono text-brand-red/80 tracking-widest select-none">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                        className="bg-[#121212] border border-white/10 rounded-sm p-3.5 text-white text-xs font-mono focus:outline-none focus:border-brand-red transition-all placeholder:text-white/20"
                      />
                    </div>

                    {/* Input Field: Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[8px] uppercase font-mono text-brand-red/80 tracking-widest select-none">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your goals, timeline, and deliverables..."
                        disabled={isSubmitting}
                        className="bg-[#121212] border border-white/10 rounded-sm p-3.5 text-white text-xs font-sans font-light focus:outline-none focus:border-brand-red transition-all placeholder:text-white/20 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor="SEND"
                      className="mt-4 flex items-center justify-center gap-3 bg-brand-red hover:bg-transparent border border-brand-red hover:text-brand-red text-white font-mono text-[10px] tracking-[0.25em] uppercase py-4 rounded-sm transition-all cursor-pointer select-none"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="h-full flex flex-col justify-center items-center text-center gap-6 py-12 px-4 select-none"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, delay: 0.1 }}
                      className="h-16 w-16 bg-brand-red/10 border border-brand-red rounded-sm flex items-center justify-center text-brand-red shadow-[0_5px_15px_rgba(224,36,36,0.2)]"
                    >
                      <CheckCircle2 className="h-7 w-7" />
                    </motion.div>

                    <div className="flex flex-col gap-2 max-w-sm">
                      <h4 className="font-serif font-light text-white text-2xl tracking-tight italic">
                        Message Sent!
                      </h4>
                      <p className="text-white/50 font-sans text-xs font-light leading-relaxed">
                        Thank you for reaching out. Rayhan Aditya has received your specification details and will contact you shortly. Let's make something historic!
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      data-cursor="RESET"
                      className="mt-4 border border-white/15 hover:border-brand-red text-white hover:text-brand-red font-mono text-[9px] tracking-widest uppercase px-6 py-3 rounded-sm transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Slogan Bar */}
            <div className="p-6 md:p-8 border-t border-white/10 bg-[#101010] text-center">
              <span className="text-[8px] font-mono tracking-[0.25em] text-white/40 uppercase">
                JAKARTA, ID • AVAILABLE WORLDWIDE
              </span>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
