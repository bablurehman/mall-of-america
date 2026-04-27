import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { venues } from "../../data/venues";
import VenueCTA from "./VenueCTA";
import venue from "../../assets/venues/venue.webp";

const VenuesPage = () => {
  return (
    <section className="py-20 overflow-hidden">
      <Container>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.5em] uppercase text-white/40"
            >
              Venue Modules
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              viewport={{ once: true }}
              className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            >
              Every Space.
              <span className="text-[var(--color-accent)] mt-2">
                {" "}Every Scale.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed"
            >
              A curated portfolio of flexible, architecturally distinct venues
              built for high-impact experiences, seamless production, and scalable
              audience engagement across formats.
            </motion.p>

            <ul className="mt-5 space-y-3 text-sm md:text-base text-[var(--color-text-muted)]">
              {[
                "Designed for brand activations and large-scale events",
                "Seamless production with immersive audience experiences",
                "Prime locations with high footfall and visibility",
              ].map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.28 + i * 0.08,
                    duration: 0.45,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-[6px] w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                  {point}
                </motion.li>
              ))}
            </ul>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[var(--color-accent)] opacity-10 blur-3xl rounded-2xl" />

            <img
              src={venue}
              alt="Venue showcase"
              loading="lazy"
              className="relative w-full h-[260px] md:h-[340px] object-cover rounded-2xl border border-[var(--color-border)]"
            />
          </motion.div>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {venues.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className="
                group p-3 sm:p-7
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                transition-all duration-300
                hover:border-[var(--color-accent)]
                hover:shadow-lg
              "
            >
              <Link to={v.link} className="block h-full">

                {v.icon && (
                  <div className="text-lg sm:text-xl text-[var(--color-accent)] mb-4">
                    <v.icon />
                  </div>
                )}

                <p className="text-[10px] uppercase text-[var(--color-accent)] mb-2">
                  {v.tag}
                </p>

                <h3 className="text-sm sm:text-xl md:text-2xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition duration-300">
                  {v.name}
                </h3>

                <p className="text-xs text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  {v.desc}
                </p>

                <div className="flex items-center gap-2 pt-3 text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-all duration-300">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <VenueCTA />

      </Container>
    </section>
  );
};

export default VenuesPage;