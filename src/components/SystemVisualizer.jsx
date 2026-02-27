import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database,
    MessageSquare,
    FileText,
    Globe,
    Cpu,
    ShieldCheck,
    Zap,
    Network,
    Server,
    Search,
    BarChart
} from 'lucide-react';

const SystemVisualizer = () => {
    const [activeNode, setActiveNode] = useState(null);

    const nodes = [
        { id: 'erp', icon: Database, label: "ERP Systems", color: "#6366f1", x: "18%", y: "22%", desc: "Diving into SAP, Oracle, and Microsoft Dynamics to extract operational context." },
        { id: 'crm', icon: Users, label: "CRM Data", color: "#8b5cf6", x: "18%", y: "78%", desc: "Synthesizing customer touchpoints from Salesforce and HubSpot." },
        { id: 'docs', icon: FileText, label: "Unstructured", color: "#ec4899", x: "82%", y: "22%", desc: "Parsing complex PDFs, emails, and contracts with high-precision OCR." },
        { id: 'cloud', icon: Globe, label: "Cloud Services", color: "#06b6d4", x: "82%", y: "78%", desc: "Connecting AWS, Azure, and Google Cloud environments seamlessly." },
    ];

    return (
        <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] max-w-[900px] mx-auto overflow-hidden rounded-[3rem] bg-[#0a0c1b] shadow-[0_0_100px_rgba(79,70,229,0.3)] border-[12px] border-indigo-950/80 group select-none">
            {/* Background High-Tech Grid with Motion */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <motion.div
                animate={{
                    backgroundPosition: ['0px 0px', '40px 40px']
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#f43f5e 1px, transparent 1px), linear-gradient(90deg, #f43f5e 1px, transparent 1px)', backgroundSize: '200px 200px' }}
            />

            {/* Pulsing Core Ambient Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] pointer-events-none"
            />

            {/* Animated Data Streams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <defs>
                    <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {[...Array(5)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M ${-50 + i * 250} 0 L ${500 + i * 250} 1000`}
                        stroke="url(#streamGrad)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i }}
                    />
                ))}
            </svg>

            {/* The Intelligence Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Multiple Rotating Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-indigo-500/10 shadow-[inset_0_0_30px_rgba(79,70,229,0.1)]"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-6 rounded-full border border-dashed border-indigo-400/20"
                    />
                    <motion.div
                        animate={{ rotate: 180 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-12 rounded-full border-2 border-indigo-300/10 border-t-indigo-400/40"
                    />

                    {/* The Brain Hub */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] shadow-[0_0_60px_rgba(99,102,241,0.6)] flex items-center justify-center border-2 border-indigo-400/50 cursor-pointer overflow-hidden group/core"
                    >
                        <motion.div
                            animate={{
                                background: ['linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)', 'linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 100%)']
                            }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute inset-0"
                        />
                        <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                    </motion.div>

                    {/* Orbiting Particles */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)]"
                                style={{ transform: `translateY(${i * 12}px)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Satellite Nodes */}
            <div className="absolute inset-0 z-10 p-8 sm:p-12">
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        initial={false}
                        animate={{
                            scale: activeNode === node.id ? 1.2 : 1,
                            y: activeNode === node.id ? -5 : [0, -3, 0],
                        }}
                        transition={{
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
                        }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        className="absolute cursor-pointer group/node"
                        style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
                    >
                        {/* Connection Line with Flowing Particle */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none -z-10 overflow-visible">
                            <line
                                x1="50%" y1="50%"
                                x2={node.x.includes('18') ? '100%' : '-100%'}
                                y2={node.y.includes('22') ? '200%' : '-200%'}
                                stroke={node.color} strokeWidth="1" strokeDasharray="4,4" className="opacity-20 group-hover/node:opacity-60 transition-opacity duration-500"
                            />
                            {/* Moving Particle on Line */}
                            <motion.circle
                                r="2"
                                fill={node.color}
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: ["50%", node.x.includes('18') ? '100%' : '-100%'],
                                    cy: ["50%", node.y.includes('22') ? '200%' : '-200%']
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="filter blur-[1px]"
                            />
                        </svg>

                        <div className="relative">
                            {/* Inner Glow */}
                            <div className={`absolute inset-0 rounded-2xl bg-${node.color} opacity-0 group-hover/node:opacity-20 blur-xl transition-opacity duration-500`} style={{ backgroundColor: node.color }} />

                            <motion.div
                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                className="bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl shadow-2xl transition-all duration-500 group-hover/node:bg-white group-hover/node:scale-110"
                            >
                                <node.icon className={`w-7 h-7 sm:w-9 sm:h-9 transition-colors duration-500 ${activeNode === node.id ? 'text-indigo-600' : 'text-white'}`} />
                            </motion.div>

                            {/* Title - Independent Block */}
                            <div className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-all duration-500 pointer-events-none z-20 ${node.y.includes('22') ? 'top-full mt-6 scale-110' : 'bottom-full mb-6 scale-110'}`}>
                                <span className="text-white font-black text-[10px] sm:text-[11px] uppercase tracking-[0.25em] bg-indigo-600 px-4 py-1.5 rounded-xl border border-indigo-400 shadow-[0_10px_30px_rgba(79,70,229,0.4)]">
                                    {node.label}
                                </span>
                            </div>

                            {/* Description - Awesome UI */}
                            <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover/node:opacity-100 transition-all duration-500 pointer-events-none w-64 sm:w-80 z-50 ${node.x.includes('18') ? 'left-full ml-10' : 'right-full mr-10'}`}>
                                <div className="bg-[#0f1122]/95 backdrop-blur-3xl border border-indigo-500/30 p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] text-left ring-1 ring-white/10 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                                    <div className="flex items-center gap-3 mb-3 relative z-10">
                                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                                        <p className="text-[10px] text-indigo-300 font-black uppercase tracking-[0.3em]">Neural Protocol Activated</p>
                                    </div>
                                    <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium relative z-10">
                                        {node.desc}
                                    </p>

                                    <div className="mt-4 flex gap-1 relative z-10">
                                        <div className="h-1 w-full bg-indigo-900/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="h-full bg-indigo-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Top Interactive Pill */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <AnimatePresence>
                    {!activeNode && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            className="flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-2xl"
                        >
                            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
                            <span className="text-indigo-200 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.4em]">Initialize Analysis Sequence</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Decorative Corner Stats */}
            <div className="absolute bottom-10 right-10 text-right font-mono text-[9px] sm:text-[10px] text-indigo-400/40 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span>KERNEL.SECURE.STABLE</span>
                </div>
                <div>CORE_LOAD_IDX: 0.0028</div>
                <div>INTELLIGENCE_FABRIC: CONNECTED</div>
                <div className="mt-2 text-indigo-300/60">© TWO8_OS.V2</div>
            </div>

            <div className="absolute bottom-10 left-10 text-left font-mono text-[10px] text-indigo-400/40 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="text-xs font-bold text-indigo-300/60 mb-2">SYSTEM SCAN</div>
                <div className="h-24 w-1 bg-indigo-900/20 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ y: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-10 w-full bg-indigo-500/50"
                    />
                </div>
            </div>
        </div>
    );
};

// Placeholder icons since they might not be in props
const Users = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M17.31 11a4 4 0 0 0 0-8" /></svg>
);
const Activity = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);

export default SystemVisualizer;
