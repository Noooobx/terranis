import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import eventsData from "../utils/constants";

const EventCard = ({ event, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 p-6 rounded-3xl shadow-xl text-center flex flex-col items-center"
  >
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <h4 className="text-2xl font-bold text-indigo-400">{event.title}</h4>
    <p className="text-gray-300 mt-3">Date: {event.date}</p>
    <p className="text-gray-300 mt-3">Venue: {event.location}</p>
    <p className="text-gray-300 mt-3">
      <strong>Contact:</strong> {event.contact}
    </p>
    <button
      onClick={() => onSelect(event)}
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
  </motion.div>
);

const Events = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle expansion state
    }));
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="h-auto bg-gray-900 py-16 bg-opacity-80 text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl w-full mt-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Upcoming Events
        </motion.h2>

        {Object.entries(eventsData).map(([category, events], index) => {
          const isExpanded = expandedCategories[category] || false;
          const visibleEvents = useMemo(() => (isExpanded ? events : events.slice(0, 3)), [
            isExpanded,
            events,
          ]);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="my-32"
            >
              <h3 className="text-2xl flex items-center justify-center md:text-3xl font-semibold text-indigo-400 mb-6">
                {category}
              </h3>

              <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                {visibleEvents.map((event, i) => (
                  <EventCard key={i} event={event} onSelect={setSelectedEvent} />
                ))}
              </div>

              {events.length > 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="flex justify-center mt-6"
                >
                  <button
                    onClick={() => toggleExpand(category)}
                    className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gradient-to-t from-gray-800 via-gray-900 to-black text-white w-11/12 max-w-2xl p-8 rounded-lg shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold transition duration-300 ease-in-out"
              >
                &times;
              </button>

              <div className="flex justify-center mb-4">
                <motion.img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg border-2 border-indigo-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>

              <h3 className="text-4xl font-light text-indigo-400 mb-4">
                {selectedEvent.title}
              </h3>

              <p className="text-gray-200 leading-relaxed text-lg font-light">
                {selectedEvent.description}
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href={selectedEvent.formLink}
                  className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-center text-2xl md:text-3xl font-semibold text-white"
      >
        More Events are Loading<span className="animate-bounce">...</span>
      </motion.h3>
    </section>
  );
};

export default Events;
