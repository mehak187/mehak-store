import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { newArrivals } from '../data/products';
import { filterTabs } from '../data/categories';

const filterMap = {
  All: null,
  Women: ['Dresses', 'Handbags', 'Outerwear'],
  Men: ['Men'],
  Accessories: ['Handbags', 'Sunglasses', 'Watches'],
  Jewelry: ['Jewelry'],
  Shoes: ['Shoes'],
};

export default function NewArrivals({ onAddToCart, onQuickView, onWishlist, activeFilter, onFilterChange }) {
  const [visibleCount, setVisibleCount] = useState(8);

  const filtered = useMemo(() => {
    const cats = filterMap[activeFilter];
    if (!cats) return newArrivals;
    return newArrivals.filter((p) => cats.includes(p.category));
  }, [activeFilter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <section id="new-arrivals" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="text-brand-500 text-sm tracking-widest mb-3">JUST IN</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">New Arrivals</h2>
          </div>
          <button
            onClick={() => onFilterChange('All')}
            className="text-sm underline hover:text-brand-500"
          >
            View All →
          </button>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                onFilterChange(tab);
                setVisibleCount(8);
              }}
              className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition ${
                activeFilter === tab
                  ? 'bg-ink-900 text-white'
                  : 'border border-ink-200 hover:bg-ink-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-ink-500 mb-4">No products in this category yet.</p>
            <button
              onClick={() => onFilterChange('All')}
              className="btn-secondary px-6 py-3 rounded-full"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visible.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onWishlist={onWishlist}
              />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + 4)}
              className="btn-secondary px-8 py-4 rounded-full font-medium tracking-wide"
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
