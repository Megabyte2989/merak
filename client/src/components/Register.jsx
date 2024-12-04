import React from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="p-6 max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">{webinar.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{webinar.description}</p>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                    Register Now
                </button>
            </form>
        </div>
    );
};

export default Register;
