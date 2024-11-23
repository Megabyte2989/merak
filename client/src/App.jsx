import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Foot from './components/Foot';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<h1></h1>
			<BrowserRouter>
				<Navbar />
				<div className="flex flex-col min-h-screen mx-auto px-4">
					{/* <ContactUs/> */}
					{/* <Timer /> */}
				</div>
				<Foot />
			</BrowserRouter>
		</>
	);
}

export default App;
