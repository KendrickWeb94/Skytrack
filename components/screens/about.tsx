import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="md-container w-full space-y-8 pb-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-4 gap-8 justify-center">
        <div className="h-[500px]  object-cover">
          <img
            src="/element-3.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-8 md:max-w-xl w-full">
          <h1 className="text-4xl uppercase text-slate-800 font-bold ">
            who we are
          </h1>
          <p className="leading-relaxed">
            Skytrack West Africa leads the continent’s logistics, construction,
            and marine vessel manufacturing industries, delivering innovative
            and dependable solutions that connect Africa’s waters to the world.
            From offshore construction to freight transport and vessel
            importation
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              <p className="font-heading font-bold text-gray-800">
                {" "}
                100% Satifaction
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              <p className="font-heading font-bold text-gray-800">
                {" "}
                Flexible and Cost Effective
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              <p className="font-heading font-bold text-gray-800">
                {" "}
                Annual Pass Programs
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              <p className="font-heading font-bold text-gray-800">
                {" "}
                Trained employees
              </p>
            </div>
          </div>
          <div className="flex md:items-center gap-8 flex-wrap">
            <img src="/sign.png.png" alt="signature" width={120} height={120} />
            <div className="h-8 w-[0.5px] bg-gray-600"></div>
            <div className="">
              <h1 className="text-gray-950 text-2xl font-black font-secondary">
                Tom Henders
              </h1>
              <p className="text-sm">CEO of Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
