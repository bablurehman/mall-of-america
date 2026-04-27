import { motion } from "framer-motion";
import { diningImpacts } from "../data/dining";

const DiningConcepts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="lg:col-span-5 lg:sticky top-32 min-w-0"
    >
      <div className="relative rounded-[2.2rem] overflow-hidden bg-white border border-gray-300 shadow-sm">

        <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-200/30 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-neutral-100 blur-[100px]" />

        <div className="relative p-6">

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
              200<span className="text-amber-500">+</span>
            </h2>

            <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-neutral-500 mt-2">
              Dining Concepts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 mb-6 sm:mb-10"
          >
            <p className="text-neutral-700 leading-relaxed text-[15px]">
              Dining clusters operate as{" "}
              <span className="text-neutral-900 font-medium">
                behavioral infrastructure
              </span>{" "}
              engineered to guide movement, extend dwell-time, and maximize
              revenue density across the destination.
            </p>
          </motion.div>

          <div className="space-y-5">
            {diningImpacts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-5 h-px bg-neutral-300 group-hover:bg-amber-500 group-hover:w-10 transition-all duration-500" />

                <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default DiningConcepts;