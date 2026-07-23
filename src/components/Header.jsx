import { Icon } from './Icons';
import { scrollToSection, scrollToTop } from '../utils/scroll';

export default function Header({ cartCount, wishlistCount, onCartOpen, onSearchOpen, onMenuOpen, onNotify, onNavigate, onShop, onWishlistOpen, page }) {
  const goShop = (category = 'All') => onShop(category);
  const active = (p) => (page === p ? 'text-brand-500' : '');

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-ink-100">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 text-xs text-ink-500 border-b border-ink-100">
        <div className="flex items-center gap-4">
          <a href="tel:+15551234567" className="hover:text-brand-500 transition">📞 +1 (555) 123-4567</a>
          <a href="mailto:hello@luxe.com" className="hover:text-brand-500 transition">✉ hello@luxe.com</a>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-brand-500 transition">
              USD $
              <Icon name="chevronDown" className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 bg-white border border-ink-100 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition min-w-[100px] z-10">
              {['USD $', 'EUR €', 'GBP £', 'AED د.إ', 'PKR ₨'].map((c) => (
                <button key={c} className="block w-full text-left px-4 py-2 hover:bg-ink-50 hover:text-brand-500 text-xs">
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-brand-500 transition">
              🇺🇸 EN
              <Icon name="chevronDown" className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 bg-white border border-ink-100 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition min-w-[130px] z-10">
              {[
                { flag: '🇺🇸', name: 'English' },
                { flag: '🇸🇦', name: 'Arabic' },
                { flag: '🇵🇰', name: 'Urdu' },
                { flag: '🇪🇸', name: 'Español' },
                { flag: '🇫🇷', name: 'Français' },
              ].map((l) => (
                <button key={l.name} className="block w-full text-left px-4 py-2 hover:bg-ink-50 hover:text-brand-500 text-xs">
                  {l.flag} {l.name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => onNavigate('track')} className={`hover:text-brand-500 transition ${active('track')}`}>Track Order</button>
          <button onClick={() => onNavigate('help')} className={`hover:text-brand-500 transition ${active('help')}`}>Help</button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <button onClick={onMenuOpen} className="lg:hidden">
          <Icon name="menu" className="w-6 h-6" />
        </button>

        <button onClick={() => onNavigate('home')} className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
          LUXE<span className="text-brand-500">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          <button onClick={() => goShop('All')} className={`text-sm font-medium hover:text-brand-500 transition relative group ${active('shop')}`}>
            SHOP
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-500 transition-all ${page === 'shop' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <div className="relative group">
            <button onClick={() => goShop('All')} className="text-sm font-medium hover:text-brand-500 transition flex items-center gap-1">
              WOMEN
              <Icon name="chevronDown" className="w-3 h-3" />
            </button>
            <MegaMenu onNav={goShop} />
          </div>
          <button onClick={() => goShop('All')} className="text-sm font-medium hover:text-brand-500 transition">MEN</button>
          <button onClick={() => goShop('Jewelry')} className="text-sm font-medium hover:text-brand-500 transition">JEWELRY</button>
          <button onClick={() => goShop('All')} className="text-sm font-medium hover:text-brand-500 transition text-red-500">SALE</button>
          <button onClick={() => onNavigate('about')} className={`text-sm font-medium hover:text-brand-500 transition relative group ${active('about')}`}>
            ABOUT
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-500 transition-all ${page === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button onClick={() => onNavigate('contact')} className={`text-sm font-medium hover:text-brand-500 transition relative group ${active('contact')}`}>
            CONTACT
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-500 transition-all ${page === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={onSearchOpen} className="hover:text-brand-500 transition" aria-label="Search">
            <Icon name="search" />
          </button>
          <button onClick={() => onNavigate('account')} className={`hidden md:block hover:text-brand-500 transition ${active('account')}`} aria-label="Account">
            <Icon name="user" />
          </button>
          <button onClick={onWishlistOpen} className="relative hover:text-brand-500 transition" aria-label="Wishlist">
            <Icon name="heart" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          <button onClick={onCartOpen} className="relative hover:text-brand-500 transition" aria-label="Cart">
            <Icon name="cart" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function MegaMenu({ onNav }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-4">
      <div className="grid grid-cols-4 gap-8 p-8">
        <MenuColumn
          title="Clothing"
          items={['Dresses', 'Tops & Blouses', 'Skirts', 'Pants & Jeans', 'Outerwear', 'Activewear']}
          onClick={() => onNav('Women')}
        />
        <MenuColumn
          title="Accessories"
          items={['Handbags', 'Jewelry', 'Sunglasses', 'Scarves', 'Belts', 'Watches']}
          onClick={() => onNav('Accessories')}
        />
        <MenuColumn
          title="Shoes"
          items={['Heels', 'Sneakers', 'Boots', 'Flats', 'Sandals']}
          onClick={() => onNav('Shoes')}
        />
        <button onClick={() => onNav('All')} className="relative rounded-lg overflow-hidden group/img">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400" alt="Summer" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-left">
            <span className="text-xs text-brand-200 uppercase tracking-wider mb-1">Featured</span>
            <h3 className="text-white font-serif text-xl mb-2">Summer 2026</h3>
            <span className="text-white text-sm underline">Shop the Collection →</span>
          </div>
        </button>
      </div>
    </div>
  );
}

function MenuColumn({ title, items, onClick }) {
  return (
    <div>
      <h4 className="font-semibold text-xs uppercase tracking-wider mb-4 text-ink-900">{title}</h4>
      <ul className="space-y-2 text-sm text-ink-500">
        {items.map((item) => (
          <li key={item}>
            <button onClick={onClick} className="hover:text-brand-500 text-left">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
