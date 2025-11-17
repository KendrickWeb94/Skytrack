import { ServicesData } from "@/data/company-info";
import { Blocks, Crown, MapPin } from "lucide-react";

export default function OurServices() {
  return (
    <div className="md-container space-y-16 w-full">
      <div className="space-y-4 md:text-center w-full mx-auto md:max-w-xl">
        <h1 className="text-4xl text-gray-950 uppercase font-extrabold">
          Our Services
        </h1>
        <p>
          {/* SkyTrack West Africa offers a comprehensive suite of services designed
          to meet the diverse needs of our clients. */}
          SkyTrack West Africa offers a comprehensive suite of services designed
          to meet the diverse needs of our clients.
        </p>
      </div>
      <div className="space-y-16 w-full">
        {ServicesData.map((item) => {
          // @ts-ignore
          const isEven = item.id % 2 === 0;

          return (
            <div
              key={item.id}
              className={`
                w-full overflow-hidden md:h-38 flex items-center 
                flex-col md:flex-row 
                ${isEven ? "md:flex-row-reverse" : ""} 
              `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt="service-image"
                className="h-48 md:h-full max-w-full md:max-w-[300px] object-cover w-full"
              />

              {/* MIDDLE SECTION */}
              <div className="w-full border-b border-dashed border-t border-gray-300 px-4 py-4 flex items-center justify-center h-full">
                <div className="space-y-4 max-w-sm w-full">
                  <div className="flex items-center gap-4">
                    <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-primary">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h1 className="text-paragraph text-xs font-normal">
                        Location:
                      </h1>
                      <p className="text-gray-900 font-semibold text-sm">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-primary">
                      <Blocks size={16} />
                    </div>
                    <div>
                      <h1 className="text-xs text-paragraph">Builder:</h1>
                      <p className="text-gray-900 font-semibold text-sm">
                        {item.builder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div
                className={`
                  w-full md:border border-dashed h-full border-gray-300 p-6
                  flex items-center justify-center
                  md:rounded-r-full 
                  ${isEven ? "md:rounded-l-full md:rounded-r-none" : ""}
                `}
              >
                <div
                  className={`
                    flex w-full md:items-center md:justify-between
                    flex-row
                    ${
                      isEven
                        ? "flex-row-reverse"
                        : " md:flex-row flex-row-reverse"
                    }
                  `}
                >
                  <div className="space-y-2 md:max-w-[290px] w-full ">
                    <h1 className="font-semibold text-gray-900">
                      {item.service}
                    </h1>

                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <Crown className="text-primary" size={18} />
                      <div className="text-sm flex gap-2">
                        <span>Budget:</span>
                        <p className="font-medium text-gray-900">
                          {item.budget}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service-number w-fit flex items-center text-[6rem] md:text-[10rem] font-extrabold leading-none mt-4 md:mt-0">
                    <span className="text-transparent text-5xl [--tw-text-stroke-color:gray] [--tw-text-stroke-width:2px] [text-stroke-color:var(--tw-text-stroke-color)] [-webkit-text-stroke-color:var(--tw-text-stroke-color)] [text-stroke-width:var(--tw-text-stroke-width)] [-webkit-text-stroke-width:var(--tw-text-stroke-width)]">
                      {item.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
