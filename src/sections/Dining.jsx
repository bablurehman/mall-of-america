import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../components/ui/Container";
import dining from "../assets/images/dining.webp";
import DiningCategory from "./DiningCategory";
import DiningConcepts from "./DiningConcepts";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Dining = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white text-neutral-900 py-20 overflow-x-hidden">
      <Container>

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="uppercase tracking-[0.3em] text-[11px] text-gray-600"
          >
            Dining Ecosystem
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            A Revenue Engine, Not Just Food
          </motion.h2>

          <motion.div
            custom={2}
            variants={fadeUp}
            className="h-[2.5px] w-[60px] bg-yellow-500 mx-auto mt-2"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-4 text-gray-700"
          >
            Dining is strategically deployed to shape behavior and unlock
            commercial value across the destination.
          </motion.p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 relative rounded-[2rem] overflow-hidden border border-neutral-200 group"
        >
          <img
            src={dining}
            alt="Luxury dining"
            loading="lazy"
            className="w-full h-[270px] sm:h-[380px] md:h-[460px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 max-w-xl">

            <h3 className="text-[20px] sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-white">
              Dining That{" "}
              <span className="italic font-serif text-amber-500">
                Drives Revenue
              </span>
            </h3>

            <p className="hidden sm:flex text-white/80 mt-4 sm:text-base leading-relaxed">
              Designed to influence movement, extend dwell-time, and maximize spend.
            </p>

          </div>
        </motion.div>

        {/* GRID */}
        <div
          ref={ref}
          className="mt-20 grid lg:grid-cols-12 gap-12 xl:gap-20"
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 min-w-0"
          >
            <DiningCategory />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 min-w-0"
          >
            <DiningConcepts inView={inView} />
          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default Dining;