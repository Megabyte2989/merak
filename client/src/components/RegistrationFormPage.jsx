import React from "react";

const RegistrationFormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Register for the Course
        </h1>

        {/* Form Section */}
        <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          {/* First Name */}
          <label className="block mb-6">
            <span className="text-gray-700 font-medium">First Name</span>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your first name"
            />
          </label>

          {/* Last Name */}
          <label className="block mb-6">
            <span className="text-gray-700 font-medium">Last Name</span>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your last name"
            />
          </label>

          {/* Phone Number */}
          <label className="block mb-6">
            <span className="text-gray-700 font-medium">Phone Number</span>
            <input
              type="tel"
              className="mt-2 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </label>

          {/* Email Address */}
          <label className="block mb-6">
            <span className="text-gray-700 font-medium">Email Address</span>
            <input
              type="email"
              className="mt-2 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-all"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormPage;
