// CategoriesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTrainingContext } from '../../contexts/trainingContext';

const CategoriesPage = () => {
	const { categories, sectors } = useTrainingContext();

	const navigate = useNavigate();

	return (
		<div className="p-0 m-0 bg-[#1d2e51]">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white p-10 rounded-lg mb-10 text-center ">
				<h1 className="text-4xl font-bold mb-4 text-[#17148f]">
					Explore Your Learning Opportunities
				</h1>
				<p className="text-lg">
					Find the perfect course to elevate your skills and advance your career
					Contact us to learn .
				</p>
				<p className="text-lg">
					more about our courses and how we can help you achieve your goals.
				</p>
				<button
					className="hover:cursor-pointer mt-4 bg-[#ff9254] text-[#002341] font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors"
					onClick={() => navigate('/contact-us')}
				>
					contact us
				</button>
			</div>

			{/* Course Categories Section */}
			<h1 className="text-3xl font-bold text-[#f5f5dc] mb-6 m-5">
				Course Categories
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-10">
				{categories.map(category => (
					<div
						key={category.id}
						className="bg-white min-h-72 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
					>
						<div className="flex items-start mb-4 ">
							<img
								src={`/categoriesImages/${category.photo}.webp`}
								alt={category.name}
								className="w-20 h-20 rounded-lg mr-4"
							/>
							<div>
								<h2 className="text-2xl font-sans font-bold text-[#17148f] mb-4 ">
									{category.name}
								</h2>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
									{sectors
										.filter(sector => sector.category_id === category.id)
										.map(sector => (
											<div
												key={sector.id}
												className="border border-gray-200 p-2 rounded-lg transform transform-transition duration-100 hover:bg-teal hover:text-white   cursor-pointer bg-[#dbf6fb]"
												onClick={() => navigate(`/sectors/${sector.id}`)}
											>
												<h3 className="text-lg font-medium mb-0">
													{sector.name}
												</h3>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Testimonials Section */}
		</div>
	);
};

export default CategoriesPage;
