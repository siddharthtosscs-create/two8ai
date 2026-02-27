import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageSquare,
    UserPlus,
    Zap,
    ShoppingCart,
    Database,
    Headphones,
    BarChart3,
    FileText,
    Layers,
    ShieldCheck,
    ArrowRight,
    ArrowLeft,
    Brain,
    Activity,
    Network,
    Lock,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Cpu,
    Globe,
    Shield,
    Workflow,
    Terminal,
    Eye,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { coreFeatures } from '../data/content';

const IconMap = {
    MessageSquare,
    UserPlus,
    Zap,
    ShoppingCart,
    Database,
    Headphones,
    BarChart3,
    FileText,
    Layers,
    ShieldCheck
};

// --- CREATIVE VISUALS FOR EACH CATEGORY ---

const MetricsDashboard = ({ title, textColor }) => {
    // Stable pseudo-random stats based on title
    const seed = title?.length || 0;
    const efficiency = 92 + (seed % 7);
    const latency = 110 + (seed % 60);
    const uptime = 99.9 + (seed % 10) / 100;

    return (
        <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

            <div className="flex justify-between items-start relative z-10">
                <div className="space-y-6">
                    <div className="space-y-1.5">
                        <div className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Operational Efficiency</div>
                        <div className="text-4xl font-black text-white tracking-tighter">{efficiency}%</div>
                    </div>
                    <div className="flex gap-8">
                        <div className="space-y-1">
                            <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">Latency</div>
                            <div className="text-base font-bold text-white/90">{latency}ms</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">Uptime</div>
                            <div className="text-base font-bold text-white/90">{uptime}%</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-sm group-hover:border-white/20 transition-colors">
                        <Activity className="w-6 h-6 text-white/80" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-t-white/30 border-r-transparent border-b-transparent border-l-transparent rounded-2xl"
                        />
                    </div>
                    <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                className="w-0.5 h-2 bg-white/40 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">
                    <span>Neural Integrity</span>
                    <span className="text-emerald-400">Stable</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${efficiency}%` }}
                        transition={{ duration: 2, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-white/20 to-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </div>
            </div>
        </div>
    );
};

const ConversationVisual = ({ textColor }) => (
    <div className="relative w-full h-full flex flex-col justify-center gap-4 px-10">
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex items-start gap-3"
        >
            <div className="w-10 h-10 rounded-xl bg-white shadow-xl flex items-center justify-center border border-white/40 backdrop-blur-md">
                <Brain className={`w-5 h-5 ${textColor}`} />
            </div>
            <div className="flex flex-col gap-2 pt-1">
                <div className="h-2 w-40 bg-white/40 rounded-full" />
                <div className="h-2 w-28 bg-white/20 rounded-full" />
            </div>
        </motion.div>

        <div className="flex justify-center my-2">
            <motion.div
                animate={{
                    width: [20, 60, 20],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-1 bg-white rounded-full blur-[2px]"
            />
        </div>

        <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex items-start gap-3 self-end"
        >
            <div className="flex flex-col gap-2 items-end text-right pt-1">
                <div className="h-2 w-36 bg-white rounded-full shadow-sm" />
                <div className="h-2 w-24 bg-white opacity-40 rounded-full" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white shadow-xl flex items-center justify-center border border-white/40 backdrop-blur-md">
                <Cpu className={`w-5 h-5 ${textColor}`} />
            </div>
        </motion.div>

        {/* Decorative particles */}
        {[1, 2, 3].map(i => (
            <motion.div
                key={i}
                animate={{
                    y: [0, -40, 0],
                    x: [0, i * 10 - 20, 0],
                    opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ left: `${25 * i}%`, top: '50%' }}
            />
        ))}
    </div>
);



const WorkflowVisual = ({ textColor }) => (
    <div className="w-full h-full p-10 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group/node"
                >
                    <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm flex items-center justify-center group-hover/node:bg-white/20 group-hover/node:border-white/30 transition-all duration-500">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className={`w-2 h-2 rounded-full bg-white/40`}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="mt-8 flex justify-between items-center bg-white/5 px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-md shadow-inner">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500 relative" />
                </div>
                <div className="h-1.5 w-24 bg-white/10 rounded-full" />
            </div>
            <span className={`text-[8px] font-black uppercase tracking-[0.2em] text-white/40`}>Real-time Flow</span>
        </div>
    </div>
);



const CapabilitiesDiagram = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3.2);

    const capabilities = coreFeatures.map((f, idx) => ({
        ...f,
        id: idx + 1,
        IconComponent: IconMap[f.icon] || Brain
    }));

    useEffect(() => {
        const handleResize = () => {
            let visible;
            if (window.innerWidth < 640) visible = 1.2;
            else if (window.innerWidth < 1024) visible = 2.2;
            else visible = 3.2;
            setVisibleCards(visible);

            // Auto-clamp index to prevent empty space on resize
            const max = Math.max(0, capabilities.length - Math.floor(visible));
            setCurrentIndex(prev => Math.min(prev, max));
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [capabilities.length]);

    // Calculate the maximum index that keeps the last card visible without empty space
    const maxIndex = Math.max(0, capabilities.length - Math.floor(visibleCards));

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const getColorStyles = (color) => {
        const styles = {
            blue: {
                bg: "bg-gradient-to-br from-blue-600 to-blue-900",
                light: "bg-blue-400",
                text: "text-blue-600",
                accent: "text-blue-100",
                border: "border-blue-400/20",
                glow: "shadow-[0_20px_50px_rgba(37,99,235,0.4)]"
            },
            indigo: {
                bg: "bg-gradient-to-br from-indigo-600 to-indigo-900",
                light: "bg-indigo-400",
                text: "text-indigo-600",
                accent: "text-indigo-100",
                border: "border-indigo-400/20",
                glow: "shadow-[0_20px_50px_rgba(79,70,229,0.4)]"
            },
            amber: {
                bg: "bg-gradient-to-br from-amber-500 to-amber-800",
                light: "bg-amber-400",
                text: "text-amber-600",
                accent: "text-amber-100",
                border: "border-amber-400/20",
                glow: "shadow-[0_20px_50px_rgba(245,158,11,0.4)]"
            },
            purple: {
                bg: "bg-gradient-to-br from-purple-600 to-purple-900",
                light: "bg-purple-400",
                text: "text-purple-600",
                accent: "text-purple-100",
                border: "border-purple-400/20",
                glow: "shadow-[0_20px_50px_rgba(147,51,234,0.4)]"
            },
            rose: {
                bg: "bg-gradient-to-br from-rose-500 to-rose-800",
                light: "bg-rose-400",
                text: "text-rose-600",
                accent: "text-rose-100",
                border: "border-rose-400/20",
                glow: "shadow-[0_20px_50px_rgba(244,63,94,0.4)]"
            },
            emerald: {
                bg: "bg-gradient-to-br from-emerald-500 to-emerald-800",
                light: "bg-emerald-400",
                text: "text-emerald-600",
                accent: "text-emerald-100",
                border: "border-emerald-400/20",
                glow: "shadow-[0_20px_50px_rgba(16,185,129,0.4)]"
            },
            orange: {
                bg: "bg-gradient-to-br from-orange-500 to-orange-800",
                light: "bg-orange-400",
                text: "text-orange-600",
                accent: "text-orange-100",
                border: "border-orange-400/20",
                glow: "shadow-[0_20px_50px_rgba(249,115,22,0.4)]"
            },
            slate: {
                bg: "bg-gradient-to-br from-slate-700 to-slate-900",
                light: "bg-slate-400",
                text: "text-slate-600",
                accent: "text-slate-100",
                border: "border-slate-500/20",
                glow: "shadow-[0_20px_50px_rgba(30,41,59,0.4)]"
            },
        };
        return styles[color] || styles.indigo;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-4 text-left">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 border border-indigo-100">
                        <Sparkles className="w-3 h-3" />
                        Next-Gen Intelligence
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[0.85] mb-4">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400">Capabilities</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium max-w-xl">
                        A unified AI foundation layer designed to transform petabytes of raw data into autonomous organizational wisdom.
                    </p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative px-4">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: `calc(-${currentIndex * (100 / Math.floor(visibleCards))}% - ${currentIndex * (2 / Math.floor(visibleCards))}rem)` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {capabilities.map((cap) => {
                        const style = getColorStyles(cap.color);

                        return (
                            <motion.div
                                key={cap.id}
                                className={`min-w-full sm:min-w-[340px] md:min-w-[440px] flex-shrink-0 aspect-[4/5.8] rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 flex flex-col transition-all border-2 group relative overflow-hidden ${style.bg} ${style.border} ${style.glow} hover:translate-y-[-8px] duration-500`}
                                style={{ width: `calc((100% - ${(Math.floor(visibleCards) - 1) * 2}rem) / ${Math.floor(visibleCards)})` }}
                            >
                                {/* Removed Background Image Overlay and Interactive Gradients for maximum clarity */}
                                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

                                {/* Card Header */}
                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-white/30 bg-white/20 backdrop-blur-md`}>
                                            <cap.IconComponent className={`w-6 h-6 text-white`} />
                                        </div>
                                        <h4 className={`text-base font-black tracking-tighter text-white uppercase`}>
                                            toai <span className="opacity-60">{cap.category}</span>
                                        </h4>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md">
                                        <Cpu className="w-3.5 h-3.5 text-white/60" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-tighter group-hover:translate-x-1 transition-transform">
                                        {cap.title}
                                    </h3>
                                    <p className={`font-medium leading-relaxed mb-6 text-base line-clamp-2 ${style.accent}`}>
                                        {cap.desc}
                                    </p>

                                    {/* Highlights Chips */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {cap.highlights?.map((h, i) => (
                                            <span key={i} className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all group-hover:border-white/40`}>
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Clean Multi-Metric Dashboard Panel */}
                                <div className={`mt-auto relative rounded-[2.5rem] border border-white/10 flex flex-col justify-center overflow-hidden h-[260px] bg-white/5 backdrop-blur-3xl group-hover:border-white/30 transition-all duration-700 shadow-2xl group-hover:bg-white/10`}>
                                    <MetricsDashboard title={cap.title} textColor={style.text} />
                                </div>

                                {/* Full card link */}
                                <Link to={cap.link} className="absolute inset-0 z-20" aria-label={`Learn more about ${cap.title}`} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Controls Area - Bottom */}
            <div className="mt-20 flex flex-col md:flex-row items-center justify-between px-4 gap-8">
                {/* Dots Indicator */}
                <div className="flex gap-2.5">
                    {capabilities.slice(0, maxIndex + 1).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 shadow-sm ${currentIndex === i
                                ? "w-14 bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                                : "w-2 bg-slate-200 hover:bg-slate-300"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Buttons - Light & Clean */}
                <div className="flex gap-5">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-lg hover:bg-slate-50 hover:border-slate-300 hover:scale-110 active:scale-95 transition-all duration-300 group"
                        aria-label="Previous Capability"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-lg hover:bg-slate-50 hover:border-slate-300 hover:scale-110 active:scale-95 transition-all duration-300 group"
                        aria-label="Next Capability"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CapabilitiesDiagram;
