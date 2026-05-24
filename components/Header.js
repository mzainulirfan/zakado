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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`section-shell flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-5 ${
          isScrolled
            ? "border-[var(--color-line)] bg-[rgba(255,253,248,0.92)] shadow-lg shadow-amber-100/60 backdrop-blur-xl"
            : "border-[rgba(120,87,41,0.08)] bg-[rgba(255,253,248,0.72)] backdrop-blur-md"
        }`}
      >
        <a href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-sm font-semibold text-[var(--color-primary)]">
            Z
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--color-text)]">
              Zakado
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
              Custom Gift Studio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={createWhatsAppLink(
              "Halo Zakado, saya ingin konsultasi pesan kado custom."
            )}
            target="_blank"
            rel="noreferrer"
            className="cta-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
        >
          <Icon name="bxl-whatsapp" className="h-5 w-5" />
          Order
        </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/85 text-2xl text-[var(--color-primary)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
        >
          <Icon
            name={menuOpen ? "bx-x" : "bx-menu"}
            className="h-6 w-6"
          />
        </button>
      </div>

      <div
        className={`section-shell overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 pt-3" : "max-h-0"
        }`}
      >
        <div className="rounded-[28px] border border-[var(--color-line)] bg-[rgba(255,253,248,0.96)] p-4 shadow-xl shadow-amber-100/60 backdrop-blur-xl">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
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
            className="cta-primary mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            onClick={closeMenu}
          >
            <Icon name="bxl-whatsapp" className="h-5 w-5" />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
