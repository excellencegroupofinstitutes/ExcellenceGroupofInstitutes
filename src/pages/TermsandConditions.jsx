import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      
      {/* Header */}
      <div className="mb-10 text-center">
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
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://www.excellencegroupofinstitutes.com
          </a>
          ) and utilizing our services, you agree to comply with and be bound by
          the following Terms and Conditions.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-10 space-y-10 text-base leading-relaxed">

        {/* 1. Excellence Tuitions */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            1. Excellence Tuitions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Services & Enrollment:</strong> Enrollment depends on seat
              availability and completion of registration. Students must follow
              the institute’s code of conduct and attendance policies.
            </li>
            <li>
              <strong>Payment & Fees:</strong> Fees must be paid in advance as
              per the schedule provided at enrollment. Late payments may lead
              to suspension of services.
            </li>
            <li>
              <strong>Refund Policy:</strong> Any advance paid is non-refundable.
              Refunds are processed only if the institute fails to meet its
              commitment to satisfactory services.
            </li>
            <li>
              <strong>After-Sales Support:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Progress Tracking:</strong> Post-session feedback and
                  performance analysis for parents and students.
                </li>
                <li>
                  <strong>Exam-Season Support:</strong> Priority access to mock
                  tests and revision marathons during peak examination months.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability:</strong> Academic results are not
              guaranteed and depend on external factors such as student
              performance.
            </li>
          </ul>
        </div>

        {/* 2. Excellence Computer Centre */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            2. Excellence Computer Centre
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Services & Enrollment:</strong> Enrollment is subject to
              seat availability and registration completion. Students must
              adhere to attendance and conduct policies.
            </li>
            <li>
              <strong>Payment & Fees:</strong> Course fees follow the schedule
              provided at enrollment. Non-payment may result in service
              suspension.
            </li>
            <li>
              <strong>Refund Policy:</strong> Advances for courses or internships
              are non-refundable. Refunds apply only if service commitments are
              not met.
            </li>
            <li>
              <strong>After-Sales Support:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Certification Support:</strong> Assistance for final
                  certification and IELTS/PTE guidance for up to 1 month after
                  course completion.
                </li>
                <li>
                  <strong>Query Resolution:</strong> Doubt-clearing sessions for
                  former students, subject to faculty availability.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability:</strong> Specific outcomes are not
              guaranteed due to external factors.
            </li>
          </ul>
        </div>

        {/* 3. Excellence Web Services */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            3. Excellence Web Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Services:</strong> Deliverables and timelines are defined
              in a separate project agreement or Statement of Work (SOW).
            </li>
            <li>
              <strong>Payment Model:</strong> A “Pay After Service” model is
              applicable for specific services. An initial project starting
              fee is mandatory, with final payment due upon milestone delivery.
            </li>
            <li>
              <strong>Refund Policy:</strong> Advances are non-refundable.
              Refunds apply only if service commitments are not met.
            </li>
            <li>
              <strong>Intellectual Property:</strong> Ownership of final digital
              assets transfers to the client upon full payment. Underlying
              tools, technology, and methodologies remain the property of
              Excellence Web Services.
            </li>
            <li>
              <strong>Platform Policy:</strong> Clients are responsible for
              adhering to third-party platform policies (Google Ads, Meta,
              etc.). The institute is not liable for restrictions caused by
              client content or external policy changes.
            </li>
            <li>
              <strong>After-Sales Support:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Post-Launch Support:</strong> 30 days of complimentary
                  support for bugs or technical issues.
                </li>
                <li>
                  <strong>Maintenance:</strong> Free 1-year maintenance from
                  delivery date covering downtime or unexpected errors.
                  Additional support requires AMC or hourly billing.
                </li>
                <li>
                  <strong>Training:</strong> One-time backend or dashboard
                  walkthrough for the client’s team.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability:</strong> No guarantee of fixed
              search engine rankings due to third-party algorithm changes.
            </li>
          </ul>
        </div>

        {/* General Terms */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            General Terms (Applicable to All Verticals)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Agreement:</strong> Use of the website or services implies
              acceptance of these terms.
            </li>
            <li>
              <strong>Website Content:</strong> All text, graphics, and logos
              are the property of Excellence Group of Institutes.
            </li>
            <li>
              <strong>Termination:</strong> The institute may terminate services
              for misconduct, breach of terms, or non-payment.
            </li>
            <li>
              <strong>Governing Law:</strong> These terms are governed by Indian
              law, with exclusive jurisdiction in Ludhiana, Punjab.
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Contact Information
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
