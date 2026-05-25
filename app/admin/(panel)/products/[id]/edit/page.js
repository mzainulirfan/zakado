import AdminProductForm from "@/components/admin/AdminProductForm";
import { mockProducts } from "@/lib/admin/mockProducts";

export const metadata = {
  title: "Edit Produk",
};

export default async function AdminEditProductPage({ params }) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id) ?? mockProducts[0];

  return <AdminProductForm mode="edit" product={product} />;
}
