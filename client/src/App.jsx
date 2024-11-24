import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Foot from "./components/Foot";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <h1></h1>
      <BrowserRouter>
        <Navbar />
        {/* <div className="flex flex-col min-h-screen mx-auto px-4"> */}
        {/* <ContactUs/> */}
        {/* <Timer /> */}
        {/* </div> */}
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </>
  );
}

export default App;
