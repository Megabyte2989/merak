import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CropProjects from './components/AboutUs/CropProjects';
import Gallery from './components/AboutUs/Gallery';
import GovProjects from './components/AboutUs/GovProjects';
import Success from './components/AboutUs/Success';
import TestimonialPage from './components/AboutUs/TestimonialPage';
import ContactUsMain from './components/ContactUs/ContactUsMain';
import Foot from './components/Foot';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar';
import PartnersAndAuthorizations from './components/PartnersAndAuthorizations';
import Register from './components/Register';
import LearningMethods from './components/Resources/LearningMethods';
import WeHire from './components/Resources/WeHire';
import Webinars from './components/Webinars';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<div className="flex flex-col min-h-screen mx-auto ">
					<Routes>
						{/* Define individual routes here */}

						<Route path="/testimonials" element={<TestimonialPage />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/success" element={<Success />} />
						<Route
							path="/Authorization-and-partner"
							element={<PartnersAndAuthorizations />}
						/>
						<Route path="/" element={<Landing />} />
						<Route path="/aboutUs" element={<AboutUs />} />
						<Route path="/gov-projects" element={<GovProjects />} />
						<Route path="/crop-projects" element={<CropProjects />} />
						<Route path="/contact-us" element={<ContactUsMain />} />
						<Route path="/we-hire" element={<WeHire />} />
						<Route path="/learning-methods" element={<LearningMethods />} />
						<Route path="/webinars" element={<Webinars />} />
						<Route path="/register/:id" element={<Register />} />

						{/* Uncomment or add additional routes as needed */}

						{/* <Route path="/timer" element={<Timer />} /> */}
					</Routes>
				</div>
				<Foot />
			</BrowserRouter>
		</>
	);
}

export default App;
