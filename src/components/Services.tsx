import { motion } from "framer-motion";
import { 
  Home, 
  Gavel, 
  FileText, 
  Shield, 
  Scale, 
  Clock,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Save House From Foreclosure",
    description: "Protect your home without filing for bankruptcy. Our legal strategies have helped thousands keep their properties.",
  },
  {
    icon: Clock,
    title: "Stop Auction Without Bankruptcy",
    description: "Emergency legal action to halt foreclosure auctions immediately. Time is critical - we act fast.",
  },
  {
    icon: Gavel,
    title: "Wrongful Foreclosure Defense",
    description: "If your lender has violated laws or procedures, we'll fight to protect your rights and your home.",
  },
  {
    icon: FileText,
    title: "Loan Modification Assistance",
    description: "With a 99% success rate, we negotiate with lenders to modify your mortgage terms and make payments affordable.",
  },
  {
    icon: Scale,
    title: "Sue Lender for Declined Assistance",
    description: "When lenders wrongfully deny modifications, we take legal action to hold them accountable.",
  },
  {
    icon: Shield,
    title: "TRO (Temporary Restraining Order)",
    description: "Obtain court orders to immediately stop foreclosure proceedings while we build your case.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Comprehensive Foreclosure Protection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide complete legal solutions to protect your home and fight for your rights against unfair lending practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-medium">
                <div className="w-14 h-14 rounded-xl bg-secondary group-hover:bg-gold-gradient transition-all duration-300 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-navy-dark transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gold" size="lg" onClick={scrollToContact}>
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
