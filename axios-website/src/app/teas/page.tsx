import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function TeasPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm mb-4">Our Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Discover Your Blend
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Each AXIOS blend carries a Greek name from Orthodox scriptural tradition, 
            a guiding motto, and distinctive character crafted for those who demand 
            excellence from their morning ritual.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="font-serif text-xl text-navy mb-3">CTC Assam Foundation</h3>
              <p className="text-navy/70 text-sm">
                Robust, malty tea that cuts through milk and spices. Brews quickly for 
                dark, rich color that signals strength.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-navy mb-3">Bold Spice Profile</h3>
              <p className="text-navy/70 text-sm">
                Higher black pepper content provides the &quot;bite&quot; coffee drinkers seek. 
                Warming spices without being medicinal.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-navy mb-3">Ceylon Cinnamon Only</h3>
              <p className="text-navy/70 text-sm">
                We choose rare Ceylon cinnamon with naturally low coumarin content, safe 
                and delicious for daily enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Guide Teaser */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-cream mb-6">
            How to Brew the Perfect Cup
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Measure</h4>
              <p className="text-cream/70 text-sm">2.5 to 3g of tea per 6oz water</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Heat</h4>
              <p className="text-cream/70 text-sm">200 to 212°F depending on blend</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Steep</h4>
              <p className="text-cream/70 text-sm">3 to 5 minutes for optimal flavor</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Enjoy</h4>
              <p className="text-cream/70 text-sm">Add milk and sweetener to taste</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
