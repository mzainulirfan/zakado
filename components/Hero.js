import Image from "next/image";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { createOrderMessage } from "@/lib/cta";
import { heroData } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-28 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(242,217,201,0.75)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,150,58,0.14)_0%,transparent_70%)]" />

      <div className="section-shell grid min-h-[calc(100svh-76px)] items-center gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1fr] lg:gap-[3.75rem] lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            {heroData.eyebrow}
          </span>
          <h1 className="font-display mt-6 max-w-[40rem] text-5xl leading-[1.04] font-black tracking-[-0.04em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            Kado yang terasa <em className="italic text-[var(--color-primary)]">personal</em> sejak pertama dibuka.
          </h1>
          <p className="mt-6 max-w-[27.5rem] text-lg leading-8 text-[var(--color-text-soft)]">
            {heroData.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={createOrderMessage(
                "Hero CTA",
                "Halo Zakado, saya ingin pesan hampers custom."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-text)] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)]"
            >
              <Icon name="bxl-whatsapp" className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] px-7 py-4 text-sm font-semibold text-[var(--color-text-soft)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Lihat Koleksi
              <Icon name="bx-right-arrow-alt" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {["S", "A", "F", "R"].map((item) => (
                <span
                  key={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-page)] bg-[var(--color-surface-strong)] text-sm font-semibold text-[var(--color-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm leading-6 text-[var(--color-text-soft)]">
              <strong className="text-[var(--color-text)]">
                {heroData.trustCount} pelanggan
              </strong>{" "}
              puas dari Bandung hingga seluruh Indonesia
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[var(--color-text-soft)]">
            <a
              href={ORDER_LINKS.shopee}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[var(--color-primary)]"
            >
              <Icon name="bx-store-alt" className="h-4 w-4" />
              Shopee
            </a>
            <a
              href={ORDER_LINKS.tiktokShop}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[var(--color-primary)]"
            >
              <Icon name="bxl-tiktok" className="h-4 w-4" />
              TikTok Shop
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex lg:items-center lg:justify-center">
          <div className="relative aspect-[4/5] w-full max-w-[32.5rem] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(44,26,16,0.18)]">
            <Image
              src="/products/heroImage.webp"
              alt="Hampers custom Zakado"
              fill
              priority
              sizes="(max-width: 1024px) 0vw, 42vw"
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>

          {heroData.badges.map((badge) => (
            <div
              key={badge.title}
              className={`absolute flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_12px_30px_rgba(44,26,16,0.12)] ${
                badge.position === "top"
                  ? "animate-zakado-float left-0 top-8 -translate-x-8"
                  : "animate-zakado-float-delayed bottom-12 right-0 translate-x-6"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-strong)] text-[var(--color-primary)]">
                <Icon name={badge.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  {badge.title}
                </p>
                <p className="text-xs text-[var(--color-text-soft)]">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
