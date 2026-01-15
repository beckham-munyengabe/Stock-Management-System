import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Ensure lucide-react is installed: npm install lucide-react
import { Package, TrendingUp, TrendingDown, AlertCircle, Search, Filter, Plus, Download, Bell, MoreVertical, Edit, Trash2 } from 'lucide-react';
import Photo from '../images/lolo.png';
import Footer from '../componets/footer';

export default function StockDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // 1. ADDED SAMPLE DATA (So the screen isn't empty)
  const products = [
    { id: 1, name: 'MacBook Pro 14"', sku: 'LAP-001', category: 'Electronics', stock: 5, price: 1999, status: 'Low Stock' },
    { id: 2, name: 'Logitech MX Master', sku: 'MOU-042', category: 'Accessories', stock: 25, price: 99, status: 'In Stock' },
    { id: 3, name: 'Dell 27" Monitor', sku: 'MON-009', category: 'Electronics', stock: 0, price: 350, status: 'Out of Stock' },
    { id: 4, name: 'Wireless Keyboard', sku: 'KEY-102', category: 'Accessories', stock: 12, price: 79, status: 'In Stock' },
  ];

  const stats = {
    totalProducts: products.length,
    lowStock: products.filter(p => p.status === 'Low Stock').length,
    outOfStock: products.filter(p => p.status === 'Out of Stock').length,
    totalValue: products.reduce((acc, p) => acc + (p.price * p.stock), 0)
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Photo} alt="Logo" className="h-9 w-9 rounded-lg" />
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">StockManager</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Bell size={20} /></button>
            <Link to="/login" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all">Logout</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<Package className="text-blue-600" />} label="Total Products" value={stats.totalProducts} bg="bg-blue-50" />
          <StatCard icon={<AlertCircle className="text-amber-600" />} label="Low Stock" value={stats.lowStock} bg="bg-amber-50" />
          <StatCard icon={<TrendingDown className="text-red-600" />} label="Out of Stock" value={stats.outOfStock} bg="bg-red-50" />
          <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
            <p className="text-blue-100 text-sm font-medium">Inventory Value</p>
            <p className="text-3xl font-bold mt-1">${stats.totalValue.toLocaleString()}</p>
            <div className="mt-4 flex items-center text-xs text-blue-100"><TrendingUp size={14} className="mr-1" /> +12% from last month</div>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md">
            <Plus size={18} /> Add New Product
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Product Details</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Stock Level</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-xs text-slate-400 font-mono">{item.sku}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">{item.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${item.stock < 10 ? 'text-red-600' : 'text-slate-900'}`}>{item.stock}</span>
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.stock === 0 ? 'bg-slate-300' : item.stock < 10 ? 'bg-red-500' : 'bg-green-500'}`}
                          style={{ width: `${Math.min(item.stock * 4, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">${item.price}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"><Edit size={16} /></button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

// Sub-component for Stats
function StatCard({ icon, label, value, bg }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className={`${bg} p-3 rounded-xl`}>{icon}</div>
      <div>
        <p className="text-slate-500 text-sm font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}