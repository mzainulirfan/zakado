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
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="section-shell grid gap-8 text-sm text-[var(--color-text-soft)] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-[var(--color-text)]">
            Zakado
          </p>
          <p className="mt-3 max-w-xl leading-7">
            Hampers dan kado custom untuk momen spesial dengan jalur order cepat
            via WhatsApp, serta opsi checkout mandiri lewat marketplace.
          </p>
          <p className="mt-4">© 2026 Zakado. Semua hak cipta dilindungi.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-[var(--color-text)]">Navigasi</p>
            <div className="mt-3 grid gap-2">
              <a href={withBasePath("#produk")} className="hover:text-[var(--color-primary)]">
                Produk
              </a>
              <a href={withBasePath("#faq")} className="hover:text-[var(--color-primary)]">
                FAQ
              </a>
              <a href={withBasePath("#kontak")} className="hover:text-[var(--color-primary)]">
                Kontak
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-text)]">Order</p>
            <div className="mt-3 grid gap-2">
              <a
                href={ORDER_LINKS.whatsappBase}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-primary)]"
              >
                WhatsApp {ORDER_LINKS.whatsappNumberDisplay}
              </a>
              <a
                href={ORDER_LINKS.shopee}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-primary)]"
              >
                Shopee
              </a>
              <a
                href={ORDER_LINKS.tiktokShop}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-primary)]"
              >
                TikTok Shop
              </a>
              <p className="pt-2 text-xs leading-5">
                {`${SITE_META.storeLocation} · ${SITE_META.serviceArea}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
