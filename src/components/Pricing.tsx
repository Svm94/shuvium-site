"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");

  const prices = {
    INR: { basic: "0", pro: "499", symbol: "₹" },
    USD: { basic: "0", pro: "9.99", symbol: "$" },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="pricing" className="relative w-full py-32 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[60vw] h-[60vw] rounded-full bg-shuvium-orange/10 blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto relative z-10 glass-card backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border border-shuvium-orange/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.1em] bg-gradient-to-r from-shuvium-orange to-white bg-clip-text text-transparent uppercase mb-10">
            The Prana Economy
          </h2>

          <div
            role="group"
            aria-label="Currency selection"
            className="inline-flex glass-card p-1 rounded-full border border-shuvium-orange/40 relative"
          >
            <button
              onClick={() => setCurrency("INR")}
              aria-pressed={currency === "INR"}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-shuvium-orange focus-visible:outline-none ${
                currency === "INR" ? "text-white" : "text-shuvium-orange hover:text-white"
              }`}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              aria-pressed={currency === "USD"}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-shuvium-orange focus-visible:outline-none ${
                currency === "USD" ? "text-white" : "text-shuvium-orange hover:text-white"
              }`}
            >
              USD
            </button>
            {/* Sliding Toggle Background */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-shuvium-orange to-shuvium-gold rounded-full z-0"
              initial={false}
              animate={{
                left: currency === "INR" ? "0.25rem" : "calc(50% - 0.25rem)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Seeker Tier */}
          <motion.div
            variants={itemVariants}
            className="glass-card backdrop-blur-xl p-10 rounded-3xl relative overflow-hidden flex flex-col border border-white/5 hover:border-shuvium-orange/40 transition-all duration-500"
          >
            <h3 className="font-cinzel text-2xl mb-2 text-white tracking-widest uppercase">
              Seeker
            </h3>
            <div className="text-5xl font-bold mb-8 text-shuvium-orange font-inter flex items-baseline">
              <span className="text-3xl mr-1">{prices[currency].symbol}</span>
              {prices[currency].basic}
              <span className="text-sm opacity-50 font-normal ml-2 tracking-wide">/mo</span>
            </div>
            <ul className="space-y-6 mb-12 flex-1 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-4">
                <span className="text-shuvium-orange font-bold">✓</span> 3 Daily Free Pranas
              </li>
              <li className="flex items-start gap-4">
                <span className="text-shuvium-orange font-bold">✓</span> Gated Daily Insights
              </li>
              <li className="flex items-start gap-4">
                <span className="text-shuvium-orange font-bold">✓</span> Basic Micro-Rituals
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-shuvium-orange/50 text-shuvium-orange font-cinzel tracking-wider hover:bg-shuvium-orange/10 transition-colors uppercase text-sm">
              Current Path
            </button>
          </motion.div>

          {/* Acharya Tier */}
          <motion.div
            variants={itemVariants}
            className="glass-card backdrop-blur-xl p-10 rounded-3xl relative flex flex-col border-2 border-shuvium-orange shadow-[0_0_30px_rgba(201,102,21,0.5)] bg-gradient-to-b from-shuvium-orange/10 to-transparent"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-r from-shuvium-orange to-shuvium-gold text-white text-xs font-bold px-6 py-2 rounded-bl-xl rounded-tr-[1.4rem] uppercase tracking-widest shadow-lg">
              Most Popular
            </div>
            <h3 className="font-cinzel text-2xl mb-2 text-shuvium-orange tracking-widest uppercase text-glow-orange">
              Acharya
            </h3>
            <div className="text-5xl font-bold mb-8 text-white font-inter flex items-baseline">
              <span className="text-3xl mr-1 text-shuvium-orange/80">{prices[currency].symbol}</span>
              {prices[currency].pro}
              <span className="text-sm opacity-50 font-normal ml-2 tracking-wide">/mo</span>
            </div>
            <ul className="space-y-6 mb-12 flex-1 text-sm text-gray-100 font-light">
              <li className="flex items-start gap-4 text-shuvium-orange drop-shadow-md">
                <span className="font-bold">★</span> Unlimited Daily Insights
              </li>
              <li className="flex items-start gap-4">
                <span className="text-shuvium-orange font-bold">✓</span> Advanced Personalized Routines
              </li>
              <li className="flex items-start gap-4">
                <span className="text-shuvium-orange font-bold">✓</span> Sutra Card Roster Access
              </li>
              <li className="flex items-start gap-4">
                <span className="text-shuvium-orange font-bold">✓</span> Weekly Darshan Puzzle Fragments
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-shuvium-orange to-shuvium-gold text-white font-bold font-cinzel tracking-wider hover:shadow-[0_0_20px_rgba(201,102,21,0.6)] transition-all duration-300 uppercase text-sm hover:-translate-y-1">
              Power Up Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
