import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { useState } from "react";
import { motion } from "framer-motion";
import { propertyData } from "../data/overview";

const Overview = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-[var(--color-primary)]">
      <Container>

        {/* HEADER */}
        <SectionTitle
          eyebrow="Why This Property"
          title="A Global-Scale "
          span="Commercial Destination"
          description="Designed for unmatched accessibility, audience quality, and sustained footfall performance."
        />

        {/* GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {propertyData.map((item, i) => {
            const Icon = item.icon;
            const isActive = hovered === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}

                whileHover={{ y: -6 }}

                className="relative p-6 border border-[var(--color-border)] bg-white/5 hover:bg-white/10 transition-all duration-300"
              >

                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-[var(--color-accent)] text-xl mb-4"
                >
                  <Icon />
                </motion.div>

                {/* TITLE */}
                <h3 className="text-[var(--color-text)] text-lg font-medium">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* STAT */}
                <div className="mt-5 text-xs tracking-wide uppercase text-[var(--color-accent)]">
                  {item.stat}
                </div>

                {/* HOVER GLOW */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(201,161,74,0.12), transparent 60%)",
                  }}
                />

              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default Overview;