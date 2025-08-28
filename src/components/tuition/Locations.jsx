import React from "react";
import { MapPin } from "lucide-react";

const Locations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
          Our Tuition Locations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Location 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <a
              href="https://maps.app.goo.gl/qw15nJCX47ysHUhe9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white block"
            >
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Basant City, Ludhiana</h3>
              <p className="text-gray-600 mb-4">
                Jk center, 1, Sua Rd, Rajguru Nagar Extension, Rajguru Nagar Extension
                Part-1, Rajguru Nagar, Ludhiana, Punjab 141012
              </p>
            </a>

            {/* Gallery for Location 1 */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <img
                src="/images/demo.jpg"
                alt="Basant City Branch 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="/images/demo.jpg"
                alt="Basant City Branch 2"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="/images/demo.jpg"
                alt="Basant City Branch 3"
                className="w-full h-32 object-cover rounded-lg col-span-2"
              />
            </div>
          </div>

          {/* Location 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <a
              href="https://maps.app.goo.gl/c6hhsEn5yCEzJkuX7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white block"
            >
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rajguru Nagar, Ludhiana</h3>
              <p className="text-gray-600 mb-4">
                SCO 44C, market, near Sindhi bakery, Rajguru Nagar, Ludhiana,
                Punjab 141012
              </p>
            </a>

            {/* Gallery for Location 2 */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <img
                src="/images/demo.jpg"
                alt="Rajguru Nagar Branch 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="/images/demo.jpg"
                alt="Rajguru Nagar Branch 2"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="/images/demo.jpg"
                alt="Rajguru Nagar Branch 3"
                className="w-full h-32 object-cover rounded-lg col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
