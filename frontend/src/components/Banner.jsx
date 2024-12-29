import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { assets } from "../assets/assets";
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <motion.div
    initial={{opacity:0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     className="relative w-full mt-5 px-4">
      {/* Banner Wrapper */}
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative w-full">
          <img
            className="object-cover w-full md:h-[220px] h-[200px] rounded-lg"
            src={assets.banner1}
            alt="Experience Comfort at Shanu PG"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/1920x500?text=Banner+Image+Unavailable";
            }}
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-4 sm:px-6">
          <p className="text-white font-bold sm:text-3xl text-2xl leading-tight">
            Experience the Comfort and Quality at{" "}
            <span className="text-yellow-300">Shanu PG</span>
          </p>
          <p className="text-white mt-2 sm:mt-3 text-sm sm:text-lg leading-relaxed">
            Your home away from home with modern amenities and a safe environment.
          </p>
          {/* Call-to-Action Button */}
          <Link
            to="/about" // Set the path to the "About Us" page
            className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
