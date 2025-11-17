"use client";

import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="min-h-auto w-full md-container space-y-8">
      <div className="space-y-4 md:text-center w-full mx-auto md:max-w-2xl">
        <h1 className="text-4xl text-gray-950 uppercase font-extrabold">
          Our Projects
        </h1>
        <p>
          {/* SkyTrack West Africa offers a comprehensive suite of services designed
          to meet the diverse needs of our clients. */}
          SkyTrack West Africa executes high-impact projects that deliver
          lasting value across marine logistics, construction, and vessel
          engineering
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto max-w-5xl w-full min-h-[40vh]">
        <div className="flex w-full flex-col md:flex-row  justify-between gap-8">
          <div className="flex flex-col space-y-4 w-full">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`flex items-center  p-2 justify-between max-w-lg w-full
                ${activeTab === "tab1" ? " rounded-lg shadow-md" : ""}
             `}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/Project-1.jpg"
                  className="size-12 rounded-lg"
                  alt=""
                />

                <h1
                  className={`text-sm font-medium text-gray-400 ${
                    activeTab === "tab1"
                      ? "text-lg font-medium text-gray-800"
                      : ""
                  }`}
                >
                  Utah Building Oshodi
                </h1>
              </div>
              {activeTab === "tab1" && (
                <ChevronRightIcon className="w-6 h-6 text-paragraph/50" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("tab2")}
              className={`flex items-center  p-2 justify-between max-w-lg w-full
                ${activeTab === "tab2" ? " rounded-lg shadow-md" : ""}
             `}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/Project-2.jpg"
                  className="size-12 rounded-lg"
                  alt=""
                />

                <h1
                  className={`text-sm font-medium text-gray-400 ${
                    activeTab === "tab2"
                      ? "text-lg font-medium text-gray-800"
                      : ""
                  }`}
                >
                  Victoria Island Office Complex
                </h1>
              </div>
              {activeTab === "tab2" && (
                <ChevronRightIcon className="w-6 h-6 text-paragraph/50" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("tab3")}
              className={`flex items-center  p-2 justify-between max-w-lg w-full
                ${activeTab === "tab3" ? " rounded-lg shadow-md" : ""}
             `}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/Project-3.jpg"
                  className="size-12 rounded-lg"
                  alt=""
                />

                <h1
                  className={`text-sm font-medium text-gray-400 ${
                    activeTab === "tab3"
                      ? "text-lg font-medium text-gray-800"
                      : ""
                  }`}
                >
                  Lekki Residential Estate
                </h1>
              </div>
              {activeTab === "tab3" && (
                <ChevronRightIcon className="w-6 h-6 text-paragraph/50" />
              )}
            </button>
          </div>
          <div className="w-full ">
            <div className="tab-content">
              {activeTab === "tab1" && (
                <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-700">
                  <h1 className=" font-bold text-gray-950 text-xl">
                    Utah Building Oshodi
                  </h1>
                  <p>
                    A modern office building located in the heart of Oshodi,
                    Lagos State. The building features state-of-the-art
                    facilities, ample parking space.
                  </p>
                  <img
                    src="/Project-1.jpg"
                    className="h-[300px] rounded-md max-w-xl w-full"
                    alt="project image"
                  />
                </div>
              )}
              {activeTab === "tab2" && (
                <div className="space-y-4">
                  <h1 className=" font-bold text-gray-950 text-xl">
                    Victoria Island Office Complex
                  </h1>
                  <p>
                    A premium office space located in the prestigious Victoria
                    Island area of Lagos. The complex offers modern amenities,
                    24/7 security, and easy access to major business districts.
                  </p>
                  <img
                    src="/Project-2.jpg"
                    className="h-[300px] rounded-md max-w-xl w-full"
                    alt="project image"
                  />
                </div>
              )}
              {activeTab === "tab3" && (
                <div className="space-y-4">
                  <h1 className=" font-bold text-gray-950 text-xl">
                    Lekki Residential Estate
                  </h1>
                  <p>
                    A luxurious residential estate located in the heart of
                    Lekki, Lagos. The estate features modern apartments, lush
                    greenery, and top-notch security.
                  </p>
                  <img
                    src="/Project-3.jpg"
                    className="h-[300px] rounded-md max-w-xl w-full"
                    alt="project image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
