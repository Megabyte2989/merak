import React from 'react';
function LandingSec1() {
	return (
		<div
			id="LandingSec1"
			className="px-5 py-5 sm:p-14 bg-none lg:bg-[url('/images/new_horizons_hero.webp')] bg-dark-purple
		 text-white bg-conain  bg-no-repeat bg-[80%_100%]  grid grid-cols-1 lg:grid-cols-6"
		>
			{/* Main Content Section */}
			<div className="col-span-1 lg:col-span-6 flex flex-col justify-center items-start gap-6 lg:w-[50%] px-2">
				<h1 className="text-4xl lg:text-7xl font-bold font-sans mb-8 text-dogwood-rose ">
					Unlock Your Team's
					<div>Potential</div>
					{/* <Typewriter text={'Potential'} /> */}
				</h1>

				<p className="text-sm lg:text-base  mb-5">
					New Horizons offers hands-on virtual and in-person modern IT &
					Technology training for team optimization and career development. We
					deliver the IT Training and Certification outcomes you are looking
					for:
				</p>

				<ul className="list-disc pl-5 mb-5 font-bold text-sm lg:text-base">
					<li>Over 900 courses to choose from</li>
					<li>100,000 Students Trained Annually</li>
					<li>4.8/5 Instructor Rating</li>
				</ul>

				<p className="text-sm lg:text-base  mb-5">
					Whether you're looking to upskill your team, advance your own skills,
					or would like private training for your organization, New Horizons can
					provide the real-world training to take you and your team to the next
					level. Get Started Today!
				</p>

				<div className="flex gap-4 justify-center lg:justify-start  w-full ml-0 lg:ml-20">
					<button
						className="bg-dogwood-rose text-white px-6 py-3 rounded-xl border-2 duration-200 
					hover:text-white hover:bg-rose-600 hover:border-violet-400"
					>
						View Our Catalog
					</button>
					<button
						className="bg-raisin-black	text-white px-6 py-3 rounded-xl border-2 duration-200 hover:text-white
					 hover:bg-gray-900 hover:border-dogwood-rose"
					>
						Speak To An Expert
					</button>
				</div>
			</div>
		</div>
	);
}

export default LandingSec1;
