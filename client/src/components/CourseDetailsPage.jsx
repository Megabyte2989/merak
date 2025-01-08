import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyCategories } from "./data";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = dummyCategories
    .flatMap((category) => category.sectors.flatMap((sector) => sector.courses))
    .find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-red-600 font-semibold">
          Oops! Course not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{course.name}</h1>
          <p className="text-lg font-light">{course.introduction}</p>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <DetailCard
            title="Duration"
            value={course.duration || "Not specified"}
          />
          <DetailCard
            title="Price"
            value={`$${course.price || "Not specified"}`}
          />
          <DetailCard
            title="Delivery Method"
            value={course.deliveryMethod || "Not specified"}
          />
          <DetailCard
            title="Certification"
            value={course.certificationAvailable ? "Yes" : "No"}
          />
        </div>

        {/* Sections */}
        <Section title="Objectives" items={course.objectives} />
        <Section title="Why Attend?" content={course.whyAttend} />
        <Section title="Prerequisites" items={course.prerequisites} />
        <Section title="Agenda" items={course.agenda} />
        <Section title="Overview" content={course.overview} />

        {/* Register Button */}
        <div className="text-center mt-12">
          <button
            className="bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-transform"
            onClick={() => navigate(`/register/${course.id}`)}
          >
            Register Now
          </button>
        </div>
      </main>
    </div>
  );
};

// Detail Card Component
const DetailCard = ({ title, value }) => (
  <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
    <h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
    <p className="text-gray-600">{value}</p>
  </div>
);

// Section Component
const Section = ({ title, items, content }) => (
  <div className="my-8">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
    {items ? (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-gray-700"
          >
            <span className="text-blue-500 mt-1">•</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">{content || "Not specified"}</p>
    )}
  </div>
);

export default CourseDetailsPage;
