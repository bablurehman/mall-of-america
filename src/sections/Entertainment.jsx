import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import { entertainmentData } from "../data/entertainment";

const Entertainment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = entertainmentData[activeIndex];

  return (
    <section className="py-20 bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <SectionTitle
        eyebrow="Entertainment Platform"
        title="A Destination That "
        span="Drives Repeat Visits"
        description="Entertainment transforms the property into a year-round attraction engine."
      />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-10 sm:py-20"
      >
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-xs text-white/40 uppercase tracking-[2px]">
                {active.tag}
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2">
                {active.title}
              </h2>

              <p className="text-white/60 mt-4">
                {active.desc}
              </p>

              <div className="flex gap-6 sm:gap-10 mt-8">
                {active.stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <p className="text-base sm:text-lg font-medium text-[var(--color-accent)]">
                      {s.v}
                    </p>
                    <p className="text-xs text-white/40">{s.l}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "visual"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-[250px] sm:h-[290px] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={active.image}
                alt={active.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* SELECTOR */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:mr-20">
          {entertainmentData.map((itemData, i) => {
            const isActive = i === activeIndex;

            return (
              <motion.button
                key={itemData.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(i)}
                className={`
                  p-2 sm:p-6 border text-left transition-all duration-300
                  ${
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-surface-elevated)]"
                      : "border-white/30 opacity-60 hover:opacity-100 hover:border-[var(--color-accent)]"
                  }
                `}
              >
                <p className="text-[10px] sm:text-xs font-semibold text-[var(--color-text-muted)] mb-2 tracking-widest uppercase">
                  {itemData.tag}
                </p>

                <p className="text-sm sm:text-base text-[var(--color-text)]">
                  {itemData.title}
                </p>
              </motion.button>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default Entertainment;