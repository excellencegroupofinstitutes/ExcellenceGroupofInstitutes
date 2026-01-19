import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      
      {/* Page Header */}
      <div className="mb-10 text-center mt-40">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Effective Date: January 1, 2026
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          This Privacy Policy outlines how <strong>Excellence Group of Institutes </strong> 
          collects, uses, and protects the information provided by visitors and clients across 
          its three verticals: <strong>Excellence Tuitions</strong>, 
          <strong> Excellence Computer Centre</strong>, and 
          <strong> Excellence Web Services</strong>.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-10 space-y-8 text-base leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-2">
            We collect information to provide better services to all our students and clients.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Personal Identification Information:</strong> Name, email address, phone number, 
              and physical address provided during enrollment or inquiry.
            </li>
            <li>
              <strong>Academic and Professional Data:</strong> Student records, course progress, and 
              business details provided for web development or digital marketing projects.
            </li>
            <li>
              <strong>Technical Data:</strong> IP addresses, browser types, and usage patterns collected 
              through cookies and analytics tools.
            </li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Service Delivery:</strong> To manage student enrollments, provide training, 
              and deliver web or digital marketing services.
            </li>
            <li>
              <strong>Communication:</strong> To send updates regarding schedules, projects, or 
              promotional offers.
            </li>
            <li>
              <strong>Improvement:</strong> To analyze website traffic and enhance services.
            </li>
            <li>
              <strong>Compliance:</strong> To maintain records as per ISO 9001:2015 certification.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Data Sharing and Third Parties
          </h2>
          <p className="mb-2">
            We do not sell or rent your personal information. Data may be shared only in the 
            following situations:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Service Providers:</strong> Trusted partners such as payment gateways 
              or technical service providers.
            </li>
            <li>
              <strong>Advertising Platforms:</strong> For web services clients, platforms like 
              Meta or Google Ads may be used.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect personal information. Access 
            is restricted to authorized personnel only. However, no internet transmission is 
            100% secure.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Cookies and Tracking
          </h2>
          <p>
            Our website uses cookies to improve user experience. You may disable cookies through 
            your browser settings, though some features may not function properly.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. User Rights
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access to your personal data.</li>
            <li>Request correction of inaccurate information.</li>
            <li>
              Request deletion of data, subject to legal or contractual obligations.
            </li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external websites. We are not responsible for 
            their privacy practices and encourage reviewing their policies.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Significant changes 
            will be communicated via our website.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Contact Us
          </h2>
          <p>If you have any questions regarding this Privacy Policy, contact us:</p>
          <ul className="mt-2 space-y-1">
            <li>
              <strong>Email:</strong> excellencegroupofinstitutes@gmail.com
            </li>
            <li>
              <strong>WhatsApp:</strong> +91 9914179771
            </li>
            <li>
              <strong>Addresses:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>SCO 44-C, Rajguru Nagar Market, Ludhiana, Punjab</li>
                <li>JK Center, Basant City, Ludhiana, Punjab</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
