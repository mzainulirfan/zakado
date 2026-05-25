import Link from "next/link";

export default function AdminPageHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[32px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,253,248,0.82)] p-6 shadow-lg shadow-[#6f4f13]/5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-primary-strong)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 font-display text-3xl leading-tight font-semibold text-[var(--color-text)] sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-soft)] sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <div className="flex flex-wrap gap-3">
          {action}
        </div>
      ) : null}
    </div>
  );
}

export function AdminActionLink({ href, label, secondary = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${
        secondary
          ? "border border-[rgba(111,79,19,0.12)] bg-white/80 text-[var(--color-text)] hover:border-[rgba(184,138,42,0.3)] hover:text-[var(--color-primary-strong)]"
          : "bg-[linear-gradient(135deg,#7a5816,#c89a3b)] text-white shadow-lg shadow-[#b88a2a]/20 hover:brightness-[1.03]"
      }`}
    >
      {label}
    </Link>
  );
}
