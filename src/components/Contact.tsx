import Reveal from "./Reveal";
import { PhoneIcon } from "./icons";
import { PHONE_DISPLAY, PHONE_HREF } from "../siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <div className="card grain overflow-hidden px-6 py-16 text-center shadow-lift sm:px-12 lg:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto h-80 w-[38rem] animate-flicker rounded-full bg-[radial-gradient(closest-side,rgba(244,99,28,0.35),transparent)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-ember-500/70 to-transparent"
            />

            <span className="eyebrow">Give us a call</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Ready to get the
              <span className="bg-ember-gradient bg-clip-text text-transparent"> grill booked in?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-charcoal-300">
              We're just a phone call away, and we'd love to hear from you. If you have any questions, or you're ready
              to book our BBQ catering services, you can reach us at:
            </p>

            <a
              href={PHONE_HREF}
              className="group mt-12 inline-flex flex-col items-center gap-3 sm:flex-row sm:gap-5"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-ember-gradient text-white shadow-ember transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <span className="font-display text-4xl tracking-wide text-white transition-colors duration-300 group-hover:text-ember-400 sm:text-6xl">
                {PHONE_DISPLAY}
              </span>
            </a>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-400">
              Serving Greater Manchester &amp; beyond
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
