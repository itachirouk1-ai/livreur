"use client"
import { contactLinks, siteContent } from "@/lib/site-content";
import AnimatedJoinButton from "../ui/animated-join-button";
import AnimatedCallButton from "../ui/AnimatedCallButton";
import { useLocalePreference } from "@/lib/use-locale";

export default function DeliveryMap() {

         const locale = useLocalePreference();
          const copy = siteContent[locale];
        
      const handleWhatsApp = () => {
        window.open(contactLinks.whatsapp, '_blank', 'noopener,noreferrer');
      };
    
      const handleCall = () => {
        window.location.href = contactLinks.phone;
      };
    
  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
      <div className="mb-2 text-center">
        <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-600 dark:bg-red-500/10 dark:text-red-400">
          📍 Zone de livraison
        </span>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Livraison à domicile à Marrakech
        </h2>

      
      </div>

     <div className="flex flex-col gap-[18px]">
         <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217406.4460962024!2d-8.173009038751488!3d31.634515153083132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh!5e0!3m2!1sen!2sma!4v1784490174805!5m2!1sen!2sma"
          className="h-[300px] w-full md:h-[500px]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

    <div className="py-4 flex flex-col gap-3 sm:flex-row sm:justify-evenly w-full">
                <AnimatedCallButton label={copy.callNow} onClick={handleCall} />
                <AnimatedJoinButton label={copy.orderOnWhatsApp} onClick={handleWhatsApp} />
    </div>
     </div>
    </section>
  );
}