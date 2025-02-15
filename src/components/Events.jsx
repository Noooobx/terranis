import React, { useState } from "react";
import eventsData from "../utils/constants";

const Events = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle expansion state
    }));
  };

  return (
    <section
      id="events"
      className="h-auto bg-gray-900 py-16 bg-opacity-80 text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl w-full mt-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Upcoming Events
        </h2>
        {Object.entries(eventsData).map(([category, events], index) => {
          const isExpanded = expandedCategories[category] || false;
          const visibleEvents = isExpanded ? events : events.slice(0, 3);

          return (
            <div key={index} className="my-32">
              <h3 className="text-2xl flex items-center justify-center md:text-3xl font-semibold text-indigo-400 mb-6">
                {category}
              </h3>
              <div className="grid  gap-20 md:grid-cols-2 lg:grid-cols-3">
                {visibleEvents.map((event, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 p-6 rounded-3xl shadow-xl text-center flex flex-col items-center"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h4 className="text-2xl font-bold text-indigo-400">
                      {event.title}
                    </h4>
                    <p className="text-gray-300 mt-3">Date: {event.date}</p>
                    <p className="text-gray-300 mt-3">
                      Venue: {event.location}
                    </p>
                    <p className="text-gray-300 mt-3">
                      <strong>Contact:</strong> {event.contact}
                    </p>
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="mt-4 w-9/12 px-4 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      More Details
                    </button>
                    <a
                      href={event.formLink}
                      className="mt-4 px-4 w-9/12 py-1 bg-white text-black rounded-lg hover:bg-gray-200 transition block"
                    >
                      Register
                    </a>
                  </div>
                ))}
              </div>
              {events.length > 3 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => toggleExpand(category)}
                    className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white w-11/12 max-w-2xl p-8 rounded-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
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
      <h3 className="text-center text-2xl md:text-3xl font-semibold text-white animate-pulse">
        More Events are Loading<span className="animate-bounce">...</span>
      </h3>
    </section>
  );
};

export default Events;
