import React from 'react';
import { Link } from 'react-router-dom';

const PartnersAndAuthorizations = () => {
	return (
		<div className="bg-gradient-to-b from-dark-purple to-[#000000] text-white min-h-screen py-10 ">
			<div className="max-w-7xl mx-auto px-6">
				{/* Hero Section */}
				<section className="bg-[#1d143d] text-gray-800 py-28 rounded-lg shadow-lg mb-16">
					<div className="max-w-screen-xl mx-auto px-4 gap-12 md:px-8">
						<div className="space-y-5 max-w-4xl mx-auto text-center">
							<h1 className="text-sm text-dogwood-rose font-medium md:text-base">
								Collaborating with top vendors to provide world-class training
							</h1>
							<h2 className="text-4xl text-[#fbfcff] font-extrabold mx-auto md:text-5xl">
								New Horizons Cairo{' '}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12505] to-[#94086a]">
									Partners & Authorizations
								</span>
							</h2>
							<p className="text-white max-w-2xl mx-auto">
								New Horizons Cairo is an authorized training partner <br /> for
								many industry-recognized software and certification companies
								and <br /> organizations.
							</p>
							<div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
								<Link
									to="/contact-us"
									className="block py-2 px-4 text-white font-medium bg-dogwood-rose duration-150 hover:bg-purple-900 rounded-lg shadow-lg hover:shadow-none"
								>
									contact us now
								</Link>
								<Link
									to="#courses-section"
									className="block py-2 px-4 text-[#99d4ff] hover:text-gray-800 hover:bg-gray-200 font-medium duration-150 active:bg-gray-100 border rounded-lg"
								>
									Explore courses
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="py-12">
					<div className="container mx-auto px-4">
						<h2 className="text-center text-3xl font-bold mb-8">
							Our Trusted Partners
						</h2>
						<p className="text-center text-lg text-[#ffffff] mb-12">
							Collaborating with industry leaders to provide world-class
							training and certifications.
						</p>
						<div className="grid md:grid-cols-3 gap-10">
							{[
								{
									img: './images/microsoftlogo.webp',
									title: 'Microsoft Learning Partner',
									description:
										'Every Microsoft course at New Horizons Cairo follows Microsoft Office Curriculum (MOC), and is taught by Microsoft Certified instructors to ensure the best possible training in Microsoft products.',
									link: 'https://www.microsoft.com/',
								},
								{
									img: './images/ciscologo.webp',
									title: 'Cisco Learning Partner',
									description:
										'Cisco learning partners are the only authorized sources for commercial Cisco training. This ensures instructors at New Horizons Cairo are distinctively qualified to provide Cisco authorized training.',
									link: 'https://www.cisco.com/',
								},
								{
									img: './images/comptia.webp',
									title: 'CompTIA Authorized Partner',
									description:
										'As a member of the CompTIA Authorized Partner program, New Horizons Cairo delivers CompTIA-approved curriculum designed for industry-recognized CompTIA certifications.',
									link: 'https://www.comptia.org/',
								},
								{
									img: './images/vmware.webp',
									title: 'VMware Authorized Training Partner',
									description:
										'New Horizons Cairo is a VMware training partner, preparing students to manage server and desktop virtualization while achieving VMware certifications.',
									link: 'https://www.vmware.com/',
								},
								{
									img: './images/ibm.webp',
									title: 'IBM Training Partner',
									description:
										'New Horizons Cairo provides IBM authorized training on the design, installation, maintenance, and troubleshooting of IBM software and systems.',
									link: 'https://www.ibm.com/',
								},
								{
									img: './images/citrix.webp',
									title: 'Citrix Learning Partner',
									description:
										'New Horizons Cairo is a Citrix Authorized Learning Center. Our training equips you with real-world skills to enhance productivity with Citrix mobile technology solutions.',
									link: 'https://www.citrix.com/',
								},
							].map((partner, index) => (
								<div
									key={index}
									className="bg-[#ffffff] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
								>
									<img
										src={partner.img} // replace with your actual image path
										alt={partner.title}
										className="w-full object-cover"
									/>
									<div className="p-6">
										<h3 className="text-dark-purple text-xl font-semibold mb-4">
											{partner.title}
										</h3>
										<p className="text-gray-600 mb-4">{partner.description}</p>
										<a
											aria-label="learn more"
											href={partner.link}
											className="text-dogwood-rose font-medium hover:text-russian-violet"
										>
											learn more
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default PartnersAndAuthorizations;

/* Smooth Scroll CSS */
const rootStyles = document.documentElement.style;
rootStyles.setProperty('scroll-behavior', 'smooth');
