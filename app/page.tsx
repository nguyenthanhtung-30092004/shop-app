import { fetchProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "./types/product";

export default async function HomePage() {
  const products: Product[] = await fetchProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
