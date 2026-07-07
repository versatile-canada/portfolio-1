import Image from "next/image";
import { recommendedTracks } from "@/lib/data";
import Reveal from "./Reveal";

export default function MusicTicker() {
  const doubled = [...recommendedTracks, ...recommendedTracks];

  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal>
          <p className="text-lg text-muted">
            A few songs I can recommend if you&apos;re looking for some fresh tunes :)
          </p>
        </Reveal>
      </div>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {doubled.map((track, i) => (
            <div
              key={`${track.title}-${i}`}
              className="flex w-52 shrink-0 flex-col gap-3 rounded-xl border border-border bg-white/[0.03] p-3"
            >
              <Image
                src={track.art}
                alt={track.title}
                width={200}
                height={200}
                className="aspect-square w-full rounded-lg bg-cover bg-center"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{track.artist}</p>
                <p className="text-sm text-muted">{track.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
