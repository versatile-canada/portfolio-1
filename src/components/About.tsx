import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">
      <Reveal className="max-w-2xl space-y-4 text-lg text-muted">
        <p>
          Beyond my work as a frontend developer, I&apos;m also very active in gaming, regularly
          playing PUBG, Valorant, and other PC games, combining my passion for technology with
          competitive gaming experiences.
        </p>
        <p>
          When I&apos;m away from the keyboard, I&apos;m usually diving into anime marathons or
          spending time with friends, recharging for the next big idea.
        </p>
        <p>
          I&apos;m currently working on some exciting projects that I can&apos;t wait to share with
          you. But I&apos;m always open to new opportunities and collaborations.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <h3 className="font-serif text-2xl italic text-foreground">{group.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {group.items.join(", ")}.
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
