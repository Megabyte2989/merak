import React, { useState } from "react";

const AboutUs = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const missionItems = [
    {
      title: "Empowerment",
      description:
        "Empowering individuals to achieve their full potential through quality education.",
    },
    {
      title: "Innovation",
      description:
        "Continuously updating our programs to include the latest industry trends.",
    },
    {
      title: "Community",
      description:
        "Building a supportive community for learners and professionals alike.",
    },
  ];

  const teamMembers = [
    {
      name: "Ahmed Khaled",
      position: "Chief Executive Officer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sara Ali",
      position: "Head of Training",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mohamed Hassan",
      position: "Lead Instructor",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What types of courses do you offer?",
      answer:
        "We offer a wide range of courses in technical and business applications.",
    },
    {
      question: "Do you offer online classes?",
      answer:
        "Yes, we offer both in-person and online classes to suit your preferences.",
    },
    {
      question: "How can I register for a course?",
      answer:
        "You can register by contacting us via phone or email, or by visiting our website.",
    },
  ];

  return (
    <div className="bg-raisin-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-dark-purple text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-dogwood-rose mb-6 leading-tight">
          Discover New Horizons
        </h1>
        <p className="text-lg md:text-xl text-ghost-white max-w-2xl mx-auto">
          Your trusted partner in professional training and personal growth.
          Elevate your potential with cutting-edge programs designed to inspire
          and transform.
        </p>
        <img
          src="https://via.placeholder.com/1000x400"
          alt="Hero image"
          className="mx-auto mt-10 rounded-lg shadow-lg w-full md:w-3/4 object-cover"
        />
      </section>

      {/* About New Horizons Cairo */}
      <section className="py-20 px-6 bg-dark-purple-light">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dogwood-rose mb-8">
            About New Horizons Cairo
          </h2>
          <p className="text-lg text-ghost-white leading-relaxed">
            Located conveniently in Cairo, New Horizons provides a variety of
            technical and business applications training. Whether you prefer
            in-person or online classes, we are here to serve the local
            community's needs.
          </p>
          <ul className="list-disc list-inside text-left mt-6">
            <li>
              <strong>Local Training:</strong> Classes tailored for Cairo’s
              business and individual needs.
            </li>
            <li>
              <strong>Large Selection of Courses:</strong> From beginner
              applications to advanced technical skills.
            </li>
            <li>
              <strong>Innovative Learning Methods:</strong> Customized classes,
              online or on-site.
            </li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-raisin-black-light py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dogwood-rose mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-ghost-white leading-relaxed max-w-3xl mx-auto">
            At New Horizons Training, we aim to empower individuals and
            organizations to thrive in an ever-evolving world. Through our
            dynamic programs, we ignite passion, creativity, and resilience in
            every learner.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {missionItems.map((item, index) => (
              <div
                key={index}
                className="bg-dark-purple-light p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-dogwood-rose mb-4">
                  {item.title}
                </h3>
                <p className="text-ghost-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-dogwood-rose text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((team, index) => (
              <div key={index} className="text-center">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-dogwood-rose">
                  {team.name}
                </h3>
                <p className="text-lg text-ghost-white">{team.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-dogwood-rose text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-ghost-white pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left focus:outline-none"
                >
                  <h3 className="text-2xl font-bold text-dogwood-rose">
                    {faq.question}
                  </h3>
                </button>
                {activeFAQ === index && (
                  <p className="mt-2 text-ghost-white">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-gradient-to-br from-dark-purple to-russian-violet py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-dogwood-rose mb-4">
          Contact Us Today
        </h2>
        <p className="text-lg text-ghost-white mb-8">
          99 Mostafa El-Nahaas, Floor 6, Al Manteqah Ath Thamenah, Nasr City,
          Cairo, 11461 <br />
          Phone: 02 22718615 - 02 22718620 |{" "}
          <a
            href="mailto:cairo.sales@newhorizons.com"
            className="underline text-dogwood-rose"
          >
            cairo.sales@newhorizons.com
          </a>
        </p>
        <button className="bg-dogwood-rose hover:bg-dogwood-rose-light text-white py-4 px-8 rounded-lg font-bold">
          Email Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
