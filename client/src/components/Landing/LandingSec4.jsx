import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function LandingSec4() {
	return (
		<>
			<div className="px-5 py-5 sm:p-14 text-white text-center bg-lavender">
				<h1 className="heading  lg:text-5xl xl:text-5xl font-bold font-sans text-russian-violet">
					Realize Your Potential. Get Certified.
				</h1>
				<p className="text-black font-cairo mb-5 w-[50%] m-auto">
					No business wants to be left behind. With technology and business
					advancements moving at lightning-fast speeds, keeping your team's
					skills top-notch can be challenging. We understand this struggle and
					have been helping organizations navigate this for over 40 years.
				</p>

				<Certification
					ImageSrc={'/images/Comp.png'}
					Fpragraph={'CompTIA Certifications'}
					Spragraph={`CompTIA has five IT certification categories that test different
            knowledge standards—from entry-level to expert.`}
				/>
				<Certification
					ImageSrc={'/images/azure.png'}
					Fpragraph={'Microsoft Certifications'}
					Spragraph={`Microsoft has designed their certification tracks to meet the specific needs and skill sets of job roles typically associated with their robust product line of IT solutions.`}
				/>
				<Certification
					ImageSrc={'/images/AWS.png'}
					Fpragraph={'AWS Certifications'}
					Spragraph={`As a Select Training Partner with AWS, United Training offers AWS learning solutions and certification training for every member of your cloud team.`}
				/>
				<div
					className="buttonMain text-white w-fit m-auto 
            mt-5 mb-5 px-5 border-2  bg-russian-violet  hover:bg-dogwood-rose hover:border-dogwood-rose duration-150 hover:text-white"
				>
					View All Certifications
				</div>
			</div>
		</>
	);
}

function Certification({ ImageSrc, Fpragraph, Spragraph }) {
	return (
		<div
			className="text-white text-center bg-lavender 
            flex justify-center border-b-[0.5px]
         border-b-slate-700 gap-5 items-center px-3 py-5 
         sm:p-14 
         md:px-2 md:py-[2rem]
         lg:px-2
         "
		>
			<img
				className="w-[25%] md:w-[18%] lg:w-[13%] xl:w-[8%]"
				src={ImageSrc}
				alt=""
			/>
			<div className=" text-black w-[60%] text-left">
				<p className="w-fit  font-bold font-sans sm:text-[1rem] xl:text-2xl my-3">
					{Fpragraph}
				</p>
				<p className="w-fit text-left sm:text-[0.8rem] xl:text-[0.9rem] font-cairo  ">
					{Spragraph}
				</p>
			</div>
			<div className="cursor-pointer">
				<FontAwesomeIcon
					icon={faArrowRightLong}
					shake
					color="orange"
					size="2x"
				/>
			</div>
		</div>
	);
}

export default LandingSec4;
