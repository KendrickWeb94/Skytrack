"use client";

import React, { useState } from "react";

// Define the types for the props
interface AnimatedHamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const AnimatedHamburger = ({ isOpen, toggleMenu }: AnimatedHamburgerProps) => {
  // Shared classes for all three bars
  const barClasses =
    "block h-0.5 w-6 bg-gray-900 transform transition duration-500 ease-in-out";

  return (
    <button
      className="flex flex-col justify-around h-6 w-6 relative focus:outline-none z-50"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      {/* Top Bar */}
      <div
        className={`${barClasses} ${
          isOpen
            ? "translate-y-2 rotate-45" // Move down and rotate
            : "translate-y-0 bg-white"
        }`}
      ></div>

      {/* Middle Bar */}
      <div
        className={`${barClasses} ${
          isOpen
            ? "opacity-0" // Fade out middle bar
            : "opacity-100  bg-white"
        }`}
      ></div>

      {/* Bottom Bar */}
      <div
        className={`${barClasses} ${
          isOpen
            ? "-translate-y-2 -rotate-45" // Move up and rotate
            : "translate-y-0 bg-white"
        }`}
      ></div>
    </button>
  );
};

import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import CompanyLinks from "@/data/company-info";
import { usePathname } from "next/navigation";

export default function Navabr() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (link: string) => {
    if (!link) return false;
    // Exact match OR treat the link as a parent (uncomment next line if desired)
    // return pathname === link || pathname.startsWith(link + "/");
    return pathname === link;
  };
  return (
    <nav className="w-full h-auto  md-container relative py-4 flex items-center justify-between">
      <MobileMenu isOpen={isOpen} />
      <Logo />
      <div className="xlg:flex hidden justify-center  items-center text-white gap-6  text-sm font-medium cursor-pointer">
        {CompanyLinks.map((links) => {
          const href = links.subItems?.length ? "#" : links.link;
          const active = isActive(links.link);

          return (
            <div key={links.title} className="">
              <Link
                href={href}
                onClick={(e) => {
                  // If the item has subItems, prevent navigation (optional)
                  if (links.subItems?.length) {
                    e.preventDefault();
                    // you could also open submenu here
                  }
                }}
                className={`nav-link w-fit ${active ? "nav-link-active" : ""}`}
              >
                {links.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <button className="btn btn-primary">Get a Quote</button>
        <span className="text-white xlg:hidden block cursor-pointer">
          <AnimatedHamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        </span>
      </div>
    </nav>
  );
}
