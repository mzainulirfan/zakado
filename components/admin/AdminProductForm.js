"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { productCategories } from "@/lib/admin/mockProducts";

function TextField({ label, helpText, required, children }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[var(--color-text)]">
        {label} {required ? <span className="text-[var(--color-primary-strong)]">*</span> : null}
      </span>
      {children}
      {helpText ? (
        <span className="text-xs leading-5 text-[var(--color-text-soft)]">{helpText}</span>
      ) : null}
    </label>
  );
}

function baseInputClass() {
  return "w-full rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-3 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-soft)] focus:border-[rgba(184,138,42,0.4)] focus:ring-4 focus:ring-[rgba(184,138,42,0.12)]";
}

export default function AdminProductForm({ mode = "create", product }) {
  const initialState = useMemo(
    () => ({
      name: product?.name ?? "",
      slug: product?.slug ?? "",
      category: product?.category ?? "Hampers",
      status: product?.status ?? "draft",
      price: product?.price ? String(product.price) : "",
      comparePrice: product?.comparePrice ? String(product.comparePrice) : "",
      shortDescription: product?.shortDescription ?? "",
      description: product?.description ?? "",
      leadTime: product?.leadTime ?? "",
      minOrder: product?.minOrder ?? "",
      customizable: product?.customizable ?? true,
      isFeatured: product?.isFeatured ?? false,
      tags: product?.tags?.join(", ") ?? "",
      images: product?.images ?? [],
    }),
    [product]
  );

  const [form, setForm] = useState(initialState);

  const setField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const title = mode === "edit" ? "Edit produk" : "Tambah produk baru";

  return (
    <div className="grid gap-6">
      <div className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,253,248,0.82)] p-6 shadow-lg shadow-[#6f4f13]/5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-strong)]">
              Product Editor
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--color-text)]">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-soft)]">
              Prototype ini fokus pada struktur input, grouping informasi, dan alur kerja admin sebelum backend serta upload media sungguhan dihubungkan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--color-text)]"
            >
              Batal
            </button>
            <button
              type="button"
              className="rounded-2xl border border-[rgba(111,79,19,0.12)] bg-[rgba(255,255,255,0.82)] px-5 py-3 text-sm font-semibold text-[var(--color-primary-strong)]"
            >
              Simpan Draft
            </button>
            <button
              type="button"
              className="rounded-2xl bg-[linear-gradient(135deg,#7a5816,#c89a3b)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20"
            >
              {mode === "edit" ? "Update Produk" : "Publish Produk"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_360px]">
        <div className="grid gap-6">
          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/72 p-6 shadow-lg shadow-[#6f4f13]/5">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Informasi utama
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <TextField label="Nama produk" required>
                <input
                  className={baseInputClass()}
                  value={form.name}
                  onChange={(event) => setField("name", event.target.value)}
                  placeholder="Contoh: Hampers Wisuda Signature"
                />
              </TextField>

              <TextField
                label="Slug"
                helpText="Slug nantinya bisa dihasilkan otomatis dari nama produk."
              >
                <input
                  className={baseInputClass()}
                  value={form.slug}
                  onChange={(event) => setField("slug", event.target.value)}
                  placeholder="hampers-wisuda-signature"
                />
              </TextField>

              <TextField label="Kategori" required>
                <select
                  className={baseInputClass()}
                  value={form.category}
                  onChange={(event) => setField("category", event.target.value)}
                >
                  {productCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </TextField>

              <TextField label="Status produk" required>
                <select
                  className={baseInputClass()}
                  value={form.status}
                  onChange={(event) => setField("status", event.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="active">Aktif</option>
                  <option value="archived">Arsip</option>
                </select>
              </TextField>
            </div>
          </section>

          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/72 p-6 shadow-lg shadow-[#6f4f13]/5">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Harga dan label
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <TextField label="Harga utama" required>
                <input
                  className={baseInputClass()}
                  value={form.price}
                  onChange={(event) => setField("price", event.target.value)}
                  placeholder="135000"
                />
              </TextField>

              <TextField label="Harga coret" helpText="Opsional untuk promo atau anchor price.">
                <input
                  className={baseInputClass()}
                  value={form.comparePrice}
                  onChange={(event) => setField("comparePrice", event.target.value)}
                  placeholder="155000"
                />
              </TextField>

              <TextField
                label="Label / tags"
                helpText="Pisahkan dengan koma. Contoh: Best Seller, Custom Nama"
              >
                <input
                  className={baseInputClass()}
                  value={form.tags}
                  onChange={(event) => setField("tags", event.target.value)}
                  placeholder="Best Seller, Custom Nama"
                />
              </TextField>

              <div className="grid gap-3">
                <span className="text-sm font-semibold text-[var(--color-text)]">Flags</span>
                <label className="flex items-center justify-between rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-3 text-sm text-[var(--color-text)]">
                  <span>Tampilkan sebagai produk unggulan</span>
                  <input
                    type="checkbox"
                    checked={form.isFeatured}
                    onChange={(event) => setField("isFeatured", event.target.checked)}
                  />
                </label>
                <label className="flex items-center justify-between rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-3 text-sm text-[var(--color-text)]">
                  <span>Produk bisa dikustomisasi</span>
                  <input
                    type="checkbox"
                    checked={form.customizable}
                    onChange={(event) => setField("customizable", event.target.checked)}
                  />
                </label>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/72 p-6 shadow-lg shadow-[#6f4f13]/5">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Deskripsi produk
            </h2>
            <div className="mt-5 grid gap-5">
              <TextField
                label="Deskripsi singkat"
                required
                helpText="Dipakai untuk list produk dan preview cepat."
              >
                <textarea
                  className={`${baseInputClass()} min-h-28 resize-none`}
                  value={form.shortDescription}
                  onChange={(event) => setField("shortDescription", event.target.value)}
                  placeholder="Ringkas, menjual, dan cepat dipahami."
                />
              </TextField>

              <TextField
                label="Deskripsi lengkap"
                helpText="Bisa dipakai nanti untuk halaman detail atau modal product preview."
              >
                <textarea
                  className={`${baseInputClass()} min-h-40 resize-none`}
                  value={form.description}
                  onChange={(event) => setField("description", event.target.value)}
                  placeholder="Jelaskan isi paket, kesan visual, dan alasan memilih produk ini."
                />
              </TextField>
            </div>
          </section>

          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/72 p-6 shadow-lg shadow-[#6f4f13]/5">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Media produk
            </h2>
            <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_220px]">
              <div className="rounded-[28px] border border-dashed border-[rgba(111,79,19,0.18)] bg-[rgba(251,248,239,0.72)] p-6">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Upload area placeholder
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                  Nanti area ini bisa dihubungkan ke upload file, drag and drop, reorder gambar, dan validasi ukuran aset.
                </p>
                <div className="mt-5 rounded-2xl border border-[rgba(111,79,19,0.12)] bg-white/80 px-4 py-4 text-sm text-[var(--color-primary-strong)]">
                  Drop image di sini atau pilih dari media library
                </div>
              </div>

              <div className="grid gap-3">
                {form.images.length ? (
                  form.images.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="relative overflow-hidden rounded-[24px] border border-[rgba(111,79,19,0.1)] bg-white/80"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={image}
                          alt={`Preview produk ${index + 1}`}
                          fill
                          sizes="220px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between px-3 py-3 text-xs text-[var(--color-text-soft)]">
                        <span>{index === 0 ? "Foto utama" : `Foto ${index + 1}`}</span>
                        <span>Preview</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[24px] border border-dashed border-[rgba(111,79,19,0.14)] bg-white/60 px-4 py-8 text-center text-sm text-[var(--color-text-soft)]">
                    Belum ada gambar
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        <aside className="grid h-fit gap-6">
          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/76 p-6 shadow-lg shadow-[#6f4f13]/5">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Detail tambahan
            </h2>
            <div className="mt-5 grid gap-5">
              <TextField label="Estimasi pengerjaan">
                <input
                  className={baseInputClass()}
                  value={form.leadTime}
                  onChange={(event) => setField("leadTime", event.target.value)}
                  placeholder="2-5 hari kerja"
                />
              </TextField>

              <TextField label="Minimum order">
                <input
                  className={baseInputClass()}
                  value={form.minOrder}
                  onChange={(event) => setField("minOrder", event.target.value)}
                  placeholder="1 pcs"
                />
              </TextField>
            </div>
          </section>

          <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[linear-gradient(180deg,rgba(255,253,248,0.88),rgba(243,234,212,0.92))] p-6 shadow-lg shadow-[#6f4f13]/5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-primary-strong)]">
              Preview panel
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--color-text)]">
              Ringkasan cepat
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-[var(--color-text-soft)]">
              <div className="rounded-2xl border border-[rgba(111,79,19,0.1)] bg-white/72 px-4 py-3">
                <span className="block text-xs uppercase tracking-[0.14em]">Nama</span>
                <span className="mt-1 block text-[var(--color-text)]">
                  {form.name || "Belum diisi"}
                </span>
              </div>
              <div className="rounded-2xl border border-[rgba(111,79,19,0.1)] bg-white/72 px-4 py-3">
                <span className="block text-xs uppercase tracking-[0.14em]">Kategori</span>
                <span className="mt-1 block text-[var(--color-text)]">{form.category}</span>
              </div>
              <div className="rounded-2xl border border-[rgba(111,79,19,0.1)] bg-white/72 px-4 py-3">
                <span className="block text-xs uppercase tracking-[0.14em]">Status</span>
                <span className="mt-1 block text-[var(--color-text)]">{form.status}</span>
              </div>
              <div className="rounded-2xl border border-[rgba(111,79,19,0.1)] bg-white/72 px-4 py-3">
                <span className="block text-xs uppercase tracking-[0.14em]">Harga</span>
                <span className="mt-1 block text-[var(--color-text)]">
                  {form.price ? `Rp${Number(form.price).toLocaleString("id-ID")}` : "Belum diisi"}
                </span>
              </div>
            </div>
          </section>

          {mode === "edit" ? (
            <section className="rounded-[32px] border border-[rgba(143,78,45,0.18)] bg-[rgba(255,248,243,0.9)] p-6 shadow-lg shadow-[#8f4e2d]/5">
              <p className="text-sm font-semibold text-[#8f4e2d]">Zona tindakan</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                Saat backend sudah siap, area ini bisa dipakai untuk delete, duplicate, archive, atau restore produk.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-2xl border border-[rgba(143,78,45,0.2)] px-4 py-3 text-sm font-semibold text-[#8f4e2d]"
              >
                Hapus Produk
              </button>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
