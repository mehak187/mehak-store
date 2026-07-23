import { scrollToSection } from '../utils/scroll';

export default function CollectionShowcase({ onFilterChange }) {
  const shopFilter = (filter) => {
    onFilterChange(filter);
    scrollToSection('new-arrivals');
  };

  return (
    <section id="collections" className="py-16 md:py-24 bg-ink-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm tracking-widest mb-3">CURATED</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Collections</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <BigCard
            onClick={() => shopFilter('All')}
            image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
            tag="FEATURED"
            title="The Everyday Edit"
            desc="Timeless essentials for the modern wardrobe"
            cta="Shop Now →"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-rows-2 md:h-full">
            <WideCard
              onClick={() => shopFilter('Women')}
              image="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
              tag="LIMITED EDITION"
              title="Evening Collection"
              desc="Statement pieces for special moments"
            />
            <WideCard
              onClick={() => shopFilter('Men')}
              image="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80"
              tag="JUST DROPPED"
              title="Men's Essentials"
              desc="Refined basics with elevated details"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const BigCard = ({ onClick, image, tag, title, desc, cta }) => (
  <button onClick={onClick} className="group relative aspect-[4/5] overflow-hidden rounded-2xl block text-left w-full">
    <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
      <p className="text-brand-300 text-sm tracking-widest mb-3">{tag}</p>
      <h3 className="text-4xl md:text-5xl font-serif font-bold mb-3">{title}</h3>
      <p className="mb-6 text-white/80">{desc}</p>
      <span className="inline-block bg-white text-ink-900 px-6 py-3 rounded-full font-medium group-hover:bg-brand-500 group-hover:text-white transition">
        {cta}
      </span>
    </div>
  </button>
);

const WideCard = ({ onClick, image, tag, title, desc }) => (
  <button onClick={onClick} className="group relative aspect-[16/9] md:aspect-auto md:h-full overflow-hidden rounded-2xl block text-left w-full">
    <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
      <p className="text-brand-300 text-sm tracking-widest mb-2">{tag}</p>
      <h3 className="text-3xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-white/80 mb-4">{desc}</p>
      <span className="inline-block w-fit bg-white/20 backdrop-blur border border-white/50 text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-ink-900 transition">
        Explore →
      </span>
    </div>
  </button>
);
