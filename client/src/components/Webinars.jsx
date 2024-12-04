import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Webinars = () => {
    // Webinar Data
    const webinarData = [
        {
            id: 1,
            title: "Introduction to React",
            description: "Learn the basics of React and build your first application.",
            link: "/webinars/react-intro",
            image: "https://via.placeholder.com/400x200?text=React+Webinar",
        },
        {
            id: 2,
            title: "Advanced JavaScript",
            description: "Deep dive into JavaScript concepts and patterns.",
            link: "/webinars/advanced-js",
            image: "https://via.placeholder.com/400x200?text=JavaScript+Webinar",
        },
        {
            id: 3,
            title: "UI/UX Design Principles",
            description: "Explore best practices for designing user-friendly interfaces.",
            link: "/webinars/ui-ux",
            image: "https://via.placeholder.com/400x200?text=UI/UX+Webinar",
        },
        {
            id: 4,
            title: "Building RESTful APIs with Node.js",
            description: "Learn how to create scalable APIs using Node.js and Express.",
            link: "/webinars/nodejs-apis",
            image: "https://via.placeholder.com/400x200?text=Node.js+Webinar",
        },
        {
            id: 5,
            title: "Getting Started with TypeScript",
            description: "Understand the fundamentals of TypeScript and how to integrate it with JavaScript.",
            link: "/webinars/typescript-intro",
            image: "https://via.placeholder.com/400x200?text=TypeScript+Webinar",
        },
        {
            id: 6,
            title: "Introduction to GraphQL",
            description: "Discover how GraphQL can simplify data fetching in your applications.",
            link: "/webinars/graphql-intro",
            image: "https://via.placeholder.com/400x200?text=GraphQL+Webinar",
        },
        {
            id: 7,
            title: "Mastering CSS Flexbox",
            description: "Learn how to create responsive layouts with CSS Flexbox.",
            link: "/webinars/css-flexbox",
            image: "https://via.placeholder.com/400x200?text=CSS+Flexbox+Webinar",
        },
        {
            id: 8,
            title: "DevOps Fundamentals",
            description: "An introduction to DevOps practices and tools for modern development.",
            link: "/webinars/devops-fundamentals",
            image: "https://via.placeholder.com/400x200?text=DevOps+Webinar",
        },
        {
            id: 9,
            title: "Introduction to Cloud Computing",
            description: "Learn the basics of cloud computing and its services.",
            link: "/webinars/cloud-computing",
            image: "https://via.placeholder.com/400x200?text=Cloud+Computing+Webinar",
        },
        {
            id: 10,
            title: "Digital Marketing Strategies",
            description: "Explore effective digital marketing strategies for businesses.",
            link: "/webinars/digital-marketing",
            image: "https://via.placeholder.com/400x200?text=Digital+Marketing+Webinar",
        },
        {
            id: 11,
            title: "Cybersecurity Essentials",
            description: "Understand the fundamentals of cybersecurity and how to protect your data.",
            link: "/webinars/cybersecurity-essentials",
            image: "https://via.placeholder.com/400x200?text=Cybersecurity+Webinar",
        },
        {
            id: 12,
            title: "Introduction to Machine Learning",
            description: "Get started with machine learning concepts and algorithms.",
            link: "/webinars/machine-learning-intro",
            image: "https://via.placeholder.com/400x200?text=Machine+Learning+Webinar",
        },
    ];

    // State for Search
    const [searchTerm, setSearchTerm] = useState("");

    // Filter webinars based on search
    const filteredWebinars = webinarData.filter((webinar) =>
        webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        webinar.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="bg-white">
            {/* Section Header */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 mt- 10 text-4xl font-extrabold tracking-tight leading-none text-dark-purple md:text-5xl lg:text-6xl">
                    Explore upcoming webinars
                </h1>
                <p className="mb-8 text-lg font-normal text-dogwood-rose md:text-xl lg:text-xl sm:px-16 xl:px-48">
                    From Educate 360
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                    >
                        <svg
                            className="mr-2 -ml-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                        View all webinars
                    </a>
                </div>

                {/* Search Bar */}
                <div className="relative w-full max-w-md mx-auto mt-6">
                    <input
                        type="text"
                        placeholder="Search webinars..."
                        className="w-full p-3 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Webinar Cards Section */}
            <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 px-6 lg:px-12">
                {filteredWebinars.length > 0 ? (
                    filteredWebinars.map((webinar) => (
                        <div
                            key={webinar.id}
                            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <img
                                src={webinar.image}
                                alt={webinar.title}
                                className="mb-4 rounded-lg"
                            />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {webinar.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {webinar.description}
                            </p>
                            <Link
                                to={webinar.link}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No webinars found.</p>
                )}
            </div>
        </section>
    );
};

export default Webinars;