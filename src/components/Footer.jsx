import { SocialIcon, PaymentIcon } from './Icons';
import { scrollToTop } from '../utils/scroll';

export default function Footer({ onShop, onNavigate, onNotify }) {
  const shopLinks = [
    { label: 'New Arrivals', action: () => onShop('All') },
    { label: 'Best Sellers', action: () => onShop('All') },
    { label: 'Shop All', action: () => onShop('All') },
    { label: 'Jewelry', action: () => onShop('Jewelry') },
    { label: 'Sale', action: () => onShop('All') },
    { label: 'Gift Cards', action: () => onNotify('Gift cards available from $25 to $500.') },
  ];

  const helpLinks = [
    { label: 'Contact Us', action: () => onNavigate('contact') },
    { label: 'Shipping Info', action: () => onNotify('Free shipping on orders over $50 worldwide!') },
    { label: 'Returns & Exchanges', action: () => onNotify('30-day easy returns on all items.') },
    { label: 'Size Guide', action: () => onNotify('Sizes: XS(0-2) · S(4-6) · M(8-10) · L(12-14) · XL(16-18)') },
    { label: 'FAQ', action: () => onNavigate('help') },
    { label: 'Track Order', action: () => onNavigate('track') },
  ];

  const companyLinks = [
    { label: 'About Us', action: () => onNavigate('about') },
    { label: 'Our Story', action: () => onNavigate('about') },
    { label: 'Sustainability', action: () => onNotify('100% ethical production. Learn more soon!') },
    { label: 'Careers', action: () => onNotify('Send your resume to careers@luxe.com') },
    { label: 'Press', action: () => onNotify('Press inquiries: press@luxe.com') },
    { label: 'Wholesale', action: () => onNotify('Wholesale: wholesale@luxe.com') },
  ];

  return (
    <footer className="bg-ink-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 border border-ink-700 hover:border-brand-500 hover:bg-brand-500 px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span>Back to Top</span>
            <span className="text-lg leading-none group-hover:-translate-y-0.5 transition-transform">↑</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <button onClick={() => onNavigate('home')} className="text-3xl font-serif font-bold mb-4 block">
              LUXE<span className="text-brand-500">.</span>
            </button>
            <p className="text-ink-300 text-sm mb-4 leading-relaxed">
              Curating timeless fashion and lifestyle pieces for the modern individual since 2018. Sustainably crafted, thoughtfully designed.
            </p>
            <div className="flex gap-3">
              <SocialButton icon="facebook" href="https://facebook.com" />
              <SocialButton icon="instagram" href="https://instagram.com" />
              <SocialButton icon="twitter" href="https://twitter.com" />
              <SocialButton icon="pinterest" href="https://pinterest.com" />
            </div>
          </div>
          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>
        <div className="border-t border-ink-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-ink-400 flex flex-wrap gap-2 items-center">
            <span>© 2026 LUXE. All rights reserved.</span>
            <span>|</span>
            <button onClick={() => onNotify('Your privacy matters — we never share your data with third parties.')} className="hover:text-brand-500">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => onNotify('By shopping with LUXE you agree to our terms of service.')} className="hover:text-brand-500">Terms of Service</button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-ink-400 mr-1">Secure payments:</span>
            {['visa', 'mastercard', 'amex', 'paypal', 'applepay', 'googlepay', 'stripe'].map((pay) => (
              <PaymentIcon key={pay} name={pay} className="h-7" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 border border-ink-700 rounded-full flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition"
    >
      <SocialIcon name={icon} />
    </a>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-ink-300">
        {links.map((link) => (
          <li key={link.label}>
            <button onClick={link.action} className="hover:text-brand-500 transition text-left">
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
