import { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';
import Notification from './components/Notification';
import Hero from './components/Hero';
import BrandFeatures from './components/BrandFeatures';
import Categories from './components/Categories';
import FlashSale from './components/FlashSale';
import NewArrivals from './components/NewArrivals';
import CollectionShowcase from './components/CollectionShowcase';
import BestSellers from './components/BestSellers';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import BrandStory from './components/BrandStory';
import BlogPreview from './components/BlogPreview';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import QuickView from './components/QuickView';
import ArticleModal from './components/ArticleModal';
import Reveal from './components/Reveal';
import { cartInitialItems } from './data/products';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [cartItems, setCartItems] = useState(cartInitialItems);
  const [wishlistCount, setWishlistCount] = useState(5);
  const [activeFilter, setActiveFilter] = useState('All');
  const [notification, setNotification] = useState({ show: false, message: '' });

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 2500);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          variant: `Category: ${product.category}`,
          price: product.price,
          qty: 1,
          image: product.image,
        },
      ];
    });
    showNotification(`${product.name} added to cart!`);
  };

  const handleWishlist = (product, added) => {
    setWishlistCount((c) => c + (added ? 1 : -1));
    showNotification(added ? `${product.name} added to wishlist!` : `${product.name} removed from wishlist`);
  };

  const handleQtyChange = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showNotification('Item removed from cart');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        onMenuOpen={() => setMobileMenuOpen(true)}
        onFilterChange={setActiveFilter}
        onNotify={showNotification}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onFilterChange={setActiveFilter}
        onNotify={showNotification}
      />
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onQuickView={setQuickViewProduct}
      />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
      />
      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
      <Notification show={notification.show} message={notification.message} />

      <main>
        <Hero onFilterChange={setActiveFilter} />
        <Reveal><BrandFeatures /></Reveal>
        <Reveal><Categories onFilterChange={setActiveFilter} /></Reveal>
        <Reveal><FlashSale onFilterChange={setActiveFilter} /></Reveal>
        <Reveal>
          <NewArrivals
            onAddToCart={handleAddToCart}
            onQuickView={setQuickViewProduct}
            onWishlist={handleWishlist}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </Reveal>
        <Reveal><CollectionShowcase onFilterChange={setActiveFilter} /></Reveal>
        <Reveal>
          <BestSellers
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
          />
        </Reveal>
        <Reveal><PromoBanner /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><InstagramFeed /></Reveal>
        <Reveal><BrandStory /></Reveal>
        <Reveal><BlogPreview onArticleOpen={setActiveArticle} /></Reveal>
        <Reveal><Newsletter /></Reveal>
      </main>

      <Footer onFilterChange={setActiveFilter} onNotify={showNotification} />
      <WhatsappButton />
    </div>
  );
}
