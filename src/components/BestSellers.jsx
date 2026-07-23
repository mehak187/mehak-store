import { useState } from 'react';
import { bestSellers } from '../data/products';
import { ProductSVGRenderer } from './ProductSVG';

export default function BestSellers({ onQuickView, onAddToCart, onOpenProduct }) {
  return (
    <section id="best-sellers" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm tracking-widest mb-3">CUSTOMER FAVORITES</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Best Sellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <BestSellerCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onOpenProduct={onOpenProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellerCard({ product, onQuickView, onAddToCart, onOpenProduct }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedColor = product.colors?.[selectedIdx];

  return (
    <div
      onClick={() => (onOpenProduct ? onOpenProduct(product) : onQuickView(product))}
      className="product-card group cursor-pointer"
    >
      <div className="product-media relative aspect-[3/4] overflow-hidden bg-ink-100 rounded-lg mb-4">
        {product.svgType ? (
          <div className="w-full h-full product-img transition-transform duration-700">
            <ProductSVGRenderer
              type={product.svgType}
              color={selectedColor?.hex || '#333333'}
              className="w-full h-full"
            />
          </div>
        ) : (
          <img
            src={product.image}
            className="product-img w-full h-full object-cover transition-transform duration-700"
            alt={product.name}
          />
        )}
        <span className="absolute top-3 left-3 bg-ink-900 text-white text-xs px-3 py-1 rounded-full z-10">
          #{product.rank} BESTSELLER
        </span>
        <div className="quick-actions absolute bottom-3 left-3 right-3 opacity-0 transform translate-y-4 transition duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart({ ...product, selectedColor: selectedColor?.name });
            }}
            className="w-full bg-ink-900 text-white text-sm py-2.5 rounded-lg hover:bg-brand-500 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <p className="text-xs text-ink-500 uppercase tracking-wider">{product.category}</p>
      <h3 className="font-medium mt-1 group-hover:text-brand-500 transition">{product.name}</h3>
      <p className="font-semibold mt-2">${product.price}</p>
      {product.colors && (
        <div className="flex gap-1.5 mt-2" onClick={(e) => e.stopPropagation()}>
          {product.colors.slice(0, 5).map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedIdx(i)}
              title={color.name || color}
              className={`w-4 h-4 rounded-full cursor-pointer hover:scale-125 transition ${
                selectedIdx === i ? 'ring-2 ring-ink-900 ring-offset-1' : ''
              }`}
              style={{
                backgroundColor: color.hex || color,
                border: '1px solid #E5E5E5',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
