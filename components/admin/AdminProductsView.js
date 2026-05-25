"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AdminPageHeader, {
  AdminActionLink,
} from "@/components/admin/AdminPageHeader";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import { mockProducts, productCategories } from "@/lib/admin/mockProducts";

function formatCurrency(amount) {
  if (!amount) {
    return "Custom quote";
  }

  return `Rp${amount.toLocaleString("id-ID")}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function ProductStatCard({ label, value, note }) {
  return (
    <div className="rounded-[28px] border border-[rgba(111,79,19,0.1)] bg-white/80 p-5 shadow-lg shadow-[#6f4f13]/5">
      <p className="text-sm text-[var(--color-text-soft)]">{label}</p>
      <p className="mt-3 font-display text-4xl font-semibold text-[var(--color-text)]">
        {value}
      </p>
      <p className="mt-2 text-sm text-[var(--color-primary-strong)]">{note}</p>
    </div>
  );
}

function ConfirmDeleteDialog({ product, onClose }) {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(23,19,12,0.4)] px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[32px] border border-[rgba(143,78,45,0.18)] bg-[rgba(255,252,247,0.98)] p-6 shadow-2xl shadow-[#6f4f13]/15">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8f4e2d]">
          Konfirmasi hapus
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold text-[var(--color-text)]">
          Hapus produk ini?
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
          Produk <span className="font-semibold text-[var(--color-text)]">{product.name}</span> akan dihapus dari daftar. Untuk fase UI ini, aksi belum benar-benar menghapus data, tetapi flow konfirmasi tetap disiapkan.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--color-text)]"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-2xl bg-[#8f4e2d] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8f4e2d]/20"
          >
            Hapus Produk
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  selected,
  onSelect,
  onDelete,
}) {
  const needsAttention = product.images.length < 2 || !product.comparePrice;

  return (
    <article className="overflow-hidden rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/82 shadow-lg shadow-[#6f4f13]/5">
      <div className="relative aspect-[16/10] bg-[rgba(251,248,239,0.72)]">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          sizes="(max-width: 1536px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onSelect(product.id)}
              className="h-4 w-4 rounded border-[rgba(111,79,19,0.2)]"
              aria-label={`Pilih ${product.name}`}
            />
            <AdminStatusBadge status={product.status} />
          </div>
          {product.isFeatured ? (
            <span className="rounded-full bg-[rgba(23,19,12,0.72)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Unggulan
            </span>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 p-5">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-primary-strong)]">
                {product.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
                {product.name}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-[var(--color-text)]">
                {formatCurrency(product.price)}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                {product.minOrder}
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
            {product.shortDescription}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
              Update
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-text)]">
              {formatDate(product.updatedAt)}
            </p>
          </div>
          <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
              Lead time
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-text)]">
              {product.leadTime}
            </p>
          </div>
          <div className="rounded-2xl border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
              Galeri
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-text)]">
              {product.images.length} gambar
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[rgba(184,138,42,0.12)] px-3 py-1 text-xs font-medium text-[var(--color-primary-strong)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4 rounded-[24px] border border-[rgba(111,79,19,0.08)] bg-[rgba(255,253,248,0.76)] px-4 py-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">
              {needsAttention ? "Perlu dirapikan" : "Siap dikelola"}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-soft)]">
              {needsAttention
                ? product.images.length < 2
                  ? "Tambahkan foto pendukung untuk galeri produk."
                  : "Lengkapi harga pembanding untuk promo atau anchor price."
                : "Data utama produk sudah cukup lengkap."}
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
              needsAttention
                ? "bg-[rgba(143,78,45,0.12)] text-[#8f4e2d]"
                : "bg-[rgba(112,111,43,0.12)] text-[#5b5d1f]"
            }`}
          >
            {needsAttention ? "Check" : "OK"}
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-4">
          <Link
            href={`/admin/products/${product.id}`}
            className="inline-flex items-center justify-center rounded-2xl border border-[rgba(111,79,19,0.12)] px-4 py-3 text-sm font-medium text-[var(--color-text)]"
          >
            Detail
          </Link>
          <Link
            href={`/admin/products/${product.id}/edit`}
            className="inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7a5816,#c89a3b)] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rounded-2xl border border-[rgba(111,79,19,0.12)] px-4 py-3 text-sm font-medium text-[var(--color-text-soft)]"
          >
            Duplikasi
          </button>
          <button
            type="button"
            onClick={() => onDelete(product)}
            className="rounded-2xl border border-[rgba(143,78,45,0.18)] px-4 py-3 text-sm font-medium text-[#8f4e2d]"
          >
            Hapus
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductTable({
  products,
  selectedIds,
  onSelect,
  onSelectAll,
  onDelete,
}) {
  const allSelected = products.length > 0 && products.every((product) => selectedIds.includes(product.id));

  return (
    <section className="overflow-hidden rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/82 shadow-lg shadow-[#6f4f13]/5">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[rgba(111,79,19,0.08)]">
          <thead className="bg-[rgba(243,234,212,0.72)]">
            <tr className="text-left text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
              <th className="px-5 py-4 font-medium">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={() => onSelectAll(products)}
                  aria-label="Pilih semua produk"
                />
              </th>
              <th className="px-6 py-4 font-medium">Produk</th>
              <th className="px-6 py-4 font-medium">Kategori</th>
              <th className="px-6 py-4 font-medium">Harga</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Update</th>
              <th className="px-6 py-4 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(111,79,19,0.08)]">
            {products.map((product) => (
              <tr key={product.id} className="align-top">
                <td className="px-5 py-5">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(product.id)}
                    onChange={() => onSelect(product.id)}
                    aria-label={`Pilih ${product.name}`}
                  />
                </td>
                <td className="px-6 py-5">
                  <div className="flex min-w-[280px] items-start gap-4">
                    <div className="relative h-[72px] w-[72px] overflow-hidden rounded-[22px] border border-[rgba(111,79,19,0.1)] bg-[rgba(251,248,239,0.72)]">
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        {product.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-text-soft)]">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-[var(--color-text-soft)]">
                  {product.category}
                </td>
                <td className="px-6 py-5 text-sm">
                  <p className="font-semibold text-[var(--color-text)]">
                    {formatCurrency(product.price)}
                  </p>
                  {product.comparePrice ? (
                    <p className="mt-1 text-[var(--color-text-soft)] line-through">
                      {formatCurrency(product.comparePrice)}
                    </p>
                  ) : null}
                </td>
                <td className="px-6 py-5">
                  <AdminStatusBadge status={product.status} />
                </td>
                <td className="px-6 py-5 text-sm text-[var(--color-text-soft)]">
                  {formatDate(product.updatedAt)}
                </td>
                <td className="px-6 py-5">
                  <div className="flex min-w-[220px] flex-wrap gap-2">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="rounded-2xl border border-[rgba(111,79,19,0.12)] px-3 py-2 text-sm font-medium text-[var(--color-text)]"
                    >
                      Detail
                    </Link>
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="rounded-2xl border border-[rgba(111,79,19,0.12)] px-3 py-2 text-sm font-medium text-[var(--color-primary-strong)]"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="rounded-2xl border border-[rgba(111,79,19,0.12)] px-3 py-2 text-sm font-medium text-[var(--color-text-soft)]"
                    >
                      Duplikasi
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(product)}
                      className="rounded-2xl border border-[rgba(143,78,45,0.18)] px-3 py-2 text-sm font-medium text-[#8f4e2d]"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AdminProductsView() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState("card");
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const stats = useMemo(() => {
    const active = mockProducts.filter((item) => item.status === "active").length;
    const draft = mockProducts.filter((item) => item.status === "draft").length;
    const featured = mockProducts.filter((item) => item.isFeatured).length;
    const incomplete = mockProducts.filter(
      (item) => item.images.length < 2 || !item.comparePrice
    ).length;

    return { active, draft, featured, incomplete };
  }, []);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchQuery =
        query.trim() === "" ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchStatus =
        statusFilter === "all" ? true : product.status === statusFilter;

      const matchCategory =
        categoryFilter === "all" ? true : product.category === categoryFilter;

      return matchQuery && matchStatus && matchCategory;
    });
  }, [categoryFilter, query, statusFilter]);

  const selectedCount = selectedIds.length;

  const toggleSelect = (id) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const toggleSelectAll = (products) => {
    const ids = products.map((product) => product.id);
    const allSelected = ids.every((id) => selectedIds.includes(id));

    setSelectedIds((current) =>
      allSelected
        ? current.filter((id) => !ids.includes(id))
        : Array.from(new Set([...current, ...ids]))
    );
  };

  const applyQuickFilter = (chip) => {
    if (chip === "Semua") {
      setStatusFilter("all");
      setCategoryFilter("all");
      return;
    }

    if (chip === "Aktif") {
      setStatusFilter("active");
      return;
    }

    if (chip === "Draft") {
      setStatusFilter("draft");
      return;
    }

    setCategoryFilter(chip);
  };

  return (
    <div className="grid gap-6">
      <AdminPageHeader
        eyebrow="Product Catalog"
        title="Kelola produk"
        action={
          <>
            <AdminActionLink href="/admin/products/new" label="Tambah Produk" />
            <AdminActionLink href="/admin" label="Dashboard" secondary />
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ProductStatCard
          label="Produk aktif"
          value={stats.active}
          note="siap tampil di katalog"
        />
        <ProductStatCard
          label="Draft"
          value={stats.draft}
          note="butuh review sebelum publish"
        />
        <ProductStatCard
          label="Unggulan"
          value={stats.featured}
          note="masuk highlight landing page"
        />
        <ProductStatCard
          label="Belum lengkap"
          value={stats.incomplete}
          note="foto atau harga pembanding"
        />
      </section>

      <section className="sticky top-[89px] z-10 rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,253,248,0.94)] p-5 shadow-lg shadow-[#6f4f13]/8 backdrop-blur-xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="grid flex-1 gap-4 xl:grid-cols-[minmax(0,1.2fr)_220px_220px]">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">Cari produk</span>
              <input
                className="w-full rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/88 px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-soft)]"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari nama, kategori, atau tag"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">Status</span>
              <select
                className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/88 px-4 py-3 text-sm text-[var(--color-text)] outline-none"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="all">Semua status</option>
                <option value="active">Aktif</option>
                <option value="draft">Draft</option>
                <option value="archived">Arsip</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">Kategori</span>
              <select
                className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/88 px-4 py-3 text-sm text-[var(--color-text)] outline-none"
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
              >
                <option value="all">Semua kategori</option>
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap gap-2 xl:justify-end">
            <button
              type="button"
              onClick={() => setViewMode("card")}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                viewMode === "card"
                  ? "bg-[linear-gradient(135deg,#7a5816,#c89a3b)] text-white shadow-lg shadow-[#b88a2a]/20"
                  : "border border-[rgba(111,79,19,0.12)] bg-white/88 text-[var(--color-text-soft)]"
              }`}
            >
              Card View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                viewMode === "table"
                  ? "bg-[linear-gradient(135deg,#7a5816,#c89a3b)] text-white shadow-lg shadow-[#b88a2a]/20"
                  : "border border-[rgba(111,79,19,0.12)] bg-white/88 text-[var(--color-text-soft)]"
              }`}
            >
              Table View
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {["Semua", "Aktif", "Draft", "Corporate", "Hampers"].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => applyQuickFilter(chip)}
              className="rounded-full border border-[rgba(111,79,19,0.1)] bg-white/76 px-4 py-2 text-sm text-[var(--color-text-soft)] transition hover:border-[rgba(184,138,42,0.28)] hover:text-[var(--color-primary-strong)]"
            >
              {chip}
            </button>
          ))}
        </div>

        {selectedCount ? (
          <div className="mt-4 flex flex-col gap-3 rounded-[24px] border border-[rgba(111,79,19,0.08)] bg-[rgba(243,234,212,0.72)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-[var(--color-text)]">
              {selectedCount} produk dipilih
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-text)]"
              >
                Publish
              </button>
              <button
                type="button"
                className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-text)]"
              >
                Arsipkan
              </button>
              <button
                type="button"
                className="rounded-2xl border border-[rgba(143,78,45,0.18)] bg-white/80 px-4 py-2 text-sm font-medium text-[#8f4e2d]"
              >
                Hapus
              </button>
              <button
                type="button"
                onClick={() => setSelectedIds([])}
                className="rounded-2xl px-4 py-2 text-sm font-medium text-[var(--color-text-soft)]"
              >
                Reset
              </button>
            </div>
          </div>
        ) : null}
      </section>

      {filteredProducts.length ? (
        <>
          {viewMode === "card" ? (
            <section className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  selected={selectedIds.includes(product.id)}
                  onSelect={toggleSelect}
                  onDelete={setDeleteTarget}
                />
              ))}
            </section>
          ) : (
            <ProductTable
              products={filteredProducts}
              selectedIds={selectedIds}
              onSelect={toggleSelect}
              onSelectAll={toggleSelectAll}
              onDelete={setDeleteTarget}
            />
          )}

          <section className="flex flex-col gap-3 rounded-[28px] border border-[rgba(111,79,19,0.08)] bg-[rgba(255,253,248,0.78)] px-5 py-4 text-sm text-[var(--color-text-soft)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Menampilkan {filteredProducts.length} dari {mockProducts.length} produk
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-xl border border-[rgba(111,79,19,0.12)] px-3 py-2"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                className="rounded-xl bg-[rgba(184,138,42,0.14)] px-3 py-2 font-semibold text-[var(--color-primary-strong)]"
              >
                1
              </button>
              <button
                type="button"
                className="rounded-xl border border-[rgba(111,79,19,0.12)] px-3 py-2"
              >
                Berikutnya
              </button>
            </div>
          </section>
        </>
      ) : (
        <AdminEmptyState
          title="Tidak ada produk yang cocok"
          description="Coba ubah kata kunci atau filter yang dipakai. Empty state ini tetap dipertahankan supaya pencarian kosong terasa jelas, bukan seperti bug."
          actionHref="/admin/products/new"
          actionLabel="Tambah Produk Baru"
        />
      )}

      <ConfirmDeleteDialog
        product={deleteTarget}
        onClose={() => setDeleteTarget(null)}
      />
    </div>
  );
}
