import { useState, useEffect } from 'react';
import { Icon, StarRating } from './Icons';
import { ProductSVGRenderer } from './ProductSVG';

function ColorPicker({ colors, selected, onSelect }) {
  const selectedColor = colors[selected];
  const colorName = selectedColor?.name || 'Selected';

  return (
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">
        Color: <span className="text-ink-500 font-normal">{colorName}</span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            title={color.name || color}
            className={`w-10 h-10 rounded-full transition hover:scale-110 relative ${
              selected === i ? 'ring-2 ring-brand-500 ring-offset-2' : 'ring-1 ring-ink-200'
            }`}
            style={{ backgroundColor: color.hex || color }}
          >
            {selected === i && (
              <span
                className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold"
                style={{ textShadow: '0 0 3px rgba(0,0,0,0.7)' }}
              >
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function SizePicker() {
  const [selected, setSelected] = useState('M');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">
        Size: <span className="text-ink-500 font-normal">{selected}</span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`w-12 h-12 border rounded-lg text-sm transition ${
              selected === size
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-ink-200 hover:border-ink-900'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuickView({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);

  // Reset color when product changes
  useEffect(() => {
    setSelectedColor(0);
  }, [product?.id]);

  if (!product) return null;

  // Get image based on selected color (if color has its own image) or fallback
  const currentColor = product.colors?.[selectedColor];
  const displayImage = currentColor?.image || product.image;

  const handleColorSelect = (i) => {
    if (product.colors[i]?.image) {
      setImageLoading(true);
      setTimeout(() => setImageLoading(false), 300);
    }
    setSelectedColor(i);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/50 animate-fade-in" />
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-ink-100 transition"
        >
          <Icon name="close" className="w-5 h-5" />
        </button>
        <div className="aspect-square md:aspect-auto bg-ink-100 relative overflow-hidden">
          {product.svgType ? (
            <div className="w-full h-full animate-fade-in" key={currentColor?.hex}>
              <ProductSVGRenderer
                type={product.svgType}
                color={currentColor?.hex || '#333333'}
                className="w-full h-full"
              />
            </div>
          ) : (
            <img
              key={displayImage}
              src={displayImage}
              className="w-full h-full object-cover transition-opacity duration-300 animate-fade-in"
              alt={product.name}
            />
          )}
          {currentColor?.name && (
            <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">
              {currentColor.name}
            </span>
          )}
        </div>
        <div className="p-8">
          <p className="text-xs text-brand-500 uppercase tracking-wider mb-2">{product.category}</p>
          <h2 className="text-3xl font-serif font-bold mb-3">{product.name}</h2>
          {product.rating && (
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} size="text-sm" />
              <span className="text-sm text-ink-500">({product.reviews} reviews)</span>
            </div>
          )}
          <div className="flex items-center gap-3 mb-6">
            <p className="text-3xl font-bold">${product.price}</p>
            {product.oldPrice && (
              <>
                <p className="text-xl text-ink-400 line-through">${product.oldPrice}</p>
                {product.discount && (
                  <span className="badge-sale text-white px-3 py-1 rounded-full text-sm">
                    -{product.discount}%
                  </span>
                )}
              </>
            )}
          </div>

          <p className="text-ink-500 mb-6 leading-relaxed">
            Premium quality with meticulous attention to detail. Crafted from sustainable materials
            with a timeless design that transitions effortlessly from day to night.
          </p>

          {product.colors && product.colors.length > 0 && (
            <ColorPicker
              colors={product.colors}
              selected={selectedColor}
              onSelect={handleColorSelect}
            />
          )}

          <SizePicker />

          <div className="flex gap-3 mb-4">
            <button
              onClick={() => {
                onAddToCart({ ...product, selectedColor: currentColor?.name });
                onClose();
              }}
              className="flex-1 btn-primary text-white py-4 rounded-lg font-medium"
            >
              ADD TO CART
            </button>
            <button className="w-14 h-14 border-2 border-ink-200 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition">
              <Icon name="heart" className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm text-ink-500">
            <p className="flex items-center gap-2"><Icon name="truck" className="w-4 h-4" /> Free shipping over $50</p>
            <p className="flex items-center gap-2"><Icon name="refresh" className="w-4 h-4" /> 30-day easy returns</p>
            <p className="flex items-center gap-2"><Icon name="shield" className="w-4 h-4" /> Secure checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
