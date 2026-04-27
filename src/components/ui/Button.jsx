import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden";

  const variants = {
    primary: "bg-accent text-black hover:opacity-90",
    ghost:
      "border border-[var(--color-border)] text-text hover:bg-white hover:text-black",
    luxury:
      "bg-[var(--gradient-accent)] text-black hover:opacity-90",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;