import Reveal from "./Reveal";
import Smoke from "./Smoke";
import { ArrowIcon, CalendarIcon, FlameIcon, PhoneIcon, PinIcon, TruckIcon } from "./icons";
import { PHONE_DISPLAY, PHONE_HREF } from "../siteConfig";
import { HERO_PHOTO, TRAILER_PHOTO } from "../media";

const trustPoints = [
  { icon: TruckIcon, label: "We come to you" },
  { icon: FlameIcon, label: "Cooked fresh on site" },
  { icon: CalendarIcon, label: "A wide range of events" },
];

export default function Hero() {
  const photo = HERO_PHOTO;

  return (
    <section
      id="top"
      className={`grain relative isolate overflow-hidden ${
        photo ? "flex min-h-[92svh] items-end pb-20 pt-40" : "pb-16 pt-32 sm:pt-40 lg:pb-24 lg:pt-48"
      }`}
    >
      {/* Full-bleed photograph, once a hero image has been supplied */}
      {photo && (
        <>
          <img
            src={photo.src}
            alt={photo.alt}
            fetchPriority="high"
            style={{ objectPosition: photo.focus ?? "50% 50%" }}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          {/* Scrim: keeps the headline legible over any photo, and keeps the page dark */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-charcoal-950/55"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/40 to-transparent"
          />
        </>
      )}

      {/* Ambient heat */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[42rem] w-[80rem] -translate-x-1/2 animate-smoke-drift rounded-full bg-[radial-gradient(closest-side,rgba(244,99,28,0.28),transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[26rem] w-[26rem] animate-flicker rounded-full bg-[radial-gradient(closest-side,rgba(255,138,61,0.18),transparent)] blur-3xl"
      />

      <div className="shell relative">
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

      {/* Interim treatment: transparent trailer render, so it needs no edge mask —
          just drifting smoke behind it and a shadow that follows the cut-out alpha. */}
      {!photo && (
        <Reveal delay={200} className="relative mt-14 lg:mt-20">
          <Smoke className="inset-x-0 -top-16 bottom-[-12%] -z-10 mx-auto max-w-[1700px]" />
          <img
            src={TRAILER_PHOTO.src}
            width={2534}
            height={762}
            alt={TRAILER_PHOTO.alt}
            className="mx-auto w-full max-w-[1500px] [filter:drop-shadow(0_28px_36px_rgba(0,0,0,0.75))]"
          />
        </Reveal>
      )}
    </section>
  );
}
