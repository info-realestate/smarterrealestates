import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cream)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--cream)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gold/30">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-cream text-sm font-medium">Nationwide Legal Protection</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Stop Foreclosure.
              <br />
              <span className="text-gradient-gold">Save Your Home.</span>
            </h1>

            <p className="text-cream/80 text-lg md:text-xl mb-8 max-w-xl">
              Our legal experts have helped thousands of homeowners protect their properties 
              without filing for bankruptcy. With a <span className="text-gold font-semibold">99% success rate</span>, 
              we're your trusted partner in foreclosure defense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:855-964-2555">Call 855-964-2555</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "No Bankruptcy Required",
                "Stop Auction Fast",
                "99% Success Rate",
                "Nationwide Service",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-cream/90"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-medium border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                    <Shield className="w-8 h-8 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">Legal Protection</h3>
                    <p className="text-muted-foreground">Backed by expert attorneys</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <span className="text-foreground font-medium">Cases Won</span>
                    <span className="text-gold font-bold text-2xl">2,500+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <span className="text-foreground font-medium">Success Rate</span>
                    <span className="text-success font-bold text-2xl">99%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <span className="text-foreground font-medium">Years Experience</span>
                    <span className="text-gold font-bold text-2xl">15+</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gold-gradient rounded-full px-4 py-2 shadow-gold"
              >
                <span className="text-navy-dark font-bold text-sm">24/7 Support</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
