import React, { useState } from 'react';
import {Link} from 'react-router-dom';    
import { Package, TrendingUp, TrendingDown, AlertCircle, Search, Filter, Plus, Download, Bell } from 'lucide-react';

export default function StockDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Props structure for your data - replace with your database data
  const stats = {
    totalProducts: 1,
    lowStock: 0,
    outOfStock: 0,
    totalValue: 0
  };

  const products = [];
  const categories = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Package size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Stock Manager
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white
              rounded-lg transition-colors">
                <Download size={20} className="text-slate-700" />
                <span className="text-slate-700 font-medium"><Link to='/login'>Logout</Link></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package size={24} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-1">Total Products</p>
            <p className="text-3xl font-bold text-slate-900">{stats.totalProducts}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <AlertCircle size={24} className="text-amber-600" />
              </div>
              <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">Warning</span>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-1">Low Stock</p>
            <p className="text-3xl font-bold text-slate-900">{stats.lowStock}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <TrendingDown size={24} className="text-red-600" />
              </div>
              <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">Critical</span>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-1">Out of Stock</p>
            <p className="text-3xl font-bold text-slate-900">{stats.outOfStock}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-sm p-6 text-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <TrendingUp size={24} className="text-white" />
              </div>
            </div>
            <p className="text-blue-100 text-sm font-medium mb-1">Total Inventory Value</p>
            <p className="text-3xl font-bold">${stats.totalValue.toLocaleString()}</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products by name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
              <button className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <Filter size={20} className="text-slate-600" />
                <span className="text-slate-700 font-medium">Filter</span>
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium">
                <Plus size={20} />
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Product Inventory</h2>
            <p className="text-sm text-slate-600 mt-1">Manage your stock levels and product details</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Product</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">SKU</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Stock</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Price</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="bg-slate-100 p-4 rounded-full">
                          <Package size={32} className="text-slate-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-slate-600 font-medium">No products yet</p>
                          <p className="text-sm text-slate-500 mt-1">Connect your database to display products</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  products.map((product, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                            <Package size={20} className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{product.name}</p>
                            <p className="text-sm text-slate-500">{product.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-mono">{product.sku}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-900">{product.stock}</span>
                        <span className="text-sm text-slate-500"> units</span>
                      </td>
                      <td className="px-6 py-4 text-slate-900 font-medium">${product.price}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          product.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                          product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}