import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const LeasingCTA = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative rounded-3xl overflow-hidden border border-white/10"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-accent)]/20 blur-[140px]" />

      <div className="relative p-6 sm:p-12 text-center max-w-3xl mx-auto">

        {/* EYEBROW */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4"
        >
          Leasing Opportunity
        </motion.p>

        {/* TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight"
        >
          Let’s Position Your Brand
          <span className="block text-[var(--color-accent)] italic font-serif mt-2">
            Where It Performs Best
          </span>
        </motion.h3>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white/50 text-sm mt-6 leading-relaxed"
        >
          From global flagships to emerging concepts — we align your brand with
          the highest-performing zones across the destination.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="luxury"
              onClick={() => navigate("/leasing")}
              className="w-full sm:w-auto bg-white text-[var(--color-accent)] border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
            >
              Request Leasing
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default LeasingCTA;