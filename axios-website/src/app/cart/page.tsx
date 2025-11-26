import Layout from "@/components/Layout";
import Link from "next/link";

export default function CartPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-cream mb-2">
            Your Cart
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 bg-cream min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Empty Cart State */}
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-navy mb-4">Your cart is empty</h2>
            <p className="text-navy/60 mb-8">
              Discover our premium artisan chai blends and start your journey to better mornings.
            </p>
            <Link
              href="/teas"
              className="btn-primary px-8 py-4 rounded-lg font-semibold uppercase tracking-wider inline-block"
            >
              Explore Our Teas
            </Link>
          </div>

          {/* E-commerce Integration Notice */}
          <div className="mt-12 bg-white rounded-lg p-6 border border-gold/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">E-commerce Coming Soon</h3>
                <p className="text-navy/70 text-sm">
                  Full shopping cart functionality will be integrated with Square Online for secure checkout. 
                  In the meantime, contact us directly at{" "}
                  <a href="mailto:hello@axiosteaco.com" className="text-gold hover:underline">
                    hello@axiosteaco.com
                  </a>{" "}
                  to place an order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
