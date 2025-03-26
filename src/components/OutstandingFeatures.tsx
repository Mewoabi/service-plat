// src/components/OutstandingFeatures.tsx
import React from "react";
import header_img from "../assets/header_img.png";
import section3 from "../assets/section3.png";

interface Feature {
  title: string;
  description: string;
  imageUrl: string; // or you can store an icon component
}

const featuresData: Feature[] = [
  {
    title: "Job Challenge",
    description:
      "Put your skills to the test and compete in exciting job challenges for a chance to win prizes or recognition.",
    imageUrl: "https://via.placeholder.com/80x80?text=Challenge",
  },
  {
    title: "Jobs",
    description:
      "Discover a wide range of job opportunities, from freelance projects to full-time positions.",
    imageUrl: "https://via.placeholder.com/80x80?text=Jobs",
  },
  {
    title: "Account Levels",
    description:
      "Select the account level that best suits your needs, whether as an individual or business.",
    imageUrl: "https://via.placeholder.com/80x80?text=Levels",
  },
];

const OutstandingFeatures: React.FC = () => {
  return (
    <section className="py-12 bg-[#e2e9e5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Discover Our Outstanding Features
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Feature List */}
          <div className="space-y-8">
            {featuresData.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <img
                  src={header_img}
                  alt={feature.title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Images/Photo Collage */}
          <div className="flex justify-center md:justify-end relative">
            <div className="h-auto">
              {/* Replace with real images or placeholders */}
              <img
                src={section3}
                alt="Feature1"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstandingFeatures;
