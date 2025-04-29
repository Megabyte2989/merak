import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { store } from './Redux/store';
import AboutUs from './components/AboutUs/AboutUs';
import CropProjects from './components/AboutUs/CropProjects';
import Gallery from './components/AboutUs/Gallery';
import GovProjects from './components/AboutUs/GovProjects';
import Success from './components/AboutUs/Success';
import TestimonialPage from './components/AboutUs/TestimonialPage';
import ContactUsMain from './components/ContactUs/ContactUsMain';
import CategoriesPage from './components/FindTraining/CategoriesPage';
import CourseDetailsPage from './components/FindTraining/CourseDetailsPage';
import NotFoundPage from './components/FindTraining/NotFoundPage'; // Import the NotFoundPage component
import Promotions from './components/FindTraining/Promotions';
import RegistrationFormPage from './components/FindTraining/RegistrationFormPage';
import SectorsPage from './components/FindTraining/SectorsPage';
import Foot from './components/Foot';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar';
import PartnersAndAuthorizations from './components/PartnersAndAuthorizations';
import CertificationVerification from './components/Resources/CertificationVerification';
import LearningMethods from './components/Resources/LearningMethods';
import WeHire from './components/Resources/WeHire';
import Webinars from './components/Resources/Webinars';
import { TrainingProvider } from './contexts/trainingContext';

function App() {
	return (
		<>
			<HelmetProvider>
				<BrowserRouter>
					<Provider store={store}>
						<TrainingProvider>
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
									<Route path="/AboutUs" element={<AboutUs />} />
									<Route path="/gov-projects" element={<GovProjects />} />
									<Route path="/crop-projects" element={<CropProjects />} />
									<Route path="/contact-us" element={<ContactUsMain />} />
									<Route path="/we-hire" element={<WeHire />} />
									<Route
										path="/learning-methods"
										element={<LearningMethods />}
									/>
									<Route path="/Webinars" element={<Webinars />} />
									<Route
										path="/register/:id"
										element={<RegistrationFormPage />}
									/>
									<Route
										path="/Certification-Verification"
										element={<CertificationVerification />}
									/>
									<Route path="/find-training" element={<CategoriesPage />} />
									<Route path="/sectors/:sectorId" element={<SectorsPage />} />
									{/* <Route path="/categories/" element={<CoursesPage />} /> */}
									<Route
										path="/courses/:courseId"
										element={<CourseDetailsPage />}
									/>
									<Route
										path="/register-course/:courseId"
										element={<RegistrationFormPage />}
									/>
									<Route path="/promotions" element={<Promotions />} />
									<Route path="*" element={<NotFoundPage />} />{' '}
									{/* Add this line */}
									{/* Uncomment or add additional routes as needed */}
									{/* <Route path="/timer" element={<Timer />} /> */}
								</Routes>
							</div>
							<Foot />
						</TrainingProvider>
					</Provider>
				</BrowserRouter>
			</HelmetProvider>
		</>
	);
}

export default App;
