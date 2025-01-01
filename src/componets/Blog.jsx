import React from "react";

const BlogPosts = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      src: "Image.png",
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      src: "Image (1).png",
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      src: "Image (2).png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-purple-600 mb-2">Our blog</p>
          <h1 className="text-3xl font-semibold">Latest blog posts</h1>
          <p className="text-gray-600 mt-2">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          View all posts
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="h-48 bg-gray-200 mb-6 rounded-lg">
                <img src={post.src} alt="" />
                {/* Placeholder for image */}
              </div>
              <div className="text-purple-600 mb-2">{post.category}</div>
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{post.description}</p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3" />
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-gray-600 text-sm">{post.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
