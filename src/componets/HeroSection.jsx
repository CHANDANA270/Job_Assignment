import React from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto text-center py-16 px-4">
      {/* Main content */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
          Beautiful analytics to grow smarter
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            <Play className="w-4 h-4 mr-2" />
            Demo
          </button>
          <button className="px-4 py-2.5 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
            Sign up
          </button>
        </div>

        {/* Image container */}
        <div className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white">
          <img
            src="Container.png"
            alt="Analytics Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
