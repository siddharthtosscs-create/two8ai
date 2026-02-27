import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Login = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-slate-100 relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center mb-6">
                        <Logo className="h-20 w-auto" containerClassName="inline-flex" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
                    <p className="text-slate-500 mt-2">Log in to your enterprise workspace</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-bold text-slate-700">Password</label>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium hover:underline">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                    >
                        Log In
                    </motion.button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500">
                    Don't have an account? <Link to="/contact" className="text-indigo-600 font-bold hover:underline">Contact Sales</Link>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                    Secure Enterprise Login • SSO Enabled
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
