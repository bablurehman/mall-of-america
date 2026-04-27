import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventsCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-[var(--color-primary)] overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[var(--color-accent)]/10 blur-[140px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative w-full text-center px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.45em] uppercase text-[var(--color-accent)] mb-5"
        >
          Ready to Activate
        </motion.p>

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight"
        >
          Build Your Next Event
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-[var(--color-text-muted)] mt-5 leading-relaxed max-w-xl mx-auto"
        >
          End-to-end execution across production, logistics, and audience delivery — designed for scale and impact.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}

          onClick={() => navigate("/events")}
          className="mt-8 px-10 py-4 rounded-full text-sm tracking-[1px] font-medium bg-[var(--color-accent)] text-black hover:opacity-90 transition"
        >
          Book Event
        </motion.button>

      </div>
    </section>
  );
};

export default EventsCTA;