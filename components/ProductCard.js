import Image from "next/image";

export default function ProductCard({ image, title, description }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-300 shadow hover:shadow-lg">
      <div className="relative h-86 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <button className="rounded bg-yellow-700 px-4 py-2 text-white transition hover:bg-yellow-800">
            Beli
          </button>
          <button
            className="text-yellow-700 transition hover:text-yellow-800"
            title="Tambah ke Wishlist"
          >
            <i className="bx bx-heart text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
