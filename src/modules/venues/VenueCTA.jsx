import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VenueCTA = () => {
  return (
    <section className="pt-20 relative">

      {/* subtle glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative text-center border border-[var(--color-border)] bg-[var(--color-surface)] rounded-3xl p-6 sm:p-10"
      >

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-5"
        >
          Ready to Book
        </motion.p>

        <motion.h4
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.55 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-[var(--color-text)]"
        >
          Let’s Build Your Event.
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-[var(--color-text-muted)] mt-5 max-w-lg mx-auto leading-relaxed"
        >
          Connect with our team to plan and execute your next event across our venues.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.32, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-sm font-medium text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 hover:shadow-xl"
            >
              <span>Start Planning</span>
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default VenueCTA;