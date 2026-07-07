import Link from "next/link";
import { socials } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="#top" className="font-serif text-xl italic text-foreground">
          Syed Moinuddin
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href={socials.zenithStudio}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-muted decoration-accent/60 transition-colors hover:text-foreground sm:inline underline"
          >
            Zenith Studio
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-muted decoration-accent/60 transition-colors hover:text-foreground sm:inline underline"
          >
            LinkedIn
          </a>
          <a
            href={socials.bookACall}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/80 px-4 py-2 text-xs font-medium tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            BOOK A CALL
          </a>
        </nav>
      </div>
    </header>
  );
}
