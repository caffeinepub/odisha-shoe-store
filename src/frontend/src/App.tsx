import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  Menu,
  Phone,
  Shield,
  ShoppingCart,
  Star,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_NUMBER = "917008918847";

const products = [
  {
    id: 1,
    name: "Sports Shoes",
    price: 999,
    image: "/assets/generated/sports-shoes.dim_600x400.jpg",
    description: "Lightweight and breathable for all-day performance",
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Casual Shoes",
    price: 799,
    image: "/assets/generated/casual-shoes.dim_600x400.jpg",
    description: "Stylish comfort for everyday wear",
    rating: 4.3,
    reviews: 95,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 1199,
    image: "/assets/generated/sneakers.dim_600x400.jpg",
    description: "Trendy streetwear style with premium comfort",
    rating: 4.7,
    reviews: 214,
    badge: "New Arrival",
  },
];

const categories = [
  { name: "Sports", icon: "🏃", count: "12 styles" },
  { name: "Casual", icon: "👟", count: "18 styles" },
  { name: "Sneakers", icon: "✨", count: "9 styles" },
];

const benefits = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Premium Quality",
    desc: "Every pair crafted with top-grade materials for lasting durability.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "All-Day Comfort",
    desc: "Ergonomic designs that keep your feet happy from dawn to dusk.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Fast Delivery",
    desc: "Free delivery on orders above ₹1500. Ships within 2–3 business days.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${
            s <= Math.floor(rating)
              ? "fill-gold text-gold"
              : s - 0.5 <= rating
                ? "fill-gold/50 text-gold"
                : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'd like to order: ${product.name} - ₹${product.price}`,
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col"
      data-ocid={`product.item.${index + 1}`}
    >
      <div className="relative bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold">
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-bold text-foreground text-lg leading-snug">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="text-2xl font-extrabold text-primary mt-1">
          ₹{product.price}
        </div>

        <div className="flex flex-col gap-2 mt-auto pt-3">
          <Button
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold min-h-[44px]"
            data-ocid={`product.primary_button.${product.id}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-semibold rounded-md min-h-[44px] px-4 hover:opacity-90 transition-opacity text-sm"
            data-ocid={`product.secondary_button.${product.id}`}
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Shop All", href: "#collection" },
    { label: "Sports", href: "#collection" },
    { label: "Casual", href: "#collection" },
    { label: "Sneakers", href: "#collection" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Utility Bar */}
      <div className="bg-navy text-white text-xs sm:text-sm py-2 px-4 text-center">
        Free delivery on orders above ₹1500 &nbsp;|&nbsp; Quality Guaranteed
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2" data-ocid="nav.link">
            <span className="text-2xl">👟</span>
            <div>
              <span className="font-extrabold text-navy text-lg leading-none block">
                Odisha
              </span>
              <span className="text-xs text-teal font-semibold tracking-widest uppercase">
                Shoe Store
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-teal transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Cart"
              data-ocid="nav.button"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-card border-t border-border"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col px-4 py-3 gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-2.5 text-sm font-medium text-foreground hover:text-teal transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-ocid="nav.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[420px] sm:min-h-[520px] flex items-center overflow-hidden"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1400x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-teal font-bold tracking-[0.25em] uppercase text-sm sm:text-base mb-3">
                ODISHA SHOE STORE
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
                WALK THE
                <br />
                VIBRANT PATH.
              </h1>
              <p className="text-white/80 text-base sm:text-lg max-w-md mb-8">
                Discover premium footwear crafted for every step of your
                journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#collection"
                  className="inline-flex items-center justify-center bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors min-h-[44px] text-sm sm:text-base"
                  data-ocid="hero.primary_button"
                >
                  Shop Collection
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about your shoes.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity min-h-[44px] text-sm sm:text-base"
                  data-ocid="hero.secondary_button"
                >
                  <WhatsAppIcon />
                  Chat with Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Collection */}
        <section
          id="collection"
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Discover Our Collection
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-lg mx-auto">
              Handpicked styles for every occasion — from sport to street.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="product.list"
          >
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>

        {/* Shop By Category */}
        <section className="py-12 bg-navy/5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Shop By Category
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {categories.map((cat, i) => (
                <motion.a
                  key={cat.name}
                  href="#collection"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex flex-col items-center gap-3 group"
                  data-ocid={`category.item.${i + 1}`}
                >
                  <span className="text-4xl">{cat.icon}</span>
                  <h3 className="font-bold text-lg text-navy group-hover:text-teal transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {cat.count}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              We're committed to quality, comfort, and your satisfaction.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-xl p-6 shadow-card text-center"
                data-ocid={`benefit.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WhatsApp CTA Banner */}
        <section className="bg-whatsapp py-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Need help choosing the right pair?
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Chat with us on WhatsApp and get personalized recommendations!
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I need help choosing the right shoes.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-whatsapp font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors min-h-[44px] shadow-md"
                data-ocid="cta.primary_button"
              >
                <Phone className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👟</span>
                <span className="font-extrabold text-lg">
                  Odisha Shoe Store
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Your trusted destination for premium footwear in Odisha. Quality
                shoes for every occasion.
              </p>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-teal">
                Customer Service
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-teal">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#collection"
                    className="hover:text-white transition-colors"
                  >
                    Shop All
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-teal">
                Contact Us
              </h4>
              <div className="space-y-2 text-sm text-white/60">
                <p>📍 Bhubaneswar, Odisha, India</p>
                <p>📞 +91 99999 99999</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 bg-whatsapp text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                  data-ocid="footer.secondary_button"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Odisha Shoe Store. All rights
              reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 underline transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
