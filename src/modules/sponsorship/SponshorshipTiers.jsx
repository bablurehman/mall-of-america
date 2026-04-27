import React from "react";
import { motion } from "framer-motion";
import { sponsorshipTiers } from "../../data/sponshorship";

const SponsorshipTiers = () => {
  return (
    <section className="relative">

      <div className="">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-[11px] text-gray-600"
          >
            Strategic Partnerships
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white"
          >
            Sponsorship Ecosystem
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2.5px] w-[60px] bg-yellow-500 mx-auto mt-2"
          />
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {sponsorshipTiers.map((tier, index) => {
            const Icon = tier.icon;
            const isHero = tier.id === "title-partner";

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`
                  group relative overflow-hidden rounded-2xl transition-all duration-500
                  hover:shadow-xl
                  ${
                    isHero
                      ? "border border-[var(--color-accent)] bg-gradient-to-b from-[var(--color-accent)]/10 to-transparent scale-[1.02]"
                      : "border border-white/20 bg-[var(--color-secondary)]"
                  }
                `}
              >
                {/* TOP */}
                <div className="p-6 border-b border-white/10">

                  <div className="flex items-center justify-between mb-5">
                    <Icon className="text-xl text-[var(--color-accent)] transition-transform duration-500 group-hover:scale-110" />

                    <span
                      className={`
                        text-xs px-3 py-1 rounded-full border
                        ${
                          isHero
                            ? "text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10"
                            : "text-[var(--color-text-muted)] border-white/10 bg-white/5"
                        }
                      `}
                    >
                      {tier.label}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[var(--color-text)]">
                    {tier.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    {tier.reach}
                  </p>

                  <p className="text-sm font-semibold text-[var(--color-text)] mt-3">
                    {tier.price}
                  </p>
                </div>

                {/* BENEFITS */}
                <div className="p-6">
                  <p className="text-[10px] tracking-[3px] uppercase text-[var(--color-text-muted)] mb-4">
                    Key Benefits
                  </p>

                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-[var(--color-text-muted)] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      mt-6 w-full py-3 rounded-xl text-sm font-semibold
                      border border-white/10 text-[var(--color-text)]
                      hover:bg-[var(--color-accent)] hover:text-white
                      transition-all duration-300
                    "
                  >
                    Request Partnership Deck
                  </motion.button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SponsorshipTiers;