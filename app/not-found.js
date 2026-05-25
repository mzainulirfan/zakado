import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <p className="section-kicker">404</p>
      <h1 className="font-display mt-4 text-5xl font-bold text-[var(--color-text)]">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-text-soft)]">
        Mungkin link-nya sudah berubah atau halaman yang Anda cari memang belum tersedia.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
