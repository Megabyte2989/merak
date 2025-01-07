import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyCategories } from "./data"; // Adjusted to a shared data file

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Course Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyCategories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/categories/${category.id}/sectors`)}
          >
            <h2 className="text-xl font-semibold text-blue-600">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;