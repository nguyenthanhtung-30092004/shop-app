"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">MyShop</Link>
      </div>

      {/* Navigation */}
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">
          Trang chủ
        </Link>
        <Link href="/cart" className="hover:underline">
          Giỏ hàng
        </Link>
        <Link href="/login" className="hover:underline">
          Đăng nhập
        </Link>
      </nav>
    </header>
  );
}
