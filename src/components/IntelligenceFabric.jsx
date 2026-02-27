import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Brain, Zap, Activity, Cpu } from 'lucide-react';

const IntelligenceFabric = () => {
    return (
        <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-[3rem] blur-2xl" />

            {/* Neural Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 400">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Data Flow Lines */}
                {[
                    "M 100 120 Q 150 180 200 240", // Left card to bottom
                    "M 300 120 Q 250 180 200 240", // Right card to bottom
                ].map((path, i) => (
                    <React.Fragment key={i}>
                        <path d={path} stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <motion.path
                            d={path}
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1],
                                opacity: [0, 1, 0],
                                pathOffset: [0, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 1.5,
                                ease: "linear"
                            }}
                        />
                    </React.Fragment>
                ))}
            </svg>

            {/* Float Animations for Cards */}
            <div className="relative z-10 grid grid-cols-2 gap-4 h-full p-4 sm:p-6">

                {/* Structured Data Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit cursor-default group/card"
                >
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors duration-500">
                        <Database className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">Structured</h4>
                    <p className="text-xs text-slate-500">ERP, CRM, SQL</p>
                    <div className="mt-3 flex gap-1">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                className="h-1 w-4 bg-blue-200 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Unstructured Data Card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit mt-12 cursor-default group/card"
                >
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-4 group-hover/card:bg-rose-500 group-hover/card:text-white transition-colors duration-500">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">Unstructured</h4>
                    <p className="text-xs text-slate-500">PDFs, Emails, Docs</p>
                    <div className="mt-3 flex gap-1">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                className="h-1 w-4 bg-rose-200 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Central Intelligence Layer Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                    className="col-span-2 relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-2xl text-white mt-4 group/main cursor-default"
                >
                    {/* Background Glow Effect */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"
                    />

                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 shadow-inner group-hover/main:rotate-[360deg] transition-transform duration-1000">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                                <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.2em]">Core Engine</span>
                            </div>
                            <h4 className="text-2xl font-black mb-1">TOAI Intelligence Layer</h4>
                            <p className="text-indigo-50 text-sm opacity-80">The bridge between raw data and action.</p>
                        </div>
                    </div>

                    {/* Scanning Line Animation */}
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                    />

                    {/* Interactive Metrics */}
                    <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10 relative z-10">
                        {[
                            { icon: Cpu, label: "Processing", val: "LIVE" },
                            { icon: Activity, label: "Accuracy", val: "99.9%" },
                            { icon: Zap, label: "Latency", val: "<40ms" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <item.icon className="w-4 h-4 mx-auto mb-2 text-indigo-300" />
                                <div className="text-[10px] font-bold text-indigo-200 uppercase tracking-tighter">{item.label}</div>
                                <div className="text-xs font-black">{item.val}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default IntelligenceFabric;
