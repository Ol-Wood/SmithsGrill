import BBQ from "../assets/bbq-dark.png";
import Reveal from "./Reveal";
import { ArrowIcon, CalendarIcon, FlameIcon, PhoneIcon, PinIcon, TruckIcon } from "./icons";
import { PHONE_DISPLAY, PHONE_HREF } from "../siteConfig";

const trustPoints = [
  { icon: TruckIcon, label: "We come to you" },
  { icon: FlameIcon, label: "Cooked fresh on site" },
  { icon: CalendarIcon, label: "A wide range of events" },
];

export default function Hero() {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24 lg:pt-48">
      {/* Ambient heat */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[42rem] w-[80rem] -translate-x-1/2 animate-smoke-drift rounded-full bg-[radial-gradient(closest-side,rgba(244,99,28,0.28),transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[26rem] w-[26rem] animate-flicker rounded-full bg-[radial-gradient(closest-side,rgba(255,138,61,0.18),transparent)] blur-3xl"
      />

      <div className="shell">
        <Reveal>
          <span className="eyebrow">
            <PinIcon className="h-4 w-4" />
            Greater Manchester &amp; beyond
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-[3.25rem] leading-[0.9] sm:text-7xl lg:text-[6.5rem]">
            Proper BBQ,
            <br />
            <span className="bg-ember-gradient bg-clip-text text-transparent text-glow">wheeled straight</span>
            <br />
            to your event.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal-300 sm:text-xl">
            Smith's Mobile BBQs brings the grill, the grillmasters and the smoke to your chosen location — from
            corporate gatherings to family celebrations.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={PHONE_HREF} className="btn-primary">
              <PhoneIcon className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a href="#why-us" className="btn-ghost group">
              Why book us
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-charcoal-300">
                <Icon className="h-5 w-5 shrink-0 text-ember-500" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Hero photograph — the flat studio backdrop is masked so it melts into the page */}
      <Reveal delay={200} className="relative mt-14 lg:mt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-8 -z-10 mx-auto h-40 max-w-4xl rounded-full bg-ember-600/25 blur-[90px]"
        />
        <img
          src={BBQ}
          width={2534}
          height={762}
          alt="Two of Smith's mobile BBQ trailers, grills loaded and ready to serve"
          className="mask-fade mx-auto w-full max-w-[1500px]"
        />
      </Reveal>
    </section>
  );
}
