import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyCategories } from "./data";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Course Categories</h1>
      {dummyCategories.map((category) => (
        <div key={category.id} className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.sectors.map((sector) => (
              <div
                key={sector.id}
                className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/sectors/${sector.id}/courses`)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
