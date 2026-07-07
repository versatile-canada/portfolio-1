import { socials } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-8">
        <a
          href={socials.bookACall}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-foreground/80 px-4 py-2 text-xs font-medium tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          BOOK A CALL
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href={socials.zenithStudio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-accent/60 transition-colors hover:text-foreground"
          >
            Zenith Studio
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-accent/60 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
