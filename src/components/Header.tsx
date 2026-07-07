import { socials } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-5 sm:px-12 lg:px-20">
        <a
          href={socials.bookACall}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-foreground/90 px-5 py-2.5 text-xs font-semibold tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
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
