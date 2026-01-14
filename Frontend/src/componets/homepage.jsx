import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../images/beck.jpg';
import My from '../images/lolo.png';
// 1. Import the body image
import BodyImage from '../images/body.png';

export default function HomePage({ onOpenDashboard, onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 text-slate-800">

      {/* Navbar */}
      <header className="bg-gray-300 border-b border-slate-200 sticky">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={My} alt="Logo" className="h-10 w-10 rounded-xl" />
            <h1 className="text-2xl font-bold text-blue-600">Stock Manager</h1>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Login Button with Icon */}
            <Link 
              to="/login" 
              onClick={onLogin}
              className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              Login
            </Link>
            
            {/* Signup Button with Icon */}
            <Link 
              to="/signup" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition transform font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              Signup
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
        <section className="max-w-7xl mx-auto   grid md:grid-cols-2 gap-12 items-center">
          
            <div className="  bg-cover  " style={{ backgroundImage: `url(${BodyImage})` , width:'1265px' , height: '700px'  }} >
            <div className="bg-black/30 p-8  rounded-lg w-full" >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Smart Inventory &<br />
              <span className="text-blue-400">Stock Management System</span>
              </h2>
              <p className="mt-6 text-lg text-gray-100">
              Manage products, monitor stock levels, avoid shortages, and track inventory value from one central system.
              </p>
              <div className="mt-8 flex gap-4">
              <button
            onClick={onOpenDashboard}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
            Get Started
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition text-white">
            Learn More
              </button>
              </div>
            </div>
            </div>

            {/* Right Side: Image Display */}
          <div />

      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">System Features</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature title="Product Management" desc="Add, update, and organize products easily." />
          <Feature title="Stock Monitoring" desc="Track available, low, and out-of-stock items." />
          <Feature title="Reports & Analytics" desc="View inventory value and product performance." />
          <Feature title="Secure System" desc="Authentication and role-based access." />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
          <Info title="Fast" desc="Optimized for daily operations." />
          <Info title="Reliable" desc="Accurate and consistent stock tracking." />
          <Info title="Scalable" desc="Grows with your business." />
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Project Team</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember name="Munyengabe J d'Amour" role="System Developer" />
          <TeamMember name="Mugisha Walter" role="System Designer" />
          <TeamMember name="Niyingenera Adeline" role="System Analyst" />
        </div>
      </section>

      <footer className="text-center bg-gray-300 border-b border-slate-200 sticky top-0 z-50 py-6 text-slate-500">
        © 2025 Stock Manager System. All rights reserved.
      </footer>
    </div>
  );
}

// Sub-components
function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Info({ title, desc }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-blue-600">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function TeamMember({ name, role }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
      <img src={Photo} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-slate-600 mt-1">{role}</p>
    </div>
  );
}