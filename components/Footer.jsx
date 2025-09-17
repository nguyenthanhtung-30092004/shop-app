export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center p-4 mt-8">
      <p>© 2025 MyShop. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
}
