import React from "react";
import { useParams } from "react-router-dom";

const Register = () => {
    const { id } = useParams();

    const webinarDetails = {
        1: {
            title: "Introduction to React",
            description: "Learn the basics of React and build your first application.",
        },
        2: {
            title: "Advanced JavaScript",
            description: "Deep dive into JavaScript concepts and patterns.",
        },
        3: {
            title: "UI/UX Design Principles",
            description: "Explore best practices for designing user-friendly interfaces.",
        },
    };

    const webinar = webinarDetails[id] || {
        title: "Webinar Not Found",
        description: "We could not find the details for this webinar.",
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-gray-100 min-h-screen p-6">
            {/* Left Section - Webinar Details */}
            <div className="w-full lg:w-1/2 p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{webinar.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{webinar.description}</p>
                <p className="text-gray-600 leading-relaxed">
                    Business analysis is critical to the success of projects and other initiatives in any organization, yet it is often a poorly understood role.
                    In this session, project managers will learn how understanding business analysis can enhance their project outcomes and clarify their
                    responsibilities for improved alignment with business goals.
                </p>
                <ul className="mt-4 space-y-2 text-gray-800">
                    <li>✔ Define what constitutes foundational business analysis work</li>
                    <li>✔ Understand the role of the PM in the context of BA work</li>
                    <li>✔ Identify how a thorough understanding of business analysis improves outcomes</li>
                </ul>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                    Register
                </button>
            </div>

            {/* Right Section - Registration Form */}
            <div className="w-full lg:w-1/3 p-8 bg-white shadow-lg rounded-lg mt-10 lg:mt-0 lg:ml-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Register Now</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
