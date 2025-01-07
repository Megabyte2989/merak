import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCategories } from "./data";

const CoursesPage = () => {
  const { sectorId } = useParams();
  const navigate = useNavigate();

  const sector = dummyCategories
    .flatMap((category) => category.sectors)
    .find((sec) => sec.id === sectorId);

  if (!sector) {
    return <p className="text-red-500">Sector not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">{sector.name} Courses</h1>
      <div className="grid grid-cols-1 gap-6">
        {sector.courses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-700 mt-2 whitespace-pre-wrap">{course.introduction}</p>
            <button
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;