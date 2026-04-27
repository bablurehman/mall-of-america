import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import { motion } from "framer-motion";
import retail from "../assets/images/retails-brands.webp";
import { retailData } from "../data/overview";

const Retail = () => {
  return (
    <section className="py-20 bg-white/90 text-gray-900">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[11px] text-gray-600">
            Retail Ecosystem
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            A Global Stage for Iconic Brands
          </h2>

          <div className="h-[2.5px] w-[60px] bg-yellow-500 mx-auto mt-2" />

          <p className="mt-4 text-gray-700">
            A high-performance retail environment engineered for visibility,
            engagement, and sustained commercial growth.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-[20px] sm:text-2xl md:text-3xl font-semibold leading-snug">
              Retail is not space —
              <span className="text-[var(--color-accent)]">
                {" "}it is commercial influence
              </span>
            </h3>

            <p className="mt-6 text-sm sm:text-lg text-gray-700 leading-relaxed">
              A curated ecosystem where global brands operate within engineered
              visibility corridors, immersive architecture, and continuous high-value consumer flow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-600 font-bold">
              <span>250+ Global Brands</span>
              <span>•</span>
              <span>12M+ Visitors</span>
              <span>•</span>
              <span>95% Occupancy</span>
            </div>

            <Link
              to="/leasing"
              className="mt-8 inline-block px-7 py-3 text-xs tracking-[2px] uppercase bg-black hover:bg-[var(--color-accent)] text-white rounded-full transition"
            >
              Explore Leasing Opportunities
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src={retail}
              alt="Retail Ecosystem"
              className="w-full h-[300px] sm:h-[360px] md:h-[400px] object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6 }}
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-xs tracking-[2px] uppercase font-bold text-yellow-500">
                Flagship Retail District
              </p>
              <p className="text-white text-lg mt-1 font-light">
                Designed for global brand dominance
              </p>
            </div>
          </motion.div>

        </div>

        {/* FEATURE GRID */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">

          {retailData.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative p-3 sm:p-7 rounded-xl border border-white/10 bg-black overflow-hidden transition"
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent" />

                <div className="relative z-10">

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-[var(--color-accent)] text-2xl mb-5"
                  >
                    <Icon />
                  </motion.div>

                  <h4 className="text-sm font-medium text-white group-hover:text-[var(--color-accent)] transition">
                    {item.title}
                  </h4>

                  <p className="text-xs text-white/60 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default Retail;