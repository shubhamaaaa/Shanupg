import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion';

const Gallerys = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let filtered = [...products];
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }
    setFilterProducts(filtered);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        break;
    }
    setFilterProducts(sorted);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t">
      {/* Filter Sidebar */}
      <motion.div
        className="min-w-[200px] m-7 mt-14"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-2xl text-yellow-700 hover:text-yellow-900 cursor-pointer font-semibold flex items-center gap-2"
        >
          Filters
          <img
            className={`h-5 sm:hidden transform transition-transform ${
              showFilter ? 'rotate-360' : ''
            }`}
            src="https://img.icons8.com/?size=100&id=39786&format=png&color=FAB005"
            alt="Toggle"
          />
        </p>
        <motion.div
          className={`border bg-[#36454f] p-4 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <p className="font-medium text-yellow-500 hover:text-yellow-700 mb-2">Categories</p>
            <div className="flex flex-col gap-2">
              <label className="text-yellow-500">
                <input
                  type="checkbox"
                  className="mr-2"
                  value="Boys"
                  onChange={toggleCategory}
                />
                Boys
              </label>
              <label className="text-yellow-500">
                <input
                  type="checkbox"
                  className="mr-2"
                  value="Girls"
                  onChange={toggleCategory}
                />
                Girls
              </label>
            </div>
          </div>
          <div>
            <p className="font-medium text-yellow-500 hover:text-yellow-700 mb-2">Type</p>
            <div className="flex flex-col gap-2">
              <label className="text-yellow-500">
                <input
                  type="checkbox"
                  className="mr-2"
                  value="Single"
                  onChange={toggleSubCategory}
                />
                Single
              </label>
              <label className="text-yellow-500">
                <input
                  type="checkbox"
                  className="mr-2"
                  value="Double"
                  onChange={toggleSubCategory}
                />
                Double
              </label>
              <label className="text-yellow-500">
                <input
                  type="checkbox"
                  className="mr-2"
                  value="Triple"
                  onChange={toggleSubCategory}
                />
                Triple
              </label>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Gallery Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex sm:justify-between justify-center sm:gap-0 gap-5 sm:flex-row flex-col w-full sm:px-6 px-2 py-6 bg-[#36454f] items-center mb-6">
          <div className="text-center sm:text-start space-y-3 sm:space-y-0">
            <h2 className="text-5xl font-bold text-yellow-500 hover:text-yellow-700">Gallery</h2>
            <p className="text-white text-lg pt-1">
              PG For Girls & Boys in Vaishali Sec-5 Ghaziabad
            </p>
          </div>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded-md"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filterProducts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                description={item.description}
                category={item.category}
                subCategory={item.subCategory}
                price={item.price}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallerys;
