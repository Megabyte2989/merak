import React from 'react';
import { Helmet } from 'react-helmet-async';
function GovProjects() {
	return (
		<div>
			<Helmet>
				<title>Government Projects - edusphere</title>
				<meta
					name="description"
					content="Explore our portfolio of government projects that empower national development through collaboration."
				/>
				<meta
					name="keywords"
					content="government projects, public service, collaboration, edusphere"
				/>
				<meta
					property="og:title"
					content="Government Projects - edusphere"
				/>
				<meta
					property="og:description"
					content="Explore our portfolio of government projects that empower national development through collaboration."
				/>
				<meta property="og:image" content="/images/edusphere Logo.webp" />
				{/* <meta
					property="og:url"
					content="https://yourwebsite.com/gov-projects"
				/> */}
			</Helmet>

			{/* Hero Section */}
			<div className="relative pt-32 pb-32 md:h-screen bg-fixed bg-[url('/public/govProjects.webp')] bg-cover bg-center w-full -z-10">
				<div class="absolute inset-0 bg-russian-violet opacity-70"></div>
				<div className="container h-full mx-auto relative">
					<div className="leading-none text-center text-white flex flex-col justify-center items-center h-full ">
						<h1 className="text-xl md:text-3xl font-bold py-20">
							<span className="text-dogwood-rose">❝</span> Empowering National
							Development Through Collaboration{' '}
							<span className="text-dogwood-rose">❞</span>
						</h1>
						<p className="leading-6 md:text-2xl px-3">
							Our company is proud to partner with government entities to
							deliver innovative and impactful projects that drive progress and
							benefit communities. Explore our portfolio of initiatives that
							reflect our commitment to excellence and public service.
						</p>
					</div>
				</div>
			</div>

			{/* Project List */}
			<div className="pt-5 pb-5 lg:h-screen bg-russian-violet">
				<div className="container h-full mx-auto">
					<h2 className="text-2xl md:text-3xl text-center font-bold py-20 text-white">
						Our Projects with Government
						<span className="block mx-auto mt-4 h-[2px] w-20 bg-dogwood-rose"></span>
					</h2>
					<div className="md:grid grid-cols-3 gap-5 px-3">
						<div class="relative group overflow-hidden rounded-xl shadow-lg my-5 lg:my-0">
							{/* <!-- Image --> */}
							<img
								loading="lazy"
								src="./images/depi.webp"
								alt="DEPI internship image"
								className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							{/* <!-- Overlay Text --> */}
							<div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p class="text-white text-xl font-bold">DEPI</p>
							</div>
						</div>

						<div class="relative group overflow-hidden rounded-xl shadow-lg my-5 lg:my-0">
							{/* <!-- Image --> */}
							<img
								loading="lazy"
								src="./images/deci.webp"
								alt="DECI internship image"
								className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							{/* <!-- Overlay Text --> */}
							<div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p class="text-white text-xl font-bold">DECI</p>
							</div>
						</div>

						<div class="relative group overflow-hidden rounded-xl shadow-lg my-5 lg:my-0">
							{/* <!-- Image --> */}
							<img
								loading="lazy"
								src="./images/debi.webp"
								alt="DEBI Internship image"
								className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							{/* <!-- Overlay Text --> */}
							<div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p class="text-white text-xl font-bold">DEBI</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GovProjects;
