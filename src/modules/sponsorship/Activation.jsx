import React from "react";
import { motion } from "framer-motion";
import { activation } from "../../data/sponshorship";

const Activation = () => {
  return (
    <section className="py-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-[11px] text-gray-600"
        >
          Real Brand Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white"
        >
          Activation Case Studies
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[2.5px] w-[60px] bg-yellow-500 mx-auto mt-2"
        />
      </div>

      {/* CASE STUDIES */}
      <div className="space-y-20 md:space-y-24">
        {activation.map((itemData, index) => (
          <motion.div
            key={itemData.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className={`grid sm:grid-cols-2 gap-6 md:gap-12 items-center ${
              index % 2 !== 0 ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative pl-6 border-l border-white/10 hover:border-[var(--color-accent)]/50 transition-all duration-500"
            >
              <p className="text-xs tracking-[3px] uppercase text-[var(--color-accent)]">
                {itemData.type}
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text)] mt-3">
                {itemData.brand}
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] mt-4 max-w-xl">
                {itemData.description}
              </p>

              {/* METRICS */}
              <div className="flex flex-wrap gap-2 pt-4">
                {itemData.metrics.map((m, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-[var(--color-text-muted)]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* IMPACT */}
              <p className="py-4 text-sm text-[var(--color-text)] font-medium">
                {itemData.impact}
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={itemData.image}
                alt={itemData.brand}
                loading="lazy"
                className="w-full h-[220px] sm:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Activation;