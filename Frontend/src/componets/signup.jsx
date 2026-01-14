import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Package, User, Mail, Lock, ArrowLeft, UserPlus } from 'lucide-react';

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormdata] = useState({
        username: "",
        email: "",
        password: ""
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
            await axios.post("http://localhost:3000/signup", formData);
            navigate("/login");
        } catch (error) {
            console.error(error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative border border-slate-100">
                
                {/* Back Link */}
                <Link to="/" className="absolute top-6 left-6 text-slate-400 hover:text-blue-600 transition">
                    <ArrowLeft size={20} />
                </Link>

                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 mb-4">
                        <Package size={28} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
                    <p className="text-sm text-slate-500">Join the Stock Manager system today</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                <User size={18} />
                            </div>
                            <input
                                type="text"
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                                placeholder="name@company.com"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-2"
                    >
                        <UserPlus size={19} />
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-slate-500 mt-8">
                    Already have an account?{' '}
                    <Link to="/Login" className="text-blue-600 font-bold hover:text-blue-700 transition">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}