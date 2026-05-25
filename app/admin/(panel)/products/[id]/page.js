import Image from "next/image";
import Link from "next/link";
import AdminPageHeader, {
  AdminActionLink,
} from "@/components/admin/AdminPageHeader";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import { mockProducts } from "@/lib/admin/mockProducts";

function formatCurrency(amount) {
  if (!amount) {
    return "Custom quote";
  }

  return `Rp${amount.toLocaleString("id-ID")}`;
}

export default async function AdminProductDetailPage({ params }) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id) ?? mockProducts[0];

  return (
    <div className="grid gap-6">
      <AdminPageHeader
        eyebrow="Product Preview"
        title={product.name}
        description="Halaman detail ini membantu admin melihat struktur preview produk sebelum nanti dihubungkan ke detail page atau drawer preview yang sebenarnya."
        action={
          <>
            <AdminActionLink
              href={`/admin/products/${product.id}/edit`}
              label="Edit Produk"
            />
            <AdminActionLink
              href="/admin/products"
              label="Kembali ke List"
              secondary
            />
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_380px]">
        <section className="grid gap-6">
          <div className="overflow-hidden rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/80 shadow-lg shadow-[#6f4f13]/5">
            <div className="relative aspect-[16/10]">
              <Image
                src={product.thumbnail}
                alt={product.name}
                fill
                sizes="(max-width: 1280px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {product.images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative overflow-hidden rounded-[28px] border border-[rgba(111,79,19,0.1)] bg-white/80 shadow-lg shadow-[#6f4f13]/5"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${product.name} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="grid h-fit gap-6">
          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,253,248,0.82)] p-6 shadow-lg shadow-[#6f4f13]/5">
            <div className="flex flex-wrap items-center gap-3">
              <AdminStatusBadge status={product.status} />
              {product.isFeatured ? (
                <span className="rounded-full bg-[rgba(184,138,42,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-strong)]">
                  Unggulan
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-3xl font-semibold text-[var(--color-text)]">
              {formatCurrency(product.price)}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">
              {product.description}
            </p>
          </section>

          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/76 p-6 shadow-lg shadow-[#6f4f13]/5">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Informasi produk
            </h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
                  Kategori
                </dt>
                <dd className="mt-1 font-medium text-[var(--color-text)]">{product.category}</dd>
              </div>
              <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
                  Lead time
                </dt>
                <dd className="mt-1 font-medium text-[var(--color-text)]">{product.leadTime}</dd>
              </div>
              <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
                  Minimum order
                </dt>
                <dd className="mt-1 font-medium text-[var(--color-text)]">{product.minOrder}</dd>
              </div>
              <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
                  Tags
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[rgba(184,138,42,0.12)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-strong)]"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,255,255,0.76)] p-6 shadow-lg shadow-[#6f4f13]/5">
            <Link
              href={`/admin/products/${product.id}/edit`}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a5816,#c89a3b)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20"
            >
              Edit Produk Ini
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
