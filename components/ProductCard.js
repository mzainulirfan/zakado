import Image from "next/image";
import { createOrderMessage } from "@/lib/cta";
import { ORDER_LINKS } from "@/lib/orderLinks";

export default function ProductCard({
  image,
  title,
  description,
  price,
  tags,
}) {
  return (
    <article className="surface-card group overflow-hidden rounded-[30px]">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-[var(--color-accent)] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold text-[var(--color-primary)]">
          {price}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
          {description}
        </p>
        <div className="mt-6 space-y-4">
          <a
            href={createOrderMessage(
              `Product Card - ${title}`,
              `Halo Zakado, saya tertarik dengan ${title}.`
            )}
            target="_blank"
            rel="noreferrer"
            className="cta-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
          >
            <i className="bx bxl-whatsapp text-lg"></i>
            Tanya via WhatsApp
          </a>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-soft)]">
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
      </div>
    </article>
  );
}
