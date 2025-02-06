import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-6xl mx-auto mt-20 px-4"
    >
      <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg text-primary">Preview Image</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;