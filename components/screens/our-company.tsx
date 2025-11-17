"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "mission" | "vision" | "value";

export default function OurCompany() {
  const [activeTab, setActiveTab] = useState<TabKey>("mission");

  const tabs: Record<TabKey, { title: string; content: string }> = {
    mission: {
      title: "Our Mission",
      content:
        "An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We've raised the standard.",
    },
    vision: {
      title: "Our Vision",
      content:
        "We aim to redefine reliability in our industry by consistently delivering exceptional quality, maintaining transparency, and exceeding client expectations across every project we undertake.",
    },
    value: {
      title: "Our Value",
      content:
        "Integrity, excellence, and teamwork drive everything we do. We believe that success is built on trust, long-term partnerships, and the constant pursuit of improvement.",
    },
  };

  return (
    <div className="md-container pb-24 w-full">
      <div className="w-full grid grid-cols-1 md-container md:grid-cols-2 md:items-center gap-8 justify-center">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          {/* Heading */}
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
            <span className="text-primary">⋮⋮</span>
            About Our Company
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            A team of reliable and experienced{" "}
            <br className="hidden md:block" />
            <span className="text-gray-900">Contractors</span>
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia sit consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro dolor set quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur adipisci velit.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {(Object.keys(tabs) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2 text-sm font-medium transition-colors ${
                  activeTab === key
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tabs[key].title}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <div className="min-h-[100px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-gray-700 border-l-2 border-gray-200 pl-4">
                  {tabs[activeTab].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Section */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button className="btn bg-primary border-primary">
              learn More
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-primary flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a.75.75 0 00.75-.75v-3.295a.75.75 0 00-.61-.735l-3.722-.744a.75.75 0 00-.854.37l-.84 1.47a11.954 11.954 0 01-5.195-5.195l1.47-.84a.75.75 0 00.37-.854L7.03 6.12a.75.75 0 00-.735-.61H3a.75.75 0 00-.75.75v.49z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Want to Discuss:</p>
                <p className="font-bold text-gray-900 text-lg">+91(123)56789</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE (kept as original) */}
        <div className="md:h-[500px] h-full w-full relative">
          <img
            src="/element-6.png"
            alt="element-6"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
