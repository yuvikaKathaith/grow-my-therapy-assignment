"use client";

import ServiceCard from "@/app/Components/ServiceCard.jsx";
import { services } from "@/utils/servicesData.jsx";

export default function Services() {
  return (
    <section className="bg-[#f5f2eb] text-[#41413f] py-15 px-10 sm:px-10 text-center mt-20">
      {/* main heading */}
      <h2 className="text-4xl sm:text-5xl font-ebgaramond font-extralight leading-snug max-w-5xl mx-auto mb-8">
        Feeling anxious, stuck, or emotionally drained? Therapy can help you
        come back to yourself.
        <br />
        <span className="block mt-2">
          a powerful investment in your well-being.
        </span>
      </h2>

      {/* paragraph */}
      <p className="text-[17px] sm:text-[18px] max-w-4xl mx-auto leading-relaxed font-light">
        Whether you’re feeling overwhelmed, stuck, or simply ready for growth,
        therapy can offer clarity, support, and healing. You don’t have to carry
        it all on your own. Together, we’ll create a compassionate space to
        explore what matters most to you—helping you move toward a life that
        feels more grounded, balanced, and meaningful.
      </p>

      {/* horizontal line */}
      <hr className="border-[#7e7e6b] text-[#7a6e5c] border-b-1 opacity-60 mx-60 my-10 mt-20" />

      <div className="mt-20">
        <h3 className="text-[30px] sm:text-[40px] font-ebgaramond font-light mb-14">
          Areas of Focus
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-15 max-w-8xl mx-auto mt-30">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}