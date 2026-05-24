import { benefits, orderSteps, productCategories } from "@/lib/siteData";

export default function Fitur() {
  return (
    <>
      <section id="cara-order" className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Cara order
            </span>
            <h2 className="font-display mt-3 text-4xl font-semibold">
              Alur pemesanan yang dibuat simpel agar Anda bisa fokus pada momennya.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-soft)]">
              Zakado dirancang untuk pengguna yang ingin hasil custom yang
              berkesan tanpa harus ribet mengatur semuanya sendiri.
            </p>
            <div className="surface-card mt-8 rounded-[28px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Cocok untuk
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {productCategories.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-[var(--color-text-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {orderSteps.map((step, index) => (
              <article
                key={step.title}
                className="surface-card rounded-[28px] p-6 transition hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-surface-strong)] text-3xl text-[var(--color-primary)]">
                    <i className={`bx ${step.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-primary)]">
                      Step {index + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="keunggulan" className="bg-[rgba(248,236,218,0.45)] py-20">
        <div className="section-shell">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Kenapa Zakado
            </span>
            <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-text)]">
              Didesain untuk membuat hadiah terasa lebih niat, bukan lebih ribet.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="surface-card rounded-[28px] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl text-[var(--color-primary)]">
                  <i className={`bx ${benefit.icon}`}></i>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
