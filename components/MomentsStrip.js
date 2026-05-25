const momentItems = [
  "Wisuda",
  "Ulang Tahun",
  "Pernikahan",
  "Corporate Gift",
  "Anniversary",
  "Ucapan Personal",
  "Bulk Order",
];

function MomentRow() {
  return momentItems.map((item, index) => (
    <span
      key={`${item}-${index}`}
      className={`inline-flex items-center gap-5 font-display text-base italic whitespace-nowrap ${
        index % 4 === 0 ? "text-[var(--color-accent)]" : "text-white/55"
      }`}
    >
      {index % 4 === 0 ? "✦" : null}
      {item}
      <span className="text-[var(--color-primary)]">·</span>
    </span>
  ));
}

export default function MomentsStrip() {
  return (
    <section aria-label="Momen spesial Zakado" className="overflow-hidden bg-[var(--color-text)] py-7">
      <div className="animate-zakado-marquee flex min-w-max gap-12 px-6">
        <MomentRow />
        <MomentRow />
      </div>
    </section>
  );
}
