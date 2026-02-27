import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Database,
    FileText,
    Server,
    Layers,
    ShieldCheck,
    Cpu,
    Network,
    Zap,
    Activity,
    Globe,
    Search,
    Share2,
    Users,
    Table,
    Mail,
    MessageSquare,
    Eye,
    Lock,
    BarChart3
} from 'lucide-react';

const ProductHeroVisualizer = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isScanning, setIsScanning] = useState(false);
    const [containerSize, setContainerSize] = useState(550);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return undefined;

        const updateSize = () => {
            if (!containerRef.current) return;
            const { width } = containerRef.current.getBoundingClientRect();
            setContainerSize(width || 550);
        };

        updateSize();

        const observer = new ResizeObserver(updateSize);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    const visualScale = Math.max(0.55, Math.min(1, containerSize / 550));

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        setMousePos({ x, y });
    };

    const nodes = [
        { id: 'sap', icon: Database, label: "SAP / ERP", color: "#6366f1", angle: -150, distance: 150, delay: 0, desc: "Operational data integration", stats: "99.9% Up" },
        { id: 'crm', icon: Users, label: "Salesforce", color: "#38bdf8", angle: -30, distance: 150, delay: 0.2, desc: "Customer intelligence sync", stats: "Live" },
        { id: 'pdf', icon: FileText, label: "Physical Docs", color: "#f43f5e", angle: 150, distance: 150, delay: 0.4, desc: "High-precision OCR extraction", stats: "Deep OCR" },
        { id: 'cloud', icon: Globe, label: "Hybrid Cloud", color: "#10b981", angle: 30, distance: 150, delay: 0.6, desc: "Distributed system bridging", stats: "Encrypted" },
        { id: 'sql', icon: Table, label: "SQL/NoSQL", color: "#8b5cf6", angle: -90, distance: 130, delay: 0.8, desc: "Structured query bridge", stats: "Indexing" },
        { id: 'mail', icon: Mail, label: "Communications", color: "#f59e0b", angle: 90, distance: 130, delay: 1, desc: "Email & Chat analysis", stats: "NLP Active" },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-square max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[550px] mx-auto flex items-center justify-center select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            onClick={() => {
                setIsScanning(true);
                setTimeout(() => setIsScanning(false), 2000);
            }}
        >
            {/* Background Depth Layers */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[10%] border-[1px] border-indigo-500/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[25%] border-[1px] border-indigo-500/10 rounded-full border-dashed"
                />
            </div>

            {/* Parallax Container */}
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    rotateX: -mousePos.y * 0.5,
                    rotateY: mousePos.x * 0.5
                }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                style={{ perspective: 1000, scale: visualScale, transformOrigin: 'center' }}
            >
                {/* Holographic Overlays */}
                <motion.div
                    className="absolute right-0 top-1/4 p-4 rounded-2xl border border-indigo-500/10 bg-white/5 backdrop-blur-md hidden xl:block shadow-2xl z-50"
                    animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 - 20 }}
                >
                    <div className="flex flex-col gap-2">
                        <div className="h-1.5 w-24 bg-indigo-500/20 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="h-full w-1/2 bg-indigo-500"
                            />
                        </div>
                        <div className="text-[9px] font-black text-indigo-400 uppercase tracking-tighter">System_Throughput</div>
                        <div className="text-sm font-bold text-slate-900">1.2 TB/s</div>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute left-0 bottom-1/4 p-4 rounded-2xl border border-emerald-500/10 bg-white/5 backdrop-blur-md hidden xl:block shadow-2xl z-50"
                    animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 + 20 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                            <Lock className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div>
                            <div className="text-[9px] font-black text-emerald-500 uppercase">Security_Layer</div>
                            <div className="text-[10px] font-bold text-slate-500">AES-256 Protocol</div>
                        </div>
                    </div>
                </motion.div>

                {/* SVG Connections and Lines */}
                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                >
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                        <filter id="ultra-glow">
                            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {nodes.map((node) => {
                        const rad = (node.angle * Math.PI) / 180;
                        const targetX = 50 + Math.cos(rad) * 35;
                        const targetY = 50 + Math.sin(rad) * 35;
                        const isActive = activeNode === node.id;

                        return (
                            <React.Fragment key={node.id}>
                                {/* Connection Line */}
                                <motion.path
                                    d={`M 50 50 Q ${50 + Math.cos(rad + 0.1) * 15} ${50 + Math.sin(rad + 0.1) * 15} ${targetX} ${targetY}`}
                                    stroke={isActive ? node.color : "rgba(99, 102, 241, 0.15)"}
                                    strokeWidth={isActive ? "0.8" : "0.3"}
                                    fill="none"
                                    strokeDasharray={isActive ? "0" : "1 2"}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: node.delay }}
                                />

                                {/* Streaming Particles */}
                                {(isActive || isScanning) && (
                                    [...Array(3)].map((_, i) => (
                                        <motion.circle
                                            key={i}
                                            r="0.6"
                                            fill={node.color}
                                            filter="url(#ultra-glow)"
                                            animate={{
                                                cx: [50, targetX],
                                                cy: [50, targetY],
                                                opacity: [0, 1, 0],
                                                scale: [0.5, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                delay: i * 0.4,
                                                ease: "easeOut"
                                            }}
                                        />
                                    ))
                                )}
                            </React.Fragment>
                        );
                    })}

                    {/* Scanning Beam */}
                    <motion.circle
                        r="35"
                        cx="50"
                        cy="50"
                        fill="none"
                        stroke="url(#line-gradient)"
                        strokeWidth="10"
                        strokeDasharray="10 100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="opacity-20"
                    />
                </svg>

                {/* Central Engine Core */}
                <div className="relative z-50">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-36 h-36 flex items-center justify-center cursor-pointer group"
                    >
                        {/* Interactive Ripple on Scan */}
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 1 }}
                                    animate={{ scale: 3, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 bg-indigo-500/20 rounded-full"
                                />
                            )}
                        </AnimatePresence>

                        {/* Outer Glow Shield */}
                        <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors" />

                        {/* Spinning Tech Rings */}
                        {[...Array(2)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    rotate: i % 2 === 0 ? 360 : -360,
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotate: { duration: 15 + (i * 5), repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute inset-[-20px] rounded-full border border-indigo-500/20 border-t-indigo-500/40"
                            />
                        ))}

                        {/* Core Chassis */}
                        <div className="relative w-24 h-24 bg-white rounded-[1.5rem] shadow-2xl border border-indigo-100 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />

                            {/* Inner Energy Hub */}
                            <div className="relative z-10 w-20 h-20">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-sky-500 rounded-2xl shadow-lg shadow-indigo-300 flex items-center justify-center"
                                >
                                    <Cpu className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Swirling Orbitals */}
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                                        className="absolute inset-[-10px]"
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 shadow-[0_0_10px_white]" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Scanning Line overlay */}
                            <motion.div
                                animate={{ y: [-60, 60] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-x-0 h-[30px] bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent pointer-events-none"
                            />
                        </div>

                        {/* Floating Status Badge Removed */}
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
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x,
                                y,
                                zIndex: isActive ? 60 : 30
                            }}
                            whileHover={{ scale: 1.15 }}
                            onMouseEnter={() => setActiveNode(node.id)}
                            onMouseLeave={() => setActiveNode(null)}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveNode((prev) => (prev === node.id ? null : node.id));
                            }}
                            className="absolute cursor-pointer"
                        >
                            <div className="relative group">
                                {/* Node Backdrop with reactive color */}
                                <motion.div
                                    animate={{
                                        scale: isActive ? [1, 1.5, 1] : [1, 1.1, 1],
                                        opacity: isActive ? [0.4, 0.6, 0.4] : [0.1, 0.15, 0.1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-[-15px] rounded-full blur-xl"
                                    style={{ backgroundColor: node.color }}
                                />

                                {/* Interactive Card */}
                                <div className={`relative w-12 h-12 rounded-[1rem] border transition-all duration-500 flex flex-col items-center justify-center ${isActive
                                    ? 'bg-white border-indigo-400 shadow-2xl scale-110 -translate-y-2'
                                    : 'bg-white/90 backdrop-blur-md border-indigo-100 shadow-xl'
                                    }`}>
                                    <IconComponent className={`w-7 h-7 transition-colors duration-500 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`} style={{ color: isActive ? node.color : undefined }} />
                                </div>

                                {/* Floating Title & Status Badge */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, y: node.angle > 0 ? 10 : -10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className={`absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap flex flex-col items-center gap-1.5 ${node.angle > 0 ? 'top-full mt-3' : 'bottom-full mb-3'}`}
                                        >
                                            <div className="bg-slate-900 border border-indigo-500/30 px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-2 ring-1 ring-white/10">
                                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: node.color }} />
                                                <span className="text-white text-[10px] font-black uppercase tracking-[0.1em]">{node.label}</span>
                                            </div>
                                            <div className="bg-indigo-600/10 backdrop-blur-md border border-indigo-500/20 px-2 py-0.5 rounded-md">
                                                <span className="text-indigo-400 text-[8px] font-black uppercase tracking-tighter">{node.stats}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Detailed Hover Module */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, x: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className={`absolute whitespace-nowrap z-[100] p-5 rounded-3xl bg-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 w-56 ${node.angle > 0 ? 'bottom-full mb-8' : 'top-full mt-8'
                                                } ${node.angle === 90 || node.angle === -90 ? 'left-1/2 -translate-x-1/2' : (Math.abs(node.angle) > 90 ? 'left-0' : 'right-0')}`}
                                        >
                                            <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                                                        <IconComponent className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-xs font-black text-white uppercase tracking-widest">{node.label}</span>
                                                </div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                            </div>
                                            <p className="text-slate-400 text-[11px] leading-relaxed mb-4">
                                                {node.desc}
                                            </p>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                                                    <div className="text-[8px] text-slate-500 font-bold uppercase mb-0.5">Latency</div>
                                                    <div className="text-[10px] text-white font-mono">12ms</div>
                                                </div>
                                                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                                                    <div className="text-[8px] text-slate-500 font-bold uppercase mb-0.5">Reliability</div>
                                                    <div className="text-[10px] text-white font-mono">99.9%</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Global Ambient Glitches / Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-indigo-500/20 rounded-full pointer-events-none"
                    initial={{
                        x: (Math.random() * 800) - 400,
                        y: (Math.random() * 800) - 400,
                        opacity: 0
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 10
                    }}
                />
            ))}
        </div>
    );
};

export default ProductHeroVisualizer;
