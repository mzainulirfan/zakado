import AdminPageHeader, {
  AdminActionLink,
} from "@/components/admin/AdminPageHeader";
import AdminStatCard from "@/components/admin/AdminStatCard";
import {
  dashboardStats,
  mockProducts,
  reminders,
} from "@/lib/admin/mockProducts";

export const metadata = {
  title: "Dashboard Admin",
};

export default function AdminDashboardPage() {
  const drafts = mockProducts.filter((product) => product.status === "draft");
  const activeProducts = mockProducts.filter((product) => product.status === "active");
  const needsAttention = mockProducts.filter(
    (product) =>
      product.status !== "active" ||
      product.images.length < 2 ||
      !product.comparePrice
  );

  return (
    <div className="grid gap-6">
      <AdminPageHeader
        eyebrow="Dashboard"
        title="Dashboard katalog"
        action={
          <>
            <AdminActionLink href="/admin/products/new" label="Tambah Produk" />
            <AdminActionLink
              href="/admin/products"
              label="Kelola Produk"
              secondary
            />
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <AdminStatCard key={stat.id} {...stat} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        <AdminActionLink href="/admin/products/new" label="Tambah Produk Baru" />
        <AdminActionLink href="/admin/products" label="Lihat Semua Produk" secondary />
        <AdminActionLink href="/admin/products?status=draft" label="Review Draft" secondary />
        <AdminActionLink href="/admin/products?filter=attention" label="Cek Yang Belum Lengkap" secondary />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_1.15fr_0.8fr]">
        <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,255,255,0.78)] p-6 shadow-lg shadow-[#6f4f13]/5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-text)]">
              Draft untuk dilanjutkan
            </h2>
            <span className="rounded-full bg-[rgba(184,138,42,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-strong)]">
              {drafts.length} item
            </span>
          </div>

          <div className="mt-6 grid gap-4">
            {drafts.map((product) => (
              <div
                key={product.id}
                className="rounded-[28px] border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.76)] p-5"
              >
                <p className="text-lg font-semibold text-[var(--color-text)]">
                  {product.name}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-soft)]">
                  {product.category} • {product.leadTime}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <AdminActionLink href={`/admin/products/${product.id}/edit`} label="Lanjut Edit" />
                  <AdminActionLink href={`/admin/products/${product.id}`} label="Preview" secondary />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,255,255,0.78)] p-6 shadow-lg shadow-[#6f4f13]/5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-text)]">
              Produk aktif
            </h2>
            <AdminActionLink href="/admin/products" label="Buka List" secondary />
          </div>

          <div className="mt-6 grid gap-3">
            {activeProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 rounded-[24px] border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.76)] px-4 py-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--color-text)]">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                    {product.category}
                  </p>
                </div>
                <AdminActionLink href={`/admin/products/${product.id}/edit`} label="Edit" secondary />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[linear-gradient(180deg,rgba(255,253,248,0.92),rgba(243,234,212,0.96))] p-6 shadow-lg shadow-[#6f4f13]/5">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-text)]">
            Perlu perhatian
          </h2>
          <div className="mt-6 grid gap-3">
            {needsAttention.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="rounded-[24px] border border-[rgba(111,79,19,0.08)] bg-white/72 px-4 py-4"
              >
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  {product.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                  {product.images.length < 2
                    ? "Galeri belum lengkap"
                    : !product.comparePrice
                      ? "Harga pembanding belum diisi"
                      : "Masih perlu dirapikan"}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            {reminders.slice(0, 2).map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-dashed border-[rgba(111,79,19,0.14)] px-4 py-3 text-sm text-[var(--color-text-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
