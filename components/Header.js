"use client";

import { useEffect, useState } from "react";
import { createWhatsAppLink } from "@/lib/orderLinks";
import Icon from "@/components/Icon";

const navItems = [
  { href: "#produk", label: "Produk" },
  { href: "#cara-order", label: "Cara Order" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header({ basePath = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const withBasePath = (href) => {
    if (!basePath) {
      return href;
    }

    return href.startsWith("#") ? `${basePath}${href}` : `${basePath}/${href}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[var(--color-line)] bg-[rgba(250,246,240,0.9)] shadow-lg shadow-[#2c1a10]/8 backdrop-blur-xl"
          : "border-[rgba(192,107,68,0.1)] bg-[rgba(250,246,240,0.78)] backdrop-blur-md"
      }`}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-9 xl:px-[3.75rem]">
        <a href={basePath || "#hero"} className="flex items-center" onClick={closeMenu}>
          <p className="font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-primary)]">
            Za<span className="text-[var(--color-text)]">kado</span>
          </p>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={withBasePath(item.href)}
                className="group relative py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:text-[var(--color-primary)]"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[var(--color-primary)] transition group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href={createWhatsAppLink(
              "Halo Zakado, saya ingin konsultasi pesan kado custom."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
          >
            <Icon name="bxl-whatsapp" className="h-5 w-5" />
            Pesan Sekarang
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[rgba(255,253,249,0.9)] text-2xl text-[var(--color-primary)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "bx-x" : "bx-menu"} className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 pt-2" : "max-h-0"
        }`}
      >
        <div className="border-t border-[var(--color-line)] bg-[rgba(250,246,240,0.96)] p-4 shadow-xl shadow-[#2c1a10]/10 backdrop-blur-xl">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={withBasePath(item.href)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-white hover:text-[var(--color-text)]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={createWhatsAppLink(
              "Halo Zakado, saya ingin konsultasi pesan kado custom."
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
            onClick={closeMenu}
          >
            <Icon name="bxl-whatsapp" className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
