export default function ArticlePage({ article, onBack, onNotify }) {
  if (!article) return null;

  const share = () => onNotify?.('Article link copied to clipboard!');

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 min-h-screen">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-ink-500 hover:text-brand-500 mb-6">
        <span className="text-lg leading-none">←</span> Back to Journal
      </button>

      <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
        <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs bg-brand-100 text-brand-700 px-3 py-1 rounded-full">{article.category}</span>
        <span className="text-xs text-ink-500">{article.readTime}</span>
        <span className="text-xs text-ink-500">· July 22, 2026</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{article.title}</h1>
      <p className="text-lg text-ink-500 mb-8 italic">{article.excerpt}</p>

      <div className="prose max-w-none space-y-4 text-ink-700 leading-relaxed">
        <p>
          Fashion is more than clothing — it's a form of self-expression that evolves with time, culture, and
          personal experience. In this article, we dive deep into the trends that are shaping the modern wardrobe.
        </p>
        <p>
          From sustainable fabrics to timeless silhouettes, discover how thoughtful design meets everyday
          functionality. Our editors have curated insights from leading designers, industry experts, and style icons.
        </p>
        <h3 className="text-xl font-serif font-bold mt-8">Key Takeaways</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Invest in versatile pieces that transition from day to night</li>
          <li>Choose quality over quantity for a sustainable wardrobe</li>
          <li>Mix textures and layers for dimensional style</li>
          <li>Accessories are the finishing touch that elevates any outfit</li>
          <li>Confidence is your best accessory</li>
        </ul>
        <p className="pt-4">
          Whether you're refreshing your seasonal wardrobe or building a capsule collection, these principles will
          guide you toward a more intentional and stylish future.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-ink-100 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/60?img=12" className="w-10 h-10 rounded-full" alt="Author" />
          <div>
            <p className="text-sm font-semibold">Emma Chen</p>
            <p className="text-xs text-ink-500">Senior Fashion Editor</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={share} className="px-5 py-2.5 border rounded-full text-sm hover:bg-ink-100 transition">
            Share
          </button>
          <button onClick={onBack} className="px-5 py-2.5 bg-ink-900 text-white rounded-full text-sm hover:bg-brand-500 transition">
            Read More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
