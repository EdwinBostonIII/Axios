import Layout from "@/components/Layout";
import Link from "next/link";

export default function SciencePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm mb-4">The Science</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Why Tea Works Better
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Understanding the science behind tea&apos;s benefits provides both confidence and context. 
            Here&apos;s what peer-reviewed research tells us.
          </p>
        </div>
      </section>

      {/* L-Theanine Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold uppercase tracking-widest text-sm">The Calm Focus Compound</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                L-Theanine
              </h2>
              <p className="text-navy/80 mb-6 leading-relaxed">
                L-theanine is an amino acid found almost exclusively in tea (Camellia sinensis) 
                and certain mushrooms. It crosses the blood-brain barrier and influences brain 
                chemistry in ways that support the &quot;calm energy&quot; positioning central to AXIOS.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="font-semibold text-navy mb-3">Research Evidence</h4>
                <p className="text-navy/70 text-sm mb-3">
                  A 2019 systematic review in <em>Plant Foods for Human Nutrition</em> analyzed 
                  nine randomized controlled trials and found that 200-400mg per day L-theanine 
                  reduces stress and anxiety in stressful conditions.
                </p>
                <p className="text-navy/70 text-sm">
                  A 2024 systematic review in <em>BMC Psychiatry</em> confirmed L-theanine 
                  significantly reduced psychiatric symptoms more effectively than controls 
                  in anxiety disorders.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-navy mb-3">The Caffeine + L-Theanine Synergy</h4>
                <p className="text-navy/70 text-sm">
                  Giesbrecht et al. (2010) in <em>Nutritional Neuroscience</em> found that 
                  97mg L-theanine combined with 40mg caffeine significantly improved accuracy 
                  during task switching, increased alertness, and reduced tiredness compared 
                  to placebo. The optimal ratio studied is approximately 1:2 caffeine to L-theanine.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="bg-navy rounded-lg p-8 text-cream">
              <h3 className="font-serif text-2xl text-gold mb-6 text-center">
                Coffee vs. Tea Energy
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Coffee Energy Curve</span>
                    <span className="text-gold">Spike & Crash</span>
                  </div>
                  <div className="h-16 bg-brown/30 rounded relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/4 h-4 bg-brown/50"></div>
                      <div className="w-1/4 h-16 bg-brown"></div>
                      <div className="w-1/4 h-8 bg-brown/70"></div>
                      <div className="w-1/4 h-2 bg-brown/30"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Tea Energy Curve</span>
                    <span className="text-gold">Smooth & Sustained</span>
                  </div>
                  <div className="h-16 bg-gold/30 rounded relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/4 h-8 bg-gold/50"></div>
                      <div className="w-1/4 h-12 bg-gold/70"></div>
                      <div className="w-1/4 h-12 bg-gold/70"></div>
                      <div className="w-1/4 h-10 bg-gold/60"></div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-cream/70 text-sm mt-6 text-center">
                L-theanine modulates caffeine absorption for smoother, sustained energy without the crash
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Piperine Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="bg-cream rounded-lg p-8 order-2 md:order-1">
              <h3 className="font-serif text-2xl text-navy mb-6 text-center">
                Black Pepper&apos;s Secret
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-3xl mb-2">🌶️</div>
                  <p className="text-navy font-semibold">TRPV1 Activation</p>
                  <p className="text-navy/60 text-sm">Warming sensation</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-navy font-semibold">Bioavailability</p>
                  <p className="text-navy/60 text-sm">30-200% increase</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-3xl mb-2">🔥</div>
                  <p className="text-navy font-semibold">The &quot;Bite&quot;</p>
                  <p className="text-navy/60 text-sm">Coffee drinkers crave</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-3xl mb-2">🧪</div>
                  <p className="text-navy font-semibold">5-10%</p>
                  <p className="text-navy/60 text-sm">Of black pepper</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-gold uppercase tracking-widest text-sm">Heat and Bioavailability</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                Piperine
              </h2>
              <p className="text-navy/80 mb-6 leading-relaxed">
                Piperine is the alkaloid responsible for black pepper&apos;s characteristic bite. 
                It comprises 5-10% of black pepper by weight and provides benefits beyond flavor.
              </p>
              
              <div className="bg-cream p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-navy mb-3">TRPV1 Receptor Activation</h4>
                <p className="text-navy/70 text-sm">
                  McNamara et al. (2005) in <em>British Journal of Pharmacology</em> demonstrated 
                  that piperine activates the same &quot;capsaicin receptor&quot; (TRPV1) that senses heat. 
                  Piperine shows approximately 2-fold greater efficacy than capsaicin but lower 
                  potency, creating warming sensation without intense burning.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h4 className="font-semibold text-navy mb-3">Bioavailability Enhancement</h4>
                <p className="text-navy/70 text-sm">
                  Piperine inhibits metabolizing enzymes and P-glycoprotein, increasing intestinal 
                  absorption of other compounds. Enhancement typically ranges from 30% to 200% 
                  for various beneficial compounds in spices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ceylon Cinnamon Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold uppercase tracking-widest text-sm">Safety and Quality</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                Ceylon Cinnamon
              </h2>
              <p className="text-navy/80 max-w-2xl mx-auto">
                The choice of Ceylon cinnamon over cassia represents both a safety decision 
                and a quality differentiator worth highlighting.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-navy text-cream">
                <div className="p-4 font-semibold">Cinnamon Type</div>
                <div className="p-4 font-semibold text-center">Coumarin Content</div>
                <div className="p-4 font-semibold text-center">Per Teaspoon</div>
              </div>
              <div className="grid grid-cols-3 border-b border-gold/20">
                <div className="p-4 font-semibold text-navy flex items-center">
                  <span className="text-gold mr-2">✓</span> Ceylon (True)
                </div>
                <div className="p-4 text-center text-navy/70">0.004%</div>
                <div className="p-4 text-center text-navy/70">0.01-0.03mg</div>
              </div>
              <div className="grid grid-cols-3 border-b border-gold/20 bg-cream/50">
                <div className="p-4 text-navy/70">Cassia (Common)</div>
                <div className="p-4 text-center text-navy/70">0.4-1%</div>
                <div className="p-4 text-center text-navy/70">5-18mg</div>
              </div>
              <div className="grid grid-cols-3 bg-gold/10">
                <div className="p-4 font-semibold text-navy">Difference</div>
                <div className="p-4 text-center font-semibold text-gold">250x less</div>
                <div className="p-4 text-center text-navy/70">Safe for daily use</div>
              </div>
            </div>

            <div className="bg-navy text-cream rounded-lg p-8 text-center">
              <p className="text-xl italic mb-4">
                &quot;We choose rare Ceylon (&apos;true&apos;) cinnamon with naturally ultra-low coumarin, 
                safe and delicious for daily enjoyment.&quot;
              </p>
              <p className="text-cream/70 text-sm">
                Ceylon cinnamon costs approximately 10x more than cassia, but represents a 
                meaningful investment in customer wellbeing alongside exceptional flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Side Effects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
              Why Coffee Drinkers Make the Switch
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-cream rounded-lg p-6">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="font-serif text-xl text-navy mb-3">Acid Reflux</h3>
              <p className="text-navy/70 text-sm">
                Coffee increases stomach acid production and relaxes the lower esophageal 
                sphincter. 5-10% of regular coffee drinkers experience acid reflux symptoms. 
                Tea does not trigger these mechanisms.
              </p>
            </div>
            
            <div className="bg-cream rounded-lg p-6">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="font-serif text-xl text-navy mb-3">Jitters & Anxiety</h3>
              <p className="text-navy/70 text-sm">
                Tea&apos;s L-theanine reduces anxiety while maintaining alertness. It modulates 
                caffeine absorption for smoother energy. Research shows 43% of anxiety-prone 
                patients experienced panic attacks after high caffeine doses.
              </p>
            </div>
            
            <div className="bg-cream rounded-lg p-6">
              <div className="text-3xl mb-4">📉</div>
              <h3 className="font-serif text-xl text-navy mb-3">Afternoon Crashes</h3>
              <p className="text-navy/70 text-sm">
                Coffee&apos;s rapid caffeine spike leads to corresponding crashes. Tea&apos;s combination 
                of caffeine and L-theanine creates sustained, even energy without the 
                rollercoaster effect.
              </p>
            </div>
            
            <div className="bg-cream rounded-lg p-6">
              <div className="text-3xl mb-4">😴</div>
              <h3 className="font-serif text-xl text-navy mb-3">Sleep Disruption</h3>
              <p className="text-navy/70 text-sm">
                Coffee&apos;s 8+ hour half-life means afternoon consumption affects sleep quality. 
                Tea offers lower caffeine alternatives and caffeine-free options like our 
                Hesychia for evening consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
            Experience the Difference
          </h2>
          <p className="text-navy/80 text-lg mb-8">
            Now that you understand the science, experience it for yourself. 
            Start with our signature Kairos blend for balanced, everyday excellence.
          </p>
          <Link
            href="/teas"
            className="bg-navy text-gold px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider inline-block hover:bg-navy/90 transition-colors"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>
    </Layout>
  );
}
