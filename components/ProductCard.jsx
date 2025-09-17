export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.price} ₫</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Thêm vào giỏ
      </button>
    </div>
  );
}
