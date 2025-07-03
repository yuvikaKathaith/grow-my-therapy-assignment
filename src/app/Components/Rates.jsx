"use client";

import { motion } from "framer-motion";

export default function Rate() {
  return (
    <motion.section
      className="bg-[#b3cf99] text-[#716045] py-20 px-4 text-center font-ebgaramond"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-ebgaramond mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Rates and Insurance
        </motion.h2>

        <motion.p
          className="text-xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Session Fee – $200 / individual
        </motion.p>

        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Couples Session – $240
        </motion.p>

        <motion.p
          className="text-[19px] mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </motion.p>

        <motion.p
          className="text-[18px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          For out-of-network plans, I’ve partnered with Mentaya
          to help you check your eligibility for reimbursement for my services.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}