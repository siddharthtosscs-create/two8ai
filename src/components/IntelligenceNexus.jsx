import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database,
    Zap,
    Cpu,
    Activity,
    ShieldCheck,
    Brain,
    Network,
    Globe,
    FileText,
    Terminal,
    Share2,
    Layers,
    LucideIcon
} from 'lucide-react';

const IntelligenceNexus = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left - rect.width / 2) / 20,
            y: (e.clientY - rect.top - rect.height / 2) / 20
        });
    };

    const nodes = [
        { id: 'erp', icon: Database, label: "ERP Systems", color: "#6366f1", angle: -140, distance: 220, desc: "Deep integration with SAP, Oracle, and Microsoft Dynamics." },
        { id: 'crm', icon: Share2, label: "CRM Layer", color: "#8b5cf6", angle: -40, distance: 220, desc: "Unified customer intelligence from Salesforce and HubSpot." },
        { id: 'docs', icon: FileText, label: "Unstructured", color: "#ec4899", angle: 140, distance: 220, desc: "Holographic OCR parsing complex PDFs and handwritten notes." },
        { id: 'cloud', icon: Globe, label: "Cloud Mesh", color: "#06b6d4", angle: 40, distance: 220, desc: "Connecting decentralized AWS, Azure, and Google Cloud data." },
    ];

    return (
        <div
            className="relative w-full aspect-square sm:aspect-video lg:aspect-[16/9] max-w-[1100px] mx-auto flex items-center justify-center overflow-hidden rounded-[4rem] bg-[#030712] shadow-[0_0_100px_rgba(79,70,229,0.2)] group/nexus select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
            {/* Background Neural Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #312e81 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-50%] border-[1px] border-indigo-500/10 rounded-full"
                />
            </div>

            {/* Parallax Container */}
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{ x: mousePos.x, y: mousePos.y }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                {/* Flowing Energy Pathways (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {nodes.map((node) => {
                        const x2 = 50 + Math.cos((node.angle * Math.PI) / 180) * 35;
                        const y2 = 50 + Math.sin((node.angle * Math.PI) / 180) * 35;
                        return (
                            <React.Fragment key={node.id}>
                                <motion.path
                                    d={`M 50 50 Q ${50 + (x2 - 50) / 2} ${y2} ${x2} ${y2}`}
                                    stroke={node.color}
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeDasharray="4 4"
                                    className="opacity-20 group-hover/nexus:opacity-40 transition-opacity duration-700"
                                    style={{ transformOrigin: 'center', transform: 'scale(10)' }}
                                />
                                {/* Dynamic Data Packets */}
                                <motion.circle
                                    r="2"
                                    fill={node.color}
                                    filter="url(#glow)"
                                    initial={{ offset: 0 }}
                                    animate={{
                                        cx: ["50%", `${x2}%`],
                                        cy: ["50%", `${y2}%`],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
                                />
                            </React.Fragment>
                        );
                    })}
                </svg>

                {/* Central Intelligence Hub */}
                <div className="relative z-30">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center cursor-pointer"
                    >
                        {/* Multiple Pulsing Rings */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ scale: [1, 1.4 + i * 0.2, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                className="absolute inset-0 rounded-full border border-indigo-500/50"
                            />
                        ))}

                        {/* The Brain Core */}
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600 rounded-[2.5rem] shadow-[0_0_80px_rgba(99,102,241,0.6)] flex items-center justify-center border-2 border-indigo-400 group/core overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"
                            />
                            <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                            {/* Scanning Line */}
                            <motion.div
                                animate={{ y: [-60, 60] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-[2px] bg-white/20 blur-[1px]"
                            />
                        </div>

                        {/* Status Label */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-white font-black text-[9px] uppercase tracking-[0.5em] bg-indigo-600/50 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-400/30">
                                Unifying_Intelligence
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Floating System Nodes */}
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        initial={false}
                        animate={{
                            x: Math.cos((node.angle * Math.PI) / 180) * node.distance,
                            y: Math.sin((node.angle * Math.PI) / 180) * node.distance,
                            scale: activeNode === node.id ? 1.2 : 1,
                        }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        className="absolute z-40 cursor-pointer"
                    >
                        <div className="relative group/node">
                            {/* Node Aura */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 rounded-2xl blur-xl"
                                style={{ backgroundColor: node.color }}
                            />

                            {/* Icon Card */}
                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 rounded-3xl shadow-2xl transition-all duration-500 group-hover/node:bg-white group-hover/node:rotate-6">
                                <node.icon className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-500 ${activeNode === node.id ? 'text-indigo-600' : 'text-white'}`} style={{ color: activeNode === node.id ? '#4f46e5' : 'white' }} />
                            </div>

                            {/* Node Label Popover */}
                            <AnimatePresence>
                                {activeNode === node.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        className={`absolute whitespace-nowrap z-50 p-6 rounded-[2rem] bg-[#0f1122]/95 backdrop-blur-3xl border border-indigo-500/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-64 sm:w-72 mt-8 ${node.angle > 0 ? 'bottom-full mb-8' : 'top-full mt-8'} ${node.angle < 90 && node.angle > -90 ? 'left-0' : 'right-0'}`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] text-indigo-300 font-black uppercase tracking-[0.3em]">{node.label}</span>
                                        </div>
                                        <p className="text-white font-medium text-xs sm:text-sm leading-relaxed mb-4">
                                            {node.desc}
                                        </p>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5 }}
                                                className="h-full bg-indigo-500"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tech UI Overlays */}
            <div className="absolute top-10 left-10 font-mono text-[10px] text-indigo-400/30 space-y-1 hidden sm:block">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" /> NETWORK_READY</div>
                <div>BANDWIDTH: 1.2 GB/S</div>
                <div>UPLINK_STABLE: TRUE</div>
            </div>

            <div className="absolute bottom-10 right-10 flex items-center gap-4 hidden sm:flex">
                <div className="text-right font-mono text-[9px] text-indigo-400/30">
                    <div>SCAN_FREQ: 2.8GHZ</div>
                    <div>NEURAL_LOAD: 12%</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-indigo-500/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-indigo-500/40 animate-pulse" />
                </div>
            </div>

            {/* Interaction State Hint */}
            <AnimatePresence>
                {!activeNode && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full flex items-center gap-4">
                            <span className="text-indigo-300 font-black text-[10px] uppercase tracking-[0.4em]">Initialize Neural Link</span>
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="w-1 h-1 rounded-full bg-indigo-500" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default IntelligenceNexus;
