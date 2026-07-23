import { useEffect, useState } from 'react';

export default function Checkout({ open, onClose, items, onPaid }) {
  const [step, setStep] = useState('form'); // 'form' | 'processing' | 'success'
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});

  // Lock the background scroll while checkout is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  // Reset to a clean form each time it opens.
  useEffect(() => {
    if (open) {
      setStep('form');
      setErrors({});
    }
  }, [open]);

  if (!open) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 800 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const cardBrand = getCardBrand(card);

  const handleCardChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = digits.replace(/(.{4})/g, '$1 ').trim();
    setCard(formatted);
  };

  const handleExpiryChange = (e) => {
    let digits = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) digits = digits.slice(0, 2) + '/' + digits.slice(2);
    setExpiry(digits);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value.replace(/\D/g, '').slice(0, 4));
  };

  const validate = () => {
    const err = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) err.email = 'Enter a valid email';
    if (name.trim().length < 2) err.name = 'Enter your name';
    if (address.trim().length < 4) err.address = 'Enter your address';
    if (city.trim().length < 2) err.city = 'Enter your city';
    if (zip.trim().length < 3) err.zip = 'Enter ZIP / postal code';
    if (card.replace(/\s/g, '').length < 16) err.card = 'Enter a valid 16-digit card number';
    if (!/^\d{2}\/\d{2}$/.test(expiry)) err.expiry = 'MM/YY';
    if (cvc.length < 3) err.cvc = 'CVC';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStep('processing');
    // Simulate Stripe payment processing.
    setTimeout(() => setStep('success'), 2200);
  };

  const handleDone = () => {
    onPaid?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-ink-900/60 backdrop-blur-sm flex items-start md:items-center justify-center overflow-y-auto py-6 px-4 animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {step === 'success' ? (
          <SuccessView email={email} total={total} onDone={handleDone} />
        ) : (
          <div className="grid md:grid-cols-2">
            {/* ---- Left: form ---- */}
            <form onSubmit={handlePay} className="p-6 md:p-8 order-2 md:order-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold">Checkout</h2>
                <button type="button" onClick={onClose} aria-label="Close" className="text-ink-400 hover:text-ink-900 text-2xl leading-none">
                  &times;
                </button>
              </div>

              <SectionLabel>Contact</SectionLabel>
              <Field
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                type="email"
              />

              <SectionLabel className="mt-6">Shipping</SectionLabel>
              <Field placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
              <Field placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} error={errors.address} />
              <div className="grid grid-cols-2 gap-3">
                <Field placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} error={errors.city} />
                <Field placeholder="ZIP code" value={zip} onChange={(e) => setZip(e.target.value)} error={errors.zip} />
              </div>

              <SectionLabel className="mt-6">Payment</SectionLabel>
              <div className="relative">
                <Field
                  placeholder="1234 1234 1234 1234"
                  value={card}
                  onChange={handleCardChange}
                  error={errors.card}
                  inputMode="numeric"
                />
                <span className="absolute right-3 top-3 text-xs font-bold text-ink-400">{cardBrand}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field placeholder="MM / YY" value={expiry} onChange={handleExpiryChange} error={errors.expiry} inputMode="numeric" />
                <Field placeholder="CVC" value={cvc} onChange={handleCvcChange} error={errors.cvc} inputMode="numeric" />
              </div>

              <button
                type="submit"
                disabled={step === 'processing'}
                className="w-full btn-primary text-white py-4 rounded-lg font-semibold mt-6 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {step === 'processing' ? (
                  <>
                    <Spinner /> Processing…
                  </>
                ) : (
                  <>
                    <LockIcon /> Pay ${total.toFixed(2)}
                  </>
                )}
              </button>

              <p className="text-center text-xs text-ink-400 mt-4 flex items-center justify-center gap-1">
                <LockIcon className="w-3 h-3" /> Payments are secure and encrypted
              </p>
            </form>

            {/* ---- Right: order summary ---- */}
            <div className="bg-ink-50 p-6 md:p-8 order-1 md:order-2 border-b md:border-b-0 md:border-l border-ink-100">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-14 rounded bg-ink-100 overflow-hidden flex-shrink-0">
                      {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-ink-500">Qty {item.qty}</p>
                    </div>
                    <p className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 mt-5 pt-4 border-t border-ink-200 text-sm">
                <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
                <Row label="Shipping" value={shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`} valueClass={shipping === 0 ? 'text-green-600' : ''} />
                <Row label="Tax (8%)" value={`$${tax.toFixed(2)}`} />
                <div className="flex justify-between text-lg font-bold pt-3 border-t border-ink-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessView({ email, total, onDone }) {
  const orderNo = 'LX' + String(Math.floor(total * 100) + 10248);
  return (
    <div className="p-10 md:p-16 text-center">
      <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pop">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path className="check-path" d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h2 className="text-3xl font-serif font-bold mb-2">Payment Successful!</h2>
      <p className="text-ink-500 mb-1">Thank you for your order.</p>
      <p className="text-ink-500 mb-6 text-sm">
        Order <span className="font-semibold text-ink-900">#{orderNo}</span> · Total <span className="font-semibold text-ink-900">${total.toFixed(2)}</span>
      </p>
      {email && <p className="text-xs text-ink-400 mb-8">A confirmation has been sent to {email}</p>}
      <button onClick={onDone} className="btn-primary text-white px-8 py-3 rounded-lg font-medium">
        Continue Shopping
      </button>
    </div>
  );
}

const SectionLabel = ({ children, className = '' }) => (
  <p className={`text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2 ${className}`}>{children}</p>
);

const Field = ({ error, ...props }) => (
  <div className="mb-3">
    <input
      {...props}
      className={`w-full border rounded-lg px-3 py-3 text-sm transition focus:ring-2 focus:ring-brand-300 ${
        error ? 'border-red-400' : 'border-ink-200'
      }`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const Row = ({ label, value, valueClass = '' }) => (
  <div className="flex justify-between">
    <span className="text-ink-500">{label}</span>
    <span className={valueClass}>{value}</span>
  </div>
);

const LockIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
  </svg>
);

function getCardBrand(card) {
  const n = card.replace(/\s/g, '');
  if (/^4/.test(n)) return 'VISA';
  if (/^5[1-5]/.test(n)) return 'MASTERCARD';
  if (/^3[47]/.test(n)) return 'AMEX';
  if (/^6/.test(n)) return 'DISCOVER';
  return '';
}
