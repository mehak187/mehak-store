import { blogPosts } from '../data/testimonials';

export default function BlogPreview({ onArticleOpen }) {
  return (
    <section id="journal" className="py-16 md:py-24 bg-ink-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm tracking-widest mb-3">JOURNAL</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Style Inspiration</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onArticleOpen(post)}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt={post.title}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-brand-100 text-brand-700 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-ink-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-brand-500 transition">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-500 mb-3">{post.excerpt}</p>
                <span className="text-sm font-medium group-hover:text-brand-500 transition">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
