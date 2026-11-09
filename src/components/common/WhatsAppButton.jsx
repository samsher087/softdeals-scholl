import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '919876543210';
  const defaultMessage = encodeURIComponent(
    "Hello Admissions Desk! I am interested in admission for the 2026-27 academic session at St. Xavier's International School. Please share the details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-white text-navy-950 text-xs py-2 px-3.5 rounded-xl shadow-premium border border-slate-200 max-w-xs animate-bounce hidden sm:flex items-center gap-2">
          <span className="font-semibold text-slate-800">
            👋 Have questions? <span className="text-green-600 font-bold">Chat with us on WhatsApp!</span>
          </span>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="w-8 h-8 fill-current text-white transition-transform group-hover:rotate-12" />
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </div>
  );
}

