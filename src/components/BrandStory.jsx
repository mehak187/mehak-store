export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand-500 text-sm tracking-widest mb-3">OUR STORY</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Crafted with Purpose,<br />Designed for Life
          </h2>
          <p className="text-ink-500 mb-4 leading-relaxed">
            Since 2018, LUXE has been dedicated to creating timeless pieces that celebrate individual style.
            We believe fashion should be sustainable, ethical, and effortlessly elegant.
          </p>
          <p className="text-ink-500 mb-6 leading-relaxed">
            Every piece in our collection is thoughtfully designed and crafted by skilled artisans using
            premium, responsibly-sourced materials.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Stat number="10K+" label="Global Customers" />
            <Stat number="50+" label="Countries Served" />
            <Stat number="100%" label="Ethical Production" />
          </div>
          <button
            onClick={() => alert('Full story page coming soon!')}
            className="btn-secondary px-6 py-3 rounded-full font-medium"
          >
            READ OUR STORY →
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800"
            className="rounded-2xl shadow-2xl"
            alt="Story"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
            <p className="text-4xl font-serif font-bold text-brand-500 mb-2">"</p>
            <p className="text-sm italic text-ink-700 mb-3">
              Timeless design meets modern craftsmanship in every piece.
            </p>
            <p className="text-xs text-ink-500 font-medium">— Vogue Magazine</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Stat = ({ number, label }) => (
  <div>
    <p className="text-3xl font-serif font-bold text-brand-500">{number}</p>
    <p className="text-sm text-ink-500">{label}</p>
  </div>
);
