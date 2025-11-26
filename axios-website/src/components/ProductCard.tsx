import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/teas/${product.slug}`} className="group block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Product Image Placeholder */}
        <div className="aspect-square bg-gradient-to-br from-brown/20 to-navy/10 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {/* Visual Element Placeholder */}
            <div className="w-20 h-20 mb-4 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold text-3xl">☕</span>
            </div>
            <span className="font-serif text-2xl text-navy font-semibold">
              {product.name}
            </span>
            <span className="greek-text text-gold text-lg mt-1">
              {product.greekText}
            </span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-navy text-cream text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <p className="text-brown/80 text-sm italic mb-3">
            "{product.motto}"
          </p>
          <p className="text-navy/70 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl text-navy font-semibold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-navy/50 text-sm">
              {product.size}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
