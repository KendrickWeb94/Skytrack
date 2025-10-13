import Navabr from "../ui/navbar";

export default function Hero() {
  return (
    <section className="w-full min-h-screen font-inter relative hero-sectio bg-primary">
      <div className="w-full min-h-screen frame-grid">
        <Navabr />
        <div className="pt-16 md-container w-full">
          <div className="w-full  space-y-6 flex items-start md:items-center justify-center flex-col">
            <p className="px-4 py-2 border text-sm rounded-full border-white text-white bg-white/10">
              Skytrack West Africa
            </p>
            <h1 className="text-white text-3xl md:text-5xl font-inter w-full mx-auto md:max-w-3xl leading-[1.2] md:text-center font-bold">
              Pioneering Marine Logistics & Construction Across Africa
            </h1>
            <p className="text-white/70 w-full text-sm md:text-base text-start md:max-w-4xl leading-[1.8] mx-auto  md:text-center">
              Skytrack West Africa leads the continent’s logistics,
              construction, and marine vessel manufacturing industries,
              delivering innovative and dependable solutions that connect
              Africa’s waters to the world. From offshore construction to
              freight transport and vessel importation
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn text-base">Get A Quote</button>
              <button className="btn-outline text-base">Read More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
