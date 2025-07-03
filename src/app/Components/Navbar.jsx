"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#f3f0e8] px-19 py-16">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={265}
            height={265}
            className="mr-4"
          />
        </Link>
      </div>
    </header>
  );
}
