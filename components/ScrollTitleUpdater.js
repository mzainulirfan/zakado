"use client";

import { useEffect } from "react";

const sectionTitles = {
  hero: "Zakado",
  produk: "Zakado | Koleksi Hampers Custom",
  "cara-order": "Zakado | Cara Order",
  keunggulan: "Zakado | Keunggulan",
  galeri: "Zakado | Galeri Custom",
  testimoni: "Zakado | Testimoni Pelanggan",
  faq: "Zakado | FAQ",
  kontak: "Zakado | Kontak",
};

export default function ScrollTitleUpdater() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionId = entry.target.getAttribute("id");
          document.title = sectionTitles[sectionId] || "Zakado";
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return null;
}
