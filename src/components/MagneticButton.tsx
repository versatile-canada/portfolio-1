"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import clsx from "clsx";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  strength?: number;
  className?: string;
  target?: string;
  rel?: string;
};

const styles = {
  primary:
    "rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-background hover:bg-accent-bright",
  secondary:
    "rounded-full border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground hover:border-accent/60 hover:text-accent-bright",
  link: "text-sm text-muted hover:text-foreground",
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  strength = 0.35,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2 transition-colors",
        styles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
