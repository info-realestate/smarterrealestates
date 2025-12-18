import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    city: "Boca Raton, FL",
    address: "3200 N. Federal Highway",
    zip: "FL 33433",
  },
  {
    city: "Lantana, FL",
    address: "1438 W Lantana Rd",
    zip: "FL 33462",
  },
  {
    city: "Washington, D.C.",
    address: "1717 Pennsylvania Ave",
    zip: "DC 20010",
  },
  {
    city: "New York, NY",
    address: "17 State St",
    zip: "NY 10004",
  },
  {
    city: "Dallas, TX",
    address: "1717 Main Street",
    zip: "TX 75201",
  },
  {
    city: "Honolulu, HI",
    address: "1110 Nuuanu Ave",
    zip: "HI 96817",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Nationwide Coverage</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Our Office Locations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With offices across the country, we're positioned to serve homeowners in all 50 states.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 rounded-xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {location.city}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {location.address}
                      <br />
                      {location.zip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-hero-gradient rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
                Serving All 50 States
              </h3>
              <p className="text-cream/80 mb-6">
                No matter where you're located, our legal team is ready to help you save your home. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:855-964-2555"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">855-964-2555</span>
                </a>
                <a 
                  href="mailto:info@smarterrealestates.com"
                  className="inline-flex items-center gap-2 text-cream/80 hover:text-cream transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@smarterrealestates.com</span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="font-display text-6xl text-gold font-bold">50</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
