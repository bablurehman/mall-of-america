import SectionTitle from "../../components/ui/SectionTitle";
import { audience } from "../../data/sponshorship";
import Activation from "./Activation";
import SponshorshipCTA from "./SponshorshipCTA";
import { motion } from "framer-motion";
import SponsorshipTiers from "./SponshorshipTiers";

const SponsorshipPage = () => {
  return (
    <section className="py-20 bg-[var(--color-primary)] relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* AMBIENT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(186,117,23,0.08),transparent_70%)] pointer-events-none" />

      {/* HEADER */}
      <SectionTitle
        eyebrow="Brand Partnerships"
        title="Own the Audience,"
        span=" Own the Moment."
        description="Category exclusivity, national reach, and direct access to 40M+ consumers."
      />

      {/* AUDIENCE STATS */}
      <div className="mt-16 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] rounded-xl overflow-hidden">
          {audience.map(({ value, label }, i) => (
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
              whileHover={{ y: -4 }}
              className="
                group bg-[var(--color-primary)] text-center py-10 px-4
                transition-all duration-500 hover:bg-[var(--color-secondary)]
              "
            >
              <p className="text-3xl md:text-4xl font-serif font-light text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition">
                {value}
              </p>

              <div className="w-6 h-px mx-auto my-4 bg-[var(--color-accent)]/30 group-hover:w-10 transition-all duration-300" />

              <p className="text-[11px] tracking-[3px] uppercase text-[var(--color-text-muted)]">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <SponsorshipTiers/>

      <Activation />

      <SponshorshipCTA />

    </section>
  );
};

export default SponsorshipPage;