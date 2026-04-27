import { motion } from "framer-motion";
import SectionTitle from "../../components/ui/SectionTitle";
import LeasingCard from "./LeasingCard";
import {
  leasingSegments,
  leasingStats,
  leasingTenants,
} from "../../data/leasing";
import LeasingCTA from "./LeasingCTA";

const LeasingPage = () => {
  return (
    <section className="py-20 bg-[var(--color-primary)] relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* AMBIENT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(186,117,23,0.08),transparent_70%)] pointer-events-none" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle
          eyebrow="Retail Leasing"
          title="Join a Global "
          span="Retail Destination"
          description="Flagship, luxury, pop-up, and F&B spaces across prime high-traffic zones."
        />
      </motion.div>

      {/* STATS */}
      <div className="relative mt-16 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-white/0.5 rounded-xl overflow-hidden">
          {leasingStats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="
                group bg-[var(--color-primary)] text-center p-6
                transition-all duration-500 hover:bg-[var(--color-secondary)]
              "
            >
              <p className="text-2xl md:text-4xl font-serif font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition">
                {value}
              </p>

              <div className="w-6 h-px mx-auto my-4 bg-[var(--color-accent)]/30 group-hover:w-10 transition-all duration-300" />

              <p className="text-[10px] uppercase text-[var(--color-text-muted)]">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SEGMENTS */}
      {leasingSegments.map(({ key, headline, pitch }) => {
        const segmentTenants = leasingTenants.filter(
          (t) => t.category === key
        );

        if (!segmentTenants.length) return null;

        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-24 md:mb-28"
          >
            {/* SEGMENT HEADER */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
              <div className="max-w-xl">
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-3">
                  {key}
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                  {headline}
                </h3>

                <p className="text-white/50 text-sm mt-3 leading-relaxed">
                  {pitch}
                </p>
              </div>
            </div>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {segmentTenants.map((tenant, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <LeasingCard {...tenant} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <LeasingCTA />
      </motion.div>

    </section>
  );
};

export default LeasingPage;