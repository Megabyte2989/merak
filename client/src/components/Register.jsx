import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Register = () => {
    const { id } = useParams();

    const webinarDetails = {
        1: {
            title: "Introduction to React",
            description: "Learn the basics of React and build your first application.",
            imageUrl: "https://t4.ftcdn.net/jpg/02/34/09/25/360_F_234092554_wF3dTfJtJHS8AIkJ8ouIdLiDHgL3iodU.jpg",
            topics: [
                "React Components",
                "State and Props",
                "Lifecycle Methods"
            ],
            date: "2025-11-15",
            speaker: "kareem mohamed"
        },
        2: {
            title: "Advanced JavaScript",
            description: "Deep dive into JavaScript concepts and patterns.",
            imageUrl: "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/12/tes_gen_blog_code7-1-800x412.jpg",
            topics: [
                "Closures",
                "Promises",
                "Asynchronous JavaScript"
            ],
            date: "2025-11-22",
            speaker: "sara hany"
        },
        3: {
            title: "UI/UX Design Principles",
            description: "Explore best practices for designing user-friendly interfaces.",
            imageUrl: "https://lazyprogrammer.me/wp-content/uploads/2024/03/programmer_cmd_line.jpg",
            topics: [
                "User  Research",
                "Wireframing",
                "Prototyping"
            ],
            date: "2025-11-29",
            speaker: "ahmed ali"
        },
    };

    const webinar = webinarDetails[id] || {
        title: "Webinar Not Found",
        description: "We could not find the details for this webinar.",
        imageUrl: "",
        topics: [],
        date: "",
        speaker: ""
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log("Form submitted:", formData);
        setIsSubmitted(true); // Set submitted state to true
    };

    return (
        <div
            className="flex flex-col lg:flex-row justify-center items-center lg:items-start min-h-screen p-6"
            style={{
                backgroundImage: `url(${webinar.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Left Section - Webinar Details */}
            <div className="w-full lg:w-1/2 p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{webinar.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{webinar.description}</p>
                <p className="text-gray-600 mb-4">Speaker: <strong>{webinar.speaker}</strong></p>
                <p className="text-gray-600 mb-4">Date: <strong>{new Date(webinar.date).toLocaleDateString()}</strong></p>
                <ul className="mt-4 space-y-2 text-gray-800">
                    {webinar.topics.map((topic, index) => (
                        <li key={index}>✔ {topic}</li>
                    ))}
                </ul>
            </div>

            {/* Right Section - Registration Form or Success Message */}
            <div className="w-full lg:w-1/3 p-8 bg-white shadow-lg rounded-lg mt-10 lg:mt-0 lg:ml-10">
                {isSubmitted ? (
 <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registration Successful!</h2>
                        <p className="text-lg text-gray-700">Thank you for registering for the webinar. We look forward to seeing you!</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Register Now</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-light"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-light"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-light"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-light"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full p-3 text-white bg-dark-purple rounded-lg shadow-lg hover:bg-dogwood-rose focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-dark-purple"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;