import React from "react";
import { motion } from "framer-motion";
import { eventsCategories } from "../../data/events";

const EventsCategories = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(186,117,23,0.10),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER (same pattern as Overview) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] tracking-[4px] uppercase text-[var(--color-accent)] mb-3">
            What We Host
          </p>

          <div className="w-10 h-px bg-[var(--color-accent)]/30 mx-auto mb-6" />

          <h2 className="font-serif text-[clamp(36px,5vw,60px)] text-neutral-900 leading-tight">
            Event Categories
          </h2>

          <p className="text-sm text-neutral-500 mt-4 max-w-xl mx-auto">
            A multi-format destination for concerts, launches, expos, and cultural experiences.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {eventsCategories.map((item, i) => {
            const isHighlight = item.highlight;

            return (
              <motion.div
                key={item.title || i}

                /* SAME PATTERN AS OVERVIEW */
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}

                whileHover={{ y: -6 }}

                className={`
                  group relative bg-white border border-neutral-200
                  hover:shadow-2xl transition-all duration-300
                  ${isHighlight ? "sm:col-span-2 lg:col-span-2 p-8 md:p-10" : "p-6"}
                `}
              >

                {/* TOP */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-[3px] uppercase text-[var(--color-accent)] font-semibold">
                    {item.type}
                  </span>

                  {isHighlight && (
                    <span className="text-[10px] px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      Featured
                    </span>
                  )}
                </div>

                {/* TITLE */}
                <h3
                  className={`
                    font-serif text-neutral-900 leading-tight mb-3 transition-colors duration-300
                    ${isHighlight
                      ? "text-2xl md:text-4xl"
                      : "text-lg group-hover:text-[var(--color-accent)]"}
                  `}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`
                    text-neutral-600 leading-relaxed
                    ${isHighlight ? "text-sm mb-8 max-w-lg" : "text-sm mb-6"}
                  `}
                >
                  {item.description}
                </p>

                {/* META */}
                <div className="grid grid-cols-2 gap-6 pt-5 border-t border-neutral-200">
                  <div>
                    <p className="text-[10px] tracking-[2px] uppercase text-neutral-400 mb-1">
                      Venue
                    </p>
                    <p className="text-sm text-neutral-900 font-medium">
                      {item.venue}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[2px] uppercase text-neutral-400 mb-1">
                      Capacity
                    </p>
                    <p className="text-sm text-neutral-900 font-medium">
                      {item.capacity}
                    </p>
                  </div>
                </div>

                {/* ACCENT LINE */}
                <div className="absolute bottom-0 left-0 w-10 h-[2px] bg-[var(--color-accent)] transition-all duration-500 group-hover:w-24" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default EventsCategories;