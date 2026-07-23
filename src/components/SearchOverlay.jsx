import { useState, useMemo, useEffect } from 'react';
import { Icon } from './Icons';
import { newArrivals, bestSellers } from '../data/products';
import { ProductSVGRenderer } from './ProductSVG';

const allProducts = [...newArrivals, ...bestSellers];
const popularSearches = ['Summer Dresses', 'Linen Shirts', 'Silk Scarves', 'Gold Jewelry', 'Leather Bags', 'Perfumes'];

export default function SearchOverlay({ open, onClose, onQuickView }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allProducts.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  const trending = allProducts.slice(0, 4);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  const handleClick = (product) => {
    onClose();
    setTimeout(() => onQuickView(product), 200);
  };

  const handlePopular = (term) => {
    setQuery(term);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-w-4xl mx-auto pt-24 px-6 pb-16">
        <div className="flex items-center gap-4 border-b-2 border-ink-900 pb-4">
          <Icon name="search" className="w-6 h-6" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, categories..."
            className="flex-1 text-2xl bg-transparent border-none focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-sm text-ink-500 hover:text-ink-900">
              Clear
            </button>
          )}
          <button onClick={onClose}>
            <Icon name="close" className="w-6 h-6" />
          </button>
        </div>

        {query.trim() && (
          <p className="text-sm text-ink-500 mt-4">
            {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
          </p>
        )}

        {!query.trim() && (
          <div className="mt-8">
            <p className="text-sm text-ink-500 mb-4">POPULAR SEARCHES</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => handlePopular(s)}
                  className="px-4 py-2 bg-ink-100 rounded-full text-sm hover:bg-brand-500 hover:text-white transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          {!query.trim() && (
            <p className="text-sm text-ink-500 mb-4">TRENDING PRODUCTS</p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(query.trim() ? results : trending).map((p) => (
              <button
                key={p.id}
                onClick={() => handleClick(p)}
                className="group text-left"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-ink-100">
                  {p.svgType ? (
                    <ProductSVGRenderer type={p.svgType} color={p.colors?.[0]?.hex || '#333'} className="w-full h-full group-hover:scale-105 transition" />
                  ) : (
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition" alt={p.name} />
                  )}
                </div>
                <p className="mt-2 text-sm group-hover:text-brand-500 transition">{p.name}</p>
                <p className="text-sm font-semibold">${p.price}</p>
              </button>
            ))}
          </div>
          {query.trim() && results.length === 0 && (
            <div className="text-center py-16">
              <p className="text-ink-500 mb-4">No results found for "{query}"</p>
              <button
                onClick={() => setQuery('')}
                className="text-brand-500 hover:underline"
              >
                Try a different search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
