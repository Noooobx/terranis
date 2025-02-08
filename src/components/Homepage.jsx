import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import events from "../utils/constants";
const Homepage = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const displayedEvents = showAll ? events : events.slice(0, 3);
  return (
    <div className="homepage text-white">
      {/* Hero Section */}
      <section className="hero-section w-full mt-12 min-h-screen flex flex-col justify-center items-center text-white py-16 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
          Welcome to <span className="text-indigo-400">teranis25</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mt-6 text-center max-w-3xl leading-relaxed">
          A grand celebration of innovation, technology, and creativity.
          Experience groundbreaking workshops, dynamic talks, and vibrant
          events.
        </p>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="h-auto bg-black py-16 text-white md:min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl w-full mt-12 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Upcoming Events
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 md:p-8 p-4 rounded-3xl shadow-2xl flex flex-col items-center text-center"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="md:text-3xl text-xl font-bold text-indigo-400">
                  {event.title}
                </h3>
                <p className="text-gray-300 mt-4">Date: {event.date}</p>
                <p className="text-gray-300">Location: {event.location}</p>
                <p className="text-gray-300 mt-4">
                  <strong>Contact:</strong> {event.contact}
                </p>

                <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full sm:w-auto px-4 py-2 bg-white text-black rounded-lg text-sm sm:text-base hover:bg-gray-300 transition-colors"
                  >
                    More Details
                  </button>
                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-lg text-sm sm:text-base hover:bg-gray-700 transition-colors"
                  >
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {showAll ? (
              <button
                onClick={() => setShowAll(false)}
                className="px-10 py-4 bg-gray-900 text-white rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Show Less Events
              </button>
            ) : (
              <button
                onClick={() => setShowAll(true)}
                className="px-10 py-4 bg-gray-900 text-white rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Show More Events
              </button>
            )}
          </div>

          {/* Event Popup Modal */}
          {selectedEvent && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ${
                selectedEvent ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-gray-900 text-white w-11/12 max-w-2xl p-8 rounded-2xl relative">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl font-bold"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                  {selectedEvent.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  <strong>Date:</strong> {selectedEvent.date}
                </p>
                <p className="text-gray-400 mb-4">
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
                <p className="text-gray-400 mb-4">
                  <strong>Contact:</strong> {selectedEvent.contact}
                </p>
                <p className="text-gray-300">{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex items-center py-16 bg-gray-950 w-screen min-h-screen text-white"
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Terranis25
          </h2>
          <p className="text-sm md:text-lg text-gray-400 mb-10 leading-relaxed">
            Terranis25 is a grand celebration of technology and innovation,
            bringing together brilliant minds from across the region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { value: "20+", label: "Exciting Events" },
              { value: "500+", label: "Participants" },
              { value: "10+", label: "Workshops" },
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="text-5xl md:text-6xl font-extrabold text-indigo-400">
                  {stat.value}
                </h3>
                <p className="text-base md:text-xl text-gray-300 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-b from-gray-900 to-black text-white flex justify-center"
      >
        <div className="max-w-7xl w-full mt-12 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Contact Us
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We'd love to hear from you. Feel free to reach out directly using
              the contact details below:
            </p>

            <div className="space-y-4">
              <p className="flex items-center text-gray-300 text-lg">
                📍{" "}
                <span className="ml-3">123 College Road, Tech City, India</span>
              </p>
              <p className="flex items-center text-gray-300 text-lg">
                ☎️ <span className="ml-3">+91 98765 43210</span>
              </p>
              <p className="flex items-center text-gray-300 text-lg">
                ✉️ <span className="ml-3">info@collegeevents.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">About Terranis25</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Terranis25 is a grand celebration of technology and innovation,
                bringing together brilliant minds from across the region. Join
                us for cutting-edge workshops, dynamic talks, and vibrant
                cultural events.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Events", "Workshops", "About Us", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Email:</strong> contact@terranis25.com
              </p>
              <p className="text-sm text-gray-400">
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-lg font-semibold text-center md:text-left">
                <p>© 2025 Terranis25. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 justify-center">
                {[
                  { icon: FaFacebookF, color: "indigo-400" },
                  { icon: FaTwitter, color: "sky-400" },
                  { icon: FaInstagram, color: "red-400" },
                  { icon: FaLinkedinIn, color: "blue-400" },
                ].map((social, index) => (
                  <a key={index} href="#">
                    <social.icon className="text-2xl cursor-pointer hover:text-indigo-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
