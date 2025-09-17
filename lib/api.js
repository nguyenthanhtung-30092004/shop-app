// Lấy toàn bộ sản phẩm
export async function fetchProducts(params) {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

// Lấy chi tiết sản phẩm theo id
export async function fetchProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
