import { useEffect, useState } from "react";
import Logo from "../assets/smiths-mobile-bbq.svg?react";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "../siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-charcoal-950/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="shell flex items-center justify-between gap-6">
        <a href="#top" aria-label="Smith's Mobile BBQ — home" className="shrink-0">
          <Logo className="h-7 w-auto max-w-[62vw] sm:h-8" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold uppercase tracking-[0.12em] text-charcoal-200 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-ember-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="btn-primary hidden !px-5 !py-3 sm:inline-flex">
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden md:inline">{PHONE_DISPLAY}</span>
            <span className="md:hidden">Call us</span>
          </a>

          <a
            href={PHONE_HREF}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="btn-primary !p-3 sm:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:border-ember-500/60 hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down */}
      <div
        className={`overflow-hidden border-white/10 bg-charcoal-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? "mt-3 max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav className="shell flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/5 py-4 text-lg font-bold uppercase tracking-[0.1em] text-white last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
