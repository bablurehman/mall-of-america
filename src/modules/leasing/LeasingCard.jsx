import { motion } from "framer-motion";
import { leasingCategories } from "../../data/leasing";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiRuler } from "react-icons/bi";

const LeasingCard = ({
  name,
  category,
  zone,
  sqft,
  status = "Available",
  description,
}) => {
  const style = leasingCategories[category] || leasingCategories["Mid-Tier"];
  const Icon = style.icon;
  const isAvailable = status === "Available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden h-full"
    >
      {/* GLASS BACKGROUND */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl" />

      {/* HOVER GLOW */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-[var(--color-accent)]/10 blur-[120px] opacity-0 group-hover:opacity-100 transition duration-700" />

      {/* CONTENT */}
      <div className="relative p-6 flex flex-col gap-4 h-full">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <span
            className={`flex items-center gap-2 text-[11px] tracking-wider uppercase px-3 py-1 rounded-full border ${style.badge}`}
          >
            <Icon className="text-xs opacity-70" />
            {category}
          </span>

          <span
            className={`text-[11px] px-3 py-1 rounded-full border ${
              isAvailable
                ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                : "text-red-400 border-red-400/30 bg-red-400/10"
            }`}
          >
            {status}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-medium text-white leading-snug tracking-tight">
          {name}
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-white/50 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* META */}
        <div className="flex items-center justify-between text-sm text-white/50">

          {/* ZONE */}
          <span className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-base text-yellow-500" />
            {zone}
          </span>

          {/* SQFT */}
          {sqft && (
            <span className="flex items-center gap-1">
              <BiRuler className="text-base text-yellow-500" />
              {sqft} sq ft
            </span>
          )}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto w-full py-3 rounded-xl text-sm font-medium tracking-wide border border-white/20 text-white/80 bg-[var(--color-accent)] hover:bg-white hover:border-[var(--color-accent)] hover:text-black transition-all duration-300"
        >
          Inquire Space
        </motion.button>

      </div>
    </motion.div>
  );
};

export default LeasingCard;