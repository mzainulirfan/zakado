import { ORDER_LINKS } from "@/lib/orderLinks";
import { SITE_META } from "@/lib/siteData";

export default function Footer({ basePath = "" }) {
  const withBasePath = (href) => {
    if (!basePath) {
      return href;
    }

    return href.startsWith("#") ? `${basePath}${href}` : `${basePath}/${href}`;
  };

  return (
    <footer className="bg-[var(--color-text)] py-14 text-[rgba(255,255,255,0.62)]">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold text-white">
              Za<span className="text-[var(--color-primary)]">kado</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7">
              Studio hadiah custom yang membantu Anda memberi kesan lebih dalam. Berbasis di Bandung, melayani pemesanan ke seluruh Indonesia.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Produk</p>
            <div className="mt-4 grid gap-3 text-sm">
              <a href={withBasePath("#produk")} className="transition hover:text-[var(--color-accent)]">
                Hampers Wisuda
              </a>
              <a href={withBasePath("#produk")} className="transition hover:text-[var(--color-accent)]">
                Frame Gift Box
              </a>
              <a href={withBasePath("#produk")} className="transition hover:text-[var(--color-accent)]">
                Desk Calendar
              </a>
              <a href={withBasePath("#produk")} className="transition hover:text-[var(--color-accent)]">
                Bulk Order
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Informasi</p>
            <div className="mt-4 grid gap-3 text-sm">
              <a href={withBasePath("#cara-order")} className="transition hover:text-[var(--color-accent)]">
                Cara Order
              </a>
              <a href={withBasePath("#testimoni")} className="transition hover:text-[var(--color-accent)]">
                Testimoni
              </a>
              <a href={withBasePath("#kontak")} className="transition hover:text-[var(--color-accent)]">
                Kontak
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Kontak</p>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href={ORDER_LINKS.whatsappBase}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-accent)]"
              >
                WhatsApp
              </a>
              <a
                href={ORDER_LINKS.shopee}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-accent)]"
              >
                Shopee
              </a>
              <a
                href={ORDER_LINKS.tiktokShop}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-accent)]"
              >
                TikTok Shop
              </a>
              <a
                href={`mailto:${SITE_META.email}`}
                className="transition hover:text-[var(--color-accent)]"
              >
                {SITE_META.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2026 Zakado. Semua hak cipta dilindungi.</p>
          <p>{`${SITE_META.storeLocation} · ${SITE_META.serviceArea}`}</p>
        </div>
      </div>
    </footer>
  );
}
