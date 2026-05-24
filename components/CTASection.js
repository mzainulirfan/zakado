import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";

export default function CTASection() {
  return (
    <section className="section-shell pb-20 pt-4">
      <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#8f4e2d_0%,#b7791f_55%,#d79b44_100%)] px-6 py-10 text-white shadow-2xl shadow-amber-200/70 md:px-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Siap mulai order?
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight">
              Ceritakan momennya, biar Zakado bantu siapkan hadiah yang lebih
              berkesan.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/85">
              Kirim kebutuhan Anda lewat WhatsApp, lalu tim Zakado bantu
              arahkan paket yang paling pas.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={createOrderMessage(
                "Closing CTA",
                "Halo Zakado, saya ingin mulai order."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--color-primary-strong)] transition hover:bg-amber-50"
            >
              <i className="bx bxl-whatsapp text-lg"></i>
              Chat Admin Sekarang
            </a>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/85">
              <a
                href={ORDER_LINKS.shopee}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Shopee
              </a>
              <a
                href={ORDER_LINKS.tiktokShop}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                TikTok Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
