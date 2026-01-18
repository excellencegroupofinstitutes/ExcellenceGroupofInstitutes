import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      
      {/* Page Header */}
      <div className="mb-10 text-center mt-9">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500">
          Last Updated: January, 2026
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Welcome to <strong>Excellence Group of Institutes</strong>. By accessing
          our website (
          <a
            href="https://www.excellencegroupofinstitutes.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.excellencegroupofinstitutes.com
          </a>
          ) and utilizing our services, you agree to comply with and be bound by
          the following Terms and Conditions.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-10 space-y-8 text-base leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. General Information
          </h2>
          <p>
            Excellence Group of Institutes operates three primary verticals:
            <strong> Excellence Tuitions</strong>,
            <strong> Excellence Computer Centre</strong>, and
            <strong> Excellence Web Services</strong>. These terms apply to all
            students, clients, and visitors.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Services & Enrollment
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Educational Services (Tuitions & Computer Centre):</strong>{" "}
              Enrollment is subject to seat availability and successful
              registration. Students must follow the institute’s code of
              conduct and attendance policies.
            </li>

            <li>
              <strong>Professional Services (Web Services):</strong> Project
              timelines, deliverables, and scope will be defined in a separate
              Statement of Work (SOW) or project agreement.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Refund Policy
          </h2>
          <p>
            Any advance paid for a course, internship, or service is
            <strong> non-refundable</strong>. A refund will be processed only in
            cases where the institute fails to deliver the committed services
            satisfactorily.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Payment & Fees
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Tuitions and Courses:</strong> Fees must be paid according
              to the schedule provided at enrollment. Late payments may result
              in suspension of services.
            </li>

            <li>
              <strong>Web Services Model:</strong> Certain services operate on a
              “Pay After Service” model. Payment is due upon successful delivery
              of agreed milestones. An initial project starting fee is required
              before commencement.
            </li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Intellectual Property
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              All website content, including text, graphics, logos, and course
              material, is the intellectual property of Excellence Group of
              Institutes.
            </li>

            <li>
              <strong>Web Services Clients:</strong> Upon full payment,
              ownership of final deliverables (website or digital assets) is
              transferred to the client. Underlying tools, technology, and
              methodologies remain the property of Excellence Group.
            </li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Platform Policy Adherence
          </h2>
          <p>
            For Excellence Web Services, clients are responsible for complying
            with third-party platform policies (e.g., Meta, Google Ads).
            Excellence Group of Institutes is not liable for account
            restrictions due to client-side content or policy changes.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. After-Sales Support & Service Maintenance
          </h2>

          <ul className="list-disc pl-6 space-y-4">

            <li>
              <strong>Excellence Web Services:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Post-Launch Support:</strong> 30-day complimentary
                  support for bug fixes and technical issues related to
                  delivered work.
                </li>
                <li>
                  <strong>Maintenance:</strong> Free 1-year maintenance from
                  delivery date covering downtime, bugs, or unexpected errors.
                  Post this period, services are subject to AMC or hourly
                  billing.
                </li>
                <li>
                  <strong>Training:</strong> One-time basic training for backend
                  management of websites or dashboards.
                </li>
              </ul>
            </li>

            <li>
              <strong>Excellence Computer Centre:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Certification guidance and IELTS/PTE exam support for up to 1
                  month post course completion.
                </li>
                <li>
                  Doubt-clearing sessions subject to faculty availability.
                </li>
              </ul>
            </li>

            <li>
              <strong>Excellence Tuitions:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Regular progress tracking and parent feedback.
                </li>
                <li>
                  Priority access to revision marathons and mock tests during
                  examination periods.
                </li>
              </ul>
            </li>

          </ul>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Limitation of Liability
          </h2>
          <p>
            Excellence Group of Institutes does not guarantee specific academic
            results or fixed search engine rankings, as outcomes depend on
            external factors such as student performance and third-party
            algorithms.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Termination of Services
          </h2>
          <p>
            We reserve the right to terminate enrollment or project services due
            to misconduct, non-payment, or breach of these terms.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            10. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts in Ludhiana,
            Punjab.
          </p>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            11. Contact Information
          </h2>
          <ul className="space-y-1">
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
