import { Icon } from './Icons';

const items = [
  {
    icon: 'arrowRight',
    title: 'Free Worldwide Shipping',
    desc: 'Complimentary shipping on all orders over $50 to any destination worldwide',
  },
  {
    icon: 'shield',
    title: 'Lifetime Warranty',
    desc: 'All jewelry pieces come with our lifetime craftsmanship warranty for your peace of mind',
  },
  {
    icon: 'star',
    title: 'Sustainable Materials',
    desc: 'Ethically sourced fabrics and recycled packaging for a better planet',
  },
];

export default function PromoBanner() {
  return (
    <section className="py-16 bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-brand-500 rounded-full flex items-center justify-center">
              <Icon name={item.icon} className="w-8 h-8 text-brand-500" />
            </div>
            <h3 className="text-xl font-serif mb-2">{item.title}</h3>
            <p className="text-ink-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
