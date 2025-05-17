import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrainingContext } from '../contexts/trainingContext';

function Example() {
	const [activeFlyout, setActiveFlyout] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming 768px as mobile breakpoint

	// Update isMobile state on window resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleToggleMobileDrop = flyoutName => {
		setActiveFlyout(prev => (prev === flyoutName ? null : flyoutName)); // Toggle specific flyout
	};

	return (
		<>
			<div
				className="lg:hidden cursor-pointer"
				onClick={() => {
					setMenuOpen(!menuOpen);
					setActiveFlyout(null);
				}}
			>
				<div className="w-6 h-0.5 bg-blue-400 mb-1"></div>
				<div className="w-6 h-0.5 bg-blue-400 mb-1"></div>
				<div className="w-6 h-0.5 bg-blue-400"></div>
			</div>
			{/* MOBILE */}
			<div
				className={`lg:hidden absolute  left-0 right-0 bg-gray-300 shadow-lg ${menuOpen ? 'block' : 'hidden'} 
				p-5 flex items-center justify-center flex-col gap-2 overflow-auto z-5 top-[4rem]`}
			>
				<MobileFlyoutLink
					href="/AboutUs"
					FlyoutContent={
						activeFlyout === 'AboutUsContent' ? AboutUsContent : null
					}
					handleToggle={() => handleToggleMobileDrop('AboutUsContent')}
					openMobileDrop={activeFlyout}
				>
					About Us
					<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
				</MobileFlyoutLink>
				<MobileFlyoutLink
					href="/"
					FlyoutContent={
						activeFlyout === 'CoursesContent' ? CoursesContent : null
					}
					handleToggle={() => handleToggleMobileDrop('CoursesContent')}
					openMobileDrop={activeFlyout}
				>
					Find Training
					<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
				</MobileFlyoutLink>
				<MobileFlyoutLink
					href="#"
					FlyoutContent={
						activeFlyout === 'ResourceContent' ? ResourceContent : null
					}
					handleToggle={() => handleToggleMobileDrop('ResourceContent')}
					openMobileDrop={activeFlyout}
				>
					Resources
					<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
				</MobileFlyoutLink>
				<MobileFlyoutLink href="/Authorization-and-partner">
					Authorization & Partner
				</MobileFlyoutLink>
				<MobileFlyoutLink href="/contact-us">Contact Us</MobileFlyoutLink>

				<MobileFlyoutLink href="/cart">
					{' '}
					<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
				</MobileFlyoutLink>
			</div>
			{/* DESKTOP */}
			<div className="hidden lg:flex space-x-5 justify-center text-[0.9rem]">
				<FlyoutLink href="/AboutUs" FlyoutContent={AboutUsContent}>
					About Us
					<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
				</FlyoutLink>
				<FlyoutLink
					href="/find-training"
					FlyoutContent={isMobile ? null : CoursesContent}
				>
					{''}
					{/* Prevent rendering on mobile */}
					Find Training
					<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
				</FlyoutLink>
				<FlyoutLink href="#" FlyoutContent={ResourceContent}>
					Resources
					<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
				</FlyoutLink>
				<FlyoutLink href="/Authorization-and-partner">
					Authorization & Partner
				</FlyoutLink>
				<FlyoutLink href="/contact-us">Contact Us</FlyoutLink>
				<FlyoutLink href="/cart">
					<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
				</FlyoutLink>
			</div>
		</>
	);
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
	const [open, setOpen] = useState(false);
	const showFlyout = open && FlyoutContent;
	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="group relative h-fit w-fit"
		>
			<Link
				to={href}
				className={`relative duration-100 p-2 rounded-md font-medium font-sans
				${!FlyoutContent ? 'hover:bg-dogwood-rose' : ''} 
				${!FlyoutContent ? 'hover:text-white' : ''} `}
			>
				{children}
				<span
					style={{
						transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
					}}
					className=" absolute -bottom-2 -left-2 -right-2 lg:h-1 origin-left rounded-full bg-dogwood-rose transitions-transform duration-300 ease-out"
				/>
			</Link>
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						style={{ x: '-50%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className="absolute left-1/2 top-12 bg-white text-black "
					>
						<div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
						<div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-raisin-black"></div>
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const MobileFlyoutLink = ({
	children,
	href,
	FlyoutContent,
	handleToggle,
	openMobileDrop,
}) => {
	return (
		<div className="relative">
			{/* Main Link */}
			<button
				onClick={handleToggle}
				className={`relative w-full rounded-md text-center p-2  duration-75
				${FlyoutContent ? 'text-darkcyan' : 'text-black'} 
				${!FlyoutContent ? 'hover:bg-dogwood-rose hover:text-white' : ''}`}
			>
				{children}
			</button>

			{/* Flyout Content */}
			<AnimatePresence>
				{openMobileDrop && FlyoutContent && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.1, ease: 'linear' }}
					>
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const AboutUsContent = () => {
	return (
		<div className="w-[100vw] lg:w-64 bg-raisin-black text-white p-6 shadow-xl ">
			<ul className="flex flex-col space-y-2 justify-center items-center">
				<Link
					className="rounded-lg hover:bg-dogwood-rose hover:px-10 hover:py-2 duration-150"
					to={'Testimonials'}
				>
					Testimonails
				</Link>
				<Link
					className="rounded-lg hover:bg-dogwood-rose hover:px-10 hover:py-2 duration-150"
					to={'Success'}
				>
					Sucess Stories
				</Link>
				<Link
					className="rounded-lg hover:bg-dogwood-rose hover:px-10 hover:py-2 duration-150"
					to={'Gallery'}
				>
					NH Gallery
				</Link>
				<Link
					className="rounded-lg hover:bg-dogwood-rose hover:px-10 hover:py-2 duration-150"
					to={'gov-projects'}
				>
					Gov. Projects
				</Link>
				<Link
					className="rounded-lg hover:bg-dogwood-rose hover:px-10 hover:py-2 duration-150"
					to={'crop-projects'}
				>
					Crop. Projects
				</Link>
			</ul>
		</div>
	);
};

const CoursesContent = () => {
	const { categories, sectors } = useTrainingContext();
	const [isCertificationsActive, setIsCertificationsActive] = useState(true);
	const isMobile = window.innerWidth < 768; // Assuming 768px as mobile breakpoint

	return (
		<div className="lg:w-[70vw] w-[100vw] grid grid-cols-12 bg-raisin-black text-white p-8">
			{/* Left Column */}
			<div className="col-span-4 md:col-span-2 border-r border-gray-300 p-1">
				<ul className="flex flex-col space-y-2">
					{/* Certifications */}
					<Link
						onMouseEnter={() => setIsCertificationsActive(true)}
						className={`link-hover ${isCertificationsActive ? 'link-active' : ''} duration-75`}
						to={'/find-training'}
					>
						Certifications
					</Link>

					{/* Other Links */}
					<Link
						className="link-hover"
						to={'/promotions'}
						onMouseEnter={() => setIsCertificationsActive(false)}
					>
						Promotions
					</Link>
					<Link
						className="link-hover"
						to={''}
						onMouseEnter={() => setIsCertificationsActive(false)}
					>
						Schedules
					</Link>
				</ul>
			</div>

			{/* Right Column - Courses Grid */}
			{!isMobile && isCertificationsActive && (
				// Only render categories if not mobile
				<div
					className={` $ col-span-10 grid grid-cols-3 grid-rows-5 lg:grid-cols-5 xl:grid-cols-7 md:gap-3 text-xs justify-center items-center`}
				>
					{categories.map(category => {
						// Find the first sector for this category
						const firstSector = sectors.find(
							sector => sector.category_id === category._id
						);

						return (
							<Link
								key={category.id}
								className="link-hover font-sans text-[0.9rem]  flex"
								to={`/sectors/${firstSector?._id}`}
							>
								<FontAwesomeIcon
									icon={faArrowAltCircleRight}
									color="white"
									size="1x"
									className="mr-1"
								/>
								{'  '}
								{category.name}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};

const ResourceContent = () => {
	const [isLearningActive, setIsLearningActive] = useState(true);

	return (
		<div className="w-[100vw] lg:w-64 bg-raisin-black text-white p-6 shadow-xl ">
			{/* Left Column */}
			<div className="col-span-4  p-1 w-30">
				<ul className="flex flex-col space-y-2 justify-center items-center">
					{/* Certifications */}
					<Link
						onMouseEnter={() => setIsLearningActive(true)}
						className="rounded-lg hover:bg-dogwood-rose hover:px-5 hover:py-2 duration-150"
						to={'learning-methods'}
					>
						Learning Methods
					</Link>

					{/* Other Links */}
					<Link
						className="rounded-lg hover:bg-dogwood-rose hover:px-5 hover:py-2 duration-150"
						to={'Webinars'}
						onMouseEnter={() => setIsLearningActive(false)}
					>
						Webinars
					</Link>
					<Link
						className="rounded-lg hover:bg-dogwood-rose hover:px-5 hover:py-2 duration-150"
						to={'we-hire'}
						onMouseEnter={() => setIsLearningActive(false)}
					>
						We hire
					</Link>
					<Link
						className="rounded-lg hover:bg-dogwood-rose hover:px-5 hover:py-2 duration-150"
						to={'Certification-Verification'}
						onMouseEnter={() => setIsLearningActive(false)}
					>
						Certification Verification
					</Link>
				</ul>
			</div>

			{/* Right Column - Courses Grid */}
		</div>
	);
};

export default Example;
