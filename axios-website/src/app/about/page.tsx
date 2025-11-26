import Layout from "@/components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            A Worthy Alternative
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold italic text-lg">
            Crafting excellence for those who seek something better
          </p>
        </div>
      </section>

      {/* The Name Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl text-gold mb-2">AXIOS</h2>
            <p className="greek-text text-3xl text-navy mb-4">ἄξιος</p>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="prose prose-lg mx-auto text-navy/80">
            <p className="text-lg leading-relaxed mb-6">
              <strong className="text-navy">AXIOS (ἄξιος)</strong> is a Greek word appearing 41 times in the New Testament, 
              carrying the essential meaning of worthy, deserving, fitting, and of equal value. The word derives 
              from the root ἄγω (ago), meaning to weigh or to draw down the scale, evoking the ancient 
              image of a balance scale where two things of equal weight find equilibrium.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 my-8 italic">
              <p className="text-xl text-navy mb-2">
                &quot;Ἄξιόν ἐστιν τὸ ἀρνίον&quot;
              </p>
              <p className="text-lg text-navy/70">
                &quot;Worthy is the Lamb&quot;
              </p>
              <cite className="text-brown not-italic text-base">Revelation 5:12</cite>
            </blockquote>

            <p className="text-lg leading-relaxed">
              For a premium artisan tea company, AXIOS communicates multiple layers of meaning. 
              The tea itself is worthy of your morning ritual. The quality is fitting for discerning palates. 
              The experience measures up to the highest standards. For those who recognize the Greek, 
              it carries profound spiritual resonance without being overtly religious.
            </p>
          </div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-cream rounded-lg flex items-center justify-center order-2 md:order-1">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-gold/60 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-navy/50 text-sm">Brand Portrait</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl text-navy mb-6">The Calling</h2>
              
              <p className="text-navy/80 mb-6 leading-relaxed">
                AXIOS was founded with a singular conviction: that countless individuals are searching for 
                something better without knowing it exists. Too many people have accepted the trade-offs 
                of their morning ritual as inevitable. The jitters. The digestive distress. The afternoon 
                collapse. They believe this is simply the price of staying sharp.
              </p>

              <p className="text-navy/80 mb-6 leading-relaxed">
                The founders of AXIOS lived this experience firsthand. They understood what it meant to 
                rely on coffee for energy while enduring its consequences. They also understood the 
                disappointment of seeking alternatives and finding only weak, floral teas that could 
                never satisfy a bold palate.
              </p>

              <p className="text-navy/80 mb-6 leading-relaxed">
                The discovery of traditional spiced black tea transformed everything. Here was something 
                with genuine character: bold, warming, complex. Tea that stood on its own merit and 
                delivered what coffee never could: calm, sustained focus without the turbulence.
              </p>

              <p className="text-navy/80 leading-relaxed">
                AXIOS exists to share this discovery with those who are ready to receive it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-cream mb-8">Our Mission</h2>
          
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            To craft premium artisan teas for those who demand excellence from their morning ritual. 
            AXIOS attracts coffee converts through quality and character, never by diminishing coffee itself.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream mb-3">Artisan Quality</h3>
              <p className="text-cream/70 text-sm">
                Small batch production, premium ingredients, transparent sourcing
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream mb-3">Bold Character</h3>
              <p className="text-cream/70 text-sm">
                Teas with depth and complexity that stand on their own merit
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream mb-3">Authentic Heritage</h3>
              <p className="text-cream/70 text-sm">
                Rooted in tradition, crafted with purpose, named with intention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">
                Crafted in Hudson Falls
              </h2>
              <p className="text-navy/80 mb-6 leading-relaxed">
                Every AXIOS blend is crafted in small batches in Hudson Falls, New York, a village 
                in Washington County with deep roots in American manufacturing heritage. This community 
                carries a legacy of quality and craftsmanship that AXIOS is proud to continue.
              </p>
              <p className="text-navy/80 mb-6 leading-relaxed">
                The artisan kitchen allows for direct control over every batch, 
                ensuring consistency and quality that mass production simply cannot achieve. 
                Every blend is tested against reference samples. No product ships that would not 
                be served to family.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">Hudson Falls, New York</p>
                  <p className="text-navy/60 text-sm">Washington County</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto text-navy/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-navy/50 text-sm">Hudson Falls, NY</p>
                <p className="text-navy/40 text-xs mt-2">Adirondack Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
            Experience the AXIOS Difference
          </h2>
          <p className="text-navy/80 text-lg mb-8">
            Ready to transform your morning ritual? Begin with the signature Kairos blend, 
            the perfect introduction to what tea can truly be.
          </p>
          <Link
            href="/teas"
            className="bg-navy text-gold px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider inline-block hover:bg-navy/90 transition-colors"
          >
            Explore Our Teas
          </Link>
        </div>
      </section>
    </Layout>
  );
}
