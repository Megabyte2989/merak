import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactUs2 from '../ContactUs/ContactUs2';

const AboutUs = () => {
	const [activeFAQ, setActiveFAQ] = useState(null);

	const toggleFAQ = index => {
		setActiveFAQ(activeFAQ === index ? null : index);
	};

	const missionItems = [
		{
			title: 'Empowerment',
			description:
				'Empowering individuals to achieve their full potential through quality education.',
			image:
				'/images/empowerment.webp',
		},
		{
			title: 'Innovation',
			description:
				'Continuously updating our programs to include the latest industry trends.',
			image:
				'/images/innovation.webp',
		},
		{
			title: 'Community',
			description:
				'Building a supportive community for learners and professionals alike.',
			image:
				'/images/community.webp',
		},
	];

	const faqs = [
		{
			question: 'What types of courses do you offer?',
			answer:
				'We offer a wide range of courses in technical and business applications.',
		},
		{
			question: 'Do you offer online classes?',
			answer:
				'Yes, we offer both in-person and online classes to suit your preferences.',
		},
		{
			question: 'How can I register for a course?',
			answer:
				'You can register by contacting us via phone or email, or by visiting our website.',
		},
		{
			question: 'What are the benefits of professional training?',
			answer:
				'Professional training can help you advance your career and gain new skills.',
		},
		{
			question: 'Do you offer group discounts?',
			answer: 'Yes, we offer group discounts for companies and organizations.',
		},
		{
			question: 'What is the refund policy?',
			answer:
				'Refunds are available up to 7 days before the start of the course.',
		},
	];

	return (
		<div className="about-us-container">
			<Helmet>
				<title>About Us | edusphere</title>
				<meta
					name="description"
					content="Discover edusphere with our professional training courses. Learn more about our mission, vision, and frequently asked questions to enhance your career."
				/>
				<meta property="og:title" content="About Us | edusphere" />
				<meta
					property="og:description"
					content="Discover edusphere with our professional training courses. Learn more about our mission, vision, and frequently asked questions to enhance your career."
				/>
				<meta property="og:image" content="/images/edusphere Logo.webp" />
				{/* <meta property="og:url" content="" /> */}
			</Helmet>

			{/* Hero Section */}
			<section className="hero-section relative bg-white text-center py-20 px-6 flex flex-col md:flex-row items-center">
				<div className="hero-text md:w-1/2 text-left">
					<motion.h1
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						style={{ willChange: 'opacity, transform' }}
						transition={{ duration: 0.8 }}
						className="hero-title text-5xl md:text-6xl font-extrabold bg-clip-text tracking-tight text-transparent bg-dark-purple"
					>
						Discover edusphere
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						style={{ willChange: 'opacity, transform' }}
						className="hero-description text-gray-600 text-lg tracking-tight md:text-xl max-w-2xl mx-auto mt-4"
					>
						Your trusted partner in professional training and personal <br />{' '}
						growth Elevate your potential with cutting-edge programs
					</motion.p>
				</div>
				<motion.img
					loading="lazy"
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					src="/images/about-us.webp"
					style={{ willChange: 'opacity, scale' }}
					alt="Professional Training and Development with edusphere"
					className="hero-image mx-auto mt-6 rounded-lg shadow-xl w-full md:w-1/2"
				/>
			</section>

			{/* Mission Section */}
			<section
				className="mission-section h-full py-16 px-6"
				style={{ backgroundColor: 'var(--dark-purple)' }}
			>
				<div className="max-w-7xl mx-auto text-center">
					<h2
						className="mission-title text-4xl font-bold mb-10"
						style={{ color: 'var(--dogwood-rose)' }}
					>
						Our Mission
					</h2>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: {
								opacity: 1,
								scale: 1,
								transition: { duration: 0.6, staggerChildren: 0.2 },
							},
						}}
						style={{ willChange: 'opacity, scale' }}
						className="mission-items grid md:grid-cols-3 gap-10 mt-10"
					>
						{missionItems.map((item, index) => (
							<motion.div
								key={index}
								variants={{
									hidden: { opacity: 0, y: 50 },
									visible: { opacity: 1, y: 0 },
								}}
								className="mission-card p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
								style={{
									backgroundColor: 'var(--white)',
									overflow: 'visible',
									border: '1px solid var(--dogwood-rose)',
									willChange: 'opacity',
								}}
							>
								<img
									loading="lazy"
									src={item.image}
									alt={item.title}
									className="mission-image w-full h-64 object-cover rounded-lg mb-6"
								/>
								<h3
									className="mission-title text-2xl font-bold mb-4"
									style={{ color: 'var(--dogwood-rose)' }}
								>
									{item.title}
								</h3>
								<p className="mission-description text-base text-gray-700">
									{item.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="faq-section py-20 px-6">
				<div className="py-4 bg-white">
					<div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
						<div className="text-center">
							<h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
								Frequently Asked{' '}
								<span className="text-dogwood-rose">Questions</span>
							</h3>
						</div>

						<div className="mt-20">
							<ul>
								{faqs.map((faq, index) => (
									<li key={index} className="text-left mb-10">
										<div className="flex flex-row items-start mb-5">
											<div
												className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-dogwood-rose text-white border-4 border-white text-xl font-semibold cursor-pointer"
												onClick={() => toggleFAQ(index)}
											>
												<svg
													width="30px"
													fill="white"
													height="30px"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g data-name="Layer 2">
														<g data-name="menu-arrow">
															<rect
																width="24"
																height="24"
																transform="rotate(180 12 12)"
																opacity="0"
															></rect>
															<path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
															<circle cx="12" cy="19" r="1"></circle>
														</g>
													</g>
												</svg>
											</div>
											<div
												className="bg-gray-100 p-5 px-10 w-full flex items-center cursor-pointer"
												onClick={() => toggleFAQ(index)}
											>
												<h4 className="text-md leading-6 font-medium text-gray-900">
													{faq.question}
												</h4>
											</div>
										</div>

										{activeFAQ === index && (
											<div className="flex flex-row items-start">
												<div className="bg-purple-200 p-5 px-10 w-full flex items-center">
													<p className="text-gray-700 text-sm">{faq.answer}</p>
												</div>
												<div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-dogwood-rose text-white border-4 border-white text-xl font-semibold">
													<svg
														height="25px"
														fill="white"
														version="1.1"
														id="Layer_1"
														xmlns="http://www.w3.org/2000/svg"
														x="0px"
														y="0px"
														viewBox="0 0 295.238 295.238"
														xmlSpace="preserve"
													>
														<g>
															<g>
																<g>
																	<path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943V25.714z"></path>
																	<path d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"></path>
																</g>
															</g>
														</g>
													</svg>
												</div>
											</div>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div>
				{/* existing content */}
				<ContactUs2 />
			</div>
		</div>
	);
};

export default AboutUs;
