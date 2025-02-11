import React, { useEffect, useState } from 'react';
import { useTrainingContext } from '../contexts/trainingContext';

export const Foot = () => {
	const { categories } = useTrainingContext();
	const [year, setYear] = useState(new Date().getFullYear());
	const [footerColor, setFooterColor] = useState('var(--ghost-white)');

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 0) {
				setFooterColor('var(--dogwood-rose)');
			} else {
				setFooterColor('var(--ghost-white)');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<footer className="bg-dark-purple text-white px-8 py-16">
			<div className="max-w-screen-xl mx-auto grid gap-12 lg:grid-cols-4">
				{/* Logo and About */}
				<div>
					<a href="/" aria-label="Go home" className="inline-flex items-center">
						<img
							src="/images/New_Horizons_Logo.webp"
							alt="New Horizons Logo"
							className="w-34"
						/>
					</a>
					<p className="mt-4 text-sm text-ghost-white leading-relaxed">
						New Horizons Cairo offers industry-recognized certifications and
						training programs to help you achieve your professional goals.
					</p>
				</div>

				{/* Training Programs */}
				<div>
					<h3 className="text-lg font-bold text-gray-400 mb-4">
						Training Programs
					</h3>
					<ul className="grid grid-cols-2 gap-2 text-sm text-ghost-white">
						{categories.map((category, index) => (
							<li
								key={index}
								className="hover:text-dogwood-rose transition duration-300"
							>
								<a href={`/sectors/${category.id}`}>{category.name}</a>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 className="text-lg font-bold text-gray-400 mb-4">Get in Touch</h3>
					<div className="not-italic text-sm text-ghost-white space-y-4">
						<div>
							<h4 className="font-semibold text-dogwood-rose">Head Office</h4>
							<p>99 Mostafa Elnahas St, Nasr City, Floor 6</p>
							<p>Phone: 002 02 22718615</p>
							<p>Phone: 002 02 22718620</p>
						</div>
						<div>
							<h4 className="font-semibold text-dogwood-rose">
								Abbas El-Aqaad Branch
							</h4>
							<p>8 Mohamed Mostafa Hamam St. Behind Pizza Hut</p>
							<p>Phone: 002 02 24024822</p>
						</div>
						<div>
							<h4 className="font-semibold text-dogwood-rose">
								Mohandeseen Branch
							</h4>
							<p>76 Gameat Al Dewal Al Arabeya, Floor 4 - Giza Governorate</p>
						</div>
					</div>
				</div>

				{/* Social Media */}
				<div>
					<h3 className="text-lg font-bold text-gray-400 mb-4">Follow Us</h3>
					<div className="flex space-x-4">
						<a
							href="https://www.facebook.com/newhorizonscairo/"
							aria-label="Facebook"
							className="text-ghost-white hover:text-dogwood-rose transition duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.3C0 23.4.6 24 1.35 24h11.483v-9.293H9.765V10.5h3.068V8.203c0-3.062 1.873-4.724 4.606-4.724 1.312 0 2.44.097 2.765.141v3.203l-1.897.001c-1.488 0-1.777.708-1.777 1.746V10.5h3.557l-.464 4.207h-3.093V24H22.65c.75 0 1.35-.6 1.35-1.35V1.35C24 .6 23.4 0 22.675 0z" />
							</svg>
						</a>
						<a
							href="https://x.com/newhorizonseg"
							aria-label="Twitter"
							className="text-ghost-white hover:text-dogwood-rose transition duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 4.557a9.827 9.827 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.92 4.92 0 0016.616 3c-2.733 0-4.945 2.224-4.945 4.97 0 .39.044.77.128 1.135A13.978 13.978 0 011.671 3.15a4.935 4.935 0 001.524 6.622 4.904 4.904 0 01-2.237-.62v.062c0 2.45 1.737 4.492 4.042 4.956a4.94 4.94 0 01-2.231.085c.629 1.963 2.451 3.394 4.608 3.435A9.89 9.89 0 010 20.39a13.94 13.94 0 007.548 2.213c9.051 0 14.007-7.514 14.007-14.026 0-.214-.005-.425-.014-.635A10.001 10.001 0 0024 4.557z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/company/1735894/"
							aria-label="LinkedIn"
							className="text-ghost-white hover:text-dogwood-rose transition duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20 .46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.63c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07s-.93 2.07-2.07 2.07zm15.14 12.82h-3.5V14.6c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v6h-3.5V9h3.36v1.56h.05c.47-.9 1.62-1.84 3.33-1.84 3.56 0 4.22 2.34 4.22 5.39v6.34z" />
							</svg>
						</a>
						<a
							href="https://www.youtube.com/@CairoNewHorizons"
							aria-label="YouTube"
							className="text-ghost-white hover:text-dogwood-rose transition duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.498 6.186a2.97 2.97 0 00-2.088-2.11C19.648 3.615 12 3.615 12 3.615s-7.648 0-9.41.46a2.969 2.969 0 00-2.088 2.111c-.458 1.765-.458 5.446-.458 5.446s0 3.682.458 5.446a2.97 2.97 0 002.088 2.11c1.762.46 9.41.46 9.41.46s7.648 0 9.41-.46a2.97 2.97 0 002.088-2.11c.458-1.764.458-5.446.458-5.446s0-3.681-.458-5.446zM9.546 15.568V8.432L15.818 12 9.546 15.568z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div
				className="mt-12 text-center text-sm"
				style={{
					color: footerColor,
					borderTop: '1px solid var(--raisin-black)',
					paddingTop: '1.5rem',
					marginTop: '3rem',
				}}
			>
				© {year} New Horizons Cairo. All rights reserved.
			</div>
		</footer>
	);
};

export default Foot;
