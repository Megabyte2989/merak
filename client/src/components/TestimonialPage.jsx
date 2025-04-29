import React, { useState } from 'react';
import { Rating } from "@material-tailwind/react";

const TestimonialPage = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  const testimonials = [
    {
      quote:
        "“An incredible experience! The training at New Horizons was top-notch. The instructors are knowledgeable and the materials are up to date. I learned so much in just a few weeks. Highly recommend!.”",
      name: "Sara Ahmed",
      role: "Freelance React Developer",
      image:
        "https://img.freepik.com/free-photo/friendly-pleasant-cheerful-east-asian-woman-striped-t-shirt-raising-palm-wave-hand-greeting-saying-hi-hello-smiling-with-joyful-expression-as-welcoming-newbies-white-background_176420-36727.webp",
    },
    {
      quote:
        "“New Horizons truly helped me level up my skills. The interactive approach to learning made complex topics much easier to understand. I can now confidently apply what I’ve learned to real-world projects!”",
      name: "Salma Hany",
      role: "Web Developer",
      image:
        "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.webp?semt=ais_hybrid",
    },
    {
      quote:
        "“I’ve taken multiple courses from New Horizons, and every single one has exceeded my expectations. The content is engaging, and the support team is always there to help when needed. My career has grown thanks to their excellent training programs!.”",
      name: "Waad Akram",
      role: "UI/UX Designer",
      image:
        "https://thumbs.wbm.im/pw/small/b6dc1f20e82f11ab0cf61a9958441a16.webp",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, e.g., send the data to an API
    // For now, we'll just show a confirmation message
    setSubmitted(true);
    // Clear the form fields
    setName('');
    setRole('');
    setMessage('');
    
    // Optionally, you can hide the confirmation message after a few seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return (
    <div>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium md:text-base">
              Hear from our satisfied clients
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl ">
              Discover how we help you achieve success with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">our innovative solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Our clients have experienced remarkable transformations and growth through our dedicated services and support.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a aria-label='Share Your Thoughts' href="#your-opinion-section" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
              Share Your Thoughts!
              </a>
              <a aria-label='Join us today' href="" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                Join us today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-purple sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-dogwood-rose sm:text-4xl xl:text-5xl font-pj transition-transform duration-300 hover:scale-105">
                Our happy clients say about us
              </ h2>
              <br />
              <p className="text-lg font-medium text-white font-pj">
                20 people have said how good New Horizons services are
              </p>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a
                aria-label="Check all reviews"
                href="javascript:void(0)"
                title="Check all reviews"
                className="pb-2 text-base font-bold leading-7 text-dogwood-rose transition-all duration-200 border-b-2 border-dogwood-rose hover:border-raisin-black font-pj focus:outline-none focus:ring-1 focus:ring-dogwood-rose focus:ring-offset-2 hover:text-raisin-black"
              >
                Check all 2,157 reviews
              </a>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--dark-purple) -0.55%, var(--dogwood-rose) 22.86%, var(--russian-violet) 48.36%, var(--raisin-black) 73.33%, var(--white) 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 ">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex flex-col overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col justify-between flex-1 p-6 bg-raisin-black lg:py-8 lg:px-7 ">
                      <div className="flex-1 ">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-dogwood-rose"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          ))}
                        </div>

                        <blockquote className="flex-1 mt-8">
                          <p className="text-lg leading-relaxed text-white font-pj">
                            {testimonial.quote}
                          </p>
                        </blockquote>
                      </div>

                      <div className="flex items-center mt-8 ">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={testimonial.image}
                          alt={`${testimonial.name} avatar`}
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-white font-pj">
                            {testimonial.name}
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-pink-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
 </section>
 <section id="your-opinion-section">
        <div className="min-h-screen bg-dark-purple py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-raisin-black min-w-1xl flex flex-col rounded-xl shadow-lg">
              <div className="px-12 py-5">
                <h2 className="text-white text-3xl font-semibold">Your opinion matters to us!</h2>
              </div>
              <div className="bg-russian-violet w-full flex flex-col items-center">
                {submitted ? (
                  <div className="mt-6 p-4 text-white text-lg bgb-600 rounded-lg">
                    Thank you! We received your opinion and it will be reviewed and published soon.
                  </div>
                ) : (
                  <form className="w-3/4 flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center py-6 space-y-3">
                      <span className="text-xl text-white ">How was your experience?</span>
                      <div>
                        <Rating unratedColor="black" ratedColor="white" className="flex flex-row gap-3 " />
                      </div>
                    </div>
                    <textarea
                      rows="1"
                      className="p-4 text-gray-500 rounded-xl resize-none"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <textarea
                      rows="1"
                      className="p-4 text-gray-500 rounded-xl resize-none"
                      placeholder="Your role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                    <textarea
                      rows="3"
                      className="p-4 text-gray-500 rounded-xl resize-none"
                      placeholder="Leave a message, if you want"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="py-3 my-8 text-lg bg-gradient-to-r from-dogwood-rose to-purple-600 rounded-xl text-white transition-transform duration-300 hover:scale-105">
                      Rate now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialPage;
const rootStyles = document.documentElement.style;
rootStyles.setProperty("scroll-behavior", "smooth");