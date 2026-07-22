import { useState } from 'react';
import { Icon, StarRating } from './Icons';
import { ProductSVGRenderer } from './ProductSVG';

export default function ProductCard({ product, onAddToCart, onQuickView, onWishlist }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);

  const badgeClass = product.badge
    ? product.badge.type === 'new'
      ? 'badge-new'
      : product.badge.type === 'sale'
      ? 'badge-sale'
      : 'badge-hot'
    : '';

  const selectedColor = product.colors?.[selectedColorIdx];

  const handleWishlist = (e) => {
    e.stopPropagation();
    setWishlisted((w) => !w);
    onWishlist?.(product, !wishlisted);
  };

  const handleColorClick = (e, i) => {
    e.stopPropagation();
    setSelectedColorIdx(i);
  };

  return (
    <div
      className="product-card group cursor-pointer"
      onClick={() => onQuickView(product)}
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
        {product.badge && (
          <span className={`absolute top-3 left-3 ${badgeClass} text-white text-xs px-3 py-1 rounded-full z-10`}>
            {product.badge.text}
          </span>
        )}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition z-10 ${
            wishlisted ? 'bg-red-500 text-white' : 'bg-white hover:bg-red-500 hover:text-white'
          }`}
        >
          <Icon name="heart" className="w-4 h-4" />
        </button>
        <div className="quick-actions absolute bottom-3 left-3 right-3 opacity-0 transform translate-y-4 transition duration-300 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart({ ...product, selectedColor: selectedColor?.name, color: selectedColor?.hex });
            }}
            className="flex-1 bg-ink-900 text-white text-sm py-2.5 rounded-lg hover:bg-brand-500 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition"
          >
            <Icon name="eye" className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs text-ink-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="font-medium mt-1">
          <span className="link-underline inline">{product.name}</span>
        </h3>
        {product.rating && (
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={product.rating} />
            <span className="text-xs text-ink-500">({product.reviews})</span>
          </div>
        )}
        <div className="flex items-center gap-2 mt-2">
          <p className="font-semibold">${product.price}</p>
          {product.oldPrice && (
            <>
              <p className="text-sm text-ink-400 line-through">${product.oldPrice}</p>
              {product.discount && (
                <span className="text-xs text-red-500 font-medium">-{product.discount}%</span>
              )}
            </>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="mt-3">
            <div className="flex gap-1.5 items-center">
              {product.colors.slice(0, 6).map((color, i) => (
                <button
                  key={i}
                  onClick={(e) => handleColorClick(e, i)}
                  title={color.name || color}
                  className={`w-5 h-5 rounded-full transition hover:scale-125 ${
                    selectedColorIdx === i ? 'ring-2 ring-ink-900 ring-offset-1' : ''
                  }`}
                  style={{
                    backgroundColor: color.hex || color,
                    border: '1px solid #E5E5E5',
                  }}
                />
              ))}
              {product.colors.length > 6 && (
                <span className="text-xs text-ink-500 ml-1">+{product.colors.length - 6}</span>
              )}
            </div>
            {selectedColor?.name && (
              <p className="text-[11px] text-ink-500 mt-1.5 font-medium">{selectedColor.name}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
