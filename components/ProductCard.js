import Image from "next/image";
import Link from "next/link";
import { createOrderMessage } from "@/lib/cta";
import Icon from "@/components/Icon";

export default function ProductCard({
  image,
  title,
  description,
  price,
  tags,
  slug,
  featured = false,
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.25rem] bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(44,26,16,0.12)] ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[var(--color-surface-strong)] ${
          featured ? "min-h-[22rem]" : "h-80"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          }
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${
                /best seller/i.test(tag)
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-white/90 text-[var(--color-text)]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex flex-col justify-center p-6 ${featured ? "md:p-8" : ""}`}>
        <p className="text-sm font-medium text-[var(--color-text-soft)]">{price}</p>
        <h3
          className={`font-display mt-2 text-[var(--color-text)] ${
            featured ? "text-4xl leading-tight font-bold" : "text-3xl font-bold"
          }`}
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={createOrderMessage(
              `Product Card - ${title}`,
              `Halo Zakado, saya tertarik dengan ${title}.`
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-text)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]"
          >
            <Icon name="bxl-whatsapp" className="h-5 w-5" />
            Tanya via WhatsApp
          </a>
          <Link
            href={`/produk/${slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-semibold text-[var(--color-text-soft)] transition hover:border-[var(--color-text-soft)]"
          >
            Lihat detail
          </Link>
        </div>
      </div>
    </article>
  );
}
