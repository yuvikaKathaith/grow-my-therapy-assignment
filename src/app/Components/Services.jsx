"use client";

import ServiceCard from "@/app/Components/ServiceCard.jsx";
import { services } from "@/utils/servicesData.jsx";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      className="bg-[#f5f2eb] text-[#41413f] py-15 px-10 sm:px-10 text-center mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* main heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-ebgaramond font-extralight leading-snug max-w-5xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Feeling anxious, stuck, or emotionally drained? Therapy can help you
        come back to yourself, a powerful investment in your well-being.
      </motion.h2>

      {/* paragraph */}
      <motion.p
        className="text-[15px] sm:text-[16px] max-w-4xl mx-auto leading-relaxed font-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Whether you’re feeling overwhelmed, stuck, or simply ready for growth,
        therapy can offer clarity, support, and healing. You don’t have to carry
        it all on your own. Together, we’ll create a compassionate space to
        explore what matters most to you—helping you move toward a life that
        feels more grounded, balanced, and meaningful.
      </motion.p>

      {/* horizontal line */}
      <motion.hr
        className="border-[#7e7e6b] text-[#7a6e5c] border-b-1 opacity-60 mx-20 my-10 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      />

      <div className="mt-20">
        <motion.h3
          className="text-[30px] sm:text-[40px] font-ebgaramond font-light mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Areas of Focus
        </motion.h3>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-15 max-w-8xl mx-auto mt-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
