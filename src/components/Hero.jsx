import { Icon } from './Icons';
import { scrollToSection } from '../utils/scroll';

export default function Hero({ onFilterChange }) {
  const shopWomen = () => {
    onFilterChange('Women');
    scrollToSection('new-arrivals');
  };
  const shopMen = () => {
    onFilterChange('Men');
    scrollToSection('new-arrivals');
  };

  return (
    <section id="hero" className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="relative h-full flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white animate-fade-in">
          <p className="text-brand-300 text-sm md:text-base tracking-widest mb-4">SUMMER COLLECTION 2026</p>
          <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight mb-6">
            Effortless<br />Elegance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Discover our latest curated collection of timeless pieces designed for the modern individual.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={shopWomen}
              className="bg-white text-ink-900 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5 hover:shadow-2xl px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300"
            >
              SHOP WOMEN
            </button>
            <button
              onClick={shopMen}
              className="border-2 border-white text-white hover:bg-white hover:text-ink-900 hover:-translate-y-0.5 hover:shadow-2xl px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300"
            >
              SHOP MEN
            </button>
          </div>
          <div className="flex items-center gap-8 mt-12">
            <Stat number="10K+" label="Happy Customers" />
            <Divider />
            <Stat number="4.9★" label="Average Rating" />
            <Divider />
            <Stat number="500+" label="Premium Products" />
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('categories')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <Icon name="chevronDownSmall" className="w-6 h-6" />
      </button>
    </section>
  );
}

const Stat = ({ number, label }) => (
  <div>
    <p className="text-3xl font-bold">{number}</p>
    <p className="text-sm text-white/70">{label}</p>
  </div>
);

const Divider = () => <div className="w-px h-12 bg-white/30" />;
