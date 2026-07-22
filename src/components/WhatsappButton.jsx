import { SocialIcon } from './Icons';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition"
    >
      <SocialIcon name="whatsapp" className="w-8 h-8 text-white" />
    </a>
  );
}
