"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    // Future API connection here
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-shuvium-blue">
      {/* Radial Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-shuvium-gold opacity-30 mix-blend-screen blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[20%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-shuvium-emerald opacity-20 mix-blend-screen blur-[150px]"
        />
      </div>

      {/* Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-16 flex flex-col items-center text-center"
      >
        <h1 className="font-cinzel text-4xl md:text-6xl text-white mb-6 tracking-wide text-glow-gold">
          Align Your Daily Energy
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
          Guiding modern seekers to inner peace through AI-personalized Vedic wisdom.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-shuvium-gold font-inter text-lg"
          >
            Thank you for joining the sanctuary. We will be in touch soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-4">
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className={`w-full px-6 py-4 rounded-full glass-input placeholder-gray-400 transition-all duration-300 font-inter text-center ${
                  error ? "border-red-500/50" : "border-shuvium-gold/30 hover:border-shuvium-gold/60"
                }`}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 font-inter"
                >
                  {error}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              className="px-8 py-3 rounded-full border border-shuvium-gold text-shuvium-gold font-cinzel tracking-wider hover:bg-shuvium-gold hover:text-shuvium-blue transition-colors duration-300 w-full sm:w-auto mt-2"
            >
              Join the Waitlist
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
