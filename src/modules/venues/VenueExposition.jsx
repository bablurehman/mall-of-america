import { motion } from "framer-motion";
import VenueCard from "./VenueCard";
import {
  expositionSpecs,
  expositionStats,
} from "../../data/venues";
import exposition from "../../assets/venues/exposition.webp";

const VenueExposition = () => {
  return (
    <section className="py-20 bg-bg-soft overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* HEADER + IMAGE */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center mb-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
          >
            Venue Module
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-text leading-tight"
          >
            Exposition Hall
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-text-muted mt-4 text-base leading-relaxed"
          >
            400,000 square feet of column-free event space — the largest expo floor
            in the Midwest, engineered for large-format productions, trade shows,
            and multi-day experiences with seamless logistics and integrated
            hospitality.
          </motion.p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-px mt-8 bg-[var(--color-border)]">
            {expositionStats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
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
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[var(--color-accent)]/10 blur-3xl rounded-2xl" />

          <motion.img
            src={exposition}
            alt="Exposition Hall"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative w-full h-[250px] md:h-[320px] object-cover rounded-2xl border border-[var(--color-border)]"
          />
        </motion.div>

      </div>

      {/* SPECS */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 pb-4"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
            Technical Specs
          </p>

          <h2 className="text-2xl font-bold text-text">
            Venue Specifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {expositionSpecs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                ease: "easeOut",
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-6 sm:p-10 rounded-2xl border border-accent/30 bg-accent/5 text-center"
      >
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          Book This Venue
        </p>

        <h4 className="text-[20px] sm:text-2xl font-bold text-text">
          Plan Your Large-Scale Event Here
        </h4>

        <p className="text-text-muted text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Multi-day expos and trade shows book 12–24 months out. Single-day
          corporate and gala formats available on 60-day windows.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-8 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:opacity-90 transition"
        >
          Request a Quote
        </motion.button>
      </motion.div>

    </section>
  );
};

export default VenueExposition;