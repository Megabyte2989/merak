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
    return <p className="text-red-500">Course not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.name}</h1>
      <p className="text-gray-700 mb-6">{course.overview}</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Duration:</strong> {course.duration}</li>
        <li><strong>Price:</strong> {course.price}</li>
        <li><strong>Delivery Method:</strong> {course.deliveryMethod}</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Objectives</h2>
      <ul className="list-disc pl-6 mb-6">
        {course.objectives.map((obj, index) => (
          <li key={index}>{obj}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Why Attend?</h2>
      <p className="mb-6">{course.whyAttend}</p>
      <h2 className="text-2xl font-semibold mb-2">Agenda</h2>
      <ul className="list-disc pl-6 mb-6">
        {course.agenda.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
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
