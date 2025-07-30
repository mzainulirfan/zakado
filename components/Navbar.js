export default function Navbar() {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 shadow transition duration-300 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <a href="#hero" className="text-2xl font-bold text-yellow-700">
          Zakado Indonesia
        </a>

        {/* Hamburger Icon */}
        <button
          id="menu-toggle"
          className="text-3xl text-yellow-700 focus:outline-none md:hidden"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Nav Menu */}
        <nav
          id="mobile-menu"
          className="absolute left-0 top-full hidden w-full gap-6 bg-white px-4 py-4 text-sm font-medium shadow-xl md:static md:flex md:w-auto md:items-center md:bg-transparent md:py-0 md:shadow-none"
        >
          <a
            href="#produk"
            className="mobile-link block py-2 hover:text-yellow-600 md:py-0"
          >
            Produk
          </a>
          <a
            href="#fitur"
            className="mobile-link block py-2 hover:text-yellow-600 md:py-0"
          >
            Fitur
          </a>
          <a
            href="#testimoni"
            className="mobile-link block py-2 hover:text-yellow-600 md:py-0"
          >
            Testimoni
          </a>
          <a
            href="#tentang"
            className="mobile-link block py-2 hover:text-yellow-600 md:py-0"
          >
            Tentang
          </a>
          <a
            href="#kontak"
            className="mobile-link block py-2 hover:text-yellow-600 md:py-0"
          >
            Kontak
          </a>

          {/* Cart Icon + Label (Mobile Only) */}
          <a
            href="#keranjang"
            className="mt-6 inline-flex w-full items-center justify-center rounded border border-yellow-700 bg-yellow-700/80 px-4 py-2 text-center text-white transition-all duration-300 hover:bg-yellow-700 hover:text-white md:hidden"
          >
            <i className="bx bx-cart text-2xl"></i> <span>Keranjang</span>
          </a>

          {/* Cart Icon */}
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
