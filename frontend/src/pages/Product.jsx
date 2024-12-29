import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 px-4">
      <div className="flex flex-col items-center">
        {/* Sliding Images */}
        <div className="w-full max-w-4xl">
          {productData.image && productData.image.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-auto"
            >
              {productData.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full sm:w-[1000px]  sm:h-[700px]  flex items-center justify-center mx-auto">
                    <img
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="sm:w-[1000px] sm:h-[700px] h-[500px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500 text-center">No images available</p>
          )}
        </div>

        {/* Product Information */}
        <div className="w-full max-w-6xl bg-white border border-gray-300 shadow-lg mt-8 rounded-lg p-4">
          {/* Product Title */}
          <div className="text-center mb-6">
            <p className="text-3xl text-gray-800 font-semibold">
              {productData.name}
            </p>
          </div>

          {/* Product Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bedrooms */}
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800">Bedrooms</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=561&format=png&color=FAB005"
                  alt=""
                />
                <p className="text-lg font-medium text-gray-500">
                  {productData.subCategory}
                </p>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800">Bathrooms</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=9141&format=png&color=FAB005"
                  alt=""
                />
                <p className="text-lg font-medium text-gray-500">Attached</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800">Location</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=3723&format=png&color=FAB005"
                  alt=""
                />
                <p className="text-lg font-medium text-gray-500">Vaishali</p>
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800">Category</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=6631&format=png&color=FAB005"
                  alt=""
                />
                <p className="text-lg font-medium text-gray-500">
                  {productData.category}
                </p>
              </div>
            </div>

            {/* Lot Size */}
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800">Lot Size</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=8183&format=png&color=FAB005"
                  alt=""
                />
                <p className="text-lg font-medium text-gray-500">
                  Boys & Girls sq ft
                </p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="text-center mt-8">
            <p className="text-xl font-semibold text-gray-800 mb-3">
              Description
            </p>
            <p className="text-base text-gray-500">
              {productData.ShortDescription}
            </p>
            <p className="text-base text-gray-500 mt-2">
              {productData.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a
              href="https://wa.me/919335162135"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              <img
                className="w-6 h-6 mr-2"
                src="https://img.icons8.com/?size=100&id=16733&format=png&color=FAB005"
                alt=""
              />
              WhatsApp
            </a>
            <a
              href="tel:+919958724997"
              className="w-full sm:w-auto flex items-center justify-center bg-yellow-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              <img
                className="w-6 h-6 mr-2"
                src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000"
                alt=""
              />
              Call Now
            </a>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
