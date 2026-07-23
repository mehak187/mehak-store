import { useEffect } from 'react';
import { Icon } from './Icons';
import { scrollToSection } from '../utils/scroll';

const links = [
  { label: 'New Arrivals', filter: 'All', section: 'new-arrivals' },
  { label: 'Women', filter: 'Women', section: 'new-arrivals' },
  { label: 'Men', filter: 'Men', section: 'new-arrivals' },
  { label: 'Jewelry', filter: 'Jewelry', section: 'new-arrivals' },
  { label: 'Sale', filter: 'All', section: 'flash-sale', accent: true },
  { label: 'Lookbook', filter: null, section: 'collections' },
  { label: 'Journal', filter: null, section: 'journal' },
];

export default function MobileMenu({ open, onClose, onFilterChange, onNotify }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  const handleClick = (link) => {
    if (link.filter) onFilterChange(link.filter);
    scrollToSection(link.section);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto animate-slide-in-right">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-serif font-bold">LUXE.</span>
            <button onClick={onClose}>
              <Icon name="close" className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className={`block w-full text-left py-3 border-b text-lg font-medium hover:text-brand-500 transition ${link.accent ? 'text-red-500' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <button
              onClick={() => { onNotify('My Account coming soon!'); onClose(); }}
              className="flex items-center gap-3 py-2 w-full text-left hover:text-brand-500"
            >
              <Icon name="user" /> My Account
            </button>
            <button
              onClick={() => { onNotify('Order tracking coming soon!'); onClose(); }}
              className="flex items-center gap-3 py-2 w-full text-left hover:text-brand-500"
            >
              <Icon name="truck" /> Track Order
            </button>
            <button
              onClick={() => { onNotify('Support: hello@luxe.com'); onClose(); }}
              className="flex items-center gap-3 py-2 w-full text-left hover:text-brand-500"
            >
              <Icon name="support" /> Help & Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
