"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#f3f0e8] lg:pb-20 sm:pb-10 font-ebgaramond">
      <section className="relative lg:h-[700px] sm:h-[680px] flex items-center justify-center text-center lg:mx-15 sm:mx-8">
        {/* bg video only on client to avoid hydration error */}
        {isClient && (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            >
              <source src="/assets/hero/nature.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60 bg-opacity-30 z-10" />
          </>
        )}

        {/* hero text */}
        <div className="relative z-20 text-white max-w-8xl lg:px-4 sm:px-10">
          <h1 className="lg:text-3xl sm:text-4xl font-serif lg:mt-10 sm:mt-10">
            <div className="lg:text-6xl sm:text-4xl font-light lg:mb-12 sm:mb-4">
              Psychological Care for
            </div>
            <div className="lg:text-6xl sm:text-4xl font-light lg:mb-10 sm:mb-4">
              Growth, Insight, and Healing
            </div>
          </h1>

          <p className="mt-6 lg:text-[22px] sm:text-[20px] font-extralight font-serif mb-5">
            Offering individual and couples therapy in Los Angeles and via
            secure Zoom sessions across California
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/hero/button.png"
              alt="Book a Free Consult"
              className="mx-auto lg:w-[280px] sm:w-[200px] h-auto transition duration-300 hover:brightness-75"
            />
          </a>
        </div>
      </section>
    </div>
  );
}