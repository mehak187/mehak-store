import { useState } from 'react';

const steps = [
  { key: 'ordered', label: 'Order Placed', desc: 'We received your order', icon: '📝' },
  { key: 'processing', label: 'Processing', desc: 'Preparing your items', icon: '📦' },
  { key: 'shipped', label: 'Shipped', desc: 'On the way to you', icon: '🚚' },
  { key: 'delivered', label: 'Delivered', desc: 'Enjoy your order!', icon: '🏠' },
];

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [result, setResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    // Demo: current status = "Shipped" (3rd step)
    setResult({ id: orderId.trim().toUpperCase(), currentStep: 2, eta: 'Tomorrow, by 8 PM' });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
      <div className="text-center mb-10">
        <p className="text-brand-500 text-sm tracking-widest mb-3">ORDER STATUS</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Track Your Order</h1>
        <p className="text-ink-500 mt-3">Enter your order number to see where your package is.</p>
      </div>

      <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 mb-12 max-w-xl mx-auto">
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order number (e.g. LX10248)"
          className="flex-1 border border-ink-200 rounded-lg px-4 py-3 text-sm"
        />
        <button type="submit" className="btn-primary text-white px-8 py-3 rounded-lg font-medium">
          Track Order
        </button>
      </form>

      {result && (
        <div className="bg-ink-50 rounded-2xl p-6 md:p-8 animate-slide-up">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-8 pb-6 border-b border-ink-200">
            <div>
              <p className="text-sm text-ink-500">Order</p>
              <p className="font-bold text-lg">#{result.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-ink-500">Estimated delivery</p>
              <p className="font-bold text-lg text-brand-600">{result.eta}</p>
            </div>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => {
              const done = i <= result.currentStep;
              const active = i === result.currentStep;
              return (
                <div key={step.key} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition ${
                        done ? 'bg-brand-500 text-white' : 'bg-ink-200 text-ink-400'
                      } ${active ? 'ring-4 ring-brand-200' : ''}`}
                    >
                      {done ? step.icon : '○'}
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`w-0.5 flex-1 min-h-[36px] ${i < result.currentStep ? 'bg-brand-500' : 'bg-ink-200'}`} />
                    )}
                  </div>
                  <div className={`pb-8 ${done ? '' : 'opacity-50'}`}>
                    <p className="font-semibold">{step.label}</p>
                    <p className="text-sm text-ink-500">{step.desc}</p>
                    {active && <p className="text-xs text-brand-600 font-medium mt-1">● In progress</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
