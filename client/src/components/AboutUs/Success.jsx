import React, { useState } from 'react';

const Success = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<div>
			{/* Hero Section */}
			<section className="relative bg-[url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uQRrnlUBwOoqlNbcQSpYr/a4fbb0dbc1a6b5ba696410ff091039a8/GettyImages-2170485830.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000)] bg-cover bg-center bg-no-repeat">
				<div className="absolute inset-0 bg-gray-900 opacity-70"></div>

				<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
					<div className="max-w-xl text-left">
						<h1 className="text-5xl font-extrabold text-white sm:text-5xl">
							Celebrate <br /> Success Stories
							<strong className="block font-extrabold text-dogwood-rose">
								{' '}
								with Us{' '}
							</strong>
						</h1>

						<p className="mt-4 max-w-lg text-white sm:text-xl/relaxed ">
							Explore inspiring stories of growth and achievement from our
							trainees and clients. Your success could be next!
						</p>

						<div className="mt-8 flex flex-wrap gap-4 text-center">
							<a
								href="#share-story-form"
								className="block w-full rounded bg-dogwood-rose px-12 py-3 text-sm font-medium text-white shadow hover:bg-dark-purple focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
							>
								Share Your Success Story
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Main Section */}
			<section className="stories py-16 px-8 bg-raisin-black">
				<div className="container mx-auto">
					<h2 className="text-3xl font-semibold text-center mb-12 text-white">
						Featured Stories
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Updated Stories */}
						<div className="story bg-dark-purple shadow-lg rounded-lg p-6">
							<img
								src="https://st2.depositphotos.com/4568293/7690/i/950/depositphotos_76903179-stock-photo-young-man-thinking-with-a.jpg"
								alt="Ahmed Ali"
								className="rounded-full mx-auto w-24 h-24 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2 text-center text-dogwood-rose">
								Ahmed Ali
							</h3>
							<p className="text-sm text-white mb-4 text-center">
								Full Stack Developer
							</p>
							<p className="text-white text-center">
								"After completing the MERN stack course, I got my first job as a
								Full Stack Developer at a leading tech firm! The course didn't
								just teach me the technical skills but also how to work
								effectively in a team. I built a portfolio project with my
								classmates—a car rental system—that showcased both my frontend
								and backend capabilities. During my interviews, recruiters were
								impressed with the project’s complexity and my problem-solving
								approach. Now, I’m working on large-scale applications, and
								every day feels like an opportunity to grow!"
							</p>
						</div>

						<div className="story bg-dark-purple shadow-lg rounded-lg p-6">
							<img
								src="https://images.ctfassets.net/pdf29us7flmy/4rgBKn2wB73I7K1DY7A5Rp/65e67733a9a5e8823dbce8e1a1d8dede/GettyImages-688893745-red.jpg?w=720&q=100&fm=jpg"
								alt="Sara Youssef"
								className="rounded-full mx-auto w-24 h-24 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2 text-center text-dogwood-rose">
								Sara Youssef
							</h3>
							<p className="text-sm text-white mb-4 text-center">
								Frontend Engineer
							</p>
							<p className="text-white text-center">
								"Thanks to New Horizons' guidance, I became a Frontend Engineer
								and now work on projects for international clients. I was
								hesitant at first, but the instructors encouraged me to take on
								challenging assignments like building a dynamic e-commerce site
								from scratch. The mock interviews and feedback sessions really
								boosted my confidence. Now, I specialize in creating visually
								stunning and user-friendly interfaces for global brands, and it
								feels amazing to see my work impact so many users worldwide. New
								Horizons was a turning point in my career journey!"
							</p>
						</div>

						<div className="story bg-dark-purple shadow-lg rounded-lg p-6">
							<img
								src="https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg"
								alt="Omar El-Sayed"
								className="rounded-full mx-auto w-24 h-24 mb-4"
							/>
							<h3 className="text-xl font-bold mb-2 text-center text-dogwood-rose">
								Omar El-Sayed
							</h3>
							<p className="text-sm text-white mb-4 text-center">
								Backend Developer
							</p>
							<p className="text-white text-center">
								"The practical training gave me the confidence to excel as a
								Backend Developer at a multinational corporation. During the
								MERN stack course, I learned to design scalable APIs and secure
								authentication systems. One of my favorite projects was creating
								a booking platform for events, which taught me a lot about
								database optimization. Now, I’m part of a team that handles
								high-traffic applications, and my work directly impacts
								thousands of users. I owe my career leap to New Horizons—they
								gave me the skills and confidence to chase my dreams!"
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Submission Section */}
			<section
				id="share-story-form"
				className="submit-story py-16 px-8 bg-russian-violet"
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-semibold text-center mb-8 text-white">
						Share Your Story
					</h2>
					{!formSubmitted ? (
						<form
							onSubmit={handleSubmit}
							className="max-w-xl mx-auto bg-dark-purple shadow-lg rounded-lg p-8"
						>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-dogwood-rose mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-dogwood-rose"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="role"
									className="block text-sm font-medium text-dogwood-rose mb-2"
								>
									Your Role
								</label>
								<input
									type="text"
									id="role"
									className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-dogwood-rose"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="story"
									className="block text-sm font-medium text-dogwood-rose mb-2"
								>
									Your Story
								</label>
								<textarea
									id="story"
									rows="4"
									className="w-full  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-dogwood-rose"
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-dogwood-rose text-white px-4 py-2 rounded-lg hover:bg-raisin-black font-semibold"
							>
								Submit Your Story
							</button>
						</form>
					) : (
						<div className="text-center">
							<p className="text-lg font-semibold text-dogwood-rose">
								Thank you for submitting your story! We have received it and
								will review it for publication.
							</p>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Success;
