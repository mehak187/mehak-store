import { Icon } from './Icons';

export default function WishlistPage({ items, onRemove, onAddToCart, onOpenProduct, onShop }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 min-h-screen">
      <div className="text-center mb-10">
        <p className="text-brand-500 text-sm tracking-widest mb-3">SAVED FOR LATER</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">My Wishlist</h1>
        <p className="text-ink-500 mt-3">{items.length} item{items.length === 1 ? '' : 's'} saved</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <Icon name="heart" className="w-16 h-16 mx-auto text-ink-300 mb-4" />
          <p className="text-ink-500 mb-6">Your wishlist is empty. Start saving your favourites!</p>
          <button onClick={() => onShop('All')} className="btn-primary text-white px-8 py-3 rounded-full font-medium">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-100 rounded-lg mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => onOpenProduct(product)}
                  className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition duration-500"
                />
                <button
                  onClick={() => onRemove(product.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-red-500 hover:text-white transition shadow"
                  aria-label="Remove"
                >
                  <Icon name="close" className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-ink-500 uppercase tracking-wider">{product.category}</p>
              <h3 className="font-medium mt-1">{product.name}</h3>
              <p className="font-semibold mt-1 mb-3">${product.price}</p>
              <button
                onClick={() => onAddToCart({ ...product, color: product.colors?.[0]?.hex })}
                className="w-full btn-primary text-white py-2.5 rounded-lg text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
