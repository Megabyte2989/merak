import {
	faFacebook,
	faLinkedin,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Foot() {
	return (
		<div className="flex flex-col lg:flex-row gap-5 justify-between items-center mt-auto text-white bg-raisin-black rounded-md p-5">
			<div>
				<img
					className="m-auto mb-[20px] lg:m-0 lg:mb-[20px] w-[40vw] lg:w-[20vw] "
					src="/New Horizons Logo.png"
					alt=""
				/>
				<p className="">
					&#169; New Horizons Worldwide, LLC. All Rights Reserved. | Privacy
					Policy | Terms of Use
				</p>
			</div>
			<div className="flex space-x-4">
				<a
					href="https://www.facebook.com/NewHorizonsWorldwide"
					className="text-blue-600 hover:text-blue-800"
				>
					<FontAwesomeIcon icon={faFacebook} size="2x" />
				</a>
				<a
					href="https://twitter.com/NewHorizonsCLC"
					className="text-blue-400 hover:text-blue-600"
				>
					<FontAwesomeIcon icon={faTwitter} size="2x" />
				</a>
				<a
					href="https://www.linkedin.com/company/new-horizons-computer-learning-centers"
					className="text-blue-700 hover:text-blue-900"
				>
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
				</a>
				<a
					href="https://www.youtube.com/user/NewHorizonsCLC"
					className="text-red-600 hover:text-red-800"
				>
					<FontAwesomeIcon icon={faYoutube} size="2x" />
				</a>
			</div>
		</div>
	);
}

export default Foot;
