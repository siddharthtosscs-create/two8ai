import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Megaphone,
    Calendar,
    Terminal,
    Users,
    Layout,
    Code,
    Workflow,
    Shield
} from 'lucide-react';

const SolutionsHeroVisualizer = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 450) {
                setScale(0.65);
            } else if (width < 640) {
                setScale(0.75);
            } else if (width < 1024) {
                setScale(0.85);
            } else {
                setScale(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;
        setMousePos({ x, y });
    };

    // Hexagonal layout - 60° spacing, different from Product's circular
    const nodes = [
        { id: 'marketing', icon: Megaphone, label: "Marketing", color: "#7c3aed", angle: 0, distance: 145, delay: 0, stats: "Auto-copy" },
        { id: 'pm', icon: Calendar, label: "Project Mgmt", color: "#0ea5e9", angle: 60, distance: 145, delay: 0.15, stats: "AI-assisted" },
        { id: 'dev', icon: Terminal, label: "Software Dev", color: "#059669", angle: 120, distance: 145, delay: 0.3, stats: "Deploy faster" },
        { id: 'hr', icon: Users, label: "Human Resources", color: "#d946ef", angle: 180, distance: 145, delay: 0.45, stats: "Smart screening" },
        { id: 'sales', icon: Layout, label: "Sales & CRM", color: "#f59e0b", angle: 240, distance: 145, delay: 0.6, stats: "Pipeline AI" },
        { id: 'it', icon: Code, label: "IT Operations", color: "#ef4444", angle: 300, distance: 145, delay: 0.75, stats: "Proactive" },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-square max-w-[550px] mx-auto flex items-center justify-center select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
            {/* Hexagonal grid background - different from Product's circles */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[85%] h-[85%] border border-violet-400/10"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
            </div>

            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    rotateX: -mousePos.y * 0.5,
                    rotateY: mousePos.x * 0.5,
                    scale: scale
                }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                style={{ perspective: 1000 }}
            >
                {/* Departments Active overlay - Solutions-specific */}
                <motion.div
                    className="absolute right-0 top-1/3 p-3 rounded-xl border border-violet-500/20 bg-violet-50/95 backdrop-blur-md hidden xl:block shadow-xl z-50"
                    animate={{ x: mousePos.x * 1.2, y: mousePos.y * 1.2 - 15 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-2 h-2 rounded-full bg-violet-500"
                                />
                            ))}
                        </div>
                        <div>
                            <div className="text-[9px] font-black text-violet-600 uppercase tracking-tighter">Departments_Active</div>
                            <div className="text-xs font-bold text-slate-700">6 Teams Connected</div>
                        </div>
                    </div>
                </motion.div>

                {/* Security overlay - different position & style */}
                <motion.div
                    className="absolute left-0 top-1/3 p-3 rounded-xl border border-amber-500/20 bg-amber-50/95 backdrop-blur-md hidden xl:block shadow-xl z-50"
                    animate={{ x: mousePos.x * -0.8, y: mousePos.y * 0.8 + 15 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                            <Shield className="w-4 h-4 text-amber-600" />
                        </div>
                        <div>
                            <div className="text-[9px] font-black text-amber-600 uppercase">Secure_Workflows</div>
                            <div className="text-[10px] font-bold text-slate-600">AES-256</div>
                        </div>
                    </div>
                </motion.div>

                {/* Straight line connections - different from Product's curved */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <linearGradient id="solutions-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {nodes.map((node) => {
                        const rad = (node.angle * Math.PI) / 180;
                        const targetX = 50 + Math.cos(rad) * 35;
                        const targetY = 50 + Math.sin(rad) * 35;
                        const isActive = activeNode === node.id;
                        return (
                            <motion.path
                                key={node.id}
                                d={`M 50 50 L ${targetX} ${targetY}`}
                                stroke={isActive ? node.color : "rgba(124, 58, 237, 0.12)"}
                                strokeWidth={isActive ? "1" : "0.4"}
                                strokeDasharray={isActive ? "0" : "2 3"}
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, delay: node.delay }}
                            />
                        );
                    })}
                    <motion.circle
                        r="36"
                        cx="50"
                        cy="50"
                        fill="none"
                        stroke="url(#solutions-line-gradient)"
                        strokeWidth="8"
                        strokeDasharray="6 80"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="opacity-30"
                    />
                </svg>

                {/* Central Core - Workflow icon, violet gradient */}
                <div className="relative z-50">
                    <motion.div whileHover={{ scale: 1.08 }} className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
                        <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/15 transition-colors" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-12px] rounded-full border border-violet-400/20 border-dashed"
                        />
                        <div className="relative w-20 h-20 bg-white rounded-2xl shadow-xl border border-violet-100 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-500" />
                            <div className="relative z-10">
                                <Workflow className="w-9 h-9 text-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Satellite Nodes */}
                {nodes.map((node) => {
                    const isActive = activeNode === node.id;
                    const rad = (node.angle * Math.PI) / 180;
                    const x = Math.cos(rad) * node.distance;
                    const y = Math.sin(rad) * node.distance;
                    const IconComponent = node.icon;
                    return (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, x, y, zIndex: isActive ? 60 : 30 }}
                            whileHover={{ scale: 1.15 }}
                            onMouseEnter={() => setActiveNode(node.id)}
                            onMouseLeave={() => setActiveNode(null)}
                            className="absolute cursor-pointer"
                        >
                            <div className="relative group">
                                <motion.div
                                    animate={{ scale: isActive ? [1, 1.5, 1] : [1, 1.1, 1], opacity: isActive ? [0.4, 0.6, 0.4] : [0.1, 0.15, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-[-15px] rounded-full blur-xl"
                                    style={{ backgroundColor: node.color }}
                                />
                                <div className={`relative w-14 h-14 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${isActive ? 'bg-white border-violet-400 shadow-2xl scale-110 -translate-y-2' : 'bg-white/95 backdrop-blur-md border-slate-200 shadow-lg'}`}>
                                    <IconComponent className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-violet-600' : 'text-slate-500'}`} style={{ color: isActive ? node.color : undefined }} />
                                </div>
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, y: node.angle > 90 && node.angle < 270 ? 10 : -10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className={`absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap flex flex-col items-center gap-1.5 ${node.angle > 90 && node.angle < 270 ? 'top-full mt-3' : 'bottom-full mb-3'}`}
                                        >
                                            <div className="bg-slate-800 border border-violet-500/30 px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-2 ring-1 ring-white/10">
                                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: node.color }} />
                                                <span className="text-white text-[10px] font-black uppercase tracking-[0.1em]">{node.label}</span>
                                            </div>
                                            <div className="bg-violet-500/15 backdrop-blur-md border border-violet-400/20 px-2 py-0.5 rounded-md">
                                                <span className="text-violet-600 text-[8px] font-black uppercase tracking-tighter">{node.stats}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SolutionsHeroVisualizer;
