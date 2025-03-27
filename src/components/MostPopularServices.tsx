// src/components/MostPopularServices.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import header_img from "../assets/header_img.png";

interface ServiceCard {
  title: string;
  imageUrl: string;
}

const servicesData: ServiceCard[] = [
  {
    title: "Web Development",
    imageUrl: "https://via.placeholder.com/300x200?text=Web+Development",
  },
  {
    title: "Logo Design",
    imageUrl: "https://via.placeholder.com/300x200?text=Logo+Design",
  },
  {
    title: "SEO",
    imageUrl: "https://via.placeholder.com/300x200?text=SEO",
  },
  {
    title: "Video Editing",
    imageUrl: "https://via.placeholder.com/300x200?text=Video+Editing",
  },
];

const MostPopularServices: React.FC = () => {
  // Optional: If you want to implement slider logic (left/right arrows)
  // you can manage the current slide index in state.
  // For now, this is just a static layout.

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Most Popular Services
          </h2>
          <Link
            to="/services"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            View All
          </Link>
        </div>

        {/* Slider / Cards */}
        <div className="relative">
          {/* Example left arrow (hidden if you don't implement a slider) */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 hidden"
            aria-label="Previous"
          >
            <FaArrowLeft className="text-gray-500" />
          </button>

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={header_img}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Example right arrow (hidden if you don't implement a slider) */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 hidden"
            aria-label="Next"
          >
            <FaArrowRight className="text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostPopularServices;
