import React, { Suspense, lazy } from 'react';

import Landing from './components/Landing/Landing';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons/faArrowRightLong';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons/faNetworkWired';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { store } from './Redux/store';

import Navbar from './components/Navbar';
import { TrainingProvider } from './contexts/trainingContext';

const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const CropProjects = lazy(() => import('./components/AboutUs/CropProjects'));
const Gallery = lazy(() => import('./components/AboutUs/Gallery'));
const GovProjects = lazy(() => import('./components/AboutUs/GovProjects'));
const Success = lazy(() => import('./components/AboutUs/Success'));
const TestimonialPage = lazy(
	() => import('./components/AboutUs/TestimonialPage')
);
const SectorsPage = lazy(() => import('./components/FindTraining/SectorsPage'));

const CategoriesPage = lazy(
	() => import('./components/FindTraining/CategoriesPage')
);
const CourseDetailsPage = lazy(
	() => import('./components/FindTraining/CourseDetailsPage')
);
const Cart = lazy(() => import('./components/CartParts/Cart'));
const ContactUsMain = lazy(
	() => import('./components/ContactUs/ContactUsMain')
);

const Promotions = React.lazy(
	() => import('./components/FindTraining/Promotions')
);
const RegistrationFormPage = React.lazy(
	() => import('./components/FindTraining/RegistrationFormPage')
);
const Foot = React.lazy(() => import('./components/Foot'));
const NotFoundPage = React.lazy(() => import('./components/NotFoundPage'));
const PartnersAndAuthorizations = React.lazy(
	() => import('./components/PartnersAndAuthorizations')
);
const CertificationVerification = React.lazy(
	() => import('./components/Resources/CertificationVerification')
);
const LearningMethods = React.lazy(
	() => import('./components/Resources/LearningMethods')
);
const WeHire = React.lazy(() => import('./components/Resources/WeHire'));
const Webinars = React.lazy(() => import('./components/Resources/Webinars'));

function App() {
	return (
		<>
			<HelmetProvider>
				<BrowserRouter>
					<Provider store={store}>
						<Suspense fallback={<div>Loading...</div>}>
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
										<Route
											path="/"
											element={
												<Landing
													icons={{
														faArrowLeft,
														faArrowRight,
														faQuoteLeft,
														faChartLine,
														faCloud,
														faCode,
														faCogs,
														faDatabase,
														faNetworkWired,
														faProjectDiagram,
														faRobot,
														faShieldAlt,
														faUserTie,
														faArrowRightLong,
													}}
												/>
											}
										/>
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
										<Route
											path="/sectors/:sectorId"
											element={<SectorsPage />}
										/>
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
										<Route path="/cart" element={<Cart />} />
										<Route path="*" element={<NotFoundPage />} />{' '}
										{/* Add this line */}
										{/* Uncomment or add additional routes as needed */}
										{/* <Route path="/timer" element={<Timer />} /> */}
									</Routes>
								</div>
								<Foot />
							</TrainingProvider>
						</Suspense>
					</Provider>
				</BrowserRouter>
			</HelmetProvider>
		</>
	);
}

export default App;
