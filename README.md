# LUXE — Modern Fashion E-commerce Store (React + Vite + Tailwind)

Premium fashion e-commerce store frontend built with React 18, Vite, and Tailwind CSS.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build
```

Dev server opens automatically at `http://localhost:5173`

## 📁 Project Structure

```
ecommerce-store-react/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useCountdown.js
    ├── data/
    │   ├── products.js
    │   ├── categories.js
    │   └── testimonials.js
    └── components/
        ├── AnnouncementBar.jsx
        ├── Header.jsx
        ├── MobileMenu.jsx
        ├── SearchOverlay.jsx
        ├── CartDrawer.jsx
        ├── QuickView.jsx
        ├── Notification.jsx
        ├── Hero.jsx
        ├── BrandFeatures.jsx
        ├── Categories.jsx
        ├── FlashSale.jsx
        ├── ProductCard.jsx
        ├── NewArrivals.jsx
        ├── CollectionShowcase.jsx
        ├── BestSellers.jsx
        ├── PromoBanner.jsx
        ├── Testimonials.jsx
        ├── InstagramFeed.jsx
        ├── BrandStory.jsx
        ├── BlogPreview.jsx
        ├── Newsletter.jsx
        ├── Footer.jsx
        ├── WhatsappButton.jsx
        └── Icons.jsx
```

## ✨ Features

### Layout & Navigation
- Sticky header with mega menu
- Top announcement marquee bar
- Currency & language selectors
- Mobile hamburger menu
- Search overlay

### Shopping Experience
- Product grid with filters
- Product cards with hover quick-actions
- Quick view modal
- Cart drawer (add/remove/quantity)
- Wishlist counter
- Free shipping progress bar
- Promo code input
- Multi-payment display

### Sections
- Full-screen hero with stats
- Trust bar (shipping, returns, warranty)
- Category grid (6 circular categories)
- Flash sale with live countdown
- New arrivals with tabs
- Collection showcase (lookbook style)
- Best sellers (ranked)
- Trust badges promo section
- Customer testimonials
- Instagram feed grid
- Brand story with stats
- Blog preview cards
- Newsletter signup with success state

### Interactive
- Live cart updates with real-time totals
- Add to cart notifications (toast)
- Free shipping progress bar
- Quick view modal with size/color selection
- Newsletter subscription state
- Countdown timer for flash sale
- Smooth animations throughout

## 🎨 Design System

- **Fonts:** Inter (body) + Playfair Display (headings)
- **Colors:** Custom brand palette (brand/ink)
- **Animations:** Fade-in, slide-up, marquee, pulse
- **Fully Responsive:** Mobile-first design

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Styling
- **PostCSS + Autoprefixer** — CSS processing

## 📝 Customization

### Change Colors
Edit `tailwind.config.js` — modify `brand` and `ink` color palettes.

### Change Products
Edit `src/data/products.js` — add/edit products, prices, images.

### Change Categories
Edit `src/data/categories.js` — modify category list and images.

### Change Content
- **Testimonials:** `src/data/testimonials.js`
- **Blog Posts:** `src/data/testimonials.js`
- **Announcements:** `src/components/AnnouncementBar.jsx`

## 🎯 Portfolio Use

Perfect as a showcase piece for:
- Fashion brands
- Boutique clients
- E-commerce entrepreneurs
- Retail businesses
- Multi-vendor marketplaces (adaptable)

## 📄 License

Free to use for portfolio and client work.

---

Built by **Mehak Amir** — Senior Full-Stack Developer
📱 WhatsApp: +92 325 4370049
# mehak-store
