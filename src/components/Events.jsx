import React from "react";

const Events = () => {
  return (
    <div className="h-full  min-h-screen flex justify-center bg-black" id="events">
      <div className="flex flex-col items-center justify-center pb-10 w-full md:w-8/12 px-4">
        {/* Events Section */}
        <section className="events-section py-12 md:py-16 px-4 md:px-10 rounded-t-[50px] relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            Upcoming Events
          </h2>

          <div className="events-container grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="event-card bg-gradient-to-b from-black to-gray-900 p-6 md:p-8 rounded-xl shadow-2xl transform hover:-translate-y-3 hover:shadow-black transition-all hover:bg-gradient-to-t hover:from-black hover:to-gray-800">
              <h3 className="text-xl md:text-2xl font-bold text-gray-500">
                Technical Fest 2025
              </h3>
              <p className="text-gray-500 mt-2 md:mt-4">Date: February 20, 2025</p>
              <p className="text-gray-500 mt-1">Location: Auditorium Hall</p>
              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Join the brightest minds for an exciting day of workshops, hackathons, 
                and tech talks. A perfect place to innovate and connect!
              </p>
            </div>

            <div className="event-card bg-gradient-to-b from-black to-gray-900 p-6 md:p-8 rounded-xl shadow-2xl transform hover:-translate-y-3 hover:shadow-black transition-all hover:bg-gradient-to-t hover:from-black hover:to-gray-800">
              <h3 className="text-xl md:text-2xl font-bold text-gray-500">
                Annual Cultural Day
              </h3>
              <p className="text-gray-500 mt-2 md:mt-4">Date: March 15, 2025</p>
              <p className="text-gray-500 mt-1">Location: Open Air Theatre</p>
              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Experience a vibrant celebration filled with mesmerizing performances, 
                music, dance, and cultural showcases.
              </p>
            </div>

            <div className="event-card bg-gradient-to-b from-black to-gray-900 p-6 md:p-8 rounded-xl shadow-2xl transform hover:-translate-y-3 hover:shadow-black transition-all hover:bg-gradient-to-t hover:from-black hover:to-gray-800">
              <h3 className="text-xl md:text-2xl font-bold text-gray-500">
                Sports Day
              </h3>
              <p className="text-gray-500 mt-2 md:mt-4">Date: April 10, 2025</p>
              <p className="text-gray-500 mt-1">Location: Sports Ground</p>
              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Get ready to cheer and compete in a day filled with high-energy 
                sports competitions and team spirit!
              </p>
            </div>
          </div>
        </section>

        <button className="mt-8 w-auto flex items-center justify-center px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-105 transition-transform text-white rounded-xl font-medium shadow-md hover:shadow-lg">
          Explore more Events
        </button>
      </div>
    </div>
  );
};

export default Events;
