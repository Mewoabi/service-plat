// src/components/HeroSection.tsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import header_img from "../assets/header_img.png";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Trigger search: navigate to /search?query=...
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // For trending services, we just set that as the query
  const handleTrendingClick = (service: string) => {
    navigate(`/search?query=${encodeURIComponent(service)}`);
  };

  return (
    <section className="bg-[#155b33] text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            FREELANCING MADE EASY!
          </h1>
          <h2 className="text-2xl font-semibold">Hire an Expert or Be an Expert.</h2>
          <p className="text-sm md:text-base font-light">
            In the ever-evolving landscape of skills and knowledge, the choice
            between hiring an expert or becoming one yourself is a personal
            decision.
          </p>

          {/* Search Bar */}
          <div className="relative mt-6">
            <input
              type="text"
              placeholder="Search to find job challenges, jobs, or services"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
              className="w-full p-4 rounded-full text-gray-700 focus:outline-none bg-white"
            />
            <button
              className="absolute right-0 -top-3 text-white text-center bg-[#2dc36c] rounded-full p-8 hover:bg-green-700 transition-colors"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>

          {/* Trending Services */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Trending Services</h3>
            <div className="flex flex-wrap gap-2">
              {["Carpenter", "Developer", "Translator"].map((service) => (
                <span
                  key={service}
                  onClick={() => handleTrendingClick(service)}
                  className="text-white bg-[#2dc36c] py-1 px-3 rounded-full text-md font-medium hover:bg-green-700 cursor-pointer"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Images / Shapes */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative h-auto">
            <img src={header_img} alt="header" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
