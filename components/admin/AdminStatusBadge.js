const statusStyles = {
  active:
    "bg-[rgba(112,111,43,0.12)] text-[#5b5d1f] border-[rgba(112,111,43,0.18)]",
  draft:
    "bg-[rgba(184,138,42,0.12)] text-[var(--color-primary-strong)] border-[rgba(184,138,42,0.18)]",
  archived:
    "bg-[rgba(103,95,80,0.12)] text-[var(--color-text-soft)] border-[rgba(103,95,80,0.18)]",
};

const statusLabels = {
  active: "Aktif",
  draft: "Draft",
  archived: "Arsip",
};

export default function AdminStatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
        statusStyles[status] ?? statusStyles.draft
      }`}
    >
      {statusLabels[status] ?? status}
    </span>
  );
}
