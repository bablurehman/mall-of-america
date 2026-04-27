import { motion } from "framer-motion";

const SectionTitle = ({
  eyebrow,
  title,
  span,
  description,
  align = "center",
}) => {
  return (
    <div className={`mb-6 sm:mb-10 text-${align}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.2em] text-xs text-text-muted"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-text mt-1"
      >
        {title}
        <span className="text-[var(--color-accent)]">{span}</span>
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-text-muted max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;