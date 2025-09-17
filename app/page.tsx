import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data.js";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Danh Sách Sản Phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
