import { Instagram2SVG, Linkedin2SVG } from "@/common/assets";
import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <div className="flex flex-[0.4] lg:flex-1 items-end justify-end">
      <Link
        href="https://www.instagram.com/jovinlidan/"
        rel="noreferrer"
        title="Instagram"
        target="_blank"
        className="w-[34px] h-[34px] shadow-social-footer bg-gray-50 items-center justify-center flex rounded-full mr-5"
      >
        <Instagram2SVG />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jovinlidan/"
        rel="noreferrer"
        target="_blank"
        title="LinkedIn"
        className="w-[34px] h-[34px] shadow-social-footer bg-gray-50 items-center justify-center flex rounded-full"
      >
        <Linkedin2SVG />
      </Link>
    </div>
  );
}
