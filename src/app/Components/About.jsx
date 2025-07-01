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
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="leading-relaxed text-[17px]">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive. Her therapeutic approach is rooted in empathy, curiosity, and evidence-based techniques tailored to your goals and needs.
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
