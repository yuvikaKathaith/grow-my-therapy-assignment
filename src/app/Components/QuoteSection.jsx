import Image from "next/image";

export default function QuoteSection() {
  return (
    <>
      <section className="bg-white py-16 px-6 text-center">
        <p className="text-3xl sm:text-4xl font-normal leading-relaxed font-ebgaramond mb-2">
          Your journey matters. I’m here when you’re ready.
        </p>
        <p className="text-lg sm:text-xl font-light italic">— Dr. Serena Blake</p>
      </section>
      <section className="relative w-full h-[600px] flex items-center justify-center text-center">
        <Image
          src="/assets/services/quote.jpg"
          alt="Ocean background"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 bg-opacity-30 z-10" />
        <div className="z-10 px-4 max-w-4xl text-white">
          <p className="text-2xl sm:text-3xl font-light mb-4 leading-relaxed font-ebgaramond">
            “Owning our story and loving ourselves through that process is the bravest thing that we’ll ever do.”
          </p>
          <p className="text-2xl italic">— Brené Brown</p>
        </div>
      </section>
    </>
  );
}
