import React from "react";

const ProjectArea = () => {
  return (
    <div className="flex-1 h-full bg-gray-950 flex flex-col items-center justify-center text-gray-500">
      <div className="p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto mb-4 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <h2 className="text-xl font-semibold mb-2">Project Workspace</h2>
        <p className="max-w-md mx-auto">
          Select a file or start creating to see your project in action. This
          area is ready for your content.
        </p>
      </div>
    </div>
  );
};

export default ProjectArea;
