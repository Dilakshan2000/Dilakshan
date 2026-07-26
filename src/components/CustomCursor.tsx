import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Position trackers
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if touch device
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches || 
                     ("ontouchstart" in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
      return mobile;
    };
    
    const isTouch = checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check hovering elements
      const target = e.target as HTMLElement;
      const hoverable = target.closest("[data-cursor]");
      if (hoverable) {
        const text = hoverable.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovering(true);
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Animation Loop with Lerping for lag-behind smooth follow feel
    let animationFrameId: number;

    const updatePosition = () => {
      // Smooth lerp calculations
      // Dot is fast
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.35;

      // Ring is slower (lagging effect)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 h-1.5 w-1.5 bg-brand-red rounded-full pointer-events-none z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } ${isHovering ? "scale-0 bg-transparent" : ""}`}
      />

      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        style={{ willChange: "transform" }}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center transition-all duration-300 origin-center ease-out ${
          isVisible ? "opacity-100" : "opacity-0 scale-0"
        } ${
          isHovering
            ? "h-14 w-14 bg-white text-[#0a0a0a] border-transparent font-mono text-[9px] font-bold uppercase tracking-widest text-center shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            : "h-8 w-8 border border-white/25 bg-transparent"
        } ${isClicking ? "scale-90 bg-white/10" : "scale-100"}`}
      >
        <span className="transition-opacity duration-200">
          {isHovering ? cursorText : ""}
        </span>
      </div>
    </>
  );
}
