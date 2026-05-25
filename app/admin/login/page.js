import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f7f1e4_0%,#f1e5cb_45%,#fbf8ef_100%)] px-4 py-10 text-[var(--color-text)] sm:px-6">
      <section className="w-full max-w-md rounded-[36px] border border-[rgba(111,79,19,0.12)] bg-[rgba(255,253,248,0.92)] p-8 shadow-2xl shadow-[#6f4f13]/10 sm:p-10">
        <div className="text-center">
          <p className="font-display text-4xl font-semibold text-[var(--color-text)]">
            Zakado
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
            Admin Login
          </p>
        </div>

        <AdminLoginForm />
      </section>
    </main>
  );
}
