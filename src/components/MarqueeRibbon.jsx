// Infinite scrolling text strip — a bold, always-moving eye-catcher.
export default function MarqueeRibbon() {
  const items = [
    'New Arrivals',
    'Summer Sale',
    'Free Shipping',
    'Premium Quality',
    'Trending Now',
    'Exclusive Deals',
  ];
  const row = [...items, ...items]; // duplicated so the loop is seamless

  return (
    <div className="bg-ink-900 text-white py-3 md:py-3.5 overflow-hidden select-none">
      <div className="flex w-max items-center animate-marquee">
        {row.map((text, i) => (
          <span
            key={i}
            className="flex items-center text-sm md:text-base font-serif italic font-medium tracking-[0.15em]"
          >
            <span className="px-5 md:px-8 whitespace-nowrap">{text}</span>
            <span className="text-brand-400 text-[10px] md:text-xs not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
