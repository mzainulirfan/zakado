import Image from "next/image";
import { createOrderMessage } from "@/lib/cta";
import { galleryItems } from "@/lib/siteData";

export default function Gallery() {
  return (
    <section id="galeri" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Galeri hasil custom
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-text)]">
            Visual yang membantu calon pembeli membayangkan hasil akhirnya.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-soft)]">
            Section ini dirancang sebagai bukti kualitas visual Zakado. Semakin
            banyak foto asli yang ditampilkan, semakin tinggi rasa percaya calon
            pembeli untuk order.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`surface-card overflow-hidden rounded-[30px] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-80" : "h-64"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="surface-card mt-8 flex flex-col gap-4 rounded-[28px] p-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            Ingin hasil custom yang mirip dengan referensi Anda?
          </h3>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
            Kirim foto referensi, budget, dan deadline ke WhatsApp. Tim Zakado
            bantu sarankan format yang paling realistis untuk diproduksi.
          </p>
        </div>
        <a
          href={createOrderMessage(
            "Gallery CTA",
            "Halo Zakado, saya ingin konsultasi hasil custom berdasarkan referensi saya."
          )}
          target="_blank"
          rel="noreferrer"
          className="cta-primary inline-flex items-center gap-2 self-start rounded-full px-5 py-3 text-sm font-semibold transition md:self-auto"
        >
          <i className="bx bxl-whatsapp text-lg"></i>
          Konsultasi Referensi
        </a>
      </div>
    </section>
  );
}
