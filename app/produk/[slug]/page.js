import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollTopButton from "@/components/ScrollTopButton";
import Icon from "@/components/Icon";
import {
  createOrderMessage,
  getMarketplaceHelperText,
  getMarketplaceLinks,
} from "@/lib/cta";
import { getProductBySlug, products, SITE_META } from "@/lib/siteData";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk tidak ditemukan",
    };
  }

  return {
    title: `${product.title} | Produk Zakado`,
    description: product.description,
    alternates: {
      canonical: `/produk/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Zakado`,
      description: product.description,
      url: `${SITE_META.siteUrl}/produk/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
  };
}

function DetailInfoCard({ label, value }) {
  return (
    <div className="rounded-[24px] border border-[var(--color-line)] bg-[rgba(255,253,248,0.8)] px-4 py-4">
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--color-text)]">{value}</p>
    </div>
  );
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--color-page)] font-sans text-[var(--color-text)]">
      <Header basePath="/" />

      <section className="section-shell py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-soft)]">
          <Link href="/" className="transition hover:text-[var(--color-primary)]">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/#produk" className="transition hover:text-[var(--color-primary)]">
            Produk
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text)]">{product.title}</span>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="surface-card overflow-hidden rounded-[32px]">
            <div className="relative aspect-[5/4]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 1280px) 100vw, 640px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[rgba(184,138,42,0.12)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-strong)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                {product.category}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-[var(--color-text)] md:text-5xl">
                {product.title}
              </h1>
              <p className="mt-4 text-lg font-semibold text-[var(--color-primary)]">
                {product.price}
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
                {product.longDescription}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <DetailInfoCard label="Cocok untuk" value={product.fitFor} />
              <DetailInfoCard label="Area layanan" value={SITE_META.serviceArea} />
              <DetailInfoCard label="Respons admin" value={SITE_META.responseHours} />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={createOrderMessage(
                  `Product Detail - ${product.title}`,
                  `Halo Zakado, saya ingin konsultasi untuk ${product.title}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="cta-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition"
              >
                <Icon name="bxl-whatsapp" className="h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
              <a
                href="/#produk"
                className="cta-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition"
              >
                Lihat produk lain
                <Icon name="bx-right-arrow-alt" className="h-5 w-5" />
              </a>
            </div>

            <div className="rounded-[28px] border border-[var(--color-line)] bg-[rgba(255,253,248,0.82)] p-5">
              <p className="text-sm font-semibold text-[var(--color-text)]">
                Marketplace juga tersedia
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                {getMarketplaceHelperText()}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {getMarketplaceLinks().map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-choice inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition"
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="surface-card rounded-[32px] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Kenapa pilih produk ini
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text)]">
              Detail yang bisa disesuaikan dengan momen Anda
            </h2>
            <div className="mt-6 grid gap-4">
              {product.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[var(--color-line)] bg-[rgba(255,253,248,0.78)] px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(184,138,42,0.14)] text-[var(--color-primary)]">
                      <Icon name="bx-check" className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-7 text-[var(--color-text)]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[32px] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Catatan order
            </p>
            <div className="mt-6 grid gap-4">
              {product.details.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[var(--color-line)] bg-[rgba(255,253,248,0.78)] px-4 py-4 text-sm leading-7 text-[var(--color-text-soft)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Produk lain
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-text)]">
              Masih ingin bandingkan opsi lain?
            </h2>
          </div>
          <Link
            href="/#produk"
            className="hidden text-sm font-semibold text-[var(--color-primary)] md:inline-flex"
          >
            Kembali ke katalog
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <article
              key={item.slug}
              className="surface-card overflow-hidden rounded-[28px]"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  {item.price}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                  {item.description}
                </p>
                <Link
                  href={`/produk/${item.slug}`}
                  className="cta-secondary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition"
                >
                  Lihat detail
                  <Icon name="bx-right-arrow-alt" className="h-5 w-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer basePath="/" />
      <FloatingWhatsApp />
      <ScrollTopButton />
    </main>
  );
}
