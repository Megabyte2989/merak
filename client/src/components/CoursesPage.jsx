import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const dummyCategories = [
  {
    id: "1",
    name: "Web Development",
    photo: "web-development.jpg",
    introduction: "Learn to build responsive websites.",
    additionalDetails: "Includes HTML, CSS, JavaScript.",
  },
  {
    id: "2",
    name: "Data Science",
    photo: "data-science.jpg",
    introduction: "Analyze and visualize data.",
    additionalDetails: "Covers Python, Pandas, and ML basics.",
  },
  {
    id: "3",
    name: "Mobile Development",
    photo: "mobile-development.jpg",
    introduction: "Build apps for iOS and Android.",
    additionalDetails: "Includes Swift and Kotlin.",
  },
  {
    id: "4",
    name: "UI/UX Design",
    photo: "ui-ux-design.jpg",
    introduction: "Design user interfaces and experiences.",
    additionalDetails: "Covers Figma and Adobe XD.",
  },
  {
    id: "5",
    name: "Cloud Computing",
    photo: "cloud-computing.jpg",
    introduction: "Deploy and manage cloud services.",
    additionalDetails: "Includes AWS, GCP, and Azure.",
  },
  {
    id: "6",
    name: "Cybersecurity",
    photo: "cybersecurity.jpg",
    introduction: "Protect your digital assets.",
    additionalDetails: "Includes cybersecurity best practices.",
  }

];

export const dummyCourses = [
  {
    id: "101",
    sectorId: "1",
    name: "React for Beginners",
    introduction: "This course introduces you to React.",
    duration: "5 weeks",
    price: "$300",
    deliveryMethod: "Online",
    overview: "Comprehensive beginner React training.",
    objectives: ["Understand JSX", "Learn Components"],
    whyAttend: "Enhance your front-end skills.",
    prerequisites: ["Basic JavaScript knowledge"],
    agenda: ["Week 1: JSX", "Week 2: Components"],
    certificationAvailable: true,
  },
  {
    id: "102",
    sectorId: "1",
    name: "Advanced React",
    introduction: "Take React to the next level.",
    duration: "6 weeks",
    price: "$400",
    deliveryMethod: "In-person",
    overview: "Advanced concepts like hooks and context API.",
    objectives: ["Master hooks", "Learn state management"],
    whyAttend: "Become proficient in React development.",
    prerequisites: ["React basics"],
    agenda: ["Week 1: Advanced JSX", "Week 2: Hooks"],
    certificationAvailable: true,
  },
];

const CoursesPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const filteredCourses = dummyCourses.filter((course) => course.sectorId === categoryId);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-700 mt-2 whitespace-pre-wrap">{course.introduction}</p>
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