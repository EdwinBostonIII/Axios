import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-navy text-cream min-h-[90vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Brand Mark */}
            <div className="mb-8">
              <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wider text-gold mb-2">
                AXIOS
              </h1>
              <p className="greek-text text-2xl md:text-3xl text-cream/80 mb-4">
                ἄξιος
              </p>
              <div className="w-32 h-0.5 bg-gold mx-auto mb-6" />
              <p className="text-cream/70 text-sm tracking-widest uppercase">
                Premium Artisan Tea Company
              </p>
            </div>

            {/* Tagline */}
            <p className="text-gold italic text-lg md:text-xl mb-8">
              &quot;Worthy is the Lamb&quot; — Revelation 5:12
            </p>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6 max-w-4xl mx-auto leading-tight">
              For Those Who Demand More From Their Morning Ritual
            </h2>

            {/* Subheadline */}
            <p className="text-cream/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Bold, complex spiced black teas crafted for coffee converts. 
              Experience the calm focus of L-theanine without the jitters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teas"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider"
              >
                Explore Our Teas
              </Link>
              <Link
                href="/about"
                className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
              Why Coffee Lovers Choose AXIOS
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">Calm, Focused Energy</h3>
              <p className="text-navy/70">
                L-theanine in tea creates smooth, sustained alertness without the jitters or afternoon crash. 
                Stay sharp from dawn to dusk.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">Gentle on Your Stomach</h3>
              <p className="text-navy/70">
                No more acid reflux or digestive distress. Tea works with your body, not against it. 
                Enjoy your morning ritual comfortably.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">Bold, Complex Flavor</h3>
              <p className="text-navy/70">
                Robust CTC Assam with warming spices delivers the depth and character coffee lovers crave. 
                No weak, floral teas here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">Our Collection</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
              Discover Your Blend
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-navy/70 max-w-2xl mx-auto">
              Each AXIOS blend carries a Greek name from Orthodox scriptural tradition, 
              a guiding motto, and distinctive character. Find the one that speaks to your morning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/teas"
              className="inline-flex items-center text-gold hover:text-brown transition-colors font-semibold"
            >
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Story Teaser */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-square bg-brown/20 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-6xl mb-4 block">🍵</span>
                <p className="text-cream/50 text-sm">Founder Image</p>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <p className="text-gold uppercase tracking-widest text-sm mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                From Coffee Addict to Tea Artisan
              </h2>
              <p className="text-cream/80 mb-6 leading-relaxed">
                I used to drink six cups of coffee a day. The jitters, the acid reflux, 
                the 3 PM crashes—I thought that was just the price of staying sharp. 
                Then I discovered what tea could actually be.
              </p>
              <p className="text-cream/80 mb-8 leading-relaxed">
                Not the weak, floral stuff that left me reaching for another espresso. 
                Real tea. Bold, spiced, complex chai that stood up to my coffee palate 
                and delivered something coffee never could: calm, sustained focus.
              </p>
              <Link
                href="/about"
                className="btn-secondary px-6 py-3 rounded font-semibold uppercase tracking-wider inline-block"
              >
                Read the Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
              Our Commitment to Quality
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-serif text-lg text-navy mb-2">Ceylon Cinnamon</h3>
              <p className="text-navy/70 text-sm">
                250x less coumarin than cassia—safe for daily enjoyment
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🫖</div>
              <h3 className="font-serif text-lg text-navy mb-2">CTC Assam Base</h3>
              <p className="text-navy/70 text-sm">
                Robust, malty tea that cuts through milk and spices
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="font-serif text-lg text-navy mb-2">Small Batch</h3>
              <p className="text-navy/70 text-sm">
                Hand-blended in Hudson Falls, New York
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-serif text-lg text-navy mb-2">Eco-Conscious</h3>
              <p className="text-navy/70 text-sm">
                Kraft packaging with sustainability in mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
            Ready to Transform Your Morning?
          </h2>
          <p className="text-navy/80 text-lg mb-8">
            Join thousands who&apos;ve discovered what tea can really be. 
            Start with our Signature Kairos blend—the perfect introduction to AXIOS.
          </p>
          <Link
            href="/teas/kairos"
            className="bg-navy text-gold px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider inline-block hover:bg-navy/90 transition-colors"
          >
            Shop Kairos — $22
          </Link>
        </div>
      </section>
    </Layout>
  );
}
