import Image from "next/image";
import { createOrderMessage } from "@/lib/cta";
import { ORDER_LINKS } from "@/lib/orderLinks";
import Icon from "@/components/Icon";

export default function ProductCard({
  image,
  title,
  description,
  price,
  tags,
}) {
  return (
    <article className="surface-card group overflow-hidden rounded-xl">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/88 px-3 py-1 text-xs font-semibold text-[var(--color-accent)] backdrop-blur-sm"
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
            className="cta-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition"
          >
            <Icon name="bxl-whatsapp" className="h-5 w-5" />
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
