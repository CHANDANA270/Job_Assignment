import React from "react";

const CompanyLogos = () => {
  const companies = [
    {
      name: "Boltshift",
      src: "Logomark.png",
    },
    {
      name: "Lightbox",
      src: "Logomark (1).png",
    },
    {
      name: "FeatherDev",
      src: "Logomark (2).png",
    },
    {
      name: "Spherule",
      src: "Logomark (3).png",
    },
    {
      name: "GlobalBank",
      src: "Logomark (4).png",
    },
    {
      name: "Nietzsche",
      src: "Shape.png",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-gray-600 mb-12">
          Join 4,000+ companies already growing
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={company.src}
                  alt={`${company.name} logo`}
                  className="w-8 h-8"
                />
                <span className="font-semibold">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
