import { industries } from "@/lib/data";
import Reveal from "./Reveal";

export default function SocialProof() {
  const doubled = [...industries, ...industries];

  return (
    <section className="border-y border-border py-10 sm:py-14">
      <Reveal className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted">
          Trusted across trades &amp; professional services
        </p>
      </Reveal>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-3">
          {doubled.map((industry, i) => (
            <span
              key={`${industry}-${i}`}
              className="shrink-0 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm text-muted"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
