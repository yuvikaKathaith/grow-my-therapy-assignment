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

export default function FAQ() {
  const [openItem, setOpenItem] = useState("");
  return (
    <section className="bg-white px-6 py-50 text-[#7a6e5c] font-ebgaramond">
      <h2 className="text-4xl sm:text-5xl font-ebgaramond text-center mb-14">
        Frequently Asked Questions
      </h2>
      <h3 className="text-3xl font-normal mx-auto font-ebgaramond max-w-4xl mb-3">Therapy</h3>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto"
        value={openItem}
        onValueChange={(val) => setOpenItem(val)}
      >
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
            <AccordionTrigger className="text-left text-[22px] sm:text-[24px] font-light flex items-center justify-start gap-5 hover:no-underline focus:no-underline [&>svg]:hidden">
              <div className="border border-[#7a6e5c] rounded-full p-1">
                {openItem === `faq-${faq.id}` ? (
                  <ChevronDown className="w-5 h-5 text-[#7a6e5c]" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-[#7a6e5c]" />
                )}
              </div>
              <span>{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className=" text-[19px] sm:text-[21px] pl-12 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
