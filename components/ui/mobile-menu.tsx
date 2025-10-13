"use client";
import { useState } from "react";
import CompanyLinks from "@/data/company-info";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface AnimatedHamburgerProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: AnimatedHamburgerProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSub = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <aside
      className={`bg-white text-heading fixed  transition-all  top-0 ease-in-out delay-500 duration-500 left-0 w-full block z-40 xlg:hidden ${
        isOpen ? "h-dvh w-full overflow-auto" : "h-0 w-0 overflow-hidden"
      }`}
    >
      <h1 className="m-6 mt-10 text-heading font-inter font-semibold text-2xl">
        Menu
      </h1>

      {CompanyLinks.map((links) => (
        <ul key={links.title}>
          <div className="w-full border-t-[0.5px] last:border-b-0  border-gray-400/50 border-b-[0.5px]">
            <div className="flex items-center justify-between">
              <Link
                href={
                  links.subItems && links.subItems.length > 0 ? "#" : links.link
                }
                className="py-4 px-5 text-gray-700 font-medium"
              >
                {links.title}
              </Link>

              {links.subItems && links.subItems.length > 0 && (
                <div className="border-l py-4 border-gray-400/50 px-2">
                  <button onClick={() => toggleSub(links.title)}>
                    {openMenu === links.title ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {links.subItems && links.subItems.length > 0 && (
            <div
              className={`px-10 overflow-hidden transition-all duration-300 ${
                openMenu === links.title ? "max-h-96 my-4" : "max-h-0 my-0"
              }`}
            >
              {links.subItems.map((sub) => (
                <li
                  key={sub.title}
                  className="py-3 border-b border-gray-400/40 last:border-0 hover:bg-primary/20"
                >
                  {sub.title}
                </li>
              ))}
            </div>
          )}
        </ul>
      ))}
    </aside>
  );
}
