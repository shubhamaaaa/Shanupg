import React, { useState } from "react";
import { motion } from "framer-motion"
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const BookingForm = () => {
   const {backendUrl}=useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    accommodationType: "",
    location: "",
    photo: null,
    adhaar: null,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object to send the form data, including files
    const formDataToSend = new FormData();
    
    // Append all form fields to FormData object
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    try {
      const response = await fetch(backendUrl+"/api/bookings/submit", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Booking submitted successfully!");
        console.log(result);
        setFormData(" ");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <motion.div 
    initial={{opacity:0,x:300}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold  border border-gray-600 px-6 py-5 text-white  bg-[#36454f] text-center mb-6 ">
          Paying Guest Room Booking Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Type of Accommodation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type of PG Accommodation <span className="text-red-500">*</span>
            </label>
            <select
              name="accommodationType"
              value={formData.accommodationType}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose Accommodation Type</option>
              <option value="Single Room">Single Room</option>
              <option value="Double Room">Double Room</option>
              <option value="Triple Room">Triple Room</option>
            </select>
          </div>

          {/* PG Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select PG Room Location <span className="text-red-500">*</span>
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose Location</option>
              <option value="Vaishali sec-5">Vaishali sec-5</option>
              <option value="Vaishali sec-4">Vaishali sec-4</option>
              <option value="Vaishali sec-1">Vaishali sec-1</option>
            </select>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Photo <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleInputChange}
              required
              className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Adhaar Card Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Adhaar Card <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="adhaar"
              onChange={handleInputChange}
              required
              className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              rows="3"
              placeholder="Write your message here (optional)"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingForm;
