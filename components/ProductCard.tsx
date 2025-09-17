import { Product } from "@/app/types/product";
import Link from "next/link";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  // Format giá tiền theo chuẩn VNĐ
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        {/* Ảnh sản phẩm */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />

        {/* Nội dung */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600 mt-2">{formattedPrice}</p>
          <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </Link>
  );
}
