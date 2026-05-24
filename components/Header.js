"use client";

import Image from "next/image";
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
          ? "border-[var(--color-line)] bg-[rgba(251,248,239,0.93)] shadow-lg shadow-[#6f4f13]/10 backdrop-blur-xl"
          : "border-[rgba(111,79,19,0.1)] bg-[rgba(251,248,239,0.82)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8 lg:px-10">
        <a
          href={basePath || "#hero"}
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-lg border border-[rgba(211,175,95,0.5)] bg-[#17130c] shadow-lg shadow-[#6f4f13]/10">
            <Image
              src="/products/favicon.webp"
              alt="Logo Zakado"
              fill
              sizes="44px"
              className="object-cover"
            />
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

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={withBasePath(item.href)}
              className="group relative py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition group-hover:scale-x-100" />
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
            className="cta-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition"
          >
            <Icon name="bxl-whatsapp" className="h-5 w-5" />
            Order
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[rgba(255,253,248,0.86)] text-2xl text-[var(--color-primary)] md:hidden"
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
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 pt-3" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl border-t border-[var(--color-line)] bg-[rgba(251,248,239,0.96)] p-4 shadow-xl shadow-[#6f4f13]/10 backdrop-blur-xl">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={withBasePath(item.href)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
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
            className="cta-primary mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition"
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
