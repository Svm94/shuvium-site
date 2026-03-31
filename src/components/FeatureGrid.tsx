"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rituals = [
  {
    title: "Precision Spirit Tech",
    description: "AI-driven guidance based on complex Support Vector Machines (SVM).",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Parent Reset",
    description: "Brief, powerful micro-rituals designed to restore patience and clarity.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Commuter Ritual",
    description: "Transform idle travel time into a focused sanctuary for deep energetic alignment.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function FeatureGrid() {
  return (
    <section id="rituals" className="relative w-full py-32 px-6 bg-shuvium-blue overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-shuvium-blue opacity-50 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.1em] bg-gradient-to-r from-shuvium-gold to-white bg-clip-text text-transparent uppercase mb-4">
            The Digital Sanctuary
          </h2>
          <p className="font-inter text-gray-300 max-w-2xl mx-auto font-light text-lg">
            High-ticket, personalized micro-rituals for the modern sage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {rituals.map((ritual, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:-translate-y-2 border border-white/10 hover:border-shuvium-gold/50 flex flex-col h-full"
            >
              <div className="relative w-full h-64 overflow-hidden border-b border-white/10">
                <Image
                  src={ritual.image}
                  alt={ritual.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] to-transparent opacity-80" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-cinzel text-xl text-shuvium-gold tracking-wider mb-4 group-hover:text-white transition-colors duration-300">
                  {ritual.title}
                </h3>
                <p className="font-inter text-sm text-gray-300 leading-relaxed font-light flex-grow">
                  {ritual.description}
                </p>
                <div className="mt-6 w-12 h-[1px] bg-shuvium-gold/30 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
