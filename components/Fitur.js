import { orderSteps, productCategories } from "@/lib/siteData";

export default function Fitur() {
  return (
    <section id="cara-order" className="bg-[var(--color-text)] py-24 text-white">
      <div className="section-shell">
        <div className="max-w-[30rem]">
          <span className="section-kicker text-[var(--color-accent)]">Cara order</span>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Alur simpel agar Anda fokus pada <em className="italic text-[var(--color-accent)]">momennya.</em>
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {productCategories.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-white/78">
              {item}
            </span>
          ))}
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-white/12 xl:block" />
          {orderSteps.map((step, index) => (
            <article key={step.title} className="relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/8 font-display text-2xl font-bold text-[var(--color-accent)]">
                {index + 1}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
