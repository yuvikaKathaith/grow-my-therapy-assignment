"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F6F3EB] py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="md:w-1/2 text-[#3E5248]">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
            About Dr. Serena Blake
          </h2>
          <p className="mb-5 leading-relaxed text-[17px]">
            In today’s fast-paced world, prioritizing mental and emotional well-being can be difficult—but it's essential. I believe therapy provides a safe, intentional space to slow down, reflect, and reconnect with what matters most. Whether you're navigating stress, healing from trauma, or seeking deeper relationship satisfaction, therapy can support you in creating meaningful and lasting change.
          </p>
          <p className="leading-relaxed text-[17px]">
            As a licensed clinical psychologist with over eight years of experience and more than 500 client sessions, I approach therapy with a deep sense of empathy, respect, and curiosity. I work collaboratively with each client, offering evidence-based psychological insights, active listening, and compassionate support tailored to your individual journey. My goal is to help you uncover patterns, strengthen resilience, and move toward a more fulfilling life.
          </p>
          <p className="leading-relaxed text-[17px]">
            I earned my Doctor of Psychology (PsyD) in Clinical Psychology and have practiced in both in-person and virtual settings. My style blends cognitive-behavioral therapy, mindfulness, and humanistic approaches with a trauma-informed lens. I specialize in helping adults navigate anxiety, stress, relationship challenges, and trauma recovery in a way that honors your values and unique experiences.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/about/profile.jpg" 
            alt="Dr. Serena Blake"
            width={400}
            height={500}
            className="rounded-sm object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
