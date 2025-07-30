"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 shadow transition duration-300 ${
        isScrolled && menuOpen ? "bg-white" : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <a href="#hero" className="text-2xl font-bold text-yellow-700">
          Zakado Indonesia
        </a>

        {/* Hamburger Icon */}
        <button
          id="menu-toggle"
          className="text-3xl text-yellow-700 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Nav Menu */}
        <nav
          id="mobile-menu"
          className={`absolute left-0 top-full w-full gap-6 bg-white px-4 py-4 text-sm font-medium shadow-xl transition-all duration-300 md:static md:flex md:w-auto md:items-center md:bg-transparent md:py-0 md:shadow-none ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          {[
            { href: "#produk", label: "Produk" },
            { href: "#fitur", label: "Fitur" },
            { href: "#testimoni", label: "Testimoni" },
            { href: "#tentang", label: "Tentang" },
            { href: "#kontak", label: "Kontak" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-link block py-2 hover:text-yellow-600 md:py-0"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          {/* Cart Icon + Label (Mobile Only) */}
          <a
            href="#keranjang"
            className="mt-6 inline-flex w-full items-center justify-center rounded border border-yellow-700 bg-yellow-700/80 px-4 py-2 text-center text-white transition-all duration-300 hover:bg-yellow-700 hover:text-white md:hidden"
            onClick={closeMenu}
          >
            <i className="bx bx-cart text-2xl"></i> <span>Keranjang</span>
          </a>

          {/* Cart Icon (Desktop) */}
          <a
            href="#keranjang"
            className="hidden text-2xl text-yellow-700 transition-colors duration-200 hover:text-yellow-600 md:block"
          >
            <i className="bx bx-cart"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}
