import React, { useState } from 'react';
import ContactUsMain from '../ContactUs/ContactUsMain';

function WeHire() {
	//TODO ADD IF THERE IS NO JOBS //TODO

	const jobs = [
		{
			id: 1,
			title: 'Frontend Developer',
			location: 'Remote',
			type: 'Full-Time',
			description:
				'We’re seeking a skilled Frontend Developer to build amazing UI.',
		},
		{
			id: 2,
			title: 'Backend Developer',
			location: 'New York',
			type: 'Part-Time',
			description:
				'Looking for a backend specialist to manage APIs and databases.',
		},
		{
			id: 3,
			title: 'UI/UX Designer',
			location: 'San Francisco',
			type: 'Full-Time',
			description:
				'Create user-friendly designs and improve user experience for web and mobile.',
		},
		{
			id: 4,
			title: 'Project Manager',
			location: 'Remote',
			type: 'Contract',
			description: 'Lead teams to deliver projects on time and within budget.',
		},
		{
			id: 5,
			title: 'DevOps Engineer',
			location: 'Austin, TX',
			type: 'Full-Time',
			description:
				'Ensure smooth CI/CD processes and infrastructure management.',
		},
		{
			id: 6,
			title: 'Data Scientist',
			location: 'Chicago',
			type: 'Full-Time',
			description:
				'Analyze and interpret complex data to help decision-making.',
		},
		{
			id: 7,
			title: 'Mobile App Developer',
			location: 'Remote',
			type: 'Freelance',
			description: 'Develop and maintain high-quality mobile applications.',
		},
		{
			id: 8,
			title: 'Cybersecurity Analyst',
			location: 'Washington, D.C.',
			type: 'Full-Time',
			description:
				'Monitor and protect systems against security threats and breaches.',
		},
		{
			id: 9,
			title: 'Marketing Specialist',
			location: 'Los Angeles',
			type: 'Part-Time',
			description:
				'Craft and execute marketing strategies to boost brand awareness.',
		},
		{
			id: 10,
			title: 'AI Researcher',
			location: 'Boston',
			type: 'Full-Time',
			description:
				'Conduct research in artificial intelligence and machine learning.',
		},
	];
	return (
		<>
			<div className="bg-white ">
				<div
					className="flex items-center justify-between py-10 px-5 sm:px-10 lg:px-20 bg-dark-purple
			 text-white md:bg-[url('/images/Wehire.png')] bg-contain bg-no-repeat bg-[85%] h-64"
				>
					<div className="w-full sm:w-1/2">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-dogwood-rose">
							Join Our Growing Team!
						</h1>
						<p className="text-base sm:text-lg lg:text-xl">
							We’re looking for talented individuals who want to make an impact.
							Explore our job openings and apply today!
						</p>
					</div>
					<div className="hidden sm:block w-1/2 bg-cover bg-center bg-no-repeat h-full"></div>
				</div>
				<JobList jobs={jobs} />
				<ContactUsMain questions location={false} />
			</div>
		</>
	);
}

const JobList = ({ jobs }) => {
	const [modalData, setModalData] = useState(null);
	const [activeJob, setActiveJob] = useState(null);

	const selectActiveJob = JobId => {
		setActiveJob(activeJob === JobId ? null : JobId);
	};

	const openModal = job => {
		setModalData(job);
	};

	const closeModal = () => {
		setModalData(null);
	};

	return (
		<div
			className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between 
		lg:grid-cols-4 xl:grid-cols-6  gap-10"
		>
			{jobs.map(job => (
				<div
					key={job.id}
					className={`border rounded-lg p-8 mb-4 shadow-lg  transition-all duration-[300ms] ease-in-out 
    ${activeJob === job.id ? 'max-w-[40rem] max-h-[40rem]' : 'max-w-auto max-h-[18rem]'} min-h-[18rem]
	 flex flex-col justify-between bg-ghost-white`}
				>
					<h2 className="text-2xl font-semibold">{job.title}</h2>
					<p className="text-gray-600">Location: {job.location}</p>
					<p className="text-gray-600">Type: {job.type}</p>

					<button
						className="text-black mt-2 py-2 px-4 border-2 border-dogwood-rose rounded-lg transition duration-300 
						ease-in-out transform hover:bg-dogwood-rose hover:text-white hover:scale-105 focus:outline-none
						w-fit"
						onClick={() => {
							selectActiveJob(job.id);
						}}
					>
						{activeJob === job.id ? 'Show Less' : 'Show More'}
					</button>

					{activeJob === job.id && (
						<div className="mt-4 text-gray-700">
							<p>{job.description}</p>
							<button
								onClick={() => openModal(job)} // Opens modal to apply for the job
								className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg"
							>
								Apply
							</button>
						</div>
					)}
				</div>
			))}
			{modalData && <ApplicationModal job={modalData} onClose={closeModal} />}
		</div>
	);
};

const ApplicationModal = ({ job, onClose }) => {
	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission logic here
		alert('Application submitted!');
		onClose();
	};

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			onClick={e => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div className="bg-white rounded-lg p-6 w-full max-w-lg">
				<button
					onClick={onClose}
					className="text-gray-500 float-right text-2xl"
				>
					&times;
				</button>
				<h2 className="text-2xl font-bold mb-4">Apply for {job.title}</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-gray-700">Name</label>
						<input
							type="text"
							className="w-full border border-gray-300 rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							className="w-full border border-gray-300 rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Phone</label>
						<input
							type="tel"
							className="w-full border border-gray-300 rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Upload CV</label>
						<input
							type="file"
							className="w-full border border-gray-300 rounded-lg p-2"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg"
					>
						Submit Application
					</button>
				</form>
			</div>
		</div>
	);
};

export default WeHire;
