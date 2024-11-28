import React from 'react';

function LandingSec5() {
	return (
		<div
			className="flex justify-between px-5 py-5 sm:p-20 bg-dark-purple text-white text-center
       flex-col md:flex-row md:text-left md:items-center "
		>
			<div className="">
				<h2 className="heading  lg:text-5xl font-bold font-sans text-dogwood-rose mt-10 md:text-5xl lg:w-fit">
					Trusted Training Partner
				</h2>
				<p className="font-cairo text-sm w-[80%] text-center m-auto md:ml-0 md:text-left md:text-xl lg:w-[70%] ">
					We offer authorized training solutions from over 30 industry leading
					partners for tools & technologies that you use every day including
					Microsoft, Amazon, Red Hat, and more.
				</p>
				<div
					className="buttonMain text-white w-fit m-auto sm:mx-0
            mt-5 mb-5 px-5 border-2 border-white bg-none  hover:bg-dogwood-rose hover:border-dogwood-rose duration-150 hover:text-white"
				>
					View Our Catalog
				</div>
			</div>

			<div
				className="grid grid-cols-3 grid-rows-3 gap-10 lg:gap-20 border-[0.5px]
			 border-red-300 rounded-lg p-5 items-center m-auto w-[70%] md:w-[130%] 
			 lg:w-[700px]
			 "
				style={{ backgroundColor: 'rgb(133 170 189)' }}
			>
				<div className="w-[80%]">
					<img src="/images/Cisco.png" alt="" />
				</div>
				<div className="w-[100%]">
					<img src="/images/EcCouncil.png" alt="" />
				</div>
				<div className="w-[100%]">
					<img src="/images/CompiaTIA.png" alt="" />
				</div>
				<div className="w-[110%]">
					<img src="/images/PMI.png" alt="" />
				</div>
				<div className="w-[110%]">
					<img src="/images/RedHat.png" alt="" />
				</div>
				<div className="w-[100%]">
					<img src="/images/Cloud.png" alt="" />
				</div>
				<div>
					<img src="/images/ITIL.png" alt="" />
				</div>
				<div className="w-[90%]">
					<img src="/images/1411.png" alt="" />
				</div>
				<div className="w-[80%]">
					<img src="/images/Awss.png" alt="" />
				</div>
			</div>
		</div>
	);
}

export default LandingSec5;
