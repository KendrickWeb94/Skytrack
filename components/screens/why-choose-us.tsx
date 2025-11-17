import { Ship, Wrench, Globe2 } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: Ship,
      title: "Marine Logistics",
      description:
        "We deliver fast, secure, and reliable marine logistics services across West Africa, enabling seamless cargo movement and offshore support.",
    },
    {
      id: 2,
      icon: Wrench,
      title: "Engineering & Construction",
      description:
        "Our marine engineering and construction teams execute complex offshore projects with precision, innovation, and industry-grade safety standards.",
    },
    {
      id: 3,
      icon: Globe2,
      title: "Vessel Importation",
      description:
        "We streamline the importation and commissioning of water vessels—ensuring quality, compliance, and cost-effective delivery from global partners.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div>
          <button className="px-6 py-2 border border-primary text-primary rounded-full text-sm font-medium mb-6 hover:bg-primary/50 transition-colors">
            Why Choose Us
          </button>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Trusted Marine & <br /> Infrastructure Solutions
          </h1>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We operate with a commitment to reliability, technical excellence,
            and exceptional service delivery. Our operations combine industry
            expertise, modern engineering practices, and global partnerships to
            drive Africa’s marine and logistics sector forward.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div key={feature.id} className="flex flex-col items-start  pt-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                <IconComponent
                  className="w-10 h-10 text-white"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl sm:text-xl border-t pt-8  border-gray-300/70 font-semibold text-gray-700 mb-3">
                {feature.id}. {feature.title}
              </h3>
              <p className="text-gray-600 text-base border-b pb-8 border-gray-300/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
