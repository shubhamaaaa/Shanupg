import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);

  const fetchlist = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post('http://localhost:3000/api/product/remove', { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">All Product List</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full table-auto border-collapse bg-white">
          <thead className="bg-[#36454f] text-white border-b">
            <tr>
              <th className="py-3 px-4 text-left font-semibold ">Image</th>
              <th className="py-3 px-4 text-left font-semibold ">Name</th>
              <th className="py-3 px-4 text-left font-semibold ">Category</th>
              <th className="py-3 px-4 text-left font-semibold ">Sub-Category</th>
              <th className="py-3 px-4 text-left font-semibold ">Price</th>
              <th className="py-3 px-4 text-center font-semibold ">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b">
                  <td className="py-2 px-4">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 text-gray-700">{item.name}</td>
                  <td className="py-2 px-4 text-gray-700">{item.category}</td>
                  <td className="py-2 px-4 text-gray-700">{item.subCategory}</td>
                  <td className="py-2 px-4 text-gray-700">₹{item.price}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => removeProduct(item._id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-sm text-sm font-medium"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
