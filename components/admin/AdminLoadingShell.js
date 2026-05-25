export default function AdminLoadingShell({
  title = "Memuat halaman admin",
  description = "Menyiapkan layout, data dummy, dan komponen UI.",
}) {
  return (
    <div className="grid gap-6">
      <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,253,248,0.82)] p-6 shadow-lg shadow-[#6f4f13]/5">
        <div className="h-4 w-28 rounded-full bg-[rgba(184,138,42,0.16)]" />
        <div className="mt-4 h-12 w-full max-w-2xl rounded-2xl bg-[rgba(111,79,19,0.08)]" />
        <div className="mt-4 h-5 w-full max-w-3xl rounded-full bg-[rgba(111,79,19,0.06)]" />
        <div className="mt-2 h-5 w-full max-w-xl rounded-full bg-[rgba(111,79,19,0.06)]" />
        <div className="mt-6 flex gap-3">
          <div className="h-12 w-40 rounded-2xl bg-[rgba(111,79,19,0.08)]" />
          <div className="h-12 w-40 rounded-2xl bg-[rgba(111,79,19,0.08)]" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[28px] border border-[rgba(111,79,19,0.1)] bg-white/76 p-5 shadow-lg shadow-[#6f4f13]/5"
          >
            <div className="h-4 w-24 rounded-full bg-[rgba(111,79,19,0.08)]" />
            <div className="mt-4 h-10 w-20 rounded-2xl bg-[rgba(111,79,19,0.08)]" />
            <div className="mt-4 h-4 w-28 rounded-full bg-[rgba(184,138,42,0.12)]" />
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-white/76 p-6 shadow-lg shadow-[#6f4f13]/5">
        <p className="text-sm font-semibold text-[var(--color-text)]">{title}</p>
        <p className="mt-2 text-sm text-[var(--color-text-soft)]">{description}</p>
        <div className="mt-6 grid gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-[rgba(111,79,19,0.08)] bg-[rgba(251,248,239,0.72)] p-5"
            >
              <div className="h-5 w-40 rounded-full bg-[rgba(111,79,19,0.08)]" />
              <div className="mt-3 h-4 w-full rounded-full bg-[rgba(111,79,19,0.06)]" />
              <div className="mt-2 h-4 w-2/3 rounded-full bg-[rgba(111,79,19,0.06)]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
