import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../images/beck.jpg';
import My from '../images/lolo.png';
import Footer from '../componets/footer';
import BodyImage from '../images/body.png';


export default function HomePage({ onOpenDashboard, onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 text-slate-800">

      {/* Navbar */}
      <header className="bg-gray-300 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={My} alt="Logo" className="h-10 w-10 rounded-xl" />
            <h1 className="text-2xl font-bold text-blue-600">Stock Manager</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/login" onClick={onLogin} className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium">
              Login
            </Link>
            <Link to="/signup" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition transform font-medium">
              Signup
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="w-full py-32 flex items-center justify-center relative"
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BodyImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Smart Inventory &<br />
              <span className="text-blue-400">Stock Management System</span>
            </h2>
            <p className="mt-6 text-lg text-gray-200">
              Manage products, monitor stock levels, avoid shortages, and track inventory value from one central system.
            </p>
            <div className="mt-8 flex gap-4">
              <button onClick={onOpenDashboard} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg">
                Get Started
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Stats Section (Moved inside a container to ensure visibility) */}
   

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">System Features</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature title="Product Management" desc="Add, update, and organize products easily." />
          <Feature title="Stock Monitoring" desc="Track available, low, and out-of-stock items." />
          <Feature title="Reports & Analytics" desc="View inventory value and product performance." />
          <Feature title="Secure System" desc="Authentication and role-based access." />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Project Team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember name="Munyengabe J d'Amour" role="System Developer" />
            <TeamMember name="Mugisha Walter" role="System Designer" />
            <TeamMember name="Niyingenera Adeline" role="System Analyst" />
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

/* --- Helper Components --- */


function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
      <h4 className="font-semibold text-lg mb-2 text-blue-700">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function TeamMember({ name, role }) {
  return (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
      <img src={Photo} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-sm" />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-slate-500 mt-1">{role}</p>
    </div>
  );
}