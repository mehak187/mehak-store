import { Icon } from './Icons';
import { scrollToSection } from '../utils/scroll';

const items = [
  { icon: 'truck', text: 'FREE SHIPPING ON ORDERS OVER $50', section: 'new-arrivals' },
  { icon: 'shield', text: '30-DAY MONEY BACK GUARANTEE', section: 'about' },
  { icon: 'star', text: 'USE CODE: LUXE20 FOR 20% OFF FIRST ORDER', section: 'flash-sale' },
  { icon: 'heart', text: 'NEW SUMMER COLLECTION — 40% OFF LIMITED TIME', section: 'flash-sale' },
];

export default function AnnouncementBar() {
  return (
    <div className="bg-ink-900 text-white text-xs md:text-sm py-2.5 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(item.section)}
            className="flex items-center gap-2 px-6 shrink-0 hover:text-brand-300 transition cursor-pointer"
          >
            <Icon name={item.icon} className="w-4 h-4" />
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
