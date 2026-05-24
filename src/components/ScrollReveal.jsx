"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children }) {
  const revealRef = useRef(null);

  useEffect(() => {
    const el = revealRef.current;
    
    gsap.fromTo(
      el,
      { opacity: 0, filter: "blur(20px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return <div ref={revealRef}>{children}</div>;
}
