import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const AnalyticsDashboard = () => {
  const data = Array.from({ length: 30 }, (_, i) => ({
    name: i,
    value1: Math.random() * 600 + 200,
    value2: Math.random() * 400 + 200,
    value3: Math.random() * 300 + 100,
  }));

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-purple-600"></div>
          <h2 className="text-xl font-semibold">Stats for Olivia Rhye</h2>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-1 text-sm rounded-full bg-gray-100">
            12 months
          </button>
          <button className="px-4 py-1 text-sm rounded-full bg-gray-100">
            30 days
          </button>
          <button className="px-4 py-1 text-sm rounded-full bg-gray-100">
            7 days
          </button>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value1"
                stroke="#8884d8"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="#82ca9d"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="value3"
                stroke="#ffc658"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium mb-4">Biggest fans</h3>
            <div className="space-y-4">
              {["Phoenix Baker", "Lana Steiner"].map((name, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <span className="text-sm">{name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{20 + i} likes</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Favorite designers</h3>
            <div className="space-y-4">
              {["Andi Lane", "Kate Morrison"].map((name, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <span className="text-sm">{name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{40 + i} likes</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
