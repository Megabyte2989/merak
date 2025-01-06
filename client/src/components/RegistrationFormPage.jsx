import React from "react";

const RegistrationFormPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Register for the Course</h1>
      <form className="max-w-lg mx-auto border border-gray-300 p-6 rounded-lg">
        <label className="block mb-4">
          <span className="text-gray-700">First Name</span>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-0 focus:border-none focus:outline-none"
            placeholder="Enter your first name"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Last Name</span>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-0 focus:border-none focus:outline-none"
            placeholder="Enter your last name"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Phone Number</span>
          <input
            type="tel"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-0 focus:border-none focus:outline-none"
            placeholder="Enter your phone number"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email Address</span>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-0 focus:border-none focus:outline-none"
            placeholder="Enter your email"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationFormPage;