import { motion } from "framer-motion";
import { diningCategories } from "../data/dining";

const DiningCategory = () => {
  return (
    <section>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 max-w-xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] font-semibold uppercase text-gray-500 block mb-4"
        >
          Curation Model
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light leading-[1.2] tracking-tight font-medium text-gray-900"
        >
          Culinary{" "}
          <span className="text-[var(--color-accent)]">Strategy</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pt-4 text-sm sm:text-lg text-gray-700 leading-relaxed"
        >
          Each dining category is positioned to shape visitor behavior, extend
          engagement, and drive revenue across adjacent retail zones.
        </motion.p>
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 gap-6">
        {diningCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="group relative w-full rounded border border-gray-300 bg-white p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/30 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <h4 className="flex items-center gap-3 text-lg font-medium text-neutral-950 mb-3">
                <Icon className="text-lg text-neutral-600 group-hover:text-amber-500 transition" />
                <span>{category.title}</span>
              </h4>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-semibold text-amber-500">
                  {category.stat}
                </span>

                <span className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                  {category.statLabel}
                </span>
              </div>

              <p className="text-neutral-700 text-sm leading-relaxed">
                {category.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default DiningCategory;