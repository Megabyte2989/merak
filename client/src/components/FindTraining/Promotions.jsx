import {
	faChevronDown,
	faChevronUp,
	faClipboardQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Promotions() {
	const faqs = [
		{
			question: 'How long is the promotion valid?',
			answer: 'The promotion is valid until the end of this month.',
		},
		{
			question: 'Can I combine vouchers?',
			answer: 'No, you can only use one voucher per course purchase.',
		},
	];

	// Sample promotions
	const promotions = [
		{
			id: 1,
			title: '50% Off AWS Courses',
			description:
				'Feel delighted with more than 50% off with this voucher for all courses related to AWS.',
		},
		{
			id: 2,
			title: 'Free AWS Starter Guide',
			description:
				'Get a free AWS Starter Guide when you sign up for any course this month.',
		},
		{
			id: 3,
			title: 'AWS Certification Bundle',
			description:
				'Unlock exclusive discounts on our AWS Certification prep bundles.',
		},
	];

	// State to track which FAQ is open
	const [openFaqIndex, setOpenFaqIndex] = useState(null);

	// Toggle FAQ answer visibility
	const toggleAnswer = index => {
		setOpenFaqIndex(openFaqIndex === index ? null : index);
	};

	return (
		<div className="relative text-white min-h-[60vh] w-full">
			{/* Background Section with Gradient Overlay */}
			<div className="relative w-full h-full md:h-[60vh] ">
				<img
					src="/images/promotions.webp"
					alt="Promotions background"
					className="md:w-full md:h-full lg:h-auto lg:absolute -top-[10%] xl:-top-[20%] lg:object-cover brightness-50"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-raisin-black via-transparent to-transparent"></div>

				{/* Header Text */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<h1 className="text-4xl sm:text-6xl font-extrabold text-white animate-fadeIn drop-shadow-xl">
						Unlock Amazing <span className="text-dogwood-rose">Deals</span>!
					</h1>
					<p className="text-lg sm:text-2xl mt-4 text-gray-200 animate-fadeIn opacity-90">
						Your journey to success starts here.
					</p>
				</div>
			</div>

			{/* Promotions Section */}
			<section className="relative p-5 sm:p-14 bg-raisin-black bg-opacity-90">
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 text-dogwood-rose drop-shadow-lg text-center">
					Exclusive Promotions
				</h2>
				<ul className="grid gap-8 sm:gap-10 lg:grid-cols-3">
					{promotions.map(pro => (
						<li
							key={pro.id}
							className="flex flex-col items-start p-6 bg-dark-purple bg-opacity-70 rounded-lg "
						>
							<article className="mb-4 text-left">
								<h3 className="text-2xl font-bold text-dogwood-rose mb-2">
									{pro.title}
								</h3>
								<p className="text-sm sm:text-base text-gray-300">
									{pro.description}
								</p>
							</article>
							<button
								className="mt-auto px-6 py-2 buttonMain bg-dogwood-rose hover:bg-[#5f1856] text-white font-medium rounded-full"
								aria-label={`Claim voucher for ${pro.title}`}
							>
								Claim Voucher
							</button>
						</li>
					))}
				</ul>

				{/* FAQ Section */}
				<ul className="divide-y divide-gray-700 mt-16 p-5 rounded-md bg-[#000000]">
					{faqs.map((faq, index) => (
						<li
							key={index}
							className="py-4 px-6 border-b border-gray-700 last:border-b-0"
						>
							{/* FAQ Question */}
							<div
								className="flex items-center justify-between cursor-pointer"
								onClick={() => toggleAnswer(index)}
							>
								<div className="flex items-baseline space-x-3">
									<FontAwesomeIcon
										icon={faClipboardQuestion}
										size="1x"
										color="white"
									/>
									<h3 className="text-xl font-semibold text-white">
										{faq.question}
									</h3>
								</div>
								{/* Toggle Chevron */}
								<FontAwesomeIcon
									icon={openFaqIndex === index ? faChevronUp : faChevronDown}
									color="black"
									className="transition-transform transform duration-300"
								/>
							</div>

							{/* FAQ Answer */}
							{openFaqIndex === index && (
								<p className="ml-5 text-white text-xl">{faq.answer}</p>
							)}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export default Promotions;
