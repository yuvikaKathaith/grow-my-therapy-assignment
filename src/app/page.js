import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Rates from "./Components/Rates";
import QuoteSection from "./Components/QuoteSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* partition */}
      <hr className="border-[#7e7e6b] border-b-1 opacity-60 mx-70 my-10" />
      <Services />
      <Rates />
      <QuoteSection />
      <FAQ />
      <Contact />
    </>
  );
}
