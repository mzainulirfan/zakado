"use client";

import { createWhatsAppLink } from "@/lib/orderLinks";

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink(
        "Halo Zakado, saya ingin tanya tentang hampers custom."
      )}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[var(--color-success)] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-200/60 transition hover:-translate-y-1 md:bottom-6 md:right-6"
      aria-label="Chat WhatsApp Zakado"
    >
      <i className="bx bxl-whatsapp text-2xl"></i>
      Chat WhatsApp
    </a>
  );
}
