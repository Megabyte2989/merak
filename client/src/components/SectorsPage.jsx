import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCategories } from "./data";

const SectorsPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = dummyCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <p className="text-red-500">Category not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">{category.name} Sectors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.sectors.map((sector) => (
          <div
            key={sector.id}
            className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/sectors/${sector.id}/courses`)}
          >
            <h2 className="text-xl font-semibold text-blue-600">{sector.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsPage;
