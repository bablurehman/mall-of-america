import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const VenueCard = ({ icon: Icon, label, value, desc }) => {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="
        group p-4 sm:p-6
        border border-[var(--color-accent)]/10
        bg-[var(--color-primary)]
        transition-all duration-500
        hover:border-[var(--color-accent)]
      "
    >

      {/* ICON */}
      {Icon && (
        <div className="mb-4">
          <Icon className="text-lg text-[var(--color-accent)] transition-transform duration-500 group-hover:scale-110" />
        </div>
      )}

      {/* LABEL */}
      <p className="text-[10px] tracking-[3px] uppercase text-[var(--color-text-muted)] mb-1">
        {label}
      </p>

      {/* VALUE */}
      <p className="font-serif text-lg text-[var(--color-text)]">
        {value}
      </p>

      {/* DIVIDER */}
      <div className="w-6 h-px bg-[var(--color-accent)]/40 my-3 group-hover:w-10 transition-all duration-300" />

      {/* DESC */}
      {desc && (
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          {desc}
        </p>
      )}

    </motion.div>
  );
};

export default VenueCard;