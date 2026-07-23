import { Icon } from './Icons';

export default function Notification({ show, message }) {
  if (!show) return null;

  return (
    <div className="fixed top-20 right-6 z-[70] animate-slide-in-right">
      <div className="flex items-center gap-3 bg-white text-ink-900 pl-3 pr-5 py-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] border border-ink-100 max-w-sm">
        <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
          <Icon name="check" className="w-4 h-4 text-white" />
        </span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
