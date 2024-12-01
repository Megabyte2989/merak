import {
	faArrowLeft,
	faArrowRight,
	faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const testimonials = [
	{
		text: 'Attended the MS-700T00 Managing Microsoft Teams course recently and was very impressed with the instructor, the quality of materials and the labs provided. Knowing I can continue to access the labs for a period of time and have lifetime access to the course materials really helps! I appreciate that the materials are updated frequently so you have the latest information.',
		author: 'John Doe',
	},
	{
		text: 'The customer service team was so responsive and helpful throughout the process. I would highly recommend this course to anyone looking to upgrade their skills.',
		author: 'Jane Smith',
	},
	{
		text: 'I loved the hands-on experience provided in the course. It really helped me understand the concepts in depth. Fantastic training!',
		author: 'Michael Brown',
	},
];

function LandingSec7() {
	const [currentIndex, setcurrentIndex] = useState(0);

	const handlePrevious = () => {
		setcurrentIndex(prev =>
			prev - 1 === -1 ? testimonials.length - 1 : prev - 1
		);
	};

	const handleNext = () => {
		setcurrentIndex(prev => (prev + 1 === testimonials.length ? 0 : prev + 1));
	};

	return (
		<div className="px-5 py-5 sm:p-14 bg-dark-purple text-white text-center">
			<h1 className="heading lg:text-5xl font-bold text-dogwood-rose">
				Our Client Success Says It All
			</h1>
			<div className="flex items-center flex-col sm:flex-row sm:justify-center">
				<FontAwesomeIcon
					icon={faQuoteLeft}
					size="5x"
					className="lg:mb-32 mr-auto sm:mr-4 sm:mb-60 sm:text-[6rem] lg:text-[10rem]"
				/>
				<div className="flex flex-col sm:w-[60%] lg:w-[35%]">
					<p className="">{testimonials[currentIndex].text}</p>
					<p className="self-end mt-4 mr-4 lg:mt-4 lg:mr-10 text-gray-400 text-[1.0rem]">
						{testimonials[currentIndex].author}
					</p>
				</div>
			</div>
			<div
				className="flex justify-center items-center gap-64 md
			:gap-96 mt-10 text-gray-500"
			>
				<div onClick={handlePrevious}>
					<FontAwesomeIcon
						icon={faArrowLeft}
						size="2x"
						className="cursor-pointer hover:text-white"
					/>
				</div>
				<div onClick={handleNext}>
					<FontAwesomeIcon
						icon={faArrowRight}
						size="2x"
						className="cursor-pointer hover:text-white"
					/>
				</div>
			</div>
		</div>
	);
}

export default LandingSec7;
