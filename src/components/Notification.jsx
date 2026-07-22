import { Icon } from './Icons';

export default function Notification({ show, message }) {
  if (!show) return null;

  return (
    <div className="fixed top-20 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in-right">
      <Icon name="check" className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
