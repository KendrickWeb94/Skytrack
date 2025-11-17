import { Construction, HardHat } from "lucide-react";
import Image from "next/image";

export default function Innovation() {
  return (
    <div className="space-y-12 stat-bg my-24 pt-16">
      <div className="md-container w-full flex-wrap-reverse flex items-center">
        <img
          src={"/element-5.png"}
          alt="stats"
          // width={300}
          // height={400}
          className="h-[400px] md:ml-52"
        />
        <div className="space-y-6 md:max-w-lg py-16">
          <p className="leading-relaxed text-gray-300">
            Make connection with customers, marketing and sales activities using
            AI to establish a tailored experience for each customer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-end gap-2">
              <HardHat className="size-16 text-white" />
              <div className="">
                <h1 className="text-white text-6xl font-bold">100%</h1>
                <p className="leading-relaxed text-gray-400">
                  Quality assurance
                </p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <Construction className="size-16 text-white" />
              <div className="">
                <h1 className="text-white text-6xl font-bold">434+</h1>
                <p className="leading-relaxed text-gray-400">
                  Succesful Contracts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
