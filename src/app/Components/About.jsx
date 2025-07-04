"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="bg-white text-[#7a6e5c] lg:px-6 sm:px-12 sm:py-25 lg:py-45"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="lg:max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-15">
        {/* about text */}
        <div className="lg:w-1/2">
          <h2 className="lg:text-4xl sm:text-[30px] font-ebgaramond font-light lg:mb-10 sm:mb-5">
            About Dr. Serena Blake
          </h2>

          <p className="lg:text-lg sm:text-lg leading-8 font-light lg:mb-6 font-ebgaramond">
            In today’s fast-paced world, prioritizing mental and emotional
            well-being can be difficult—but it's essential. I believe therapy
            provides a safe, intentional space to slow down, reflect, and
            reconnect with what matters most. Whether you're navigating stress,
            healing from trauma, or seeking deeper relationship satisfaction,
            therapy can support you in creating meaningful and lasting change.
          </p>

          <p className="lg:text-lg sm:text-lg leading-8 font-light lg:mb-6 font-ebgaramond">
            As a licensed clinical psychologist with over eight years of
            experience and more than 500 client sessions, I approach therapy
            with a deep sense of empathy, respect, and curiosity. I work
            collaboratively with each client, offering evidence-based
            psychological insights, active listening, and compassionate support
            tailored to your individual journey. My goal is to help you uncover
            patterns, strengthen resilience, and move toward a more fulfilling
            life.
          </p>

          <p className="lg:text-lg sm:text-lg leading-8 font-light font-ebgaramond">
            I earned my Doctor of Psychology (PsyD) in Clinical Psychology and
            have practiced in both in-person and virtual settings. My style
            blends cognitive-behavioral therapy, mindfulness, and humanistic
            approaches with a trauma-informed lens. I specialize in helping
            adults navigate anxiety, stress, relationship challenges, and trauma
            recovery in a way that honors your values and unique experiences.
          </p>
        </div>

        {/* about img */}
        <div className="w-full lg:w-1/2 flex justify-center sm:py-10">
          <Image
            src="/assets/about/profile.jpg"
            alt="Dr. Serena Blake"
            width={431}
            height={646}
            className="object-cover sm:w-[340px] md:w-[380px] lg:w-[500px] h-auto shadow-md"
          />
        </div>
      </div>
    </motion.section>
  );
}
