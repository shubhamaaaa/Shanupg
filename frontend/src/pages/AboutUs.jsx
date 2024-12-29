import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Don't forget to import motion

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <motion.h1
            className="text-4xl font-bold border border-gray-600 px-6 py-5 text-white bg-[#36454f] text-center mb-6"
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Welcome to Shanu Paying Guest
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 text-center mb-8"
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            A comfortable and secure home for students, professionals, girls,
            and boys.
          </motion.p>

          {/* Section: About */}
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-8 mb-10"
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={assets.img5}
                alt="Shanu Paying Guest"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 leading-relaxed">
                At Shanu Paying Guest, we provide a home away from home. Our
                mission is to create a safe, comfortable, and welcoming
                environment for all our residents, whether they are students or
                working professionals. We offer modern amenities, a clean
                environment, and excellent services to ensure your stay with us
                is as pleasant as possible.
              </p>
            </div>
          </motion.div>

          {/* Section: Services */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Cards */}
              <motion.div
                className="bg-yellow-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://img.icons8.com/color/96/bedroom.png"
                  alt="Comfortable Rooms"
                  className="w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Comfortable Rooms</h3>
                <p className="text-gray-600">
                  Spacious, well-furnished rooms designed to provide the
                  comfort you deserve.
                </p>
              </motion.div>

              <motion.div
                className="bg-yellow-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://img.icons8.com/color/96/meal.png"
                  alt="Homely Food"
                  className="w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Homely Food</h3>
                <p className="text-gray-600">
                  Enjoy fresh and hygienic meals prepared to suit your taste.
                </p>
              </motion.div>

              <motion.div
                className="bg-yellow-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://img.icons8.com/color/96/shield.png"
                  alt="Secure Environment"
                  className="w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Secure Environment</h3>
                <p className="text-gray-600">
                  Safety is our priority with 24/7 surveillance and gated
                  premises.
                </p>
              </motion.div>

              <motion.div
                className="bg-yellow-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://img.icons8.com/color/96/wifi.png"
                  alt="Wi-Fi Enabled"
                  className="w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Wi-Fi Connectivity</h3>
                <p className="text-gray-600">
                  Stay connected with high-speed internet for work and study.
                </p>
              </motion.div>

              <motion.div
                className="bg-yellow-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=7188&format=png&color=FAB005"
                  alt="Clean Premises"
                  className="w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Clean Premises</h3>
                <p className="text-gray-600">
                  Daily housekeeping ensures a tidy and hygienic environment.
                </p>
              </motion.div>

              <motion.div
                className="bg-yellow-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=9Deeqjb8MjFH&format=png&color=FD7E14"
                  alt="Prime Location"
                  className="w-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Prime Location</h3>
                <p className="text-gray-600">
                  Conveniently located with easy access to schools, offices, and
                  public transport.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Section: Contact */}
          <motion.div
            className="bg-yellow-500 text-white py-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
            <p className="text-lg mb-6">
              Experience a perfect blend of comfort, safety, and convenience.
            </p>
            <a
              href="https://wa.me/919335162135"
              className="bg-white text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition duration-300"
            >
              Contact Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
