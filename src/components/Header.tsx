import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#locations", label: "Locations" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-navy-light/20">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-cream/80 border-b border-navy-light/20">
          <a href="tel:855-964-2555" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            855-964-2555
          </a>
          <a href="mailto:info@smarterrealestates.com" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Mail className="w-4 h-4" />
            info@smarterrealestates.com
          </a>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
              <span className="text-navy-dark font-display font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-cream font-display font-semibold text-lg">Smarter</span>
              <span className="text-gold font-display font-semibold text-lg">RealEstates</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-cream/80 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="hero"
              size="sm"
              className="hidden sm:flex"
              onClick={() => scrollToSection("#contact")}
            >
              Free Consultation
            </Button>

            <button
              className="lg:hidden text-cream p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark border-t border-navy-light/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-cream/80 hover:text-gold transition-colors font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-navy-light/20">
                <a href="tel:855-964-2555" className="flex items-center gap-2 text-cream/80">
                  <Phone className="w-4 h-4" />
                  855-964-2555
                </a>
                <Button variant="hero" className="mt-2" onClick={() => scrollToSection("#contact")}>
                  Free Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
