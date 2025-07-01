"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#fffffff1] my-16 mx-10 sm:px-10">
      <div className="flex items-center">
        <Link href='/'> 
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
