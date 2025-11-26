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
              Bold, complex spiced black teas crafted for discerning palates. 
              Experience the calm focus that only tea can deliver.
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
                Tea&apos;s natural properties create smooth, sustained alertness without the jitters or afternoon crash. 
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

      {/* Brand Story Teaser */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-square bg-brown/20 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-gold/60 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-cream/50 text-sm">Brand Portrait</p>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <p className="text-gold uppercase tracking-widest text-sm mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                A Worthy Alternative
              </h2>
              <p className="text-cream/80 mb-6 leading-relaxed">
                AXIOS was founded for those who have accepted the trade-offs of their morning 
                ritual as inevitable. The jitters. The digestive distress. The afternoon collapse. 
                There had to be something better.
              </p>
              <p className="text-cream/80 mb-8 leading-relaxed">
                The discovery of traditional spiced black tea changed everything. Here was something 
                bold, warming, and complex. Tea that stands on its own merit and delivers what coffee 
                never could: calm, sustained focus without the turbulence.
              </p>
              <Link
                href="/about"
                className="btn-secondary px-6 py-3 rounded font-semibold uppercase tracking-wider inline-block"
              >
                Discover the Full Story
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
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">Ceylon Cinnamon</h3>
              <p className="text-navy/70 text-sm">
                250 times less coumarin than cassia, safe for daily enjoyment
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">CTC Assam Base</h3>
              <p className="text-navy/70 text-sm">
                Robust, malty tea that cuts through milk and spices
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">Small Batch</h3>
              <p className="text-navy/70 text-sm">
                Crafted by hand in Hudson Falls, New York
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">Eco Conscious</h3>
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
            Join those who have discovered what tea can truly be. 
            Begin with our Signature Kairos blend, the perfect introduction to AXIOS.
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
