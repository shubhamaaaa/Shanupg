import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  id,
  name,
  image,
  description,
  category,
  subCategory,
  price,
}) => {
  return (
    <div className="border border-gray-200 shadow-lg rounded-lg p-5 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Link Wrapper */}
      <Link to={`/product/${id}`} className="cursor-pointer">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-[350px] object-cover hover:scale-110 transition-transform duration-500"
          />
          {/* Badge */}
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
            Featured
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-5 space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Category */}
          <div className="flex flex-col items-center">
            <img
              className="w-8 mb-2"
              src="https://img.icons8.com/?size=100&id=4573&format=png&color=000000"
              alt="Category Icon"
            />
            <p className="text-sm font-medium text-gray-700">Category</p>
            <span className="text-gray-800 font-semibold">{category}</span>
          </div>

          {/* Bed Sharing */}
          <div className="flex flex-col items-center">
            <img
              className="w-8 mb-2"
              src="https://img.icons8.com/?size=100&id=561&format=png&color=000000"
              alt="Bed Sharing Icon"
            />
            <p className="text-sm font-medium text-gray-700">Bed Sharing</p>
            <span className="text-gray-800 font-semibold">{subCategory}</span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <img
              className="w-8 mb-2"
              src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000"
              alt="Location Icon"
            />
            <p className="text-sm font-medium text-gray-700">Location</p>
            <span className="text-gray-800 font-semibold">Vaishali</span>
          </div>
        </div>

        {/* Pricing and Actions */}
        <div className="flex justify-between items-center mt-6">
          {/* Pricing */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">For Rent</span>
            <span className="text-2xl font-bold text-green-600">₹{price}</span>
          </div>

          {/* More Images Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300">
            More Images
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
