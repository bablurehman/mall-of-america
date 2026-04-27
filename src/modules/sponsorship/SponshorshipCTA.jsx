import React from "react";
import { motion } from "framer-motion";

const SponshorshipCTA = () => {
  return (
    <section className="pt-10 sm:pt-20 relative">

      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative pt-10 p-4 sm:p-10 rounded-2xl border border-accent/30 bg-accent/5 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
        >
          Let's Build Something Together
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[20px] sm:text-2xl font-semibold text-[var(--color-text)]"
        >
          Own Your Category at MOA
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-text-muted text-sm mt-3 mx-auto leading-relaxed max-w-md"
        >
          Exclusive, measurable sponsorships tailored to your brand, designed to
          drive reach, engagement, and real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm transition"
          >
            Start a Partnership
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default SponshorshipCTA;