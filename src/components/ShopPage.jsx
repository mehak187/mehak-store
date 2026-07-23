import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { newArrivals } from '../data/products';

const categories = ['All', ...Array.from(new Set(newArrivals.map((p) => p.category)))];
const sorts = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: Low to High' },
  { key: 'price-desc', label: 'Price: High to Low' },
  { key: 'rating', label: 'Top Rated' },
];

export default function ShopPage({ onAddToCart, onQuickView, onWishlist, onOpenProduct, initialCategory = 'All' }) {
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All');
  const [sort, setSort] = useState('featured');

  const products = useMemo(() => {
    let list = category === 'All' ? [...newArrivals] : newArrivals.filter((p) => p.category === category);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return list;
  }, [category, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="text-center mb-10">
        <p className="text-brand-500 text-sm tracking-widest mb-3">EXPLORE THE COLLECTION</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Shop All Products</h1>
        <p className="text-ink-500 mt-3">{products.length} items</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition ${
                category === c ? 'bg-ink-900 text-white' : 'border border-ink-200 hover:bg-ink-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-ink-200 rounded-full px-4 py-2 text-sm bg-white cursor-pointer"
        >
          {sorts.map((s) => (
            <option key={s.key} value={s.key}>
              Sort: {s.label}
            </option>
          ))}
        </select>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-ink-500 py-20">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onWishlist={onWishlist}
              onOpenProduct={onOpenProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}
