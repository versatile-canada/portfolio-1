import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Featured Work</p>
        <h2 className="mt-2 font-serif text-4xl italic text-foreground sm:text-5xl">
          Results, not just design
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A sample of the trades and firms we&apos;ve rebuilt into high-converting, premium web
          presences.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {caseStudies.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1}>
            <a
              href={project.link}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.03] transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-[8/5.2] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.decor && (
                  <div
                    className={`absolute bottom-4 flex h-16 w-16 items-center justify-center rounded-xl bg-black/40 backdrop-blur-sm ${
                      project.decorSide === "left" ? "left-4" : "right-4"
                    }`}
                  >
                    <Image src={project.decor} alt="" width={40} height={40} className="h-10 w-10" />
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  {project.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl italic text-foreground">{project.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
                  />
                </div>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                <p className="mt-auto pt-2 text-sm font-semibold text-accent-bright">
                  {project.result}
                </p>
                <div className="flex flex-wrap gap-2">
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
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
