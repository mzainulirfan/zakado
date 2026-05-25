import Image from "next/image";
import { benefits } from "@/lib/siteData";
import Icon from "@/components/Icon";

export default function About() {
  return (
    <section className="bg-[var(--color-surface)] py-24">
      <div className="section-shell">
        <div className="max-w-[32rem]">
          <span className="section-kicker">Kenapa Zakado</span>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-[var(--color-text)] md:text-5xl">
            Didesain untuk membuat hadiah terasa lebih <em className="italic text-[var(--color-primary)]">niat.</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-[3.75rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-strong)]">
            <Image
              src="/products/heroImage.webp"
              alt="Packaging Zakado"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-5">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex gap-4 rounded-[1rem] border border-[var(--color-line)] bg-white p-6 transition hover:border-[rgba(242,217,201,0.9)] hover:bg-[var(--color-page)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-strong)] text-[var(--color-primary)]">
                  <Icon name={benefit.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
