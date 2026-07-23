import { useState } from 'react';
import { Icon, StarRating } from './Icons';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export default function ProductDetailPage({ product, onAddToCart, onWishlist, onBack, onOpenProduct }) {
  const [colorIdx, setColorIdx] = useState(0);
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) return null;

  const color = product.colors?.[colorIdx];

  const addToCart = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart({ ...product, selectedColor: color?.name, color: color?.hex });
    }
  };

  const toggleWishlist = () => {
    setWishlisted((w) => !w);
    onWishlist?.(product, !wishlisted);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 min-h-screen">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-ink-500 hover:text-brand-500 mb-6">
        <span className="text-lg leading-none">←</span> Back to shop
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-ink-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-xs text-ink-500 uppercase tracking-wider">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mt-1 mb-3">{product.name}</h1>

          {product.rating && (
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-ink-500">({product.reviews} reviews)</span>
            </div>
          )}

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.oldPrice && (
              <>
                <span className="text-lg text-ink-400 line-through">${product.oldPrice}</span>
                {product.discount && (
                  <span className="text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">-{product.discount}%</span>
                )}
              </>
            )}
          </div>

          <p className="text-ink-500 leading-relaxed mb-6">
            Crafted from premium materials with meticulous attention to detail, the {product.name} blends timeless
            design with everyday comfort. A versatile piece that elevates any wardrobe.
          </p>

          {product.colors && (
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Color: <span className="text-ink-500">{color?.name}</span></p>
              <div className="flex gap-2">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setColorIdx(i)}
                    title={c.name}
                    className={`w-8 h-8 rounded-full transition hover:scale-110 ${
                      colorIdx === i ? 'ring-2 ring-ink-900 ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: c.hex, border: '1px solid #E5E5E5' }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-11 h-11 rounded-lg text-sm font-medium transition ${
                    size === s ? 'bg-ink-900 text-white' : 'border border-ink-200 hover:border-ink-900'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-ink-200 rounded-lg">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-11 h-11 hover:bg-ink-100 rounded-l-lg">−</button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-11 h-11 hover:bg-ink-100 rounded-r-lg">+</button>
            </div>
            <button onClick={addToCart} className="flex-1 btn-primary text-white py-3 rounded-lg font-medium">
              Add to Cart · ${(product.price * qty).toFixed(0)}
            </button>
            <button
              onClick={toggleWishlist}
              className={`w-12 h-12 rounded-lg border flex items-center justify-center transition ${
                wishlisted ? 'bg-red-500 text-white border-red-500' : 'border-ink-200 hover:border-red-500 hover:text-red-500'
              }`}
              aria-label="Wishlist"
            >
              <Icon name="heart" className="w-5 h-5" />
            </button>
          </div>

          <ul className="text-sm text-ink-500 space-y-2 border-t border-ink-100 pt-6">
            <li className="flex items-center gap-2">✓ Free shipping on orders over $50</li>
            <li className="flex items-center gap-2">✓ 30-day easy returns</li>
            <li className="flex items-center gap-2">✓ Secure checkout · 100% authentic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
