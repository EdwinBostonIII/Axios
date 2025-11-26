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
            From Coffee Addict to Tea Artisan
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold italic text-lg">
            A journey of discovery, transformation, and purpose
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
              carrying the essential meaning of &quot;worthy, deserving, fitting, of equal value.&quot; The word derives 
              from the root ἄγω (ago), meaning &quot;to weigh&quot; or &quot;to draw down the scale,&quot; evoking the ancient 
              image of a balance scale where two things of equal weight find equilibrium.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 my-8 italic">
              <p className="text-xl text-navy mb-2">
                &quot;Ἄξιόν ἐστιν τὸ ἀρνίον&quot;
              </p>
              <p className="text-lg text-navy/70">
                &quot;Worthy is the Lamb&quot;
              </p>
              <cite className="text-brown not-italic text-base">— Revelation 5:12</cite>
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

      {/* The Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-cream rounded-lg flex items-center justify-center order-2 md:order-1">
              <div className="text-center p-8">
                <span className="text-6xl mb-4 block">🍵</span>
                <p className="text-navy/50 text-sm">Founder Portrait</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl text-navy mb-6">The Journey</h2>
              
              <p className="text-navy/80 mb-6 leading-relaxed">
                I used to drink six cups of coffee a day. The jitters, the acid reflux, 
                the 3 PM crashes—I thought that was just the price of staying sharp in a demanding world. 
                Coffee was my ritual, my fuel, my identity.
              </p>

              <p className="text-navy/80 mb-6 leading-relaxed">
                Then my body started pushing back. The digestive issues became impossible to ignore. 
                The anxiety spikes were affecting my work. I knew I needed to change, but every tea 
                I tried left me cold—literally and figuratively. Weak, floral, unsatisfying. 
                Nothing that could stand up to my coffee palate.
              </p>

              <p className="text-navy/80 mb-6 leading-relaxed">
                Until I discovered real chai. Not the sugary coffee-shop versions, but traditional 
                spiced black tea with actual character. Bold, warming, complex. Tea that didn&apos;t 
                apologize for itself. Tea that delivered something coffee never could: calm, 
                sustained focus without the rollercoaster.
              </p>

              <p className="text-navy/80 leading-relaxed">
                AXIOS was born from that discovery—and from a conviction that there are thousands 
                of others like me, searching for something better without knowing it exists.
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
            We attract coffee converts through quality and character, not by positioning against coffee.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-gold text-4xl mb-4">🏆</div>
              <h3 className="font-serif text-xl text-cream mb-3">Artisan Quality</h3>
              <p className="text-cream/70 text-sm">
                Small batch production, premium ingredients, transparent sourcing
              </p>
            </div>
            <div className="p-6">
              <div className="text-gold text-4xl mb-4">💪</div>
              <h3 className="font-serif text-xl text-cream mb-3">Bold Character</h3>
              <p className="text-cream/70 text-sm">
                Full-bodied teas with depth and complexity that stand on their own merit
              </p>
            </div>
            <div className="p-6">
              <div className="text-gold text-4xl mb-4">📖</div>
              <h3 className="font-serif text-xl text-cream mb-3">Authentic Story</h3>
              <p className="text-cream/70 text-sm">
                Founded by a converted coffee drinker who discovered tea&apos;s potential
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
                Hand-Blended in Hudson Falls
              </h2>
              <p className="text-navy/80 mb-6 leading-relaxed">
                Every AXIOS blend is crafted in small batches in Hudson Falls, New York—a village 
                in Washington County with deep roots in American manufacturing heritage. We&apos;re 
                proud to be part of this community&apos;s story of quality and craftsmanship.
              </p>
              <p className="text-navy/80 mb-6 leading-relaxed">
                Our home processor kitchen allows us to maintain direct control over every batch, 
                ensuring consistency and quality that mass production simply cannot match. 
                We test every blend against reference samples, and we never ship a product 
                we wouldn&apos;t serve to our own family.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-gold text-3xl">📍</div>
                <div>
                  <p className="font-semibold text-navy">Hudson Falls, New York</p>
                  <p className="text-navy/60 text-sm">Washington County</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-4xl mb-4 block">🗺️</span>
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
            Ready to transform your morning ritual? Start with our signature Kairos blend—the 
            perfect introduction to what tea can truly be.
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
