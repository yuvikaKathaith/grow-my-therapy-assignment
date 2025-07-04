"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { faqData } from "@/utils/faqData";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openItem, setOpenItem] = useState("");

  return (
    <motion.section
      className="bg-white lg:px-6 lg:py-50 sm:px-30 sm:py-40 text-[#7a6e5c] font-ebgaramond"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.h3
        className="text-2xl font-normal mx-auto max-w-4xl mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Therapy
      </motion.h3>

      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        viewport={{ once: true }}
      >
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={(val) => setOpenItem(val)}
        >
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AccordionItem value={`faq-${faq.id}`}>
                <AccordionTrigger className="text-left text-[20px] sm:text-[22px] font-light flex items-center justify-start gap-5 hover:no-underline focus:no-underline [&>svg]:hidden">
                  <div className="border border-[#7a6e5c] rounded-full p-1">
                    {openItem === `faq-${faq.id}` ? (
                      <ChevronDown className="w-5 h-5 text-[#7a6e5c]" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-[#7a6e5c]" />
                    )}
                  </div>
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[17px] sm:text-[19px] pl-12 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
