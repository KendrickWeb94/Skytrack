import AboutUs from "@/components/screens/about";
import Hero from "@/components/screens/hero";
import Innovation from "@/components/screens/innovation";
import OurCompany from "@/components/screens/our-company";
import OurProjects from "@/components/screens/our-projects";
import OurServices from "@/components/screens/our-services";

import WhyChooseUs from "@/components/screens/why-choose-us";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <main className="space-y-32 relative">
        <Hero />
        <AboutUs />
        <OurProjects />
        <Innovation />
        <OurCompany />
        <WhyChooseUs />
        <OurServices />
        <div className="pt-24"></div>
      </main>
    </React.Fragment>
  );
}
