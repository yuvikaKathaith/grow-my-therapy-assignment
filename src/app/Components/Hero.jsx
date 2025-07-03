"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#f3f0e8] pb-20">
      <section className="relative h-[780px] flex items-center justify-center text-center mx-19">
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
        <div className="relative z-20 text-white max-w-8xl px-4">
          <h1 className="text-3xl sm:text-5xl font-serif mt-10">
            <div className="text-4xl sm:text-6xl font-light mb-12">
              Compassionate Psychological Care for
            </div>
            <div className="text-4xl sm:text-6xl font-light mb-10">
              Growth, Insight, and Healing
            </div>
          </h1>

          <p className="mt-6 text-lg sm:text-[23px] font-extralight font-serif mb-5">
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
              className="mx-auto w-[280px] h-auto transition duration-300 hover:brightness-75"
            />
          </a>
        </div>
      </section>
    </div>
  );
}