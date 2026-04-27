import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-10 right-8 z-50
        w-10 h-10 sm:w-12 sm:h-12
        rounded-full
        bg-white text-black
        border border-slate-950
        shadow-md
        flex items-center justify-center

        transition-all duration-300 ease-[0.16,1,0.3,1]

        ${visible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-6 pointer-events-none"
        }

        hover:bg-neutral-900 hover:text-white hover:border-neutral-900
        hover:shadow-xl hover:scale-105
        active:scale-95

        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:ring-offset-2
      `}
    >
      <FiArrowUp
        size={20}
        className="animate-bounce-smooth"
      />
    </button>
  );
};

export default BackToTop;