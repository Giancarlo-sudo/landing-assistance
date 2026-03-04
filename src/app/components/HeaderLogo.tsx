"use client";

import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-slate-50/95 backdrop-blur-sm border-b-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex items-center relative shrink-0">
            <Image
              width={32}
              height={32}
              src="/image/logo/logo-kaia.png"
              alt="Logo Kaia"
              className="sm:w-10 sm:h-10"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
