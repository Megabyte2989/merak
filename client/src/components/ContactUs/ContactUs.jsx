import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import React from 'react';
import ContactUsInput from './ContactUsInput';

// TODO : ADD VALIDATION TO THE SUBMITION
function ContactUs() {
	const handleSubmit = e => {
		e.preventDefault();
		const readyData = {
			FirstName: contactInputs.FirstName,
			LastName: contactInputs.LastName,
			OrganisationName: contactInputs.OrganisationName,
			BusinessEmail: contactInputs.BusinessEmail,
			PhoneNumber: contactInputs.PhoneNumber,
			Notes: contactInputs.Notes,
		};
		console.log(readyData);
	};

	const [contactInputs, setcontactInputs] = useState({
		FirstName: '',
		LastName: '',
		OrganisationName: '',
		BusinessEmail: '',
		PhoneNumber: '+20',
		Notes: '',
	});

	const handleContactChange = e => {
		const { name, value } = e.target;

		setcontactInputs(prevContact => {
			if (name === 'PhoneNumber') {
				return {
					...prevContact,
					[name]: `+20${value.replace(/^\+20/, '')}`, // Ensure no duplicate "+20"
				};
			}
			return {
				...prevContact,
				[name]: value,
			};
		});
	};

	return (
		<>
			<div className=" px-5 py-5   flex flex-col  lg:flex-row xl:flex-row items-center justify-center  bg-lavender">
				<div>
					<p className="text-raisin-black	 text-2xl  pl-3 font-bold my-10 text-center  ">
						Do You Have Additional Questions? Please Contact Us Below.
					</p>

					<div
						id="contactUs-info"
						className="flex flex-wrap space-x-10 sm:space-x-20 items-center bg-dogwood-rose text-white
						text-2xl bg- p-5 rounded-xl justify-center sm:justify-around"
					>
						{/* Phone Section */}
						<div className="flex items-center space-x-2">
							<FontAwesomeIcon
								icon={faPhone}
								className="text-ghost-white mr-1"
							/>
							<a
							aria-label='Call Us'
								href="tel:+1-800-500-3135"
								className="hover:text-lavender text-xl"
							>
								+1-800-500-3135
							</a>
						</div>

						{/* Email Section */}
						<div className="flex items-center space-x-2 justify-center ">
							<FontAwesomeIcon
								icon={faEnvelope}
								className="text-ghost-white mr-1"
							/>
							<a
							aria-label='Email Us'
								href="mailto:info@newhorizons.com"
								className="hover:text-lavender text-xl"
							>
								info@newhorizons.com
							</a>
						</div>
					</div>

					<form action="" onSubmit={handleSubmit} className="mt-6 px-5 py-5 ">
						<div className="flex  flex-col sm:flex-row sm:space-x-5 mb-4 justify-between">
							<ContactUsInput
								className="min-w-[270px] sm:min-w-[300px]"
								name="FirstName"
								title="First Name"
								type="text"
								required
								onChange={handleContactChange}
								value={contactInputs.FirstName}
							/>
							<ContactUsInput
								className="min-w-[270px] sm:min-w-[300px]"
								name="LastName"
								title="Last Name"
								type="text"
								required
								onChange={handleContactChange}
								value={contactInputs.LastName}
							/>
						</div>

						<ContactUsInput
							name="OrganisationName"
							title="Organisation Name"
							type="text"
							required
							onChange={handleContactChange}
							value={contactInputs.OrganisationName}
						/>
						<ContactUsInput
							name="BusinessEmail"
							title="Business Email"
							type="text"
							required
							onChange={handleContactChange}
							value={contactInputs.BusinessEmail}
						/>

						<div className="flex flex-col sm:flex-row sm:space-x-5 mb-4 justify-between">
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
								className="min-w-[350px]"
								onChange={handleContactChange}
								value={contactInputs.PhoneNumber}
							/>
						</div>

						<ContactUsInput
							name="Notes"
							title="How can we help with your training needs?*"
							type="textarea"
							className="min-h-[100px] word-break break-word"
							onChange={handleContactChange}
							value={contactInputs.Notes}
						/>

						<button
							type="submit"
							className="rounded-md buttonMain bg-dogwood-rose text-white px-5 py-3 ml-5 mt-4 border-2 border-transparent hover:border-black hover:text-raisin-black"
						>
							Submit
						</button>
					</form>
				</div>

				<div className="ml-10 mt-6 sm:mt-0 mb-10">
					<img
						className="w-full h-auto max-w-2xl hidden lg:block lg:max-w-[28rem]"
						src="./images/Contactus.webp"
						alt="contactusImage"
					/>
				</div>
			</div>
		</>
	);
}

export default ContactUs;
