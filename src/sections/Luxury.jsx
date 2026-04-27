import Container from "../components/ui/Container";
import luxury from "../assets/images/luxury.webp";
import { luxuryBrands, luxuryData } from "../data/overview";
import { motion } from "framer-motion";

const Luxury = () => {
  return (
    <section className="bg-black text-white overflow-hidden py-20">

      <div className="relative bg-black overflow-hidden">

        <Container className="relative z-10">

          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <p className="text-[10px] tracking-[0.5em] uppercase text-white/40">
                Luxury Ecosystem
              </p>

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Global Brands{" "}
                <span className="text-[var(--color-accent)]">
                  Driving Retail Performance
                </span>
              </h2>

              <p className="mt-4 text-white/60 max-w-md leading-relaxed">
                A curated luxury environment engineered for commercial impact,
                brand prestige, and sustained global retail engagement across
                flagship-tier global brands.
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-white/40">
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
                Designed for flagship leasing & global brand positioning
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-[var(--color-accent)]/10 blur-2xl opacity-60 group-hover:opacity-80 transition" />

              <div className="relative h-[300px] md:h-[340px] rounded-2xl overflow-hidden border border-white/10">

                <motion.img
                  src={luxury}
                  alt="Luxury Ecosystem"
                  className="w-full h-full object-cover scale-105"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col gap-2">
                    <div className="text-xs tracking-[0.3em] text-white/70 uppercase">
                      Flagship Retail Zone
                    </div>

                    <div className="hidden sm:flex items-center gap-4 text-[10px] text-white/50 uppercase tracking-[0.2em]">
                      <span>Premium Leasing</span>
                      <span className="w-[3px] h-[3px] bg-[var(--color-accent)] rounded-full"></span>
                      <span>Global Brands</span>
                      <span className="w-[3px] h-[3px] bg-[var(--color-accent)] rounded-full"></span>
                      <span>High Footfall Core</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </Container>
      </div>

      {/* DATA GRID */}
      <Container className="pt-10">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/20">

          {luxuryData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-3 sm:p-8 bg-black hover:bg-white/5 transition group"
            >
              <div className="text-[10px] tracking-[0.4em] text-yellow-500 mb-3">
                0{i + 1}
              </div>

              <h3 className="text-base font-light text-white group-hover:text-[var(--color-accent)] transition">
                {item.title}
              </h3>

              <p className="text-sm text-white/50 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* BRAND MARQUEE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 border-y border-white/10 py-4 bg-black"
        >
          <marquee behavior="scroll" direction="left" scrollamount="4">
            <div className="flex items-center gap-4 sm:gap-8">
              {luxuryBrands.map((brand, i) => (
                <img
                  key={i}
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="h-12 w-12 bg-white p-2 rounded-full mx-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition"
                />
              ))}
            </div>
          </marquee>
        </motion.div>

      </Container>
    </section>
  );
};

export default Luxury;