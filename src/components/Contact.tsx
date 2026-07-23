import { navLinks, socials } from "@/lib/data";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import VersatileMark from "./icons/VersatileMark";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(212,175,55,0.12), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="font-serif text-4xl italic leading-[1.05] text-foreground sm:text-6xl">
            Ready to out-build your
            <br />
            competitors online?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Tell us about your trade or firm — we&apos;ll reply within one business day with a
            straight answer on scope and price.
          </p>
        </Reveal>
        <Reveal
          delay={0.2}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href={socials.bookACall} target="_blank" rel="noopener noreferrer" variant="primary">
            Book a Free Strategy Call
          </MagneticButton>
          <MagneticButton href={socials.email} variant="secondary">
            Email Us
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a href="#top" className="flex items-center gap-2.5">
            <VersatileMark className="h-6 w-6 text-foreground" />
            <span className="text-sm font-bold tracking-[0.25em] text-foreground">VERSATILE</span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-x-6 text-sm">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-accent/30 hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-accent/30 hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Versatile. All rights reserved.</p>
          <p>Premium websites for blue &amp; white collar businesses.</p>
        </div>
      </div>
    </footer>
  );
}
