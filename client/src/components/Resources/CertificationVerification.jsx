import React, { useState } from "react";

const CertificationVerification = () => {
  const [certCode, setCertCode] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = (e) => {
    e.preventDefault();
    const mockDatabase = {
      VALID123: {
        name: "John Doe",
        course: "Full Stack Development",
        issueDate: "January 1, 2024",
      },
      VALID456: {
        name: "Jane Smith",
        course: "Data Science Bootcamp",
        issueDate: "March 15, 2024",
      },
    };

    if (mockDatabase[certCode]) {
      setVerificationResult({
        status: "valid",
        ...mockDatabase[certCode],
      });
    } else {
      setVerificationResult({
        status: "invalid",
        message: "The certification code entered is invalid. Please try again.",
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('/images/certificationbg.avif')", // Replace with your image path
      }}
    >
      {/* Marketing Section */}
      <div className="text-center text-dark-purple mb-8 max-w-2xl bg-white bg-opacity-70 p-6 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Empowering Future Tech Leaders
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Verify your certifications and showcase your skills. New Horizons
          Tech Training is your gateway to a brighter career.
        </p>
      </div>

      {/* Certification Verification Form */}
      <div className="w-full max-w-lg bg-white bg-opacity-90 shadow-lg rounded-lg p-6 mb-5">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Certification Verification
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the certification code below to verify its authenticity.
        </p>
        <form onSubmit={handleVerification} className="space-y-4">
          <div>
            <label
              htmlFor="certCode"
              className="block text-sm font-medium text-gray-700"
            >
              Certification Code
            </label>
            <input
              type="text"
              id="certCode"
              name="certCode"
              value={certCode}
              onChange={(e) => setCertCode(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter code here"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Verify
          </button>
        </form>

        {verificationResult && (
          <div className="mt-6 p-4 border rounded-md">
            {verificationResult.status === "valid" ? (
              <div>
                <h3 className="text-lg font-bold text-green-600">
                  Certification Verified
                </h3>
                <p className="text-gray-700">
                  <strong>Name:</strong> {verificationResult.name}
                </p>
                <p className="text-gray-700">
                  <strong>Course:</strong> {verificationResult.course}
                </p>
                <p className="text-gray-700">
                  <strong>Issued Date:</strong> {verificationResult.issueDate}
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-red-600">
                  Verification Failed
                </h3>
                <p className="text-gray-700">{verificationResult.message}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationVerification;
