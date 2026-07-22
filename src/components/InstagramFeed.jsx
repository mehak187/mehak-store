import { SocialIcon } from './Icons';

const feedImages = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500',
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-16 md:py-24 bg-ink-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm tracking-widest mb-3">FOLLOW US</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl font-serif font-bold mb-4 inline-block hover:text-brand-500 transition"
          >
            @luxe.official
          </a>
          <p className="text-ink-500">Tag us in your photos for a chance to be featured</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {feedImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-ink-100"
            >
              <img
                src={src}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                alt="Instagram post"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <SocialIcon name="instagram" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
