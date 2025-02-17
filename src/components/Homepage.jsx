import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Events from "./Events";
import About from "./About";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="homepage text-white">
      {/* Hero Section */}
      <section className="hero-section w-full mt-12 min-h-screen flex flex-col justify-center items-center text-white py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight"
        >
          Welcome to <span className="text-indigo-400">Teranis25</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mt-6 text-center max-w-3xl leading-relaxed"
        >
          A grand celebration of innovation, technology, and creativity.
          Experience groundbreaking workshops, dynamic talks, and vibrant
          events.
        </motion.p>
      </section>

      {/* Events Section */}
      <Events />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-b h-screen from-gray-900 to-black text-white flex items-center justify-center"
      >
        <div className="max-w-7xl w-full mt-12 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Contact Us
          </h2>

          <div className="bg-gray-800  p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl text-center font-bold mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-center  mb-6 leading-relaxed">
              We'd love to hear from you. Feel free to reach out using the
              contact details below:
            </p>

            <div className="space-y-4 flex flex-col items-center">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/919876543211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 text-lg hover:text-green-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.01 2c5.502 0 9.99 4.486 9.99 9.99 0 5.515-4.46 10.01-9.99 10.01-1.719 0-3.383-.458-4.822-1.33l-3.254.877.887-3.193c-.851-1.421-1.36-3.047-1.36-4.734C2 6.486 6.486 2 12.01 2zm0-2C5.381 0 0 5.375 0 11.99c0 2.063.547 4.078 1.58 5.85L.02 24l6.465-1.742A11.954 11.954 0 0012.01 24c6.63 0 12-5.375 12-11.99C24 5.375 18.63 0 12.01 0zM8.393 6.526c-.17-.38-.356-.38-.583-.389h-.492c-.17 0-.442.063-.673.316-.231.253-.882.863-.882 2.104 0 1.241.903 2.44 1.029 2.606.126.165 1.75 2.788 4.31 3.9 2.56 1.112 2.99.747 3.531.7.541-.048 1.746-.711 1.99-1.4.244-.688.244-1.28.17-1.4-.073-.119-.27-.17-.562-.296-.292-.127-1.746-.865-2.02-.964-.275-.1-.476-.146-.677.146-.2.292-.777.964-.951 1.165-.174.201-.34.22-.633.073-.292-.147-1.233-.457-2.35-1.454-.868-.771-1.453-1.71-1.628-2.004-.174-.293-.018-.451.128-.598.131-.13.292-.34.44-.511.146-.172.195-.26.292-.437.097-.174.048-.316 0-.437-.048-.119-.424-1.06-.593-1.461z" />
                </svg>
                <span className="ml-3">
                  <strong>John</strong> +91 98765 43211
                </span>
              </a>
              <a
                href="https://wa.me/919876543211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 text-lg hover:text-green-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.01 2c5.502 0 9.99 4.486 9.99 9.99 0 5.515-4.46 10.01-9.99 10.01-1.719 0-3.383-.458-4.822-1.33l-3.254.877.887-3.193c-.851-1.421-1.36-3.047-1.36-4.734C2 6.486 6.486 2 12.01 2zm0-2C5.381 0 0 5.375 0 11.99c0 2.063.547 4.078 1.58 5.85L.02 24l6.465-1.742A11.954 11.954 0 0012.01 24c6.63 0 12-5.375 12-11.99C24 5.375 18.63 0 12.01 0zM8.393 6.526c-.17-.38-.356-.38-.583-.389h-.492c-.17 0-.442.063-.673.316-.231.253-.882.863-.882 2.104 0 1.241.903 2.44 1.029 2.606.126.165 1.75 2.788 4.31 3.9 2.56 1.112 2.99.747 3.531.7.541-.048 1.746-.711 1.99-1.4.244-.688.244-1.28.17-1.4-.073-.119-.27-.17-.562-.296-.292-.127-1.746-.865-2.02-.964-.275-.1-.476-.146-.677.146-.2.292-.777.964-.951 1.165-.174.201-.34.22-.633.073-.292-.147-1.233-.457-2.35-1.454-.868-.771-1.453-1.71-1.628-2.004-.174-.293-.018-.451.128-.598.131-.13.292-.34.44-.511.146-.172.195-.26.292-.437.097-.174.048-.316 0-.437-.048-.119-.424-1.06-.593-1.461z" />
                </svg>
                <span className="ml-3">
                  <strong>John</strong> +91 98765 43211
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">About Teranis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                eranis25 is a grand celebration of technology and innovation,
                bringing together brilliant minds from across the region. Join
                us for cutting-edge workshops, dynamic talks, and vibrant
                cultural events.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <ul>
                  {["Home", "Events", "About", "Contact"].map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Email:</strong> teranis@lbscek.ac.in
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-lg font-semibold text-center md:text-left">
                <p>© 2025 Teranis25. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 justify-center">
                {[
                  {
                    icon: FaInstagram,
                    color: "red-400",
                    link: "https://www.instagram.com/teranis.lbscek/",
                  },
                  {
                    icon: FaLinkedinIn,
                    color: "blue-400",
                    link: "https://www.linkedin.com/company/teranis-2025/about/",
                  },
                ].map((social, index) => (
                  <a key={index} href={social.link}>
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
