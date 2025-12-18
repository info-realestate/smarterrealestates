import { Phone, Mail, MapPin } from "lucide-react";

const locations = [
  "Boca Raton, FL",
  "Lantana, FL",
  "Washington, D.C.",
  "New York, NY",
  "Dallas, TX",
  "Honolulu, HI",
];

const services = [
  "Stop Foreclosure",
  "Wrongful Foreclosure",
  "Loan Modification",
  "TRO Filing",
  "Lender Litigation",
  "Loss Mitigation",
];

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="text-navy-dark font-display font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-cream font-display font-semibold text-lg">Smarter</span>
                <span className="text-gold font-display font-semibold text-lg">RealEstates</span>
              </div>
            </div>
            <p className="text-cream/70 mb-6">
              Protecting homeowners nationwide with expert foreclosure defense and mortgage solutions.
            </p>
            <div className="space-y-3">
              <a href="tel:855-964-2555" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                855-964-2555
              </a>
              <a href="mailto:info@smarterrealestates.com" className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                info@smarterrealestates.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-cream/70 hover:text-gold transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Office Locations</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location} className="flex items-center gap-2 text-cream/70">
                  <MapPin className="w-4 h-4 text-gold" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Attorney Advertising
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Smarter Real Estates. All rights reserved.
            </p>
            <p className="text-cream/50 text-xs text-center md:text-right max-w-xl">
              Disclaimer: This website is for informational purposes only and does not constitute legal advice. 
              Results may vary depending on case specifics. Past results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
