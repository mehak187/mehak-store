import { Icon } from './Icons';

const features = [
  { icon: 'truck', title: 'Free Shipping', desc: 'On orders over $50' },
  { icon: 'shield', title: 'Secure Payment', desc: '100% secure checkout' },
  { icon: 'refresh', title: 'Easy Returns', desc: '30-day return policy' },
  { icon: 'support', title: '24/7 Support', desc: 'Dedicated customer care' },
];

export default function BrandFeatures() {
  return (
    <section className="py-8 border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name={f.icon} className="w-6 h-6 text-brand-500" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{f.title}</h3>
              <p className="text-xs text-ink-500">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
