import React, { useState } from "react";
import { motion } from "framer-motion";  // Import motion from framer-motion

const FoodMenu = () => {
  const weeklyMenu = {
    Monday: {
      breakfast: [
        { name: "Idli Sambhar", description: "Steamed rice cakes with lentil curry" },
        { name: "Poha", description: "Flattened rice cooked with spices and vegetables" },
      ],
      lunch: [
        { name: "Rajma Chawal", description: "Red kidney beans curry with steamed rice" },
        { name: "Aloo Gobhi", description: "Potato and cauliflower curry with roti" },
      ],
      dinner: [
        { name: "Shahi Paneer", description: "Paneer in rich tomato-based gravy" },
        { name: "Dal Tadka", description: "Yellow lentils tempered with spices and served with rice" },
      ],
    },
    Tuesday: {
      breakfast: [
        { name: "Paratha", description: "Stuffed flatbread with curd or pickle" },
        { name: "Upma", description: "Semolina dish cooked with vegetables and spices" },
      ],
      lunch: [
        { name: "Chole Bhature", description: "Spicy chickpea curry served with fried bread" },
        { name: "Vegetable Pulao", description: "Rice cooked with mixed vegetables and spices" },
      ],
      dinner: [
        { name: "Chhola", description: "Chhola in creamy tomato-based gravy" },
        { name: "Jeera Rice", description: "Rice flavored with cumin seeds" },
      ],
    },
    Wednesday: {
      breakfast: [
        { name: "Dosa", description: "Crispy rice crepes served with chutney and sambhar" },
        { name: "Porridge", description: "Oats cooked in milk and topped with nuts" },
      ],
      lunch: [
        { name: "Paneer Tikka", description: "Grilled paneer cubes with spices" },
        { name: "Lemon Rice", description: "Rice flavored with lemon and spices" },
      ],
      dinner: [
        { name: "Matar Paneer", description: "Peas and paneer curry" },
        { name: "Chapati", description: "Whole wheat flatbread" },
      ],
    },
    Thursday: {
      breakfast: [
        { name: "Aloo Puri", description: "Spicy potato curry served with fried bread" },
        { name: "Smoothie Bowl", description: "Blended fruits topped with nuts and seeds" },
      ],
      lunch: [
        { name: "Sambar Rice", description: "Rice cooked with lentil-based vegetable stew" },
        { name: "Cabbage Sabzi", description: "Cabbage stir-fried with spices" },
      ],
      dinner: [
        { name: "Palak Paneer", description: "Spinach and paneer curry" },
        { name: "Basmati Rice", description: "Fragrant long-grain rice" },
      ],
    },
    Friday: {
      breakfast: [
        { name: "Bread", description: " cooked with bread and butter" },
        { name: "Cornflakes", description: "Cereal with milk and fruits" },
      ],
      lunch: [
        { name: "Veg Biryani", description: "Fragrant rice cooked with vegetables and spices" },
        { name: "Curd Rice", description: "Rice mixed with curd and tempered with spices" },
      ],
      dinner: [
        { name: " Curry", description: "cooked in spicy curry" },
        { name: "Roti", description: "Whole wheat flatbread" },
      ],
    },
    Saturday: {
      breakfast: [
        { name: "Chana Chaat", description: "Spicy chickpea salad with veggies" },
        { name: "Fruit Salad", description: "Mixed fresh fruits" },
      ],
      lunch: [
        { name: "Rajma", description: "Rajma served with rice" },
        { name: "Veg Kofta", description: "Vegetable dumplings in curry" },
      ],
      dinner: [
        { name: "Kadhi Pakora", description: "Gram flour dumplings in yogurt-based curry" },
        { name: "Steamed Rice", description: "Plain white rice" },
      ],
    },
    Sunday: {
      breakfast: [
        { name: "Pancakes", description: "Fluffy pancakes served with syrup" },
        { name: "Masala Chai", description: "Spiced tea with milk" },
      ],
      lunch: [
        { name: "Malai Kofta", description: "Creamy curry with fried paneer dumplings" },
        { name: "Naan", description: "Soft Indian bread" },
      ],
      dinner: [
        { name: "Veg Manchurian", description: "Fried vegetable balls in Indo-Chinese sauce" },
        { name: "Fried Rice", description: "Rice stir-fried with vegetables and soy sauce" },
      ],
    },
  };

  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-center border border-gray-600 px-6 py-5 text-white  bg-[#36454f] mb-8">
        Weekly Food Menu
      </h1>

      {/* Day Selector */}
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-7 justify-center mb-6">
        {Object.keys(weeklyMenu).map((day) => (
          <motion.button
            key={day}
            className={`px-4 py-2 mx-2 font-medium rounded ${
              selectedDay === day ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedDay(day)}
            whileHover={{ scale: 1.1 }} // Hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            {day}
          </motion.button>
        ))}
      </div>

      {/* Food Menu for Selected Day */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Object.entries(weeklyMenu[selectedDay]).map(([meal, dishes]) => (
          <motion.div
            key={meal}
            className="bg-white p-4 rounded shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4 capitalize">{meal}</h2>
            {dishes.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FoodMenu;
