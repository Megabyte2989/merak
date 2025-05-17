// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { dummyCategories } from './data';

// const CoursesPage = () => {
// 	const { sectorId } = useParams();
// 	const navigate = useNavigate();

// 	const sector = dummyCategories
// 		.flatMap(category => category.sectors)
// 		.find(sec => sec.id === sectorId);

// 	if (!sector) {
// 		return (
// 			<div className="min-h-screen flex items-center justify-center bg-gray-100">
// 				<p className="text-2xl text-red-600 font-semibold">Sector not found!</p>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
// 			{/* Hero Section */}
// 			<header className="bg-blue-700 text-white py-12">
// 				<div className="container mx-auto text-center">
// 					<h1 className="text-4xl font-bold mb-2">{sector.name} Courses</h1>
// 					<p className="text-lg font-light">
// 						Explore our comprehensive courses in the {sector.name} sector.
// 					</p>
// 				</div>
// 			</header>

// 			<main className="container mx-auto p-6">
// 				{/* Courses Grid */}
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
// 					{sector.courses.map(course => (
// 						<div
// 							key={course.id}
// 							className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1"
// 						>
// 							<div className="p-6">
// 								<h2 className="text-2xl font-semibold text-blue-700">
// 									{course.name}
// 								</h2>
// 								<p className="text-gray-600 mt-4 line-clamp-3">
// 									{course.introduction}
// 								</p>
// 								<button
// 									className="mt-6 w-full bg-blue-700 text-white py-2 px-4 rounded-full font-medium hover:bg-green-600 transition-colors"
// 									onClick={() => navigate(`/courses/${course.id}`)}
// 								>
// 									Learn More
// 								</button>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</main>
// 		</div>
// 	);
// };

// export default CoursesPage;
