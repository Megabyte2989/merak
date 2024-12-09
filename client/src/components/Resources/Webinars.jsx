import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Webinars = () => {
    // Webinar Data
    const webinarData = [
        {
            id: 1,
            title: "Introduction to React",
            description: "Learn the basics of React and build your first application.",
            link: "/register/1",
            image: "https://t4.ftcdn.net/jpg/02/34/09/25/360_F_234092554_wF3dTfJtJHS8AIkJ8ouIdLiDHgL3iodU.jpg",
        },
        {
            id: 2,
            title: "Advanced JavaScript",
            description: "Deep dive into JavaScript concepts and patterns.",
            link: "/register/2",
            image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/12/tes_gen_blog_code7-1-800x412.jpg",
        },
        {
            id: 3,
            title: "UI/UX Design Principles",
            description: "Explore best practices for designing user-friendly interfaces.",
            link: "/register/3",
            image: "https://lazyprogrammer.me/wp-content/uploads/2024/03/programmer_cmd_line.jpg",
        },
        // Add more webinars as needed
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
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark-purple md:text-5xl lg:text-6xl">
                    Explore Upcoming Webinars
                </h1>
                <p className="mb-8 text-lg font-normal text-dogwood-rose md:text-xl lg:text-xl sm:px-16 xl:px-48">
                    From New Horizons
                </p>

                {/* Search Bar */}
                <div className="relative w-full max-w-md mx-auto mt-6">
                    <input
                        type="text"
                        placeholder="Search webinars..."
                        className="w-full p-3 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-dark-purple-light focus:outline-none"
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
                            className="max-w-sm p-6 bg-white border border-purple-300 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-dark-purple dark:hover:bg-dark-purple" 
                        >
                            <img
                                src={webinar.image}
                                alt={webinar.title}
                                className="mb-4 rounded-lg w-full h-48 object-cover" // Set fixed height and width
                            />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                {webinar.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {webinar.description}
                            </p>
                            <Link
                                to={webinar.link}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-dogwood-rose focus:ring-4 focus:outline-none focus:ring-gray-700"
                            >
                                Register
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