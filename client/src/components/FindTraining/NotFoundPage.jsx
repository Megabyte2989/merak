import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 min-h-screen flex items-center justify-center">
      <div className="w-9/12 py-16">
        <div className="bg-gray-900 shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-700 text-center pt-8">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <h1 className="text-6xl font-medium py-8 text-white">oops! Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium text-gray-300">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white font-semibold px-6 py-3 rounded-md"
                onClick={() => window.location.href = "/"}
              >
                HOME
              </button>
              <button
                className="bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-md"
                onClick={() => window.location.href = "/contact-us"}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
