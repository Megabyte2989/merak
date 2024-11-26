import React, { useState } from 'react';

const Success = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
  className="relative bg-[url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uQRrnlUBwOoqlNbcQSpYr/a4fbb0dbc1a6b5ba696410ff091039a8/GettyImages-2170485830.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000)] bg-cover bg-center bg-no-repeat"
>
  <div className="absolute inset-0 bg-gray-900 opacity-70"></div> {/* Dark grey filter with opacity */}

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-left">
      <h1 className="text-5xl font-extrabold text-white sm:text-5xl font-poppins ">
        Celebrate <br/> Success Stories
        <strong className="block font-extrabold text-rose-500"> with Us </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-sans">
        Explore inspiring stories of growth and achievement from our trainees and clients.
        Your success could be next!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Share Your Success Story
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Main Section */}
      <section className="stories py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="story bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Jane Doe"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">Jane Doe</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Marketing Specialist</p>
              <p className="text-gray-700 text-center">
                "Thanks to New Horizons Training, I landed my dream job within just
                three months of completing the program!"
              </p>
            </div>

            {/* Story 2 */}
            <div className="story bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="John Smith"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">John Smith</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Software Engineer</p>
              <p className="text-gray-700 text-center">
                "The training provided by New Horizons was instrumental in helping me
                secure a position at a top tech company."
              </p>
            </div>

            {/* Story 3 */}
            <div className="story bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Emily Johnson"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">Emily Johnson</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Project Manager</p>
              <p className="text-gray-700 text-center">
                "The mentorship and support I received were unparalleled. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="submit-story py-16 px-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Share Your Story</h2>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Story
                </label>
                <textarea
                  id="story"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Submit Your Story
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold text-green-600">
                Thank you for submitting your story! We have received it and will review it for publication.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Success;
