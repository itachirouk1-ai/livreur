"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackContactConversion } from '@/lib/gtag';

export default function FloatingWhatsApp() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    trackContactConversion('whatsapp', () => {
      window.open(
        "https://wa.me/212660604871?text=Salut%20!%20Je%20souhaite%20passer%20une%20commande.",
        '_blank',
        'noopener,noreferrer'
      );
    });
  };

  return (
    <a
      href="https://wa.me/212660604871?text=Salut%20!%20Je%20souhaite%20passer%20une%20commande."
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] animate-whatsapp"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110">
        <FaWhatsapp className="h-7 w-7" />
      </div>
    </a>
  );
}