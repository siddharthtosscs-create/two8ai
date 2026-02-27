import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database,
    FileText,
    Globe,
    Zap,
    Cpu,
    Network,
    Activity,
    ShieldCheck,
    Brain,
    Layers,
    Share2,
    LucideIcon
} from 'lucide-react';

const InteractiveFoundation = () => {
    const [hoveredLayer, setHoveredLayer] = useState(null);

    const layers = [
        {
            id: 'intelligence',
            title: 'Intelligence Layer',
            icon: Brain,
            color: 'from-purple-500 to-indigo-600',
            desc: 'Autonomous agents performing complex reasoning and goal-oriented tasks.',
            stats: ['Cognitive Analysis', 'Pattern Recognition', 'Real-time Prediction'],
            z: 100
        },
        {
            id: 'toai',
            title: 'TOAI Foundation',
            icon: Cpu,
            color: 'from-indigo-600 to-blue-600',
            desc: 'The centralized nervous system unifying data silos into a single knowledge engine.',
            stats: ['Entity Linking', 'Knowledge Graph', 'Unified Schema'],
            z: 50
        },
        {
            id: 'data',
            title: 'Enterprise Data',
            icon: Database,
            color: 'from-blue-600 to-sky-500',
            desc: 'Seamless ingestion from ERP, CRM, PDFs, and legacy on-premise systems.',
            stats: ['Multi-source Sync', 'OCR Processing', 'Legacy Bridge'],
            z: 0
        }
    ];

    return (
        <div className="relative w-full aspect-square sm:aspect-video lg:aspect-[16/10] max-w-[1000px] mx-auto flex items-center justify-center overflow-hidden py-20 px-4 group/master">
            {/* Background Ambient Effects */}
            <div className="absolute inset-0 bg-[#020617] rounded-[3.5rem] overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [-20, 20, -20],
                        y: [-20, 20, -20]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px]"
                />
            </div>

            {/* 3D Stack Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[2000px]">
                {layers.map((layer, idx) => {
                    const isHovered = hoveredLayer === layer.id;
                    const isActive = hoveredLayer === null || isHovered;

                    return (
                        <motion.div
                            key={layer.id}
                            onMouseEnter={() => setHoveredLayer(layer.id)}
                            onMouseLeave={() => setHoveredLayer(null)}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isActive ? 1 : 0.3,
                                y: 0,
                                scale: isActive ? 1 : 0.95,
                                rotateX: 45,
                                rotateZ: -15,
                                translateZ: isHovered ? 120 : layer.z,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: idx * 0.2,
                                translateZ: { type: 'spring', stiffness: 100, damping: 20 }
                            }}
                            className="absolute cursor-pointer w-[90%] max-w-[600px] h-40 sm:h-56 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex items-center overflow-hidden"
                            style={{
                                top: `${25 + idx * 15}%`,
                                zIndex: layers.length - idx
                            }}
                        >
                            {/* Layer Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`} />

                            {/* Layer Visual Content */}
                            <div className="relative z-10 w-full h-full p-6 sm:p-10 flex items-center gap-6 sm:gap-10">
                                {/* Icon Container */}
                                <div className={`relative w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                                    <layer.icon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                                    {/* Pulse Effect */}
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/30"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tighter">
                                        {layer.title}
                                    </h3>
                                    <p className="text-indigo-200/70 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
                                        {layer.desc}
                                    </p>

                                    {/* Dynamic Stats */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {layer.stats.map((stat, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-indigo-300 font-bold uppercase tracking-wider">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Arrow Decoration */}
                                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/20 group-hover:text-white group-hover:border-indigo-500 transition-all duration-500">
                                    <Share2 className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Decorative Lines */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] sm:text-[10px] text-white">
                                <div>PROTOCOL::{layer.id.toUpperCase()}_v2.8</div>
                                <div>STATUS::ACTIVE</div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Vertical Connector Line */}
                <div className="absolute top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 opacity-20 -z-10 blur-[1px]" />

                {/* Flowing Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: ['20%', '80%'],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "linear"
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full blur-[1px] shadow-[0_0_10px_white] -z-10"
                    />
                ))}
            </div>

            {/* Hint Overlay */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <AnimatePresence>
                    {!hoveredLayer && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full"
                        >
                            <span className="text-indigo-300 font-bold text-[10px] uppercase tracking-[0.4em] animate-pulse">
                                Interact with the Foundation Stack
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Corner Decorative Tech UI */}
            <div className="absolute top-10 left-10 text-indigo-400/20 font-mono text-[10px] space-y-1 hidden sm:block">
                <div>SYSTEM.INIT_BOOT_SEQUENCE...</div>
                <div>NEURAL_FABRIC_CONNECTED=TRUE</div>
                <div>LAYER_SYNC_STATUS: 100%</div>
            </div>
        </div>
    );
};

export default InteractiveFoundation;
