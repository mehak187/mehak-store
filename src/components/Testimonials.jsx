import { StarRating } from './Icons';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm tracking-widest mb-3">HAPPY CUSTOMERS</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Community Says</h2>
          <div className="flex justify-center items-center gap-2">
            <StarRating rating={5} size="text-2xl" />
            <span className="font-semibold">4.9</span>
            <span className="text-ink-500 text-sm">(2,847 reviews)</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-ink-50 p-6 rounded-2xl">
              <StarRating rating={t.rating} size="text-sm" />
              <p className="text-ink-700 my-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} className="w-12 h-12 rounded-full" alt={t.name} />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-ink-500">Verified Buyer · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
