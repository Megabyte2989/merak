/* import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Redux/Slices/categoriesSlice";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoriesData, status, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (status === "Loading") {
    return <p>Loading categories...</p>;
  }

  if (status === "Failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoriesData.map((category) => (
        <div
          key={category.id}
          className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate(`/courses/${category.id}`)}
        >
          <h2 className="text-xl font-semibold text-blue-600">{category.name}</h2>
          <p className="text-gray-700 mt-2">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage; */
import React from "react";
import { useNavigate } from "react-router-dom";

const dummyCategories = [
  { id: "1", name: "Web Development", description: "Learn to build websites." },
  { id: "2", name: "Data Science", description: "Analyze data efficiently." },
  { id: "3", name: "UI/UX Design", description: "Master user experience and design principles." },
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Course Categories</h1>
      <div className="mb-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
        <p className="text-gray-700">
          We provide top-notch courses to help you excel in your career. With experienced instructors and a
          community of learners, you will gain hands-on experience and practical skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCategories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/courses/${category.id}`)}
          >
            <h2 className="text-xl font-semibold text-blue-600">{category.name}</h2>
            <p className="text-gray-700 mt-2">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
