const values = [
  { icon: '🌿', title: 'Sustainable', text: 'Ethically sourced materials and responsible production at every step.' },
  { icon: '✂️', title: 'Craftsmanship', text: 'Every piece is crafted with meticulous attention to detail and quality.' },
  { icon: '💎', title: 'Timeless', text: 'Designs that transcend trends and stay elegant season after season.' },
  { icon: '🤝', title: 'Customer First', text: 'Your satisfaction is at the heart of everything we create and do.' },
];

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Premium Products' },
  { value: '40+', label: 'Countries Shipped' },
  { value: '2018', label: 'Established' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[45vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&auto=format&fit=crop&q=80"
          alt="About LUXE"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/50 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-brand-300 text-sm tracking-widest mb-3">OUR STORY</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">About LUXE</h1>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Fashion with purpose, since 2018</h2>
        <p className="text-ink-500 leading-relaxed mb-4">
          LUXE was born from a simple belief: that great style should never come at the cost of the planet or the
          people who make it. We set out to build a fashion house that celebrates timeless design, honest
          craftsmanship, and conscious living.
        </p>
        <p className="text-ink-500 leading-relaxed">
          Today, we curate collections for the modern individual — pieces that are as thoughtful as they are
          beautiful. From sustainably sourced fabrics to fair production, every choice we make is guided by
          quality and care.
        </p>
      </div>

      {/* Values */}
      <div className="bg-ink-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-sm tracking-widest mb-3">WHAT WE STAND FOR</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-sm text-ink-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
