import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyCategories } from "./data"; 

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Convert courseId to a number for comparison
  const course = dummyCategories
    .flatMap((category) => category.sectors.flatMap((sector) => sector.courses))
    .find((c) => c.id === Number(courseId)); // Ensure courseId is a number

  if (!course) {
    return <p className="text-red-500">Course not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.name}</h1>
      <p className="text-gray-700 mb-6">{course.introduction}</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Duration:</strong> {course.duration || "Not specified"}</li>
        <li><strong>Price:</strong> ${course.price || "Not specified"}</li>
        <li><strong>Delivery Method:</strong> {course.delivery_method || "Not specified"}</li>
        <li><strong>Certification:</strong> {course.certification ? "Yes" : "No"}</li>
        <li><strong>Sector ID:</strong> {course.sector_id || "Not specified"}</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Objectives</h2>
      <ul className="list-disc pl-6 mb-6">
        {course.objective.split('\n').map((obj, index) => (
          <li key={index}>{obj}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Why Attend?</h2>
      <p className="mb-6">{course.why_attend || "Not specified"}</p>
      <h2 className="text-2xl font-semibold mb-2">Agenda</h2>
      <ul className="list-disc pl-6 mb-6">
        {course.agenda.split('\n').map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Overview</h2>
      <p className="mb-6">{course.overview || "Not specified"}</p>
      <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
      <p className="mb-6">{course.prequisites || "Not specified"}</p>
      <h2 className="text-2xl font-semibold mb-2">Sector</h2>
      <p className="mb-6">{course.Sector.name || "Not specified"}</p>
      <button
        className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        onClick={() => navigate(`/register/${course.id}`)}
      >
        Register Now
      </button>
    </div>
  );
};

export default CourseDetailsPage;