import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            We&apos;d love to hear from you. Whether you have questions about our teas, 
            wholesale inquiries, or just want to share your AXIOS story.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-navy text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold bg-white text-navy"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-navy text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold bg-white text-navy"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-navy text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold bg-white text-navy"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-navy text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold bg-white text-navy"
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="press">Press / Media</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold bg-white text-navy resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-lg font-semibold text-lg uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-navy mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Location</h3>
                    <p className="text-navy/70">Hudson Falls, New York</p>
                    <p className="text-navy/50 text-sm">Washington County, Adirondack Region</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <p className="text-navy/70">hello@axiosteaco.com</p>
                    <p className="text-navy/50 text-sm">We typically respond within 24-48 hours</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-navy/60 hover:text-gold transition-colors">
                        Instagram
                      </a>
                      <a href="#" className="text-navy/60 hover:text-gold transition-colors">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wholesale CTA */}
              <div className="mt-12 bg-navy rounded-lg p-8 text-cream">
                <h3 className="font-serif text-xl text-gold mb-4">Wholesale Inquiries</h3>
                <p className="text-cream/80 mb-4">
                  Interested in carrying AXIOS at your coffee shop, café, or retail location? 
                  We&apos;d love to partner with you.
                </p>
                <ul className="text-cream/70 text-sm space-y-2 mb-6">
                  <li>• Competitive wholesale pricing (50% of retail)</li>
                  <li>• Training materials for your staff</li>
                  <li>• Marketing support and point-of-sale materials</li>
                  <li>• Flexible minimum orders</li>
                </ul>
                <p className="text-gold text-sm">
                  Select &quot;Wholesale Inquiry&quot; in the contact form or email us directly.
                </p>
              </div>

              {/* Farmers Market Info */}
              <div className="mt-8 bg-white rounded-lg p-6 border border-gold/20">
                <h3 className="font-serif text-xl text-navy mb-4">Find Us Locally</h3>
                <p className="text-navy/70 mb-4">
                  Meet us in person at local farmers markets in the greater Saratoga region. 
                  Sample our teas and chat about your preferences.
                </p>
                <p className="text-navy/50 text-sm italic">
                  Market schedule coming soon for 2026 season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gold/20 pb-6">
              <h3 className="font-semibold text-navy mb-3">
                How should I store my tea?
              </h3>
              <p className="text-navy/70">
                Store in a cool, dry place away from direct sunlight and strong odors. 
                Our resealable pouches help maintain freshness. Best enjoyed within 
                3-6 months of purchase for optimal flavor.
              </p>
            </div>

            <div className="border-b border-gold/20 pb-6">
              <h3 className="font-semibold text-navy mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-navy/70">
                Currently, we ship within the continental United States. 
                International shipping may be available in the future as we grow.
              </p>
            </div>

            <div className="border-b border-gold/20 pb-6">
              <h3 className="font-semibold text-navy mb-3">
                What&apos;s the difference between your blends?
              </h3>
              <p className="text-navy/70">
                Kairos is our balanced everyday chai. Dynamis has increased spice for 
                maximum intensity. Hesychia is caffeine-free on a rooibos base. 
                Eklektos features single-origin tea with premium whole spices. 
                Charis is a convenient instant latte mix.
              </p>
            </div>

            <div className="border-b border-gold/20 pb-6">
              <h3 className="font-semibold text-navy mb-3">
                Are your products organic?
              </h3>
              <p className="text-navy/70">
                While we source high-quality ingredients from reputable suppliers, 
                we are not currently certified organic. We prioritize quality, safety 
                (like using Ceylon cinnamon), and flavor in our sourcing decisions.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-semibold text-navy mb-3">
                Do you offer subscriptions?
              </h3>
              <p className="text-navy/70">
                Yes! Subscribe and save 10-15% on your favorite blends. 
                Flexible scheduling, easy skip or cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
