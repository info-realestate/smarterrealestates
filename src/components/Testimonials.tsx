import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "Miami, FL",
    quote: "Smarter Real Estates saved our family home when we thought all hope was lost. They stopped our auction just 3 days before the sale date. We can't thank them enough for giving us a second chance.",
    result: "Auction stopped, loan modified",
    stars: 5,
  },
  {
    name: "James & Linda Thompson",
    location: "Dallas, TX",
    quote: "After being denied a loan modification twice by our bank, this team took over and got us approved within 45 days. Our monthly payment dropped by $800. They truly know how to fight for homeowners.",
    result: "Loan modification approved",
    stars: 5,
  },
  {
    name: "Robert Chen",
    location: "New York, NY",
    quote: "The bank was trying to foreclose on my home due to their own accounting errors. Smarter Real Estates proved the wrongful foreclosure and not only saved my home but got me $50,000 in damages.",
    result: "Wrongful foreclosure reversed",
    stars: 5,
  },
  {
    name: "Patricia Williams",
    location: "Washington, D.C.",
    quote: "I was 8 months behind on my mortgage and facing eviction. They filed a TRO the same day I called and gave me the time I needed. Now I'm current on my payments with a modified loan I can afford.",
    result: "TRO filed, home saved",
    stars: 5,
  },
  {
    name: "Michael & Sarah Davis",
    location: "Honolulu, HI",
    quote: "We were victims of predatory lending and didn't even know it. This law firm uncovered multiple violations and used them to negotiate a principal reduction of $120,000 on our mortgage.",
    result: "$120K principal reduction",
    stars: 5,
  },
  {
    name: "Angela Martinez",
    location: "Boca Raton, FL",
    quote: "Professional, compassionate, and effective. They explained every step of the process and kept us informed throughout. Our home is safe and our family is at peace. Highly recommend!",
    result: "Foreclosure dismissed",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Families We've Helped Save Their Homes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real clients who trusted us with their most important asset – their home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-medium"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-gold/30 mb-3" />

              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-card rounded-xl p-6 border border-border">
            <div className="text-center">
              <p className="font-display text-3xl text-gold font-bold">2,500+</p>
              <p className="text-sm text-muted-foreground">Homes Saved</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display text-3xl text-gold font-bold">99%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-display text-3xl text-gold font-bold">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
