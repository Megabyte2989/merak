import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTrainingContext } from '../../contexts/TrainingContext';

const SectorsPage = () => {
	const { courses, sectors, categories } = useTrainingContext();
	const navigate = useNavigate();
	const { sectorId } = useParams();
	const sectorIdAsNumber = parseInt(sectorId, 10);

	// Find the current sector based on sectorId
	const currentSector = sectors.find(sector => sector.id === sectorIdAsNumber);

	// If no sector is found, display a message or redirect
	if (!currentSector) {
		return (
			<div className="bg-[#191f37] text-white p-20 text-center">
				<p>Sector not found.</p>
			</div>
		);
	}

	// Find the category for the current sector
	const categoryId = currentSector.category_id;
	const currentCategory = categories.find(
		category => category.id === categoryId
	);

	// Find all sectors related to the current category
	const relatedSectors = sectors.filter(
		sector => sector.category_id === categoryId
	);

	// Find all courses related to the current sector
	const relatedCourses = courses.filter(
		course => course.sector_id === sectorIdAsNumber
	);

	return (
		<div className="bg-[#191f37]">
			{/* Category Image and Introduction */}
			<div className="bg-raisin-black px-20 py-10">
				{currentCategory && (
					<div className="mb-6 flex items-center">
						<img
							src={currentCategory.photo}
							alt={currentCategory.name}
							className="w-fit h-40 object-cover rounded-md mb-4 mr-4"
						/>
						<p className="text-lg text-white">{currentCategory.introduction}</p>
					</div>
				)}

				{/* Related Sectors Navigation */}
				<div className="flex flex-wrap justify-center gap-4 p-4 rounded-md mb-6">
					{relatedSectors.map(sector => (
						<div
							key={sector.id}
							className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap transition-colors ${
								sector.id === sectorIdAsNumber
									? 'bg-blue-600 text-white'
									: 'bg-white border border-gray-300 hover:bg-blue-100'
							}`}
							onClick={() => navigate(`/sectors/${sector.id}`)}
						>
							{sector.name}
						</div>
					))}
				</div>
			</div>

			{/* Courses Section */}
			<div className="pb-60">
				<h2 className="text-2xl font-bold mt-10 mb-4 text-white px-20 py-5">
					Courses in {currentSector.name}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-28">
					{relatedCourses.length > 0 ? (
						relatedCourses.map(course => (
							<div
								onClick={() => navigate(`/courses/${course.id}`)}
								key={course.id}
								className="group bg-white border transform transition-transform duration-75 hover:scale-105 border-gray-300 p-4 rounded-lg hover:text-raisin-black hover:shadow-lg hover:bg-blue-100 cursor-pointer"
							>
								<h3 className="text-lg font-bold group-hover:text-dogwood-rose text-[#0b4a9b]">
									{course.name}
								</h3>
								<p className="text-sm text-gray-600 group-hover:text-black">
									{course.introduction}
								</p>
							</div>
						))
					) : (
						<p className="text-gray-600">
							No courses available for this sector.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SectorsPage;
