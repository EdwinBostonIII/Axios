import Layout from "@/components/Layout";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

// Generate static paths for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Find related products (excluding current)
  const relatedProducts = products.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="bg-cream py-4 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-navy/60 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-navy/40">/</span>
            <Link href="/teas" className="text-navy/60 hover:text-gold transition-colors">
              Our Teas
            </Link>
            <span className="text-navy/40">/</span>
            <span className="text-navy">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Detail Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image Placeholder */}
            <div className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mb-6 mx-auto rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-6xl">☕</span>
                </div>
                <span className="font-serif text-4xl text-navy font-semibold block">
                  {product.name}
                </span>
                <span className="greek-text text-gold text-2xl mt-2 block">
                  {product.greekText}
                </span>
                <p className="text-navy/50 text-sm mt-4">{product.visualElement}</p>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Category Badge */}
              <span className="inline-block bg-navy text-cream text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                {product.category}
              </span>

              {/* Product Title */}
              <h1 className="font-serif text-4xl md:text-5xl text-navy mb-2">
                {product.name}
              </h1>
              <p className="greek-text text-gold text-xl mb-4">
                {product.greekText} — &quot;{product.motto}&quot;
              </p>

              {/* Scripture */}
              <blockquote className="border-l-4 border-gold pl-4 mb-6 italic text-navy/70">
                &quot;{product.scripture}&quot;
                <cite className="block text-sm mt-2 not-italic text-brown">
                  — {product.scriptureRef}
                </cite>
              </blockquote>

              {/* Description */}
              <p className="text-navy/80 mb-6 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Price and Size */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-4xl text-navy font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-navy/60">
                  {product.size} • {product.cups}
                </span>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4 mb-8">
                <button className="w-full btn-primary py-4 rounded-lg font-semibold text-lg uppercase tracking-wider">
                  Add to Cart
                </button>
                <p className="text-center text-navy/50 text-sm">
                  Free shipping on orders over $50
                </p>
              </div>

              {/* Product Details Accordion */}
              <div className="border-t border-gold/20 pt-6 space-y-6">
                {/* Ingredients */}
                <div>
                  <h3 className="font-serif text-lg text-navy mb-3">Ingredients</h3>
                  <p className="text-navy/70 text-sm">
                    {product.ingredients.join(", ")}
                  </p>
                </div>

                {/* Brewing Instructions */}
                <div>
                  <h3 className="font-serif text-lg text-navy mb-3">Brewing Instructions</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded text-center">
                      <p className="text-gold font-semibold">{product.brewingInstructions.amount}</p>
                      <p className="text-navy/60 text-xs mt-1">Amount</p>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <p className="text-gold font-semibold">{product.brewingInstructions.temperature}</p>
                      <p className="text-navy/60 text-xs mt-1">Temperature</p>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <p className="text-gold font-semibold">{product.brewingInstructions.time}</p>
                      <p className="text-navy/60 text-xs mt-1">Steep Time</p>
                    </div>
                  </div>
                </div>

                {/* Caffeine Content */}
                <div>
                  <h3 className="font-serif text-lg text-navy mb-3">Caffeine Content</h3>
                  <p className="text-navy/70 text-sm">{product.caffeine}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-navy mb-8 text-center">
            You May Also Enjoy
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.slug} href={`/teas/${related.slug}`} className="group block">
                <div className="bg-cream rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center mb-4">
                    <span className="font-serif text-xl text-navy">{related.name}</span>
                    <span className="greek-text text-gold text-sm ml-2">{related.greekText}</span>
                  </div>
                  <p className="text-navy/60 text-sm text-center mb-4">{related.description}</p>
                  <p className="text-center font-semibold text-navy">${related.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
