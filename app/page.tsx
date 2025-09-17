"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false); // ✅ nhớ tắt loading
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Đang tải...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
