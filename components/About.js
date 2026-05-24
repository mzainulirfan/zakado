import { ORDER_LINKS, createWhatsAppLink } from "@/lib/orderLinks";
import { SITE_META } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function About() {
  return (
    <section id="kontak" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card rounded-xl p-8">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Tentang Zakado
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-text)]">
            Studio hadiah custom yang membantu Anda memberi kesan lebih dalam.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
            Zakado hadir untuk orang-orang yang ingin memberikan hadiah yang
            terasa personal, rapi, dan tidak generik. Kami fokus pada hampers
            custom dengan sentuhan visual yang hangat serta proses order yang
            mudah dipahami.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="surface-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-[var(--color-text)]">
              Hubungi kami
            </h3>
            <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-soft)]">
              <p>WhatsApp: {ORDER_LINKS.whatsappNumberDisplay}</p>
              <p>Email: {SITE_META.email}</p>
              <p>Lokasi toko: {SITE_META.storeLocation}</p>
              <p>Area layanan: {SITE_META.serviceArea}</p>
              <p>Jam respons: {SITE_META.responseHours}</p>
            </div>
            <a
              href={createWhatsAppLink(
                "Halo Zakado, saya ingin konsultasi pesanan."
              )}
              target="_blank"
              rel="noreferrer"
              className="cta-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition"
            >
              <Icon name="bxl-whatsapp" className="h-5 w-5" />
              Mulai Konsultasi
            </a>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--color-text-soft)]">
              <a
                href={ORDER_LINKS.shopee}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-primary)]"
              >
                Shopee
              </a>
              <a
                href={ORDER_LINKS.tiktokShop}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-primary)]"
              >
                TikTok Shop
              </a>
            </div>
          </div>

          <div className="surface-card overflow-hidden rounded-xl p-3">
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Blueshop - Zakado
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                  Lokasi toko di Bandung, melayani pemesanan ke seluruh Indonesia.
                </p>
              </div>
              <iframe
                title="Blueshop - Zakado"
                src={SITE_META.mapsEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-lg border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
