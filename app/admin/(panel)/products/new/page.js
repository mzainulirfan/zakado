import AdminProductForm from "@/components/admin/AdminProductForm";

export const metadata = {
  title: "Tambah Produk",
};

export default function AdminNewProductPage() {
  return <AdminProductForm mode="create" />;
}
