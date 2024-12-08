import {
	faClock,
	faHouseChimneyUser,
	faMapMarkerAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ContactPlaces() {
	const branches = [
		{
			name: 'ABBAS ELAQAAD BRANCH',
			address: '8 Mohamed Mostafa Hamam St. Behind Pizza Hut (Abbas El Akkad)',
			phone: '002 02 402 4822',
		},
		{
			name: 'Mostafa Elnahas BRANCH',
			address: '99 Mostafa Elnahas St.',
			phone: '02 22718620',
		},
		{
			name: 'Mohandeseen BRANCH',
			address: '76 Gameat Al Dewal Al Arabeya Floor 4 - Giza Governorate',
			phone: '',
		},
	];

	const hoursOfOperation = 'Saturday - Thursday : 9:00 am to 8:00 pm';

	return (
		<div className="bg-russian-violet text-white py-16">
			<div className="max-w-7xl mx-auto px-6 ">
				<h2 className="text-4xl font-extrabold text-center text-dogwood-rose mb-10">
					Our Branch Locations
				</h2>

				{/* Branch Information Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
					{branches.map((branch, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 "
						>
							<div className="flex  mb-5">
								<FontAwesomeIcon
									icon={faHouseChimneyUser}
									className="text-dogwood-rose text-3xl mr-4"
								/>
								<h3 className="text-xl font-semibold text-dark-purple">
									{branch.name}
								</h3>
							</div>

							<p className="text-lg text-russian-violet-dark mb-4">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className="text-teal mr-2"
								/>
								{branch.address}
							</p>

							{branch.phone && (
								<p className="text-lg text-teal flex items-center gap-2">
									<FontAwesomeIcon
										icon={faPhoneAlt}
										className="text-dogwood-rose"
									/>
									<a
										href={`tel:${branch.phone}`}
										className="hover:text-dogwood-rose"
									>
										{branch.phone}
									</a>
								</p>
							)}
						</div>
					))}
				</div>

				{/* Hours of Operation Section */}
				<div className="mt-12 text-center">
					<p className="text-2xl font-medium text-white flex justify-center items-center gap-4">
						<FontAwesomeIcon
							icon={faClock}
							color="white"
							className="text-goldenrod text-3xl"
						/>
						<span>Hours of Operation:</span>
					</p>
					<p className="text-lg text-white mt-2">{hoursOfOperation}</p>
				</div>
			</div>
		</div>
	);
}

export default ContactPlaces;
