"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks, socials } from "@/lib/data";
import VersatileMark from "./icons/VersatileMark";
import MagneticButton from "./MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={clsx(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border transition-all duration-300",
          scrolled
            ? "border-border bg-background/75 px-5 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent px-5 py-4"
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <VersatileMark className="h-6 w-6 text-foreground" />
          <span className="text-sm font-bold tracking-[0.25em] text-foreground">VERSATILE</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <MagneticButton key={link.href} href={link.href} variant="link" strength={0.2}>
              {link.label}
            </MagneticButton>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            href={socials.bookACall}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-5 !py-2.5 text-xs"
          >
            Get a Free Quote
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="text-foreground lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 flex w-full max-w-6xl flex-col gap-1 rounded-3xl border border-border bg-background/95 p-5 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={socials.bookACall}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-background"
            >
              Get a Free Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
