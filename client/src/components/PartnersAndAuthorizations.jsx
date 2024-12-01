import React from 'react';

const PartnersAndAuthorizations = () => {
  return (
    <div className="bg-gradient-to-br from-dark-purple to-dogwood-rose text-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="bg-[#ffffffb4] text-gray-800 py-28 rounded-lg shadow-lg mb-16">
          <div className="max-w-screen-xl mx-auto px-4 gap-12 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h1 className="text-sm text-indigo-600 font-medium md:text-base">
                Collaborating with top vendors to provide world-class training
              </h1>
              <h2 className="text-4xl text-gray-900 font-extrabold mx-auto md:text-5xl">
                New Horizons Cairo{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#020d70] to-[#94086a]">
                  Partners & Authorizations
                </span>
              </h2>
              <p className="text-gray-800 max-w-2xl mx-auto">
                New Horizons Cairo is an authorized training partner <br /> for many industry-recognized software
                and certification companies and <br /> organizations.
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a href="#contact-page" className="block py-2 px-4 text-white font-medium bg-dogwood-rose duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                  contact us now
                </a>
                <a href="#courses-section" className="block py-2 px-4 text-purple-900 hover:text-gray-800 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                  Explore courses
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-[#ffffff] mb-4">
            Our Trusted Partners
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Collaborating with industry leaders to provide world-class training and certifications.
          </p>
        </section>

        {/* Partners List */}
        <section id="courses-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
                title: 'Microsoft Learning Partner',
                description:
                  'Every Microsoft course at New Horizons Cairo follows Microsoft Office Curriculum (MOC), and is taught by Microsoft Certified instructors to ensure the best possible training in Microsoft products.',
                icon: 'microsoftlogo.png', 
              },
              {
                title: 'Cisco Learning Partner',
                description:
                  'Cisco learning partners are the only authorized sources for commercial Cisco training. This ensures instructors at New Horizons Cairo are distinctively qualified to provide Cisco authorized training.',
                icon: 'ciscologo.png',
              },
              {
                title: 'CompTIA Authorized Partner',
                description:
                  'As a member of the CompTIA Authorized Partner program, New Horizons Cairo delivers CompTIA-approved curriculum designed for industry-recognized CompTIA certifications.',
                icon: 'comptia.png',
              },
              {
                title: 'VMware Authorized Training Partner',
                description:
                  'New Horizons Cairo is a VMware training partner, preparing students to manage server and desktop virtualization while achieving VMware certifications.',
                icon: 'vmware.png',
              },
              {
                title: 'IBM Training Partner',
                description:
                  'New Horizons Cairo provides IBM authorized training on the design, installation, maintenance, and troubleshooting of IBM software and systems.',
                icon: 'ibm.png',
              },
              {
                title: 'Citrix Learning Partner',
                description:
                  'New Horizons Cairo is a Citrix Authorized Learning Center. Our training equips you with real-world skills to enhance productivity with Citrix mobile technology solutions.',
                icon: 'citrix.png',
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white hover:bg-dogwood-rose transition-all duration-300 rounded-lg shadow-lg p-6 text-center"
              >
                <div className="mb-4">
                  <img
                    src={partner.icon}
                    alt={partner.title}
                    className="h-18 w-18 mx-auto"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-4">{partner.title}</h2>
                <p className="text-sm leading-relaxed text-gray-800">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersAndAuthorizations;

/* Smooth Scroll CSS */
const rootStyles = document.documentElement.style;
rootStyles.setProperty("scroll-behavior", "smooth");
