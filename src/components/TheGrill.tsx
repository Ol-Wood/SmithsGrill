import Reveal from "./Reveal";
import { FlameIcon } from "./icons";
import { GRILL_PHOTO } from "../media";

const menu = ["Sausages", "Burgers", "Chicken"];

export default function TheGrill() {
  return (
    <section id="the-grill" className="relative py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-64 max-w-3xl -translate-y-1/2 rounded-full bg-ember-700/10 blur-[110px]"
      />

      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <FlameIcon className="h-4 w-4" />
            On the grill
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">The classics, done properly</h2>
          <div className="heat-rule my-8" />
          <p className="text-lg leading-relaxed text-charcoal-300">
            All your favourites, cooked fresh in front of your guests.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {menu.map((item, index) => (
            <Reveal key={item} delay={index * 110}>
              <div className="card group flex h-full items-center justify-between gap-4 px-7 py-10 transition duration-300 hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-lift">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -bottom-16 h-32 bg-[radial-gradient(closest-side,rgba(244,99,28,0.22),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">{item}</p>
                <FlameIcon className="h-7 w-7 shrink-0 text-ember-500/40 transition-colors duration-300 group-hover:text-ember-500" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 font-display text-2xl uppercase tracking-[0.16em] text-charcoal-500">…and more</p>
        </Reveal>

        {GRILL_PHOTO && (
          <Reveal delay={160}>
            <figure className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 shadow-lift">
              <img
                src={GRILL_PHOTO.src}
                alt={GRILL_PHOTO.alt}
                loading="lazy"
                style={{ objectPosition: GRILL_PHOTO.focus ?? "50% 50%" }}
                className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent"
              />
            </figure>
          </Reveal>
        )}
      </div>
    </section>
  );
}
