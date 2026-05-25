import ProductCard from "./ProductCard";
import { products } from "@/lib/siteData";

export default function Product() {
  const [featuredProduct, ...otherProducts] = products;

  return (
    <section id="produk" className="section-shell py-24">
      <div className="max-w-[33rem]">
        <span className="section-kicker">Koleksi unggulan</span>
        <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-[var(--color-text)] md:text-5xl">
          Pilihan hampers untuk setiap <em className="italic text-[var(--color-primary)]">momen spesial.</em>
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--color-text-soft)]">
          Setiap paket bisa dikustomisasi sesuai tema, budget, dan pesan yang ingin Anda sampaikan.
        </p>
      </div>

      <div className="mt-10 grid gap-7 lg:grid-cols-3">
        <ProductCard
          key={featuredProduct.slug}
          {...featuredProduct}
          tags={["Best Seller", ...featuredProduct.tags]}
          featured
        />
        {otherProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
