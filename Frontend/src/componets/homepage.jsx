import React from 'react';

export default function HomePage({ onOpenDashboard, onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 text-slate-800">

      {/* Navbar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Stock Manager</h1>
          <button
            onClick={onLogin}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition transform font-medium"
          >
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Smart Inventory &<br />
            <span className="text-blue-600">Stock Management System</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Manage products, monitor stock levels, avoid shortages, and track inventory value from one central system.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={onOpenDashboard}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition">
              Learn More
            </button>
          </div>
        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">System Features</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature title="Product Management" desc="Add, update, and organize products easily." />
          <Feature title="Stock Monitoring" desc="Track available, low, and out-of-stock items." />
          <Feature title="Reports & Analytics" desc="View inventory value and product performance." />
          <Feature title="Secure System" desc="Authentication and role-based access." />
        </div>
      </section>

      {/* Info */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
          <Info title="Fast" desc="Optimized for daily operations." />
          <Info title="Reliable" desc="Accurate and consistent stock tracking." />
          <Info title="Scalable" desc="Grows with your business." />
        </div>
      </section>

      {/* Team Section with Photos */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Project Team</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember name="Munyengabe J d'Amour" role="System Developer" photoUrl="/Frontend/src/images/beck.jpg" />
          <TeamMember name="Mugisha Walter" role="System Designer" photoUrl="/photos/mugisha.jpg" />
          <TeamMember name="Niyingenera Adeline" role="System Analyst" photoUrl="/photos/niyingenera.jpg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-500">
        © 2025 Stock Manager System. All rights reserved.
      </footer>
    </div>
  );
}

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

function TeamMember({ name, role, photoUrl }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
      <img src={photoUrl} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-slate-600 mt-1">{role}</p>
    </div>
  );
}
