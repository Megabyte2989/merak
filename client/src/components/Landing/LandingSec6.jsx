import React from 'react';

function LandingSec6() {
	return (
		<div className="px-5 py-5 sm:p-14 text-center bg-lavender text-black">
			<h1
				className="heading   
			 lg:text-5xl xl:text-5xl   font-bold text-russian-violet my-5"
			>
				We Empower Results
			</h1>
			<p className="text-sm  md:w-[60%] text-center m-auto text-black mb-10">
				Our commitment to quality is only matched by our commitment to your
				success. We provide top rated instruction, along with the in-class and
				post-class tools and support you need to achieve your goals.
			</p>

			<div
				className="grid grid-cols-1 gap-5 
							sm:grid-cols-2
							lg:grid-cols-4"
			>
				<Card
					head={'Top Rated Instructors'}
					pragraph={`Our crew of subject matter experts have amassed an instructor rating of 4.8 on a 5 point scale* across thousands of reviews.

`}
				/>
				<Card
					head={'Top Rated Instructors'}
					pragraph={`Our crew of subject matter experts have amassed an instructor rating of 4.8 on a 5 point scale* across thousands of reviews.

`}
				/>
				<Card
					head={'Top Rated Instructors'}
					pragraph={`Our crew of subject matter experts have amassed an instructor rating of 4.8 on a 5 point scale* across thousands of reviews.

`}
				/>
				<Card
					head={'Top Rated Instructors'}
					pragraph={`Our crew of subject matter experts have amassed an instructor rating of 4.8 on a 5 point scale* across thousands of reviews.

`}
				/>
			</div>
			<div
				className="buttonMain text-white w-fit m-auto 
            mt-5 mb-5 px-5 border-2  bg-russian-violet  hover:bg-dogwood-rose
			 hover:border-dogwood-rose duration-150 hover:text-white"
			>
				Explore Our Offerings
			</div>
		</div>
	);
}

function Card({ head, pragraph }) {
	return (
		<div className="border border-gray-300 p-5 rounded-lg shadow-lg bg-white">
			<h3 className="text-lg font-bold text-dogwood-rose mb-2">{head}</h3>
			<p className=" text-sm text-black w-[70%] m-auto">{pragraph}</p>
		</div>
	);
}

export default LandingSec6;
