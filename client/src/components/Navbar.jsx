import React from 'react';
import { Link } from 'react-router-dom';
import Example from './Example';

function Navbar() {

	return (
		<>
			<div className="flex justify-around p-3">
				<div>
					<Link to={'/'}>
						<img className="w-[18rem]" src="/New Horizons Logo.png" alt="" />
					</Link>
				</div>
				<div className="items-center justify-center flex">
				<Example />
				</div>
				{/* 
					<ul className="flex text-[0.9rem] space-x-10 cursor-pointer">
						<li className="flex items-center hover:bg-blue-700 p-3 rounded-md hover:text-white transition duration-300">
							<Link to={'/'}>About Us</Link>
							<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
						</li>
						<li className="flex items-center hover:bg-blue-700 p-3 rounded-md hover:text-white ">
							Field Training
							<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
						</li>
						<li className="flex items-center hover:bg-blue-700 p-3 rounded-md hover:text-white ">
							Resources
							<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
						</li>
						<li className="flex items-center hover:bg-blue-700 p-3 rounded-md hover:text-white ">
							Authorization & Partner
							<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
						</li>
						<li className="flex items-center hover:bg-blue-700 p-3 rounded-md hover:text-white ">
							Contact Us
							<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
						</li>
						<li className="flex items-center hover:bg-blue-700 p-3 rounded-md hover:text-white ">
							Location
							<FontAwesomeIcon icon={faChevronDown} className="ml-1" />
						</li>
					</ul>
				</div> */}
			</div>
		</>
	);
}

export default Navbar;
