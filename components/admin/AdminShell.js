"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeSidebar = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f1e4_0%,#f3ead4_50%,#fbf8ef_100%)] text-[var(--color-text)]">
      <div className="flex min-h-screen w-full">
        <AdminSidebar mobileOpen={mobileOpen} onNavigate={closeSidebar} />

        <div className="min-w-0 flex-1">
          <AdminTopbar onMenuClick={() => setMobileOpen(true)} />
          <main className="px-4 py-6 sm:px-6 xl:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
