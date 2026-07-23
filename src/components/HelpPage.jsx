import { useState } from 'react';

const faqs = [
  { q: 'How long does shipping take?', a: 'Standard shipping takes 3–5 business days. Express shipping (1–2 days) is available at checkout. Orders over $50 ship free worldwide.' },
  { q: 'What is your return policy?', a: 'We offer 30-day easy returns on all items. Products must be unworn with original tags. Refunds are processed within 5–7 business days of receiving the return.' },
  { q: 'How do I track my order?', a: 'Once your order ships, you will receive a tracking number by email. You can also use the Track Order page and enter your order number anytime.' },
  { q: 'Do you ship internationally?', a: 'Yes! We ship to 40+ countries. International delivery times vary from 7–14 business days depending on your location.' },
  { q: 'How do I choose the right size?', a: 'Each product page includes a detailed size guide. If you are between sizes, we generally recommend sizing up for a comfortable fit.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay — all through a secure, encrypted checkout.' },
];

const topics = [
  { icon: '📦', title: 'Orders & Shipping', desc: 'Delivery times, tracking, and order changes' },
  { icon: '↩️', title: 'Returns & Refunds', desc: '30-day returns and refund process' },
  { icon: '📏', title: 'Sizing & Fit', desc: 'Size guides and fit recommendations' },
  { icon: '💳', title: 'Payments', desc: 'Accepted methods and secure checkout' },
];

export default function HelpPage({ onNavigate, onNotify }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen">
      <div className="text-center mb-12">
        <p className="text-brand-500 text-sm tracking-widest mb-3">HELP CENTER</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">How can we help?</h1>
        <p className="text-ink-500 mt-3">Find answers to common questions, or reach out to our team.</p>
      </div>

      {/* Topics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {topics.map((t) => (
          <div key={t.title} className="bg-ink-50 rounded-xl p-5 text-center hover:shadow-md transition">
            <div className="text-3xl mb-3">{t.icon}</div>
            <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
            <p className="text-xs text-ink-500">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ accordion */}
      <h2 className="text-2xl font-serif font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-3 mb-14">
        {faqs.map((f, i) => (
          <div key={i} className="border border-ink-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex justify-between items-center gap-4 p-5 text-left hover:bg-ink-50 transition"
            >
              <span className="font-medium">{f.q}</span>
              <span className={`text-brand-500 text-xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-ink-500 leading-relaxed animate-fade-in">{f.a}</div>
            )}
          </div>
        ))}
      </div>

      {/* Still need help */}
      <div className="bg-ink-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-serif font-bold mb-2">Still need help?</h3>
        <p className="text-ink-300 mb-6">Our support team is here for you, Mon–Fri 9am–6pm EST.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => onNavigate('contact')} className="bg-white text-ink-900 px-6 py-3 rounded-full font-medium hover:bg-brand-500 hover:text-white transition">
            Contact Us
          </button>
          <button onClick={() => onNavigate('track')} className="border border-white/50 px-6 py-3 rounded-full font-medium hover:bg-white hover:text-ink-900 transition">
            Track My Order
          </button>
        </div>
      </div>
    </div>
  );
}
