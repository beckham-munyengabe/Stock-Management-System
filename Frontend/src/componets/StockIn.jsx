import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

export default function StockIn() {

    //Define form data

    const [formData, setFormdata] = useState({ 
        StockInName: "", 
        StockInQuantity: "", 
        StockInDate: "" 
    });

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:3000/stockin", formData);
        alert("Product added successfully");
    } catch(error){
    console.error(error);
    alert("Product failed to add. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-lg">
            <Package size={32} className="text-white" />
          </div>
        </div>
        <h1 className="text-center text-2xl font-bold text-slate-900 mb-4">Add Product In Stock</h1>
       

        <form onSubmit={handleSubmit} className="space-y-4">

  {/* Product Name (full width) */}
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
      Product Name
    </label>
    <input
      type="text"
      name="StockInName"
      value={formData.StockInName}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-slate-200 rounded-lg
      focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
      placeholder="Product Name"
    />
  </div>

  {/* Two inputs side by side */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Product Quantity
      </label>
      <input
        type="text"
        name="StockInQuantity"
        value={formData.StockInQuantity}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-200 rounded-lg
        focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        placeholder="Product Quantity"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Date
      </label>
      <input
        type="date"
        name="StockInDate"
        value={formData.StockInDate}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-200 rounded-lg
        focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
      />
    </div>

  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600
    text-white py-3 rounded-lg font-medium hover:shadow-lg
    transition-all duration-200 hover:scale-105"
  >
    Add Product
  </button>

</form>

      </div>
    </div>
  );
}
