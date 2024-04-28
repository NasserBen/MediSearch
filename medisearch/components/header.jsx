"use client";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Image
        src="/images/mediLogo.svg"
        alt="logo"
        width={70}
        height={70}
        className="rotate-logo w-[30px] md:w-[70px] md:h-[70px]"
      />
      <div className="flex items-center justify-center font-bold md:text-6xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        MediSearch
      </div>
    </div>
  );
}
