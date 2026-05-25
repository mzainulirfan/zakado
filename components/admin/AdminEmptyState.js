import Link from "next/link";

export default function AdminEmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}) {
  return (
    <div className="rounded-[32px] border border-dashed border-[rgba(111,79,19,0.18)] bg-[rgba(255,253,248,0.72)] px-6 py-12 text-center">
      <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">
        {title}
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-text-soft)] sm:text-base">
        {description}
      </p>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className="mt-6 inline-flex rounded-2xl bg-[linear-gradient(135deg,#7a5816,#c89a3b)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b88a2a]/20"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
