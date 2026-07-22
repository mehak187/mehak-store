import { scrollToSection } from '../utils/scroll';

const categoryData = [
  {
    name: 'Dresses',
    count: 124,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500',
    filter: 'Women',
  },
  {
    name: 'Handbags',
    count: 89,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
    filter: 'Accessories',
  },
  {
    name: 'Shoes',
    count: 156,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    filter: 'Shoes',
  },
  {
    name: 'Outerwear',
    count: 67,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
    filter: 'Women',
  },
  {
    name: 'Watches',
    count: 42,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    filter: 'Accessories',
  },
  {
    name: 'Jewelry',
    count: 98,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500',
    filter: 'Jewelry',
  },
];

export default function Categories({ onFilterChange }) {
  const handleClick = (cat) => {
    onFilterChange(cat.filter);
    scrollToSection('new-arrivals');
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm tracking-widest mb-3">EXPLORE</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop by Category</h2>
          <p className="text-ink-500 max-w-2xl mx-auto">
            Curated collections for every style, occasion, and personality
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categoryData.map((cat) => (
            <button key={cat.name} onClick={() => handleClick(cat)} className="group text-center">
              <div className="aspect-square rounded-full overflow-hidden mb-3 relative bg-ink-100 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/20 transition" />
              </div>
              <h3 className="font-medium group-hover:text-brand-500 transition">{cat.name}</h3>
              <p className="text-xs text-ink-500">{cat.count} items</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
