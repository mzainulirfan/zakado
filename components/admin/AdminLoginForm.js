"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-10 grid gap-5">
      <label className="grid gap-2">
        <span className="text-sm font-semibold">Email admin</span>
        <input
          className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/90 px-4 py-3 text-sm outline-none"
          placeholder="admin@zakado.id"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold">Password</span>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/90 px-4 py-3 pr-12 text-sm outline-none"
            placeholder="........"
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-[var(--color-text-soft)] transition hover:text-[var(--color-primary-strong)]"
            aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
          >
            <Icon
              name={showPassword ? "bx-hide" : "bx-show"}
              className="h-5 w-5"
            />
          </button>
        </div>
      </label>

      <Link
        href="/admin"
        className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a5816,#c89a3b)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20"
      >
        Masuk
      </Link>
    </form>
  );
}
