// CategoriesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTrainingContext } from "../../contexts/trainingContext";

const CategoriesPage = () => {
  const { categories, sectors } = useTrainingContext();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-900 text-gray-200 p-10 rounded-lg mb-10">
        <h1 className="text-4xl font-bold mb-4">Explore Your Learning Opportunities</h1>
        <p className="text-lg">Find the perfect course to elevate your skills and advance your career.</p>
        <p className="text-lg">Contact us to learn more about our courses and how we can help you achieve your goals.</p>
        <button 
          className="mt-4 bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => navigate("/contact-us")}
        >
          contact us
        </button>
      </div>

      {/* Course Categories Section */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6 ml-4">Course Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-start mb-4">
              <img
                src={`/categoriesImages/${category.photo}.webp`}
                alt={category.name}
                className="w-24 h-24 rounded-lg mr-4"
              />
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{category.name}</h2>
                <div className="grid grid-cols-1 gap-2">
                  {sectors
                    .filter((sector) => sector.category_id === category.id)
                    .map((sector) => (
                      <div
                        key={sector.id}
                        className="border border-gray-200 p-2 rounded-lg hover:bg-violet-200 cursor-pointer"
                        onClick={() => navigate(`/sectors/${sector.id}/courses`)}
                      >
                        <h3 className="text-lg font-medium text-gray-800">{sector.name}</h3>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
