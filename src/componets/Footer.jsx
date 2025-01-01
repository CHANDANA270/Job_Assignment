import React from "react";

const Footer = () => {
  const categories = [
    {
      title: "Product",
      links: [
        "Overview",
        "Features",
        ["Solutions", true],
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Use cases",
      links: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      links: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <footer className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-gray-600 font-medium mb-4">{category.title}</h3>
            <ul className="space-y-3">
              {category.links.map((link) => (
                <li key={Array.isArray(link) ? link[0] : link}>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    {Array.isArray(link) ? (
                      <span className="flex items-center">
                        {link[0]}
                        {link[1] && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                            New
                          </span>
                        )}
                      </span>
                    ) : (
                      link
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-purple-600"></div>
          <span className="font-medium">Untitled UI</span>
        </div>
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
