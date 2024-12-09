import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Gallery = () => {
	// Mock data simulating what could come from a database
	const carouselImages = [
		{
			url: '/images/gallery1.jpeg',
			title: 'Innovation in Technology',
			description: 'Discover groundbreaking advancements shaping our future',
		},
		{
			url: '/images/gallery2.jpeg',
			title: 'AI Revolution',
			description:
				'Dive into the world of artificial intelligence and machine learning',
		},
		{
			url: '/images/gallery3.jpeg',
			title: 'Building the Web',
			description: 'Explore the infrastructure powering the digital age',
		},
	];

	const galleryImages = [
		{
			url: './images/vr.avif',
			alt: 'Photo by Minh Pham',
			label: 'VR',
		},
		{
			url: './images/tablet.avif',
			alt: 'Photo by Magicle',
			label: 'Tech',
		},
		{
			url: './images/laptop.avif',
			alt: 'Photo by Martin Sanchez',
			label: 'Dev',
		},
		{
			url: './images/tech.avif',
			alt: 'Photo by Lorenzo Herrera',
			label: 'Retro',
		},
		{
			url: './images/vr.avif',
			alt: 'Photo by Minh Pham',
			label: 'VR',
		},
		{
			url: './images/laptop.avif',
			alt: 'Photo by Martin Sanchez',
			label: 'Dev',
		}
	];

	// Carousel functionality
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextSlide = useCallback(() => {
		setCurrentIndex(prevIndex =>
			prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
		);
	}, [carouselImages.length]);

	const prevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
		);
	};

	const goToSlide = index => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		let intervalId;
		if (isAutoPlaying) {
			intervalId = setInterval(nextSlide, 5000);
		}
		return () => clearInterval(intervalId);
	}, [isAutoPlaying, nextSlide]);

	const handleKeyDown = e => {
		if (e.key === 'ArrowLeft') prevSlide();
		if (e.key === 'ArrowRight') nextSlide();
	};

	return (
		<div>
			<Helmet>
				<title>Gallery | New Horizons</title>
				<meta
					name="description"
					content="Explore New Horizons through our Gallery. Discover high-quality images showcasing the latest in technology, AI, web development, and innovation."
				/>
			</Helmet>

			{/* Carousel Section */}
			<div
				className="relative h-screen w-full overflow-hidden"
				onKeyDown={handleKeyDown}
				tabIndex={0}
				role="region"
				aria-label="Image slider"
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="relative h-full w-full"
					>
						<img
							src={carouselImages[currentIndex].url}
							alt={carouselImages[currentIndex].title}
							className="h-full w-full object-cover"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40">
							<div className="flex h-full items-center justify-center">
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.2 }}
									className="text-center text-white"
								>
									<h1 className="mb-4 text-4xl font-bold md:text-6xl">
										{carouselImages[currentIndex].title}
									</h1>
									<p className="text-lg md:text-xl">
										{carouselImages[currentIndex].description}
									</p>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Controls */}
				<button onClick={prevSlide} className="cta-button absolute left-4 top-1/2">
					<FiChevronLeft size={24} />
				</button>
				<button onClick={nextSlide} className="cta-button absolute right-4 top-1/2">
					<FiChevronRight size={24} />
				</button>
			</div>

			{/* Gallery Section */}
			<div className="bg-white dark:bg-gray-800 py-12">
				<div className="mx-auto max-w-screen-2xl px-4">
					<div className="mb-8 text-center">
						<h2 className="text-3xl font-bold text-gray-800 dark:text-white">
							Our Gallery
						</h2>
						<p className="text-gray-500 dark:text-gray-300">
							Explore our collection of high-quality images showcasing the latest
							in technology and innovation.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
						{galleryImages.map((image, index) => (
							<Link
								to=""
								key={index}
								className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
							>
								<img
									src={image.url}
									loading="lazy"
									alt={image.alt}
									className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
								<span className="relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
									{image.label}
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
