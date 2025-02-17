import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting); // Set inView to true when the element is in view
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    const element = document.getElementById("about");
    observer.observe(element); // Observe the element

    return () => {
      observer.disconnect(); // Cleanup observer when the component unmounts
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="flex items-center py-16 bg-gray-950 bg-opacity-80 w-screen min-h-screen text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Teranis25
        </motion.h2>
        <motion.p
          className="text-sm md:text-lg text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Teranis25 is a grand celebration of technology and innovation,
          bringing together brilliant minds from across the region.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { value: "20+", label: "Exciting Events" },
            { value: "500+", label: "Participants" },
            { value: "10+", label: "Workshops" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={statVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <h3 className="text-5xl md:text-6xl font-extrabold text-indigo-400">
                {stat.value}
              </h3>
              <p className="text-base md:text-xl text-gray-300 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
