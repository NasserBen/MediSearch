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
        className="mb-12 ml-5 rotate-logo"
      />
      <div className="flex items-center justify-center font-bold text-6xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        MediSearch
      </div>
    </div>
  );
}
