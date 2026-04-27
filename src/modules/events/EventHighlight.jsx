import React from "react";
import { eventHighlights } from "../../data/events";
import { motion } from "framer-motion";

const EventHighlight = () => {
  return (
    <section className="py-20 bg-[var(--color-primary)] relative overflow-hidden">

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(186,117,23,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-[11px] text-gray-600">
            Event Highlights
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Engineered for{" "}
            <span className="text-[var(--color-accent)]">Scale & Impact</span>
          </h2>

          <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto pt-4">
            High-performance events that drive visibility, engagement, and commercial outcomes.
          </p>
        </motion.div>

        {/* LIST */}
        <div className="space-y-16 md:space-y-20">
          {eventHighlights.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${isReverse ? "md:order-2" : ""}`}
                >
                  <p className="text-[10px] tracking-[3px] uppercase text-[var(--color-accent)] mb-3">
                    {item.type}
                  </p>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-[var(--color-text)] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[var(--color-text-muted)] text-sm md:text-base mb-6 max-w-md">
                    {item.desc}
                  </p>

                  <div className="space-y-2 text-sm mb-6">
                    <p><span className="text-[var(--color-text)]">Venue:</span> <span className="text-[var(--color-text-muted)]">{item.venue}</span></p>
                    <p><span className="text-[var(--color-text)]">Date:</span> <span className="text-[var(--color-text-muted)]">{item.date}</span></p>
                    <p><span className="text-[var(--color-text)]">Format:</span> <span className="text-[var(--color-text-muted)]">{item.format}</span></p>
                  </div>

                  <div className="flex gap-8 sm:gap-12 pt-4 border-t border-[var(--color-border)]">
                    <div>
                      <p className="text-[10px] tracking-[2px] uppercase text-[var(--color-accent)] mb-1">Scale</p>
                      <p className="text-sm md:text-lg text-[var(--color-text)]">{item.scale}</p>
                    </div>

                    <div>
                      <p className="text-[10px] tracking-[2px] uppercase text-[var(--color-accent)] mb-1">Impact</p>
                      <p className="text-sm md:text-lg text-[var(--color-text)]">{item.impact}</p>
                    </div>
                  </div>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${isReverse ? "md:order-1" : ""}`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] group">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-[250px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/70 via-transparent to-transparent" />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EventHighlight;