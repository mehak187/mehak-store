import { useCountdown } from '../hooks/useCountdown';
import { scrollToSection } from '../utils/scroll';

export default function FlashSale({ onFilterChange }) {
  const time = useCountdown(2);

  const goToSale = () => {
    onFilterChange('All');
    scrollToSection('new-arrivals');
  };

  return (
    <section id="flash-sale" className="py-16 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white overflow-hidden relative scroll-mt-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-100 text-sm tracking-widest mb-3">⚡ LIMITED TIME OFFER</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Summer Sale<br />Up to 50% OFF
            </h2>
            <p className="text-lg text-brand-50 mb-8">
              Selected items from our summer collection. Grab your favorites before they're gone!
            </p>
            <div className="flex gap-4 mb-8">
              <CountBox value={time.days} label="Days" />
              <CountBox value={time.hours} label="Hours" />
              <CountBox value={time.minutes} label="Mins" />
              <CountBox value={time.seconds} label="Secs" />
            </div>
            <button
              onClick={goToSale}
              className="bg-white text-brand-700 hover:bg-ink-900 hover:text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all"
            >
              SHOP SALE NOW →
            </button>
          </div>
          <div className="relative cursor-pointer" onClick={goToSale}>
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800"
              className="rounded-2xl shadow-2xl transition hover:scale-105 duration-500"
              alt="Sale"
            />
            <div className="absolute -top-4 -right-4 bg-red-500 text-white text-2xl font-bold px-6 py-6 rounded-full shadow-2xl animate-pulse-slow">
              50%<br />
              <span className="text-xs">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CountBox = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center min-w-[80px]">
    <p className="text-3xl font-bold">{String(value).padStart(2, '0')}</p>
    <p className="text-xs uppercase tracking-wider">{label}</p>
  </div>
);
