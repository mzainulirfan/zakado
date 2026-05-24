import Image from "next/image";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";
import { heroData } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section id="hero" className="w-full pb-12 md:pb-20">
      <div className="relative min-h-[calc(100svh-73px)] overflow-hidden border-b border-[rgba(211,175,95,0.24)] bg-[#17130c]">
        <Image
          src="/products/heroImage.webp"
          alt="Hampers custom Zakado dengan packaging premium"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(211,175,95,0.22),transparent_28rem),linear-gradient(90deg,rgba(18,14,8,0.48)_0%,rgba(18,14,8,0.72)_48%,rgba(18,14,8,0.48)_100%),linear-gradient(180deg,rgba(18,14,8,0.18)_0%,rgba(18,14,8,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fbf8ef] to-transparent" />

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
      </div>
    </section>
  );
}
