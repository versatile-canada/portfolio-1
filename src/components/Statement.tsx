import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <h2 className="font-serif text-4xl italic leading-[1.05] text-foreground sm:text-6xl">
          We design websites that do more than look good.
          <br />
          They close the deal before the phone even rings.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Versatile is a web design and development agency for blue-collar trades and white-collar
          firms who are tired of looking like everyone else in the search results.
        </p>
      </Reveal>
    </section>
  );
}
