"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <>
      {/* Top Quote */}
      <motion.section
        className="bg-white py-16 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl sm:text-3xl font-normal leading-relaxed font-ebgaramond mb-2">
          Your journey matters. I’m here when you’re ready.
        </p>
        <p className="text-lg sm:text-xl font-light italic">
          — Dr. Serena Blake
        </p>
      </motion.section>

      {/* Background Quote Image + Overlay Text */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/assets/services/quote.jpg"
          alt="Ocean background"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 bg-opacity-30 z-10" />

        <motion.div
          className="z-10 px-4 max-w-4xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl sm:text-3xl font-light mb-4 leading-relaxed font-ebgaramond">
            “Owning our story and loving ourselves through that process is the
            bravest thing that we’ll ever do.”
          </p>
          <p className="text-2xl italic">— Brené Brown</p>
        </motion.div>
      </section>
    </>
  );
}
