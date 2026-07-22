import { useEffect } from 'react';
import { Icon, PaymentIcon } from './Icons';
import { ProductSVGRenderer } from './ProductSVG';

export default function CartDrawer({ open, onClose, items, onQtyChange, onRemove }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 800 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const remainingForFree = Math.max(0, 800 - subtotal);
  const progressPct = Math.min(100, (subtotal / 800) * 100);

  return (
    <div className="fixed inset-0 z-50" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-black/50 animate-fade-in" />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto animate-slide-in-right">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
          <h2 className="text-xl font-serif font-bold">Shopping Cart ({items.length})</h2>
          <button onClick={onClose}>
            <Icon name="close" className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="cart" className="w-16 h-16 mx-auto text-ink-300 mb-4" />
              <p className="text-ink-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="w-24 h-32 bg-ink-100 rounded overflow-hidden flex-shrink-0">
                    {item.svgType ? (
                      <ProductSVGRenderer type={item.svgType} color={item.color || '#333333'} className="w-full h-full" />
                    ) : (
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-ink-500">{item.variant}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => onQtyChange(item.id, -1)}
                        className="w-7 h-7 border rounded flex items-center justify-center hover:bg-ink-100"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.qty}</span>
                      <button
                        onClick={() => onQtyChange(item.id, 1)}
                        className="w-7 h-7 border rounded flex items-center justify-center hover:bg-ink-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.price * item.qty}</p>
                    <button onClick={() => onRemove(item.id)} className="text-xs text-red-500 mt-8">
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {remainingForFree > 0 && (
                <div className="bg-brand-50 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    Add <span className="font-bold">${remainingForFree.toFixed(0)}</span> more for FREE shipping!
                  </p>
                  <div className="w-full bg-white rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm text-ink-500 mb-2 block">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 border rounded-lg px-3 py-2 text-sm"
                  />
                  <button className="bg-ink-900 text-white px-4 py-2 rounded-lg text-sm">Apply</button>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full btn-primary text-white py-4 rounded-lg font-medium">
                CHECKOUT NOW
              </button>
              <button onClick={onClose} className="w-full btn-secondary py-4 rounded-lg font-medium">
                Continue Shopping
              </button>

              <div className="flex justify-center items-center gap-2 pt-4 text-ink-400 flex-wrap">
                <span className="text-xs">We accept:</span>
                {['visa', 'mastercard', 'amex', 'paypal', 'applepay', 'googlepay'].map((pay) => (
                  <PaymentIcon key={pay} name={pay} className="h-8" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
