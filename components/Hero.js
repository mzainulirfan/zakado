import Image from "next/image";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";
import { heroData } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full">
      <div className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-[#17130c]">
        <Image
          src="/products/heroImage.webp"
          alt="Hampers custom Zakado dengan packaging premium"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgba(233,197,111,0.3)_0%,rgba(184,138,42,0.12)_28%,transparent_58%),linear-gradient(90deg,rgba(13,9,4,0.72)_0%,rgba(18,14,8,0.58)_22%,rgba(18,14,8,0.42)_50%,rgba(18,14,8,0.58)_78%,rgba(13,9,4,0.72)_100%),linear-gradient(180deg,rgba(12,8,3,0.42)_0%,rgba(20,14,6,0.34)_38%,rgba(8,6,3,0.86)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#17130c]/65 to-transparent" />
        <div className="absolute inset-x-[8%] top-24 h-px bg-gradient-to-r from-transparent via-[#f6dd9b]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,transparent_0%,rgba(23,19,12,0.72)_42%,#fbf8ef_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-73px)] w-full max-w-7xl items-center justify-center px-4 py-10 md:px-8 md:py-14 lg:px-10">
          <div className="w-full text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex rounded-full border border-[#e3c371]/35 bg-[#17130c]/28 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f6dd9b] backdrop-blur-sm">
                {heroData.eyebrow}
              </span>
              <h1 className="font-display mx-auto mt-5 max-w-4xl text-4xl leading-[1.02] font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {heroData.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                {heroData.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-6">
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <a
                  href={createOrderMessage(
                    "Hero CTA",
                    "Halo Zakado, saya ingin pesan hampers custom."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f7dc95,#bd8e33)] px-6 py-4 text-sm font-semibold text-[#17130c] shadow-2xl shadow-[#17130c]/25 transition hover:brightness-105 md:px-7 md:text-base"
                >
                  <Icon name="bxl-whatsapp" className="h-5 w-5" />
                  Pesan via WhatsApp
                </a>
                <a
                  href="#produk"
                  className="inline-flex items-center justify-center rounded-full border border-[#f6dd9b]/30 bg-[#17130c]/20 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 md:px-7 md:text-base"
                >
                  Lihat Koleksi
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/75">
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

        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <a
            href="#produk"
            className="group inline-flex h-12 w-8 items-start justify-center rounded-full border border-[#f6dd9b]/25 bg-[#17130c]/20 p-2 backdrop-blur-sm transition hover:border-[#f6dd9b]/45"
            aria-label="Scroll ke bagian produk"
          >
            <span className="h-2 w-2 rounded-full bg-[#f6dd9b]/80 transition group-hover:translate-y-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
