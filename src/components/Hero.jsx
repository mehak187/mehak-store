import { useEffect, useState } from 'react';
import { Icon } from './Icons';
import { scrollToSection } from '../utils/scroll';

// Each slide has its own image AND its own text.
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&auto=format&fit=crop&q=80',
    eyebrow: 'SUMMER COLLECTION 2026',
    line1: 'Effortless',
    line2: 'Elegance',
    subtitle: 'Discover our latest curated collection of timeless pieces designed for the modern individual.',
  },
  {
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&auto=format&fit=crop&q=80',
    eyebrow: 'NEW SEASON ARRIVALS',
    line1: 'Signature',
    line2: 'Statements',
    subtitle: 'Elevate your wardrobe with standout pieces that speak before you do.',
  },
  {
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&auto=format&fit=crop&q=80',
    eyebrow: 'THE ESSENTIALS EDIT',
    line1: 'Timeless',
    line2: 'Staples',
    subtitle: 'Curated classics, thoughtfully designed to last far beyond the season.',
  },
];

export default function Hero({ onFilterChange }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

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
        {slides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-100 animate-kenburns' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative h-full flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          {/* Keyed by slide → only the text re-animates; siblings stay mounted */}
          <div key={`text-${current}`}>
            <p className="text-brand-300 text-sm md:text-base tracking-widest mb-4 animate-fade-in">
              {slide.eyebrow}
            </p>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight mb-6">
              <AnimatedWord word={slide.line1} startDelay={0.1} />
              <br />
              <AnimatedWord word={slide.line2} startDelay={0.45} />
            </h1>
            <p
              className="text-lg md:text-xl mb-8 max-w-lg animate-slide-up"
              style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
            >
              {slide.subtitle}
            </p>
          </div>

          <div key="cta" className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}>
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

          <div key="stats" className="flex items-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'backwards' }}>
            <Stat value={10} suffix="K+" label="Happy Customers" />
            <Divider />
            <Stat value={4.9} decimals={1} suffix="★" label="Average Rating" />
            <Divider />
            <Stat value={500} suffix="+" label="Premium Products" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
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

// Splits a word into letters, each rising out of blur with a staggered delay.
const AnimatedWord = ({ word, startDelay = 0 }) => (
  <span className="inline-block">
    {word.split('').map((ch, i) => (
      <span key={i} className="animate-letter" style={{ animationDelay: `${startDelay + i * 0.04}s` }}>
        {ch}
      </span>
    ))}
  </span>
);

// Counts up from 0 to the target value when it mounts.
const Stat = ({ value, label, suffix = '', decimals = 0 }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf;
    const duration = 1600;
    let startTime = null;
    const tick = (now) => {
      if (startTime === null) startTime = now;
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div>
      <p className="text-3xl font-bold tabular-nums">
        {n.toFixed(decimals)}
        {suffix}
      </p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
};

const Divider = () => <div className="w-px h-12 bg-white/30" />;
