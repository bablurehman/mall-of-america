import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { rotundaSpecs, rotundaStats } from "../../data/venues";
import VenueCard from "./VenueCard";
import rotunda from "../../assets/venues/rotunda.webp";

const VenueRotunda = () => {
  return (
    <section className="py-20 bg-bg-soft overflow-hidden">
      <Container>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center mb-16"
        >

          {/* LEFT */}
          <div className="max-w-xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
            >
              Venue Module
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-text leading-tight"
            >
              The Rotunda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-text-muted mt-4 text-base leading-relaxed"
            >
              The crown jewel of Mall of America — a sky-lit, four-story atrium at the
              geographic center, designed for large-scale, high-impact events with
              unmatched visibility, vertical sightlines, and immersive audience reach
              across every level.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-px mt-8 bg-[var(--color-border)]">
              {rotundaStats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="bg-[var(--color-surface)] text-center p-3 sm:p-4 transition-all duration-300 hover:bg-[var(--color-secondary)]"
                >
                  <p className="text-sm sm:text-xl font-serif font-medium text-[var(--color-accent)]">
                    {item.value}
                  </p>

                  <div className="w-5 h-px bg-[var(--color-accent)]/30 mx-auto my-2" />

                  <p className="text-[9px] tracking-[2px] uppercase text-[var(--color-text-muted)]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[var(--color-accent)]/10 blur-3xl rounded-2xl" />

            <img
              src={rotunda}
              alt="The Rotunda"
              loading="lazy"
              className="relative w-full h-[250px] md:h-[320px] object-cover rounded-2xl border border-[var(--color-border)]"
            />

          </motion.div>

        </motion.div>

        {/* SPECS */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mb-6 pb-4"
          >
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
              Infrastructure
            </p>

            <h2 className="text-2xl font-bold text-text">
              Production Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {rotundaSpecs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
              >
                <VenueCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 rounded-2xl border border-accent/30 bg-accent/5 text-center"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Book This Venue
          </p>

          <h4 className="text-[20px] sm:text-2xl font-bold text-text">
            Secure the Rotunda
          </h4>

          <p className="text-text-muted text-sm mt-3 max-w-md mx-auto leading-relaxed">
            High-demand dates book early. Connect with our team to lock your slot.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 px-8 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:opacity-90 transition"
          >
            Request a Quote
          </motion.button>
        </motion.div>

      </Container>
    </section>
  );
};

export default VenueRotunda;