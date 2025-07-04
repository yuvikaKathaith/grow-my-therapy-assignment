"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#f3f0e8] lg:px-19 lg:py-13 sm:px-14 sm:py-12">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={265}
            height={265}
            className="lg:mr-4 lg:w-66 sm:w-58"
          />
        </Link>
      </div>
    </header>
  );
}
