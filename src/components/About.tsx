import Reveal from "./Reveal";
import { CheckIcon, PinIcon } from "./icons";

const covers = ["Corporate gatherings", "Family celebrations", "Events across Greater Manchester"];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">About us</span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              A full BBQ setup that
              <span className="text-ember-500"> turns up ready to cook</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="heat-rule my-8" />
          </Reveal>

          <Reveal delay={140}>
            <p className="text-lg leading-relaxed text-charcoal-300">
              At Smith's Mobile BBQs we specialise in catering for a wide range of events throughout Greater Manchester,
              from corporate gatherings to family celebrations. Our mobile setup brings the whole BBQ experience to your
              chosen location — no kitchen required, no compromise on the food.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-300">
              With professional service and mouthwatering BBQ classics coming straight off the grill, we're dedicated to
              making your event truly unforgettable.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:col-span-5">
          <div className="card grain h-full p-8 shadow-lift">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ember-600/20 blur-3xl"
            />
            <span className="eyebrow">
              <PinIcon className="h-4 w-4" />
              Where we cook
            </span>
            <p className="mt-5 font-display text-3xl uppercase leading-tight text-white">
              Greater Manchester
              <span className="block text-ember-500">&amp; beyond</span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-300">
              Give us a call to talk through your event and location.
            </p>

            <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-7">
              {covers.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] font-semibold text-charcoal-100">
                  <CheckIcon className="h-4 w-4 shrink-0 text-ember-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
