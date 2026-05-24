import Image from "next/image";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";
import { heroData } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section id="hero" className="section-shell pb-12 pt-6 md:pb-20 md:pt-8">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_26px_80px_rgba(21,21,18,0.12)]">
        <div className="relative min-h-[70svh] md:min-h-[76svh]">
          <Image
            src="/products/heroImage.webp"
            alt="Hampers custom Zakado dengan packaging premium"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,10,0.08)_0%,rgba(10,12,10,0.32)_42%,rgba(10,12,10,0.88)_100%)]" />

          <div className="relative flex min-h-[70svh] items-end p-6 md:min-h-[76svh] md:p-10 lg:p-12">
            <div className="w-full">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  {heroData.eyebrow}
                </span>
                <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.02] font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {heroData.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                  {heroData.description}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={createOrderMessage(
                      "Hero CTA",
                      "Halo Zakado, saya ingin pesan hampers custom."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[var(--color-primary-strong)] transition hover:bg-[#f4f3ee] md:px-7 md:text-base"
                  >
                    <Icon name="bxl-whatsapp" className="h-5 w-5" />
                    Pesan via WhatsApp
                  </a>
                  <a
                    href="#produk"
                    className="inline-flex items-center justify-center rounded-xl border border-white/24 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16 md:px-7 md:text-base"
                  >
                    Lihat Koleksi
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-white/75">
                  <a
                    href={ORDER_LINKS.shopee}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <Icon name="bx-store-alt" className="h-4 w-4" />
                    Shopee
                  </a>
                  <a
                    href={ORDER_LINKS.tiktokShop}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <Icon name="bxl-tiktok" className="h-4 w-4" />
                    TikTok Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
