import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className="font-serif text-4xl italic leading-[1.05] text-foreground sm:text-6xl">
          I build startups, accelerate growth, create empires.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          I specialize in crafting high-converting landing pages and websites for SaaS, Web3 &amp;
          AI startups. I&apos;m passionate about building software that makes a difference.
        </p>
      </Reveal>
    </section>
  );
}
