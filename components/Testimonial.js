"use client";

import Icon from "@/components/Icon";
import { testimonials } from "@/lib/siteData";

function renderStars(stars) {
  return (
    <div className="flex gap-1 text-lg text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={`${stars}-${index}`}
          name={index < stars ? "bxs-star" : "bx-star"}
          className="h-4 w-4"
        />
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="testimoni" className="section-shell py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Bukti kepercayaan
        </span>
        <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-text)]">
          Pengalaman pelanggan yang datang karena momen penting, lalu kembali
          karena hasilnya.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="surface-card rounded-[30px] p-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-semibold text-white">
                {item.name.slice(0, 1)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--color-text-soft)]">
                  {`${item.city} · ${item.role}`}
                </p>
              </div>
            </div>
            <div className="mt-5">{renderStars(item.stars)}</div>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
              "{item.text}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
