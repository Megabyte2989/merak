
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Foot from './components/Foot';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import AboutUs from "./components/AboutUs";
import GovProjects from "./components/GovProjects";
import CropProjects from "./components/CropProjects";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="flex flex-col min-h-screen mx-auto ">
					<Routes>
						{/* Define individual routes here */}
						<Route path="/" element={<Landing />} />
                      <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/gov-projects" element={<GovProjects />} />
          <Route path="/crop-projects" element={<CropProjects />} />
						{/* Uncomment or add additional routes as needed */}
						{/* <Route path="/contact-us" element={<ContactUs />} /> */}
						{/* <Route path="/timer" element={<Timer />} /> */}
					</Routes>
				</div>
				<Foot />
			</BrowserRouter>
		</>
	);

}

export default App;
