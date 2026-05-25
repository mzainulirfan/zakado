"use client";

import Icon from "@/components/Icon";
import { testimonials } from "@/lib/siteData";

function renderStars(stars) {
  return (
    <div className="flex gap-1 text-[var(--color-accent)]">
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
    <section id="testimoni" className="section-shell py-24">
      <div className="max-w-2xl">
        <span className="section-kicker">Testimoni</span>
        <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-[var(--color-text)] md:text-5xl">
          Datang karena momen penting, <em className="italic text-[var(--color-primary)]">kembali</em> karena hasilnya.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="relative overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,26,16,0.08)]"
          >
            <span className="pointer-events-none absolute right-5 top-0 font-display text-8xl leading-none text-[var(--color-surface-strong)]">
              "
            </span>
            {renderStars(item.stars)}
            <p className="relative z-10 mt-5 text-base leading-8 italic text-[var(--color-text-soft)]">
              {item.text}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-strong)] font-display text-lg font-bold text-[var(--color-primary)]">
                {item.name.slice(0, 1)}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{item.name}</h3>
                <p className="text-sm text-[var(--color-text-soft)]">
                  {`${item.city} · ${item.role}`}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
