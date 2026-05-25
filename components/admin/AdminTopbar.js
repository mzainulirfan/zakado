"use client";

import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

const titleMap = {
  "/admin": "Dashboard",
  "/admin/products": "Produk",
  "/admin/products/new": "Tambah Produk",
};

export default function AdminTopbar({ onMenuClick }) {
  const pathname = usePathname();

  const title =
    titleMap[pathname] ??
    (pathname.includes("/edit")
      ? "Edit Produk"
      : pathname.startsWith("/admin/products/")
        ? "Detail Produk"
        : "Admin");

  return (
    <div className="sticky top-0 z-20 border-b border-[rgba(111,79,19,0.08)] bg-[rgba(248,243,233,0.84)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 xl:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(111,79,19,0.14)] bg-white/80 text-[var(--color-text)] shadow-sm md:hidden"
            aria-label="Buka menu admin"
          >
            <Icon name="bx-menu" className="h-5 w-5" />
          </button>

          <h1 className="font-display text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(111,79,19,0.1)] bg-white/80 text-[var(--color-text-soft)] transition hover:text-[var(--color-text)] sm:inline-flex"
            aria-label="Cari"
          >
            <Icon name="bx-search" className="h-5 w-5" />
          </button>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a5816,#d3af5f)] text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20">
            ZA
          </div>
        </div>
      </div>
    </div>
  );
}
