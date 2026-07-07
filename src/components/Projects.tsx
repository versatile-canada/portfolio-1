import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import GithubIcon from "./icons/GithubIcon";

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Featured Work</p>
        <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          From high-conversion landing pages to AI-powered dashboards — every build here solves a
          real-world problem with style and speed.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.03] transition-colors hover:border-accent/40">
              <div className="relative aspect-[8/5.2] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.decor && (
                  <div
                    className={`absolute bottom-4 flex h-16 w-16 items-center justify-center rounded-xl bg-black/30 backdrop-blur-sm ${
                      project.decorSide === "left" ? "left-4" : "right-4"
                    }`}
                  >
                    <Image src={project.decor} alt="" width={40} height={40} className="h-10 w-10" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl italic text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3 text-muted">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="transition-colors hover:text-foreground"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live link`}
                        className="transition-colors hover:text-foreground"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
