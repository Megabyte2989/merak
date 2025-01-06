import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyCourses = [
  {
    id: "101",
    name: "React for Beginners",
    details: "This course will introduce you to React, the most popular JavaScript library for building UIs.",
    categoryId: "1",
  },
  {
    id: "102",
    name: "Advanced React",
    details: "Take your React skills to the next level with hooks, context API, and more.",
    categoryId: "1",
  },
  {
    id: "201",
    name: "Intro to Data Science",
    details: "Get started with data analysis using Python and Pandas.",
    categoryId: "2",
  },
  {
    id: "301",
    name: "UI/UX Design Fundamentals",
    details: "Learn the basics of creating user-centered designs.",
    categoryId: "3",
  },
];

const CoursesPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const filteredCourses = dummyCourses.filter((course) => course.categoryId === categoryId);

  if (filteredCourses.length === 0) {
    return <p className="text-red-500">No courses found for this category.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-700 mt-2 whitespace-pre-wrap">{course.details}</p>
            <button
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              onClick={() => navigate(`/course/${course.id}`)}
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
