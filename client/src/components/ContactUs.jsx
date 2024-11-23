import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import ContactUsInput from './ContactUsInput';

function ContactUs() {
	const handleSubmit = e => {
		e.preventDefault();
		// Here you can handle form submission
		alert('Form submitted!');
	};

	return (
		<>
			<div className="container  flex flex-col  lg:flex-row xl:flex-row items-center justify-center mt-8">
				<div className="max-w-4xl w-full">
					<p className="text-dark pl-3 font-bold mb-5 text-center ">
						Do You Have Additional Questions? Please Contact Us Below.
					</p>

					<div
						id="contactUs-info"
						className="flex flex-wrap space-x-10 sm:space-x-20 items-center text-2xl bg-amber-100 p-5 rounded-xl justify-center sm:justify-around"
					>
						{/* Phone Section */}
						<div className="flex items-center space-x-2">
							<FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-1" />
							<a href="tel:+1-800-500-3135" className="hover:underline text-xl">
								+1-800-500-3135
							</a>
						</div>

						{/* Email Section */}
						<div className="flex items-center space-x-2 justify-center">
							<FontAwesomeIcon
								icon={faEnvelope}
								className="text-orange-600 mr-1"
							/>
							<a
								href="mailto:info@newhorizons.com"
								className="hover:underline text-xl"
							>
								info@newhorizons.com
							</a>
						</div>
					</div>

					<form action="" onSubmit={handleSubmit} className="mt-6">
						<div className="flex  flex-col sm:flex-row sm:space-x-5 mb-4">
							<ContactUsInput
								className="min-w-[270px] sm:min-w-[300px]"
								name="FirstName"
								title="First Name"
								type="text"
								required
							/>
							<ContactUsInput
								className="min-w-[270px] sm:min-w-[300px]"
								name="LastName"
								title="Last Name"
								type="text"
								required
							/>
						</div>

						<ContactUsInput
							name="OrganisationName"
							title="Organisation Name"
							type="text"
							required
						/>
						<ContactUsInput
							name="BusinessEmail"
							title="Business Email"
							type="text"
							required
						/>

						<div className="flex flex-col sm:flex-row sm:space-x-5 mb-4">
							<ContactUsInput
								name="PhoneNumberCountry"
								title="Phone Number Country"
								type="text"
								value="Egypt (مصر)"
								readOnly
							/>
							<ContactUsInput
								name="PhoneNumber"
								title="Phone Number"
								type="text"
								placeholder="+20"
								inputMode="numeric"
								pattern="^\+?[0-9]*$"
								value="+20"
								className="min-w-[350px]"
							/>
						</div>

						<ContactUsInput
							name="Notes"
							title="How can we help with your training needs?*"
							type="textarea"
							className="min-h-[100px] word-break break-word"
						/>

						<button
							type="submit"
							className="rounded-md bg-orange-500 text-white px-5 py-3 ml-5 mt-4"
						>
							Submit
						</button>
					</form>
				</div>

				<div className="ml-10 mt-6 sm:mt-0 mb-10">
					<img
						className="w-64 h-64 sm:w-80 sm:h-80"
						src="/Contactus.png"
						alt="contactusImage"
					/>
				</div>
			</div>
		</>
	);
}

export default ContactUs;
