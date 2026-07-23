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
import ArticlePage from './components/ArticlePage';
import Reveal from './components/Reveal';
import MarqueeRibbon from './components/MarqueeRibbon';
import ScrollProgress from './components/ScrollProgress';
import Checkout from './components/Checkout';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProductDetailPage from './components/ProductDetailPage';
import TrackOrderPage from './components/TrackOrderPage';
import HelpPage from './components/HelpPage';
import AccountPage from './components/AccountPage';
import AuthPage from './components/AuthPage';
import WishlistPage from './components/WishlistPage';
import { cartInitialItems, newArrivals } from './data/products';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [cartItems, setCartItems] = useState(cartInitialItems);
  const [wishlist, setWishlist] = useState(() => newArrivals.slice(0, 5));
  const [activeFilter, setActiveFilter] = useState('All');
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [page, setPage] = useState('home');
  const [shopCategory, setShopCategory] = useState('All');
  const [detailProduct, setDetailProduct] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const navigate = (name) => {
    setPage(name);
    window.scrollTo(0, 0);
  };
  const openShop = (category = 'All') => {
    setShopCategory(category);
    navigate('shop');
  };
  const openProduct = (product) => {
    setDetailProduct(product);
    navigate('product');
  };
  const openArticle = (article) => {
    setActiveArticle(article);
    navigate('article');
  };
  const handleLogin = (name) => {
    setLoggedIn(true);
    setUserName(name || 'Mehak');
    navigate('account');
    showNotification(`Welcome, ${name || 'Mehak'}!`);
  };
  const handleSignOut = () => {
    setLoggedIn(false);
    setUserName('');
    navigate('login');
    showNotification('You have been signed out successfully.');
  };

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
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (added && !exists) return [...prev, product];
      if (!added) return prev.filter((p) => p.id !== product.id);
      return prev;
    });
    showNotification(added ? `${product.name} added to wishlist!` : `${product.name} removed from wishlist`);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
    showNotification('Removed from wishlist');
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

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handlePaid = () => {
    setCartItems([]);
    showNotification('Payment successful — thank you for your order!');
  };

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnnouncementBar />
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onWishlistOpen={() => navigate('wishlist')}
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        onMenuOpen={() => setMobileMenuOpen(true)}
        onNavigate={navigate}
        onShop={openShop}
        onNotify={showNotification}
        page={page}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onFilterChange={setActiveFilter}
        onNotify={showNotification}
        onNavigate={navigate}
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
        onCheckout={handleCheckout}
      />
      <Checkout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onPaid={handlePaid}
      />
      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
      <Notification show={notification.show} message={notification.message} />

      <div key={page} className="page-enter">
      {page === 'home' && (
        <main>
          <Hero onFilterChange={setActiveFilter} />
          <MarqueeRibbon />
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
              onOpenProduct={openProduct}
            />
          </Reveal>
          <Reveal><CollectionShowcase onFilterChange={setActiveFilter} /></Reveal>
          <Reveal>
            <BestSellers
              onQuickView={setQuickViewProduct}
              onAddToCart={handleAddToCart}
              onOpenProduct={openProduct}
            />
          </Reveal>
          <Reveal><PromoBanner /></Reveal>
          <Reveal><Testimonials /></Reveal>
          <Reveal><InstagramFeed /></Reveal>
          <Reveal><BrandStory onNavigate={navigate} /></Reveal>
          <Reveal><BlogPreview onArticleOpen={openArticle} /></Reveal>
          <Reveal><Newsletter /></Reveal>
        </main>
      )}

      {page === 'shop' && (
        <main>
          <ShopPage
            key={shopCategory}
            onAddToCart={handleAddToCart}
            onQuickView={setQuickViewProduct}
            onWishlist={handleWishlist}
            onOpenProduct={openProduct}
            initialCategory={shopCategory}
          />
        </main>
      )}

      {page === 'about' && <main><AboutPage /></main>}

      {page === 'contact' && <main><ContactPage onNotify={showNotification} /></main>}

      {page === 'track' && <main><TrackOrderPage /></main>}

      {page === 'help' && <main><HelpPage onNavigate={navigate} onNotify={showNotification} /></main>}

      {page === 'account' && (
        <main>
          {loggedIn ? (
            <AccountPage onNavigate={navigate} onNotify={showNotification} onSignOut={handleSignOut} userName={userName} />
          ) : (
            <AuthPage onLogin={handleLogin} onNotify={showNotification} />
          )}
        </main>
      )}

      {page === 'login' && <main><AuthPage onLogin={handleLogin} onNotify={showNotification} /></main>}

      {page === 'wishlist' && (
        <main>
          <WishlistPage
            items={wishlist}
            onRemove={removeFromWishlist}
            onAddToCart={handleAddToCart}
            onOpenProduct={openProduct}
            onShop={openShop}
          />
        </main>
      )}

      {page === 'article' && <main><ArticlePage article={activeArticle} onBack={() => navigate('home')} onNotify={showNotification} /></main>}

      {page === 'product' && (
        <main>
          <ProductDetailPage
            product={detailProduct}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
            onBack={() => navigate('shop')}
          />
        </main>
      )}
      </div>

      <Footer onShop={openShop} onNavigate={navigate} onNotify={showNotification} />
      <WhatsappButton />
    </div>
  );
}
