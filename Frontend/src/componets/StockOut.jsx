import React, { useState } from 'react';
import axios from 'axios';
import { Package } from 'lucide-react';

export default function StockOut() {
  const [formData, setFormData] = useState({
    Name: "",
    StockInQuantity: "",
    StockOutQuantity: "",
    StockOutUnitPrice: "",
    StockOutTotalPrice: "",
    StockOutDate: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/stockout", formData);
      alert("Stock out entry added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add stock out entry. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-lg">
            <Package size={32} className="text-white" />
          </div>
        </div>
        <h1 className="text-center text-2xl font-bold text-slate-900 mb-4">Add Stock Out Entry</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Product Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Stock In Quantity</label>
              <input
                type="number"
                name="StockInQuantity"
                value={formData.StockInQuantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Stock In Quantity"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Stock Out Quantity</label>
              <input
                type="number"
                name="StockOutQuantity"
                value={formData.StockOutQuantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Stock Out Quantity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Unit Price</label>
              <input
                type="number"
                name="StockOutUnitPrice"
                value={formData.StockOutUnitPrice}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Unit Price"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Price</label>
              <input
                type="number"
                name="StockOutTotalPrice"
                value={formData.StockOutTotalPrice}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Total Price"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Stock Out Date</label>
              <input
                type="date"
                name="StockOutDate"
                value={formData.StockOutDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Add Stock Out
          </button>
        </form>
      </div>
    </div>
  );
}
