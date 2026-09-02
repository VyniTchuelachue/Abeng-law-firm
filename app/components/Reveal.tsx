"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The outer div owns any layout/positioning classes the caller passes in
  // (e.g. absolute positioning, sizing, flex). The inner div owns the fade
  // animation only, so its own `transform` (from .reveal/.reveal.in-view)
  // never fights with a positioning transform (like -translate-y-1/2) that
  // the caller might need on the same element.
  return (
    <div className={className}>
      <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${delayMs}ms` }}>
        {children}
      </div>
    </div>
  );
}
