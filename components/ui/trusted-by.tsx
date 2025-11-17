"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
//   ssr: false,
// });
// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   { ssr: false }
// );

const brands = [
  {
    name: "airbnb",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png",
    width: 110,
    height: 40,
  },
  {
    name: "coinbase",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Temu_logo_icon.svg",
    width: 120,
    height: 60,
  },
  {
    name: "griffin",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/New_Firebase_logo.svg",
    width: 130,
    height: 40,
  },
  {
    name: "helpscout",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/98/Shell_1994_wordmark.svg",
    width: 130,
    height: 30,
  },
  {
    name: "spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    width: 130,
    height: 40,
  },
  {
    name: "plaid",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/TotalEnergies_wordmark_%282021-present%29.svg",
    width: 60,
    height: 40,
  },
];

export default function TrustedBrands() {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-3">
          <p className="text-white/60">
            Trusted by 8000+ partners & customers globall
          </p>
        </div>

        <Swiper
          modules={[FreeMode, Mousewheel, Scrollbar]}
          spaceBetween={32}
          slidesPerView={3.5} // mobile default
          freeMode={true} // smooth swipe with momentum
          mousewheel={{ forceToAxis: true }} // allows vertical scroll unaffected, horizontal drag works
          grabCursor={true} // shows grabbing cursor on desktop
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 5.5 },
            1024: { slidesPerView: 5.5 },
          }}
          className="py-4"
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="w-full flex items-center justify-center"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="object-contain h-8 w-auto saturate-xs hover:saturate-none transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
