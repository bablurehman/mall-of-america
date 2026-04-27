import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { motion } from "framer-motion";

import { eventsStats } from "../../data/events";

import EventHighlight from "./EventHighlight";
import EventsCapabilities from "./EventsCapabilities";
import EventsCategories from "./EventsCategories";
import EventsCTA from "./EventsCTA";

const EventsPage = () => {
  return (
    <>
      {/* HERO + STATS */}
      <section className="py-24 bg-[var(--color-primary)]">
        <Container>

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow="Events Platform"
              title="A Global Stage for,"
              span="Every Experience"
              description="From headline concerts to landmark brand activations — Mall of America hosts over 500 events annually across 12 dedicated venues."
            />
          </motion.div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--color-accent)]/20 mt-16 bg-[var(--color-accent)]/10">

            {eventsStats.map(({ value, label }, i) => (
              <motion.div
                key={label}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}

                whileHover={{ y: -4 }}

                className="bg-[var(--color-primary)] text-center py-10 px-4 group transition-all duration-300 hover:bg-[var(--color-secondary)]"
              >
                <p className="font-serif text-[clamp(28px,4vw,44px)] font-light text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition">
                  {value}
                </p>

                <div className="w-6 h-px bg-[var(--color-accent)]/40 mx-auto my-4 group-hover:w-10 transition-all duration-300" />

                <p className="text-[11px] tracking-[3px] uppercase text-[var(--color-text-muted)]">
                  {label}
                </p>
              </motion.div>
            ))}

          </div>

        </Container>
      </section>

      {/* OTHER SECTIONS */}
      <EventsCapabilities />
      <EventsCategories />
      <EventHighlight />
      <EventsCTA />
    </>
  );
};

export default EventsPage;