import Logo from "../assets/smiths-mobile-bbq.svg?react";
import { PhoneIcon } from "./icons";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "../siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-900/50 py-14">
      <div className="shell flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Logo className="h-7 w-auto max-w-[70vw]" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-charcoal-400">
            Mobile BBQ catering for events across Greater Manchester and beyond.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal-300 transition-colors hover:text-ember-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={PHONE_HREF} className="btn-ghost self-start lg:self-auto">
          <PhoneIcon className="h-4 w-4 text-ember-500" />
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="shell mt-12 border-t border-white/5 pt-7">
        <p className="text-xs uppercase tracking-[0.18em] text-charcoal-500">
          © {new Date().getFullYear()} Smith's Mobile BBQs
        </p>
      </div>
    </footer>
  );
}
