"use client";
import React, { useEffect } from "react";
import HamburgerButton from "./hamburger-button";
import clsx from "clsx";
import ROUTES_CONSTANT from "@/constants/route.constant";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: ROUTES_CONSTANT.services,
  },
  {
    label: "Our Key Values",
    href: ROUTES_CONSTANT.ourKeyValues,
  },
  {
    label: "About Us",
    href: ROUTES_CONSTANT.aboutUs,
  },
];
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <HamburgerButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <div
        className={clsx(
          "h-[170px] bg-header absolute w-full top-full left-0 right-0 z-mobile-navigation transition-all duration-300 ease-in-out",
          "-translate-y-[180px] scale-y-0 shadow-header", // 249px
          isOpen && "translate-y-0 scale-y-100",
          "rounded-b-lg origin-top"
        )}
      >
        <nav className="flex flex-col p-8 items-center [&>a:not(:last-child)]:mb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              onClick={toggleOpen}
            >
              <span className="text-base text-about-us-description font-medium">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed top-[79px] right-0 left-0 bottom-0 bg-black z-mobile-navigation-overlay w-full h-full opacity-30"
          onClick={toggleOpen}
        />
      )}
    </>
  );
}
