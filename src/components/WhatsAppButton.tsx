"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const [dismissed, setDismissed] = useState(false);
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WebTech Solutions on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3.5 text-white shadow-lg shadow-[#25D366]/30 hover:scale-[1.04] transition-transform"
      >
        <MessageCircle size={20} className="shrink-0" />
        <span className="hidden sm:inline text-sm font-semibold">
          Chat on WhatsApp
        </span>
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Hide WhatsApp button"
        className="w-6 h-6 -ml-1 grid place-items-center rounded-full bg-navy-900/70 dark:bg-paper-50/20 text-white hover:bg-navy-900 transition-colors"
      >
        <X size={12} />
      </button>
    </div>
  );
}
