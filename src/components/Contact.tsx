import { socials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className="font-serif text-5xl italic leading-none text-foreground sm:text-6xl">
          Let&apos;s
          <br />
          Talk
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Got a question, proposal, project, or want to work together on something?
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-lg">
          <a
            href={socials.email}
            className="text-accent underline decoration-accent/40 hover:text-foreground"
          >
            Send me an email
          </a>
          <span className="text-muted">or</span>
          <a
            href={socials.bookACall}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 hover:text-foreground"
          >
            Book a call
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-accent/30 hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-accent/30 hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Copyright {new Date().getFullYear()}</p>
        <p>
          Need a help in website DM me{" "}
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-accent/40"
          >
            Syed Moinuddin
          </a>
        </p>
      </div>
    </footer>
  );
}
