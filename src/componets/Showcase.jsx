import React from "react";

const FeaturesShowcase = () => {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 mb-4">Features</p>
          <h2 className="text-4xl font-semibold mb-4">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="w-full ">
            <img
              src="Content.png"
              alt="Mobile app interface"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
