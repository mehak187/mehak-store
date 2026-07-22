import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920"
          className="w-full h-full object-cover"
          alt="Newsletter"
        />
        <div className="absolute inset-0 bg-ink-900/80" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
        <p className="text-brand-300 text-sm tracking-widest mb-3">JOIN THE CLUB</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get 20% Off Your First Order</h2>
        <p className="text-white/80 mb-8 text-lg">
          Sign up for exclusive offers, style inspiration, and early access to new collections.
          Plus, get a special welcome discount!
        </p>
        {subscribed ? (
          <div className="bg-green-500 text-white px-6 py-4 rounded-full inline-block">
            ✓ Successfully subscribed! Check your inbox for the discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-ink-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-medium transition"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-white/60 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
