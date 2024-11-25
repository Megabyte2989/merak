import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Foot from './components/Foot';
import Navbar from './components/Navbar';
import TestimonialPage from './components/TestimonialPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="flex flex-col min-h-screen mx-auto px-4"><h1>Home Page</h1></div>} />
        <Route path="/testimonials" element={<TestimonialPage />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
