export default function AdminStatCard({ label, value, change }) {
  return (
    <div className="rounded-[28px] border border-[rgba(111,79,19,0.1)] bg-[rgba(255,255,255,0.76)] p-5 shadow-lg shadow-[#6f4f13]/5">
      <p className="text-sm text-[var(--color-text-soft)]">{label}</p>
      <p className="mt-3 font-display text-4xl font-semibold text-[var(--color-text)]">
        {value}
      </p>
      <p className="mt-3 text-sm text-[var(--color-primary-strong)]">{change}</p>
    </div>
  );
}
