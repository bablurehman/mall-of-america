import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VideoBackground from "../components/media/VideoBackground";
import Button from "../components/ui/Button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <VideoBackground>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="sm:max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* EYEBROW */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[10px] md:text-xs uppercase  font-semibold  sm:font-bold tracking-[0.20em] sm:tracking-[0.38em] text-[var(--color-accent)] mb-6"
            >
              North America’s Premier Destination Platform
            </motion.p>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.4] tracking-tight text-white "
            >
              Where Brands, Experiences & Global <span className="text-[var(--color-accent)]">Attention Converge</span>
            </motion.h1>

            {/* SUBCOPY */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 sm:max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed text-white/60"
            >
              Mall of America is more than a retail destination it is a
              large-scale commercial ecosystem where flagship brands, premium
              experiences, and high-impact events drive unmatched consumer
              engagement.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button onClick={() => navigate("/leasing")}>
                  Explore Leasing
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="ghost" onClick={() => navigate("/events")}>
                  View Events
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default Hero;
