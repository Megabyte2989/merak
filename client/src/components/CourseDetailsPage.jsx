import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyCourses = [
  {
    id: "101",
    name: "React for Beginners",
    details: "This course will introduce you to React, the most popular JavaScript library for building UIs.",
  },
  {
    id: "102",
    name: "Advanced React",
    details: "Take your React skills to the next level with hooks, context API, and more.",
  },
  {
    id: "201",
    name: "Intro to Data Science",
    details: "Get started with data analysis using Python and Pandas.",
  },
  {
    id: "301",
    name: "UI/UX Design Fundamentals",
    details: "Learn the basics of creating user-centered designs.",
  },
];

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = dummyCourses.find((c) => c.id === courseId);

  if (!course) {
    return <p className="text-red-500">Course not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.name}</h1>
      <p className="text-gray-700 mb-6">{course.details}</p>
      <button
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        onClick={() => navigate(`/register/${course.id}`)}
      >
        Register Now
      </button>
    </div>
  );
};

export default CourseDetailsPage;