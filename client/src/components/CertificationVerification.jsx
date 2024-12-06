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
    <div className="min-h-screen bg-gradient-to-r from-dark-purple  to-dogwood-rose flex flex-col items-center justify-center px-4 py-8">
      {/* Marketing Section */}
      <div className="text-center text-white mb-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Empower Your Future with Verified Certifications
        </h1>
        <p className="text-lg md:text-xl font-light">
          Unlock career opportunities by showcasing your achievements. At New
          Horizons Tech Training, we believe in building a stronger tomorrow.
        </p>
      </div>

      {/* Certification Verification Form */}
      <div className="w-full max-w-md bg-white bg-opacity-90 shadow-2xl rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Verify Your Certification
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your certification code below to verify its authenticity.
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
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Enter code here"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Verify Certification
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
