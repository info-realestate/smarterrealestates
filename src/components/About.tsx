import { motion } from "framer-motion";
import { Award, Users, BookOpen, Shield } from "lucide-react";
import attorneyImage from "@/assets/attorney-client.jpg";
import familyImage from "@/assets/family-saved-home.jpg";

const features = [
  {
    icon: Award,
    title: "Expert Legal Team",
    description: "Our attorneys specialize exclusively in foreclosure defense and mortgage law.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "We treat every case with personal attention and fight for the best outcome.",
  },
  {
    icon: BookOpen,
    title: "Deep Expertise",
    description: "15+ years of experience navigating complex foreclosure and lending laws.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "99% success rate with over 2,500 homes saved from foreclosure.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Your Trusted Partner in 
              <span className="text-gold"> Foreclosure Defense</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Smarter Real Estates is a premier law firm dedicated to helping homeowners 
              facing foreclosure. With offices nationwide and a team of experienced attorneys, 
              we've built our reputation on results.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We understand that facing foreclosure is one of the most stressful experiences 
              a family can endure. That's why we provide compassionate, aggressive legal 
              representation to protect your home and your future.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={attorneyImage} 
                  alt="Attorney meeting with client" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium mt-6">
                <img 
                  src={familyImage} 
                  alt="Happy family saved their home" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="bg-hero-gradient rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl text-cream mb-6">Why Choose Us?</h3>
              
              <ul className="space-y-4">
                {[
                  "No upfront fees – we only succeed when you do",
                  "Free initial consultation with an attorney",
                  "24/7 emergency support for urgent cases",
                  "Transparent communication throughout your case",
                  "Bilingual staff available (English & Spanish)",
                  "Licensed to practice in all 50 states",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-cream/90">
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-cream/20">
                <p className="text-cream/80 text-sm italic">
                  "We're not just lawyers – we're advocates for families fighting to keep their homes."
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
