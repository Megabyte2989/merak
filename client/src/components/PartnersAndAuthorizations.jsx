import React from 'react';

const PartnersAndAuthorizations = () => {
  return (
    <div className="bg-raisin-black text-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-purple">
            Partners and Authorizations
          </h1>
          <p className="mt-4 text-dogwood-rose">
            New Horizons Cairo Learning Partners & Authorizations
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12 text-center">
          <p className="text-lg leading-relaxed">
            New Horizons Cairo is an authorized training partner for many
            industry-recognized software and certification companies and
            organizations. These partnerships allow New Horizons to deliver the
            most up-to-date curriculum with specific standards set in alignment
            with these top vendors.
          </p>
        </section>

        {/* Partners List */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner Card */}
            {[
              {
                title: 'Microsoft Learning Partner',
                description:
                  'Every Microsoft course at New Horizons Cairo follows Microsoft Office Curriculum (MOC), and is taught by Microsoft Certified instructors to ensure the best possible training in Microsoft products. We also accept Microsoft SATV vouchers.',
                icon: 'microsoft-icon',
              },
              {
                title: 'Cisco Learning Partner',
                description:
                  'Cisco learning partners are the only authorized sources for commercial Cisco training. This ensures instructors at New Horizons Cairo are distinctively qualified to provide Cisco authorized training and prepare you for Cisco Certification exams.',
                icon: 'cisco-icon',
              },
              {
                title: 'CompTIA Authorized Partner',
                description:
                  'As a member of the CompTIA Authorized Partner program, New Horizons Cairo delivers CompTIA-approved curriculum designed for industry-recognized CompTIA certifications, supporting successful entry or advancement into an IT career.',
                icon: 'comptia-icon',
              },
              {
                title: 'VMware Authorized Training Partner',
                description:
                  'New Horizons Cairo is a VMware training partner, preparing students to manage server and desktop virtualization while achieving VMware certifications. Learn from experts in virtualization and cloud infrastructure.',
                icon: 'vmware-icon',
              },
              {
                title: 'IBM Training Partner',
                description:
                  'New Horizons Cairo provides IBM authorized training on the design, installation, maintenance, and troubleshooting of IBM software and systems. Redeem your IBM Education Packs with us for top-tier training.',
                icon: 'ibm-icon',
              },
              {
                title: 'Citrix Learning Partner',
                description:
                  'New Horizons Cairo is a Citrix Authorized Learning Center. Our training equips you with real-world skills to enhance productivity with Citrix mobile technology solutions.',
                icon: 'citrix-icon',
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-dark-purple rounded-lg shadow-lg p-6 text-center"
              >
                <div className="mb-4">
                  {/* Placeholder for icons */}
                  <div
                    className={`h-16 w-16 mx-auto bg-dogwood-rose rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-xl font-bold">
                      {partner.icon.split('-')[0][0]}
                    </span>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-russian-violet mb-4">
                  {partner.title}
                </h2>
                <p className="text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersAndAuthorizations;
