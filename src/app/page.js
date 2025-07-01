import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
