"use client";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/products/hampers-cermin.png",
    title: "Hampers Wisuda",
    description: "Custom dengan nama & ucapan",
  },
  {
    image: "/products/hampers-frame.webp",
    title: "Hampers Wisuda",
    description: "Custom dengan nama & ucapan",
  },
  {
    image: "/products/kalender.webp",
    title: "Hampers Wisuda",
    description: "Custom dengan nama & ucapan",
  },
  {
    image: "/products/hampers-jam.webp",
    title: "Hampers Wisuda",
    description: "Custom dengan nama & ucapan",
  },
  {
    image: "/products/hampers-frame.webp",
    title: "Hampers Wisuda",
    description: "Custom dengan nama & ucapan",
  },
];

export default function Product() {
  return (
    <section id="produk" className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="mb-8 text-2xl font-bold text-yellow-700">Produk Kami</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
