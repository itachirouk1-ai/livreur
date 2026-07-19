"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
   

<a
  href="https://wa.me/212600000000"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-[9999] animate-whatsapp"
>
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110">
    <FaWhatsapp className="h-7 w-7" />
  </div>
</a>
  );
}