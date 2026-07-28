import Reveal from "./Reveal";
import { ChefIcon, FlameIcon, TruckIcon } from "./icons";

const reasons = [
  {
    icon: FlameIcon,
    title: "Delicious BBQ classics",
    copy: "Sausages, burgers, chicken and more — all your favourites, served hot off the grill.",
  },
  {
    icon: ChefIcon,
    title: "Professional team",
    copy: "Our grillmasters know their way around a BBQ, so every plate comes out cooked exactly right.",
  },
  {
    icon: TruckIcon,
    title: "Fully mobile setup",
    copy: "We bring the trailer, the grill and everything else to you, wherever your event is happening.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-72 max-w-4xl -translate-y-1/2 rounded-full bg-ember-700/10 blur-[110px]"
      />

      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">Three good reasons to fire us up</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 110}>
              <article className="card group h-full p-8 transition duration-500 hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-lift">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[radial-gradient(closest-side,rgba(244,99,28,0.22),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-ember-500/25 bg-ember-500/10 text-ember-400 transition-colors duration-500 group-hover:bg-ember-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-7 text-2xl">{title}</h3>
                <p className="mt-4 leading-relaxed text-charcoal-300">{copy}</p>
                <span className="mt-8 block text-6xl font-display leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-ember-500/20">
                  0{index + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
