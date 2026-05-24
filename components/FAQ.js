import { faqItems } from "@/lib/siteData";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[rgba(248,236,218,0.45)] py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            FAQ
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-text)]">
            Pertanyaan yang biasanya muncul sebelum order pertama.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="surface-card rounded-[24px] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-text)]">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
