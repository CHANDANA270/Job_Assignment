import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex  ">
            <img src="sev.png" alt="Sisyphus logo" className="h-10 mb-12" />
            <p className="p-2">Sisyphus</p>
          </div>

          <h2 className="text-4xl font-semibold mb-16 max-w-4xl">
            We've been using Untitled to kick start every new project and can't
            imagine working without it.
          </h2>

          <div className="flex flex-col items-center">
            <img
              src="Avatar.png"
              alt="Profile"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Candice Wu</h3>
            <p className="text-gray-600">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
