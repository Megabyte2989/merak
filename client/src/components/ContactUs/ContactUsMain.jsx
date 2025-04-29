import React from 'react';
import ContactPlaces from './ContactPlaces';
import ContactUs from './ContactUs';

function ContactUsMain({ questions, location }) {
	if (questions && location === false) {
		return (
			<div>
				<ContactUs />
			</div>
		);
	} else {
		return (
			<div>
				<ContactPlaces />
				<ContactUs />
			</div>
		);
	}
}

export default ContactUsMain;
