import { fetchProductById } from "@/lib/api";
import Link from "next/link";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div className="p-6 text-red-500">Sản phẩm không tồn tại.</div>;
  }

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{formattedPrice}</p>
      <p className="mt-4">{product.description}</p>

      <div className="flex gap-4 mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Thêm vào giỏ
        </button>

        {/* Nút quay lại */}
        <Link
          href="/"
          className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}
