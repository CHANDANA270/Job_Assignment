import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-purple-600"></div>
          <span className="font-medium">Untitled UI</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <span className="text-sm">Home</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm">Products</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">Resources</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="text-sm">Pricing</span>
        </div>
      </div>

      {/* Profile */}
      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
    </nav>
  );
};

export default Navbar;
