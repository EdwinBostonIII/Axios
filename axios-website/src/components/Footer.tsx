import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <span className="font-serif text-3xl font-bold tracking-wider text-gold">
                AXIOS
              </span>
              <span className="greek-text text-sm text-cream/80">ἄξιος</span>
              <span className="text-xs text-cream/60 mt-1">TEA COMPANY</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Premium artisan spiced black teas crafted for those who demand
              excellence from their morning ritual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/teas"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Our Teas
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/science"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  The Science
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Our Blends</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/teas/kairos"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Kairos — Signature
                </Link>
              </li>
              <li>
                <Link
                  href="/teas/dynamis"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Dynamis — Strength
                </Link>
              </li>
              <li>
                <Link
                  href="/teas/hesychia"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Hesychia — Evening
                </Link>
              </li>
              <li>
                <Link
                  href="/teas/eklektos"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Eklektos — Reserve
                </Link>
              </li>
              <li>
                <Link
                  href="/teas/charis"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Charis — Latte Mix
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Stay Connected</h4>
            <p className="text-cream/70 text-sm mb-4">
              Join our community for brewing tips, new releases, and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-cream/10 border border-gold/30 rounded text-cream placeholder-cream/50 focus:outline-none focus:border-gold text-sm"
              />
              <button
                type="submit"
                className="w-full btn-primary px-4 py-2 rounded font-semibold text-sm uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Location */}
            <div className="text-cream/60 text-sm text-center md:text-left">
              <p>Hudson Falls, New York</p>
            </div>

            {/* Scripture */}
            <div className="text-center">
              <p className="text-gold/80 text-xs italic">
                "Worthy is the Lamb" — Revelation 5:12
              </p>
            </div>

            {/* Copyright */}
            <div className="text-cream/60 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} AXIOS Tea Company</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
