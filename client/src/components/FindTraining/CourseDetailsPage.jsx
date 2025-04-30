import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTrainingContext } from '../../contexts/TrainingContext';

const CourseDetailsPage = () => {
	const { courseId } = useParams();
	const navigate = useNavigate();
	const { courses } = useTrainingContext();

	const Currentcourse = courses.find(
		course => course.id === parseInt(courseId)
	);

	console.log(Currentcourse);

	if (!Currentcourse) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<p className="text-2xl text-red-600 font-semibold">
					Oops! Course not found.
				</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
			{/* Hero Section */}
			<header className="bg-blue-700 text-white py-12">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold mb-4">{Currentcourse.name}</h1>
					<p className="text-lg font-light">{Currentcourse.introduction}</p>
				</div>
			</header>

			<main className="container mx-auto p-6">
				<Section title="Overview" content={Currentcourse.overview} />

				{/* Course Details */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
					<DetailCard
						title="Duration"
						value={Currentcourse.duration || 'Not specified'}
					/>
					<DetailCard
						title="Price"
						value={`$${Currentcourse.price || 'Not specified'}`}
					/>
					<DetailCard
						title="Delivery Method"
						value={Currentcourse.deliveryMethod || 'Not specified'}
					/>
					<DetailCard
						title="Certification"
						value={Currentcourse.certificationAvailable ? 'Yes' : 'No'}
					/>
				</div>

				{/* Sections */}
				<Section title="Objectives" items={Currentcourse.objectives} />
				<Section title="Prerequisites" items={Currentcourse.prerequisites} />
				<SectionAgenda title="Agenda" items={Currentcourse.agenda} />
				<Section title="Why Attend?" content={Currentcourse.whyAttend} />

				{/* Register Button */}
				<div className="text-center  mt-12 mb-12">
					<button
						className="bg-blue-700 text-white py-5 px-14 rounded-full text-3xl  font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-transform"
						onClick={() => navigate(`/register/${Currentcourse.id}`)}
					>
						Register Now
					</button>
				</div>
			</main>
		</div>
	);
};

// Detail Card Component
const DetailCard = ({ title, value }) => (
	<div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
		<h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
		<p className="text-gray-600">{value}</p>
	</div>
);

// Section Component
const Section = ({ title, items, content }) => (
	<div className="my-8">
		<h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
		{items ? (
			<ul className="space-y-2">
				<li className="flex items-start gap-2 text-gray-700">
					<span className="text-blue-500 mt-1">•</span>
					<p>{items}</p>
				</li>
			</ul>
		) : (
			<p className="text-gray-600">{content || 'Not specified'}</p>
		)}
	</div>
);

const SectionAgenda = ({ title, items, content }) => {
	const AgendaItems = items.replace(/(\d+)/g, '<br />$1');

	return (
		<div className="my-8">
			<h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
			{items ? (
				<ul className="space-y-2">
					<li className="flex items-start gap-2 text-black">
						<p dangerouslySetInnerHTML={{ __html: AgendaItems }} />{' '}
					</li>
				</ul>
			) : (
				<p className="text-gray-600">{content || 'Not specified'}</p>
			)}
		</div>
	);
};
export default CourseDetailsPage;
