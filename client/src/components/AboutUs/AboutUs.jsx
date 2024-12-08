import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
	return (
		<div>
			{/* aboutUs brief */}
			<div className="pt-20 pb-12 bg-russian-violet">
				<div className="container mx-auto">
					<h1 className="text-4xl md:text-7xl leading-none font-bold text-center text-white">
						What Are We About?
						<span className="block mx-auto mt-4 h-[2px] w-20 bg-dogwood-rose"></span>
					</h1>

					<div className="md:grid grid-cols-2 md:gap-6 px-3 pt-24">
						<div className="leading-7 flex flex-col justify-center">
							<h3 className="text-2xl font-semibold pb-3 text-white">
								Local Training
							</h3>
							<p className="pb-5 text-white">
								With a convenient location in Cairo, New Horizons provides
								classes on a variety of technical and business applications.
							</p>
							<p className="text-white">
								Because we're local, we understand the needs of business and
								individuals in our community. Whether you choose to take classes
								in person or online, you're always welcome to call or stop by.
							</p>
						</div>

						<div className="relative w-full md:flex justify-center items-center hidden">
							<img className="z-10" src="aboutUs.jpg" alt="aboutUs" />
							<div className="absolute inset-0 before:content-[''] before:absolute before:bg-dogwood-rose before:w-10  before:h-full before:-left-6 before:bottom-10 before:z-20"></div>
							<div className="absolute inset-0 after:content-[''] after:absolute after:bg-dogwood-rose after:w-14 after:h-full after:-right-10 after:top-24 after:z-0"></div>
						</div>
					</div>
				</div>
			</div>

			{/* informatoin */}
			<div className="pt-20 pb-12 bg-white">
				<div className="container mx-auto">
					<div className="lg:grid grid-cols-3 gap-5 px-3">
						<div className="leading-7 flex flex-col item-center my-5 lg:my-0 bg-ghost-white rounded-xl lg:min-h-[564px]">
							<h2 className="text-xl bg-dark-purple text-white font-semibold p-5 rounded-xl">
								Large Selection of Courses
							</h2>
							<div className=" p-8 ">
								<p className="pb-5">
									New Horizons Cairo offers an extensive selection of
									vendor-authorized training classes for top technology
									providers like Adobe, Cisco, Citrix, Microsoft, and VMware.
								</p>
								<p className="pb-5 font-bold">
									Find your desired training with:
								</p>
								<ul className="list-disc">
									<li className="p-3">
										Application Courses - Beginner to advanced skills in major
										business applications
									</li>
									<li className="p-3">
										Technical Skills Courses - Designed to advance your IT
										skills
									</li>
									<li className="p-3">
										Certification Courses - Classes to help you prepare for
										certification
									</li>
									<li className="p-3">
										Business Skills Courses - Improve your employee business
										skills
									</li>
								</ul>
							</div>
						</div>

						<div className="leading-7 flex flex-col item-center my-5 lg:my-0 bg-ghost-white rounded-xl lg:min-h-[564px]">
							<h2 className="text-xl bg-dark-purple text-white font-semibold p-5 rounded-xl">
								Innovative & Flexible Learning Methods
							</h2>
							<div className=" p-8 ">
								<p className="pb-5">
									New Horizons of Cairo understands that not everyone's learning
									needs or preferred methods are the same. Therefore, our
									flexible training approach gives us the ability to customize
									dedicated classes to satisfy specific needs.
								</p>
								<p className="pb-5 font-bold">We offer:</p>
								<ul className="list-disc">
									<li className="p-3">
										<Link className="text-dogwood-rose" to={''}>
											Online LIVE
										</Link>{' '}
										- Online classes with the live interaction of an instructor
										&amp; fellow students
									</li>
									<li className="p-3">
										<Link className="text-dogwood-rose" to={''}>
											On-Site Training
										</Link>{' '}
										- We bring the classroom to you
									</li>
									<li className="p-3">
										<Link className="text-dogwood-rose" to={''}>
											Private Classes
										</Link>{' '}
										- Train large groups of employees with custom solutions
									</li>
								</ul>
							</div>
						</div>

						<div className="leading-7 flex flex-col item-center my-5 lg:my-0 bg-ghost-white rounded-xl lg:min-h-[564px]">
							<h2 className="text-xl bg-dark-purple text-white font-semibold p-5 rounded-xl">
								Certified Instruction
							</h2>
							<div className=" p-8 ">
								<p className="pb-5">
									New Horizons Computer Learning Centers of Cairo courses are
									taught by experienced, vendor-certified instructors. This
									means you are getting the most up to date information to apply
									to real situations.
								</p>
								<p className="pb-5 font-bold">Limitless Possibilities</p>
								<p>
									Whether you are looking to increase your technical knowledge
									or pass a professional certification exam, New Horizons of
									Cairo will help you get there.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* statics */}
			<div className="pt-20 pb-16 bg-russian-violet">
				<div className="container mx-auto">
					<div className="leading-7 flex flex-col item-center my-5 lg:my-0 rounded-xl ">
						<h2 className="text-3xl md:text-5xl text-center font-bold p-5 pb-10 rounded-xl text-white">
							New Horizons Training Statistics
							<span className="block mx-auto mt-4 h-[2px] w-20 bg-dogwood-rose"></span>
						</h2>
						<div className=" p-8 flex flex-col justify-center item-center">
							<p className="pb-5 text-3xl font-semibold text-white">
								Demonstrated Results:
							</p>
							<ul className="pb-7 list-disc text-white">
								<li className="p-3 ">
									70% of skills acquired at New Horizons are applied on the job
									within the first 8 weeks
								</li>
								<li className="p-3">
									59% of New Horizons students say training received was
									critical to their job performance
								</li>
								<li className="p-3">
									44% of time on the job is spent applying new knowledge and
									skills gained from New Horizons
								</li>
							</ul>
							<p className="text-white">
								With assistance from your own Account Executive, we can help you
								manage your learning objectives and deliver cost effective
								solutions that exceed your expectations. Contact us today at{' '}
								<span className="text-dogwood-rose">00202 22718615 </span> or{' '}
								<span className="text-dogwood-rose">
									cairo.sales@newhorizons.com
								</span>{' '}
								to get started!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
