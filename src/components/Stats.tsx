import { motion } from "framer-motion";

const stats = [
  { value: "99%", label: "Success Rate" },
  { value: "2,500+", label: "Homes Saved" },
  { value: "15+", label: "Years Experience" },
  { value: "50", label: "States Served" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-hero-gradient relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-cream/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
