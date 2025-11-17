import { motion } from "framer-motion";

export default function AnimatedTagline() {
  const text = "Wear skill, not just a certificate.";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="mt-6 mb-8"
    >
      <p className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: 0.5 + index * 0.03
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
