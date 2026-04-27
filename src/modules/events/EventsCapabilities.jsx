import React from "react";
import {
  FaSlidersH,
  FaBuilding,
  FaBroadcastTower,
  FaGlobe,
  FaCalendarAlt,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { eventsCapabilities } from "../../data/events";

const icons = [
  <FaSlidersH />,
  <FaBuilding />,
  <FaBroadcastTower />,
  <FaGlobe />,
  <FaCalendarAlt />,
  <FaHandshake />,
];

const EventsCapabilities = () => {
  return (
    <section className="py-24 bg-[var(--color-primary)] relative overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[var(--color-accent)]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.3em] text-[11px] text-gray-600"
          >
            Infrastructure
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white"
          >
            Event Hosting Capabilities
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 60, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[2.5px] bg-yellow-500 mx-auto mt-3"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {eventsCapabilities.map((itemData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}

              whileHover={{ y: -6 }}

              className="group border border-[var(--color-accent)]/10 bg-[var(--color-secondary)] p-6 transition-all duration-500 hover:border-[var(--color-accent)]/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            >

              {/* Icon */}
              <div className="text-lg text-[var(--color-accent)] mb-4 transition-transform duration-300 group-hover:scale-110">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[var(--color-text)] text-base mb-2">
                {itemData.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {itemData.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default EventsCapabilities;