import React from "react";

const TrialBanner = () => {
  return (
    <div className="bg-white py-16 text-center">
      <h2 className="text-3xl font-semibold mb-4">Start your free trial</h2>
      <p className="text-gray-600 mb-8">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Learn more
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Get started
        </button>
      </div>
    </div>
  );
};

export default TrialBanner;
