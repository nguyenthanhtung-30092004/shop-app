import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Áo Thun Unisex",
    price: 150000,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    name: "Quần Jean Slim Fit",
    price: 350000,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    name: "Giày Sneaker Trắng",
    price: 500000,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 4,
    name: "Áo Khoác Hoodie",
    price: 250000,
    image: "https://via.placeholder.com/400",
  },
];

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
