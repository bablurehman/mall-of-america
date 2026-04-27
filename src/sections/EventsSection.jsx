import { Link } from "react-router-dom";
import { eventsSection, eventsStats } from "../data/overview";
import SectionTitle from "../components/ui/SectionTitle";
import { motion } from "framer-motion";

const EventsSection = () => {
  return (
    <section className="pb-20 bg-[var(--color-primary)] relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <SectionTitle
        eyebrow="Events Platform"
        title="A Global Stage for "
        span="Brands & Artists"
        description="Host concerts, product launches, and large-scale activations that command attention."
      />

      {/* STATS */}
      <div className="grid grid-cols-3 gap-px bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/20 mb-10">
        {eventsStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-[var(--color-primary)] py-8 text-center hover:bg-[var(--color-secondary)]/40 transition"
          >
            <p className="font-serif text-2xl sm:text-4xl font-light text-[var(--color-text)]">
              {s.num}
            </p>

            <p className="text-[11px] tracking-[2.5px] uppercase text-[var(--color-text-muted)] mt-3">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* EVENT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {eventsSection.map((ev, i) => (
          <motion.div
            key={ev.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group border border-[var(--color-accent)]/10 bg-[var(--color-secondary)] hover:border-[var(--color-accent)]/40 transition-all duration-500 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-[200px] sm:h-[250px] relative overflow-hidden">
              <img
                src={ev.image}
                alt={ev.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 z-10">
                <p className="text-[10px] font-bold tracking-[3px] uppercase text-[var(--color-accent)] mb-2">
                  {ev.type}
                </p>

                <p className="text-base sm:text-lg text-[var(--color-text)]">
                  {ev.title}
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-4 border-t border-[var(--color-accent)]/20 flex justify-between items-center">
              <span className="text-xs text-[var(--color-text-muted)]">
                {ev.venue}
              </span>

              <span className="text-[10px] tracking-wide text-[var(--color-accent)]">
                {ev.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center flex justify-center"
      >
        <Link
          to="/events"
          className="text-[11px] tracking-[2px] uppercase text-[var(--color-text-muted)] border border-[var(--color-text-muted)]/30 px-10 py-4 hover:text-[var(--color-text)] hover:border-[var(--color-text)]/50 transition-all duration-300"
        >
          View All Events
        </Link>
      </motion.div>

    </section>
  );
};

export default EventsSection;