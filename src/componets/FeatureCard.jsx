import React from "react";
import { MessageSquare, Zap, BarChart3 } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-16">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="bg-gray-50 p-3 rounded-lg mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          <a
            href="#"
            className="text-purple-600 flex items-center hover:underline"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
