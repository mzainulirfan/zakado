import ProductCard from "./ProductCard";
import { ORDER_LINKS } from "@/lib/orderLinks";
import { products } from "@/lib/siteData";

export default function Product() {
  return (
    <section id="produk" className="section-shell py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Koleksi unggulan
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-text)]">
            Pilihan hampers yang bisa disesuaikan dengan momen dan penerimanya.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)]">
            Setiap paket bisa dikembangkan sesuai budget, tema acara, dan pesan
            yang ingin Anda sampaikan.
          </p>
        </div>
        <a
          href={ORDER_LINKS.shopee}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
        >
          Lihat toko di Shopee <i className="bx bx-right-arrow-alt text-xl"></i>
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
