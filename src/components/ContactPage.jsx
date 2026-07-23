import { useState } from 'react';

export default function ContactPage({ onNotify }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      onNotify?.('Please fill in all fields.');
      return;
    }
    setSent(true);
    onNotify?.('Message sent! We will get back to you soon.');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-screen">
      <div className="text-center mb-12">
        <p className="text-brand-500 text-sm tracking-widest mb-3">GET IN TOUCH</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Contact Us</h1>
        <p className="text-ink-500 mt-3 max-w-xl mx-auto">
          Have a question, feedback, or just want to say hello? We would love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <InfoRow icon="📍" title="Visit Us" lines={['123 Fashion Avenue', 'New York, NY 10001']} />
          <InfoRow icon="✉️" title="Email Us" lines={['hello@luxe.com', 'support@luxe.com']} />
          <InfoRow icon="📞" title="Call Us" lines={['+1 (555) 123-4567', 'Mon–Fri, 9am–6pm EST']} />
          <div className="flex gap-3 pt-2">
            {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map((s) => (
              <button
                key={s}
                onClick={() => onNotify?.(`Follow us on ${s}!`)}
                className="px-4 py-2 border border-ink-200 rounded-full text-sm hover:bg-brand-500 hover:text-white hover:border-brand-500 transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-ink-50 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-pop text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">Thank you!</h3>
              <p className="text-ink-500">Your message has been sent. We will reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-ink-200 rounded-lg px-4 py-3 text-sm bg-white"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full border border-ink-200 rounded-lg px-4 py-3 text-sm bg-white"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                className="w-full border border-ink-200 rounded-lg px-4 py-3 text-sm bg-white resize-none"
              />
              <button type="submit" className="w-full btn-primary text-white py-3.5 rounded-lg font-medium">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const InfoRow = ({ icon, title, lines }) => (
  <div className="flex gap-4">
    <div className="text-2xl">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {lines.map((l) => (
        <p key={l} className="text-sm text-ink-500">{l}</p>
      ))}
    </div>
  </div>
);
