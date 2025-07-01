"use client";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      {/* bg video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/assets/hero/nature.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 bg-opacity-30 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-white max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-serif font-semibold leading-snug">
          Empowering<br />
          <span className="text-4xl sm:text-6xl font-bold">
            Change, Insight, and Well-Being
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-light">
          Offering individual and couples therapy both in-person in Los Angeles and via secure Zoom sessions across California
        </p>
        <button className="mt-8 bg-[#AECAC6] hover:bg-[#9cbab5] text-white font-semibold tracking-wide py-3 px-8 rounded-full text-md transition">
          BOOK A FREE CONSULT
        </button>
      </div>
    </section>
  );
}
