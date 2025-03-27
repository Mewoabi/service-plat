// src/components/SearchJobsNavbar.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useJobs } from "../contexts/DataContext";

// Example categories
const CATEGORIES = ["All Categories", "Design", "Development", "Writing", "Marketing"];

const SearchJobsNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { jobs } = useJobs();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // On mount or location change, parse query params to pre-fill search
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    const cat = params.get("category") || "All";
    setSearchTerm(query);
    setCategory(cat);
  }, [location.search]);

  // Search handler: navigate to /search with ?query=...&category=...
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = encodeURIComponent(searchTerm.trim());
    const c = encodeURIComponent(category);
    navigate(`/search?query=${q}&category=${c}`);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left Section: Brand / Logo */}
        <div className="text-2xl font-bold text-green-600">
          <Link to="/">MyJobs</Link>
        </div>

        {/* Center Section: Search Bar + Category */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 text-sm px-2 py-2 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-72 rounded-l-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-r-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            Search
          </button>
        </form>

        {/* Right Section: Links & Buttons */}
        <div className="flex items-center space-x-4">
          {/* Create Job Link (or button) */}
          <Link
            to="#"
            className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors"
          >
            + Create Job
          </Link>

          {/* Profile / Other links */}
          <Link
            to="#"
            className="hidden md:inline-block text-gray-600 hover:text-green-600 transition-colors"
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar (optional) */}
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSearch} className="flex flex-col space-y-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 text-sm px-2 py-2 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="rounded-r-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchJobsNavbar;
