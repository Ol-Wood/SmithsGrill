const items = ["Sausages", "Burgers", "Chicken", "Corporate gatherings", "Family celebrations", "Fresh off the grill"];

export default function Ticker() {
  return (
    <div className="relative border-y border-white/10 bg-charcoal-900/60 py-4">
      <div className="mask-fade-x flex overflow-hidden">
        {/* Rendered twice so the -50% translation loops seamlessly */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
          >
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-10 whitespace-nowrap font-display text-lg uppercase tracking-[0.16em] text-charcoal-300"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
