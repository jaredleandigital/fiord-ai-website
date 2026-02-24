"use client";

import { useInView } from "@/hooks/useInView";

export function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      data-reveal={inView ? "visible" : ""}
      className={className}
    >
      {children}
    </div>
  );
}
