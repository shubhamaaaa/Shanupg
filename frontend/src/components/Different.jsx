import React from "react";
import { motion } from "framer-motion"
const Different = () => {
  return (
    <motion.div 
    initial={{opacity:0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className="mb-12">
      {/* Header Section */}
      <div className="w-full h-[250px] bg-[#2b3e50] flex items-center justify-center">
        <p className="sm:text-6xl text-3xl font-extrabold text-yellow-400 tracking-wide text-center">
          What Makes Shanu PG Different?
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-12 mt-10 sm:mx-16 mx-4">
        {/* Card Items */}
        {[
          {
            title: "Location",
            description:
              "Shanu PG Vaishali is a student dormitory located in Ghaziabad, Uttar Pradesh. It is conveniently located near the Vaishali Metro Station and Sahibabad Railway Station for easy accessibility.",
            image:
              "https://vardhmanstayz.gumlet.io/wp-content/uploads/2024/08/location-icon-150x150.jpeg?compress=true&quality=80&w=160&dpr=1.3",
          },
          {
            title: "Amenities",
            description:
              "The PG offers a range of amenities including high-speed Wi-Fi, hot and cold water supply, and laundry services, ensuring a comfortable stay for all residents.",
            image:
              "https://vardhmanstayz.gumlet.io/wp-content/uploads/2024/08/amenties-icon-150x150.jpeg?compress=true&quality=80&w=160&dpr=1.3",
          },
          {
            title: "Safety and Security",
            description:
              "The safety of residents is prioritized with CCTV cameras, fire safety measures, and a secure entry and exit system in place.",
            image:
              "https://vardhmanstayz.gumlet.io/wp-content/uploads/2024/08/secuirty-guard-icon-150x150.jpeg?compress=true&quality=80&w=160&dpr=1.3",
          },
          {
            title: "Accommodation",
            description:
              "Shanu PG offers single, double, and triple occupancy rooms. All rooms are fully furnished with modern amenities, including air conditioning, for a relaxing stay.",
            image:
              "https://vardhmanstayz.gumlet.io/wp-content/uploads/2024/08/accommodation-pg-icon-150x150.jpeg?compress=true&quality=80&w=160&dpr=1.3",
          },
          {
            title: "Services",
            description:
              "Residents benefit from services like cleaning, maintenance, and food catering to enhance their living experience.",
            image:
              "https://vardhmanstayz.gumlet.io/wp-content/uploads/2024/08/services-icon-150x150.jpeg?compress=true&quality=80&w=160&dpr=4",
          },
          {
            title: "Nearby Attractions",
            description:
              "Located just a minute’s walk from Vaishali Sec-5 Market, residents can enjoy shopping and dining options nearby. The Vaishali Metro Station is also within close proximity.",
            image:
              "https://vardhmanstayz.gumlet.io/wp-content/uploads/2024/08/wifi-icon-150x150.png?compress=true&quality=80&w=160&dpr=4",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } flex-col gap-6 items-center justify-center sm:max-w-[85%] mx-auto`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-32 sm:w-40 h-auto rounded-full shadow-md"
            />
            {/* Content */}
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h3 className="text-4xl font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="text-lg text-gray-800">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Different;
