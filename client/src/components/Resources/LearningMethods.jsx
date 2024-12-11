import React from 'react';

const LearningMethods = () => {
	const methods = [
		{
			title: 'Virtual Instructor-Led Training (VILT)',
			description:
				'Receive training from live instructors anywhere in the world. Engage in live discussions, virtual labs, and team activities, all from the comfort of your home.',
			details: [
				'Participate in discussions via live video and audio feeds.',
				'Perform virtual labs for hands-on experience.',
				'View documents and presentations in real-time.',
				'Access class recordings.',
				'Collaborate in virtual rooms for team activities.',
			],
			button: 'Find Training',
			image:
				'/images/lm1.webp',
		},
		{
			title: 'Private Group Training',
			description:
				'Train your team together to unify learning, accelerate projects, and ensure skill alignment. Customize your training schedule to maintain productivity.',
			details: [
				'Unify your learning experience with team members.',
				'Accelerate project success by training stakeholders together.',
				'Customize sessions to suit business needs.',
				'Flexible scheduling to ensure productivity.',
			],
			button: 'Contact Us to Learn More',
			image:
				'/images/lm2.webp',
		},
		{
			title: 'Custom Training Solutions',
			description:
				'Our experts create personalized training content, including e-learning, gamification, mobile learning, and more, to address your unique needs.',
			details: [
				'Develop custom e-learning, instructor-led courses, or mobile learning.',
				'Create facilitation guides, quick references, or gamification.',
				'Augment your team with Instructional Designers, LMS Experts, and more.',
			],
			button: 'Learn More and Start Customizing',
			image:
				'/images/lm3.webp',
		},
		{
			title: 'Educate 360 Pro',
			description:
				'Access short-duration classes and on-demand training with Educate 360 Pro. Learn specific skills efficiently and track your progress.',
			details: [
				'Most classes are only 60 minutes long.',
				'Utilize course assessments to validate skills.',
				'Stay engaged with expert instructors.',
				'Track progress and take notes.',
			],
			button: 'Learn More About Educate 360 Pro',
			image:
				'/images/lm4.webp',
		},
	];

	return (
		<div className="bg-ghost-white min-h-screen p-8">
			{/* Hero Section */}
			<div className="relative bg-dark-purple text-white py-16 rounded-lg shadow-lg text-center mb-12">
				<h1 className="text-4xl font-bold mb-4">
					Learning and Delivery Methods
				</h1>
				<p className="text-lg max-w-2xl mx-auto">
					New Horizons offers a variety of learning methods to suit your
					schedule and preferred learning style.
				</p>
			</div>

			{/* Methods Section */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{methods.map((method, index) => (
					<div
						key={index}
						className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
					>
						<img
							src={method.image}
							alt={method.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-6 flex-grow">
							<h2 className="text-2xl font-semibold text-dark-purple mb-4">
								{method.title}
							</h2>
							<p className="text-gray-600 mb-4">{method.description}</p>
							<ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
								{method.details.map((detail, i) => (
									<li key={i}>{detail}</li>
								))}
							</ul>
						</div>
						<div className="p-6 bg-gray-100">
							<button className="w-full py-3 bg-dogwood-rose text-white font-bold rounded-lg hover:bg-dogwood-rose-light transition-colors">
								{method.button}
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Contact Section */}
			<div
				className="mt-16 p-8 rounded-xl shadow-lg bg-cover bg-center"
				style={{
					backgroundImage:
						"url('/images/cobg.webp')",
				}}
			>
				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-center mb-6 text-dark-purple">
						Have Additional Questions? Contact Us Below
					</h2>
					<form className="grid grid-cols-1 gap-4">
						<input
							type="text"
							placeholder="Your Name"
							className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dogwood-rose"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dogwood-rose"
						/>
						<textarea
							placeholder="Your Message"
							className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dogwood-rose"
							rows="4"
						/>
						<button
							type="submit"
							className="p-4 w-full bg-dogwood-rose text-white rounded-lg hover:bg-dogwood-rose-light transition-colors"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LearningMethods;
