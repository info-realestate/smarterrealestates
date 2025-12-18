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
    description: "Protect your home without filing for bankruptcy. Our experienced attorneys use proven legal strategies that have helped thousands of families keep their properties and avoid the devastating consequences of foreclosure.",
    details: [
      "Negotiate directly with lenders on your behalf",
      "Identify procedural errors in foreclosure filings",
      "Explore all available legal remedies",
      "Provide ongoing case management and support"
    ]
  },
  {
    icon: Clock,
    title: "Stop Auction Without Bankruptcy",
    description: "When your home is scheduled for auction, every hour counts. Our emergency legal team acts immediately to file motions and take swift action to halt the sale, giving you time to explore all options without the long-term credit impact of bankruptcy.",
    details: [
      "24/7 emergency response for urgent cases",
      "Same-day court filings when necessary",
      "Direct communication with auction trustees",
      "Strategic postponement negotiations"
    ]
  },
  {
    icon: Gavel,
    title: "Wrongful Foreclosure Defense",
    description: "Many foreclosures are conducted improperly or illegally. If your lender has violated federal or state laws, failed to follow proper procedures, or engaged in predatory lending practices, we will aggressively fight to protect your rights and potentially reverse the foreclosure.",
    details: [
      "Review all loan documents for violations",
      "Identify RESPA, TILA, and FDCPA violations",
      "Challenge improper notice requirements",
      "Pursue damages for lender misconduct"
    ]
  },
  {
    icon: FileText,
    title: "Loan Modification Assistance",
    description: "With a 99% success rate, our attorneys are experts at negotiating with lenders to modify your mortgage terms. We work to reduce your interest rate, extend your loan term, or reduce principal balance to create a payment plan you can actually afford.",
    details: [
      "Complete application preparation and submission",
      "Principal reduction negotiations",
      "Interest rate reduction requests",
      "Extended repayment term arrangements"
    ]
  },
  {
    icon: Scale,
    title: "Sue Lender for Declined Assistance",
    description: "When lenders wrongfully deny loan modifications or loss mitigation options, they may be violating federal and state consumer protection laws. We hold banks accountable by filing lawsuits to recover damages and force them to work with homeowners in good faith.",
    details: [
      "Federal and state consumer protection claims",
      "Breach of contract litigation",
      "Dual-tracking violation lawsuits",
      "Recovery of damages and legal fees"
    ]
  },
  {
    icon: Shield,
    title: "TRO (Temporary Restraining Order)",
    description: "A Temporary Restraining Order is a powerful legal tool that immediately stops foreclosure proceedings. Our attorneys can obtain TROs from the court within 24-48 hours in emergency situations, providing critical time to develop a comprehensive defense strategy.",
    details: [
      "Emergency court filings within 24-48 hours",
      "Immediate halt to all foreclosure activities",
      "Protection while building your full case",
      "Extension motions for continued protection"
    ]
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
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
