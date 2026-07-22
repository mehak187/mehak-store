import { Icon } from './Icons';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/60 animate-fade-in" />
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-ink-100 transition shadow-lg"
        >
          <Icon name="close" className="w-5 h-5" />
        </button>
        <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
        </div>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-brand-100 text-brand-700 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-ink-500">{article.readTime}</span>
            <span className="text-xs text-ink-500">· July 22, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{article.title}</h1>
          <p className="text-lg text-ink-500 mb-6 italic">{article.excerpt}</p>
          <div className="prose max-w-none space-y-4 text-ink-700">
            <p>
              Fashion is more than clothing — it's a form of self-expression that evolves with time,
              culture, and personal experience. In this article, we dive deep into the trends that are
              shaping the modern wardrobe.
            </p>
            <p>
              From sustainable fabrics to timeless silhouettes, discover how thoughtful design meets
              everyday functionality. Our editors have curated insights from leading designers,
              industry experts, and style icons.
            </p>
            <h3 className="text-xl font-serif font-bold mt-6">Key Takeaways</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Invest in versatile pieces that transition from day to night</li>
              <li>Choose quality over quantity for a sustainable wardrobe</li>
              <li>Mix textures and layers for dimensional style</li>
              <li>Accessories are the finishing touch that elevates any outfit</li>
              <li>Confidence is your best accessory</li>
            </ul>
            <p className="pt-4">
              Whether you're refreshing your seasonal wardrobe or building a capsule collection,
              these principles will guide you toward a more intentional and stylish future.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/60?img=12" className="w-10 h-10 rounded-full" alt="Author" />
              <div>
                <p className="text-sm font-semibold">Emma Chen</p>
                <p className="text-xs text-ink-500">Senior Fashion Editor</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-full text-sm hover:bg-ink-100 transition">
                Share
              </button>
              <button className="px-4 py-2 bg-ink-900 text-white rounded-full text-sm hover:bg-brand-500 transition">
                Read More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
