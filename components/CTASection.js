import { SITE_META } from "@/lib/siteData";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";
import Icon from "@/components/Icon";

export default function CTASection() {
  return (
    <section id="kontak" className="bg-[var(--color-surface-strong)] py-20">
      <div className="relative overflow-hidden border-y border-[rgba(192,107,68,0.12)] bg-[rgba(255,255,255,0.24)] px-6 py-14 text-center md:px-12 xl:px-[3.75rem]">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_30px_30px,rgba(192,107,68,0.08)_0,rgba(192,107,68,0.08)_18px,transparent_18px)] [background-size:60px_60px]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="section-kicker">Siap mulai order?</p>
            <h2 className="font-display mt-4 text-4xl font-black leading-tight text-[var(--color-text)] md:text-6xl">
              Ceritakan momennya, biar Zakado bantu siapkan hadiah yang <em className="italic text-[var(--color-primary)]">berkesan.</em>
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-soft)]">
              Kirim kebutuhan Anda lewat WhatsApp. Tim kami siap membantu dari konsultasi hingga pengiriman. {SITE_META.responseHours}.
            </p>
          </div>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={createOrderMessage(
                "Closing CTA",
                "Halo Zakado, saya ingin mulai order."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5"
            >
              <Icon name="bxl-whatsapp" className="h-5 w-5" />
              Chat Admin Sekarang
            </a>
            <a
              href={ORDER_LINKS.shopee}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-7 py-4 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5"
            >
              <Icon name="bx-store-alt" className="h-5 w-5" />
              Beli di Shopee
            </a>
          </div>
      </div>
    </section>
  );
}
