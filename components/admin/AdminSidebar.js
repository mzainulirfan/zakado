"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { adminMenuItems } from "@/lib/admin/mockProducts";

function isActivePath(pathname, href) {
  if (href === "/admin") {
    return pathname === "/admin";
  }

  return pathname.startsWith(href);
}

export default function AdminSidebar({ mobileOpen, onNavigate }) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-[rgba(23,19,12,0.38)] backdrop-blur-sm transition md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onNavigate}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-[rgba(111,79,19,0.12)] bg-[rgba(255,251,245,0.98)] px-4 py-4 shadow-2xl shadow-[#6f4f13]/10 transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0 md:shadow-none ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="/admin"
          className="flex items-center gap-3 rounded-[24px] border border-[rgba(111,79,19,0.1)] bg-white/80 px-4 py-4"
          onClick={onNavigate}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a5816,#d3af5f)] text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20">
            ZA
          </div>
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Zakado
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
              Admin
            </p>
          </div>
        </Link>

        <nav className="mt-8 grid gap-2">
          {adminMenuItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            if (item.disabled) {
              return (
                <div
                  key={item.href}
                  className="flex items-center justify-between rounded-2xl border border-dashed border-[rgba(111,79,19,0.1)] px-4 py-3 text-sm text-[var(--color-text-soft)] opacity-70"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(111,79,19,0.05)]">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
                    Soon
                  </span>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-[linear-gradient(135deg,rgba(122,88,22,0.96),rgba(200,154,59,0.96))] text-white shadow-lg shadow-[#b88a2a]/20"
                    : "border border-transparent text-[var(--color-text-soft)] hover:border-[rgba(111,79,19,0.12)] hover:bg-white/72 hover:text-[var(--color-text)]"
                }`}
                onClick={onNavigate}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    active ? "bg-white/14" : "bg-[rgba(111,79,19,0.05)]"
                  }`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
