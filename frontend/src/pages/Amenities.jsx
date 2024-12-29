import React from "react";
import { motion } from "framer-motion";

const Amenities = () => {
  const amenities = [
    { name: "Wifi", icon: "https://img.icons8.com/color/96/wifi.png" },
    { name: "Parking", icon: "https://img.icons8.com/color/96/parking.png" },
    { name: "Deposit", icon: "https://img.icons8.com/color/96/cash-in-hand.png" },
    { name: "Power Backup", icon: "https://img.icons8.com/?size=100&id=m4BWOfxNGLN0&format=png&color=FD7E14" },
    { name: "Cupboard", icon: "https://img.icons8.com/color/96/wardrobe.png" },
    { name: "Housekeeping", icon: "https://img.icons8.com/?size=100&id=8088&format=png&color=FA5252" },
    { name: "TV", icon: "https://img.icons8.com/color/96/tv.png" },
    { name: "Kitchen", icon: "https://img.icons8.com/color/96/kitchen-room.png" },
    { name: "Security", icon: "https://img.icons8.com/color/96/security-guard.png" },
    { name: "Geyser", icon: "https://img.icons8.com/?size=100&id=63145&format=png&color=228BE6" },
    { name: "Bathroom", icon: "https://img.icons8.com/color/96/toilet.png" },
    { name: "No Restriction", icon: "https://img.icons8.com/color/96/no-entry.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#36454f] text-white py-10">
        <h1 className="text-4xl font-extrabold text-center">Amenities</h1>
        <p className="mt-4 text-center text-lg">
          Everything you need for a comfortable and hassle-free stay.
        </p>
      </header>

      {/* Amenities Grid */}
      <main className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img src={amenity.icon} alt={amenity.name} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold">{amenity.name}</h3>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Amenities;
