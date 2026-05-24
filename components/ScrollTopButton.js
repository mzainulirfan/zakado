"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 360);
    toggleVisible();
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-5 z-40 rounded-full border border-[var(--color-line)] bg-white/92 p-3 text-[var(--color-primary)] shadow-lg shadow-amber-200/60 transition hover:-translate-y-1 md:right-6 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Kembali ke atas"
    >
      <i className="bx bx-chevron-up text-2xl"></i>
    </button>
  );
}
