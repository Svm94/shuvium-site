"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent">
      {/* Radial Gradient Mesh Background - Deep Space Blue & Shuvium Gold & Orange */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-shuvium-gold opacity-30 mix-blend-screen blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-shuvium-blue opacity-80 mix-blend-multiply blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-[40%] right-[30%] w-[40vw] h-[40vw] rounded-full bg-shuvium-gold opacity-20 mix-blend-screen blur-[100px]"
        />

        {/* The Orange Glow requested by user */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-[#C96615] rounded-full blur-[120px] opacity-20 mix-blend-screen"
        />
      </div>

      {/* Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-16 flex flex-col items-center text-center mt-20"
      >
        <h1 className="font-cinzel text-4xl md:text-6xl mb-6 tracking-[0.15em] bg-gradient-to-r from-shuvium-gold via-shuvium-orange to-white bg-clip-text text-transparent uppercase text-glow-orange">
          Align Your Daily Energy
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
          Guiding modern seekers to inner peace through AI-personalized Vedic wisdom.
        </p>

        <a
          href="#pricing"
          className="px-8 py-3 rounded-full border border-shuvium-orange text-shuvium-orange font-cinzel tracking-[0.1em] uppercase hover:bg-shuvium-orange hover:text-white hover:shadow-[0_0_20px_rgba(201,102,21,0.6)] transition-all duration-300 w-full sm:w-auto mt-2 block text-center"
        >
          Join the Elite Tribe
        </a>
      </motion.div>
    </section>
  );
}
