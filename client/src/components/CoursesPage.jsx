import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./store/coursesSlice";
import { useParams } from "react-router-dom";

const CoursesPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { coursesData, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  if (status === "Loading") {
    return <p>Loading courses...</p>;
  }

  if (status === "Failed") {
    return <p>Error: {error}</p>;
  }

  const filteredCourses = coursesData.filter((course) => course.categoryId === categoryId);

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
              onClick={() => alert(`Course ${course.name} booked!`)}
            >
              احجز الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
