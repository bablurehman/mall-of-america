import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { trustData } from "../data/overview";
import { motion } from "framer-motion";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-accent)]"
        >
          Partnership Access
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="mt-4 text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text)]"
        >
          Become Part of a{" "}
          <span className="text-[var(--color-accent)]">
            Global Destination
          </span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          viewport={{ once: true }}
          className="h-[2.5px] w-[60px] bg-yellow-500 mx-auto mt-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          viewport={{ once: true }}
          className="mt-6 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto"
        >
          Connect with leasing, sponsorship, and event teams driving one of
          the world’s highest-performing commercial ecosystems.
        </motion.p>
      </div>

      {/* TRUST STRIP */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {trustData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-elevated)]"
            >
              <Icon className="mx-auto text-[var(--color-accent)] text-xl mb-3 transition-transform duration-300 group-hover:scale-110" />

              <p className="text-sm font-medium text-[var(--color-text)]">
                {item.title}
              </p>

              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA ACTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.48 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button
          variant="luxury"
          onClick={() => navigate("/leasing")}
          className="w-full sm:w-auto bg-white text-[var(--color-accent)] border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
        >
          Request Leasing
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate("/events")}
          className="w-full sm:w-auto text-[var(--color-accent)] border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
        >
          View Events
        </Button>
      </motion.div>

    </section>
  );
};

export default CTA;