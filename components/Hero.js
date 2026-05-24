import Image from "next/image";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";
import { heroData } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section id="hero" className="section-shell pb-12 pt-8 md:pb-20 md:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <span className="inline-flex rounded-full border border-[var(--color-line)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
            {heroData.eyebrow}
          </span>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] font-semibold text-[var(--color-text)] md:text-6xl lg:text-7xl">
            {heroData.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
            {heroData.description}
          </p>

          <div className="mt-8 max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={createOrderMessage(
                  "Hero CTA",
                  "Halo Zakado, saya ingin pesan hampers custom."
                )}
                target="_blank"
                rel="noreferrer"
                className="cta-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition"
              >
                <Icon name="bxl-whatsapp" className="h-6 w-6" />
                Pesan via WhatsApp
              </a>
              <a
                href="#produk"
                className="cta-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition"
              >
                Lihat Koleksi
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-soft)]">
              <a
                href={ORDER_LINKS.shopee}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[var(--color-primary)]"
              >
                <Icon name="bx-store-alt" className="h-5 w-5" />
                Shopee
              </a>
              <a
                href={ORDER_LINKS.tiktokShop}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[var(--color-primary)]"
              >
                <Icon name="bxl-tiktok" className="h-5 w-5" />
                TikTok Shop
              </a>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-[var(--color-text-soft)]">
            {heroData.highlights.slice(0, 2).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-surface-strong)] text-[var(--color-success)]">
                  <Icon name="bx-check" className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-10 hidden h-32 w-32 rounded-full bg-amber-200/50 blur-3xl md:block"></div>
          <div className="surface-card relative overflow-hidden rounded-[36px] p-4 xl:pb-6">
            <div className="relative overflow-hidden rounded-[28px]">
              <Image
                src="/products/heroImage.webp"
                alt="Hampers custom Zakado dengan packaging premium"
                width={900}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-[540px] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(47,42,36,0.88)] via-[rgba(47,42,36,0.35)] to-transparent p-6 xl:pr-[21rem]">
                <div className="max-w-sm">
                  <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    Best for graduation & special moments
                  </div>
                  <p className="mt-3 text-lg font-medium text-white">
                    Gift set yang siap dikirim, siap dipajang, dan tetap terasa
                    personal untuk penerimanya.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-4 rounded-[24px] border border-white/60 bg-white/92 p-4 shadow-xl shadow-amber-100/80 md:ml-auto md:w-72 xl:absolute xl:bottom-6 xl:right-10 xl:mt-0">
              <p className="text-sm font-semibold text-[var(--color-primary-strong)]">
                Alur order yang simpel
              </p>
              <div className="mt-3 space-y-3 text-sm text-[var(--color-text-soft)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-strong)] text-[var(--color-primary)]">
                    1
                  </span>
                  Pilih produk atau brief kebutuhan Anda
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-strong)] text-[var(--color-primary)]">
                    2
                  </span>
                  Tim Zakado bantu konsep custom
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-strong)] text-[var(--color-primary)]">
                    3
                  </span>
                  Produksi dan kirim
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
