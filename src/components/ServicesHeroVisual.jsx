import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Wrench, TrendingUp, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const steps = [
    {
        num: '01',
        label: 'Discover',
        sub: 'Strategy & roadmap',
        icon: Lightbulb,
        color: 'from-blue-500 to-indigo-600',
        glow: 'rgba(59, 130, 246, 0.5)',
        details: 'Deep analysis of your current infrastructure and AI readiness.'
    },
    {
        num: '02',
        label: 'Build',
        sub: 'Design & implement',
        icon: Wrench,
        color: 'from-indigo-500 to-purple-600',
        glow: 'rgba(99, 102, 241, 0.5)',
        details: 'Custom AI solutions built with scalability and security in mind.'
    },
    {
        num: '03',
        label: 'Operate',
        sub: 'Run & optimize',
        icon: TrendingUp,
        color: 'from-purple-500 to-fuchsia-600',
        glow: 'rgba(168, 85, 247, 0.5)',
        details: 'Continuous monitoring and iterative improvements for peak performance.'
    },
];

export default function ServicesHeroVisual() {
    const [hoveredStep, setHoveredStep] = useState(null);

    return (
        <div className="relative w-full max-w-[580px] mx-auto select-none py-4">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-x-0 top-0 -bottom-20 pointer-events-none overflow-hidden rounded-[3rem]">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-400/10 blur-[100px] rounded-full"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 blur-[120px] rounded-full"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </div>

            {/* Central Orbital Hub */}
            <div className="relative h-56 sm:h-64 flex items-center justify-center mb-10">
                <AnimatePresence mode="wait">
                    {hoveredStep !== null && (
                        <motion.div
                            key="details"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/80 backdrop-blur-md border border-indigo-100 rounded-full shadow-lg z-20 hidden md:flex items-center gap-2 whitespace-nowrap"
                        >
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span className="text-xs font-medium text-slate-700">{steps[hoveredStep].details}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                    {/* Rotating Rings */}
                    <motion.div
                        className="absolute inset-0 border border-dashed border-indigo-200/50 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                        className="absolute inset-6 border border-dashed border-purple-200/40 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Glowing Core */}
                    <motion.div
                        className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 blur-2xl"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Main Interactive Orb */}
                    <motion.div
                        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[2rem] bg-white shadow-2xl shadow-indigo-200/50 border-2 border-indigo-50 flex items-center justify-center cursor-pointer z-10"
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.3)'
                        }}
                        animate={{
                            y: [0, -8, 0],
                            rotateX: [0, 5, 0],
                            rotateY: [0, 10, 0]
                        }}
                        transition={{
                            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                            rotateX: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                            rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                            type: 'spring',
                            stiffness: 400,
                            damping: 20
                        }}
                    >
                        <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center shadow-inner relative overflow-hidden group"
                        >
                            {/* Reflex highlight */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                            <motion.div
                                animate={{ rotate: [-45, -40, -45] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <ArrowRight className="w-8 h-8 text-white shadow-sm" />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Accent Icons */}
                    <motion.div
                        className="absolute -top-4 -right-4 p-2.5 bg-white rounded-xl shadow-lg border border-slate-100"
                        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Zap className="w-5 h-5 text-amber-500" />
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-2 -left-6 p-2.5 bg-white rounded-xl shadow-lg border border-slate-100"
                        animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <Shield className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                </div>
            </div>

            {/* Step Sequence */}
            <div className="relative">
                {/* Connection Line Background */}
                <div className="absolute top-12 left-[12%] right-[12%] h-1 bg-slate-100 rounded-full hidden sm:block" />

                {/* Active Progress Line */}
                <motion.div
                    className="absolute top-12 left-[12%] h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full hidden sm:block origin-left z-0"
                    initial={{ scaleX: 0 }}
                    animate={{
                        scaleX: hoveredStep === null ? (1 / 6) : (hoveredStep * 0.4 + 0.2),
                    }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    style={{ width: '76%' }}
                />

                <div className="grid grid-cols-3 gap-6 relative z-10">
                    {steps.map((step, i) => {
                        const isHovered = hoveredStep === i;
                        const isPrev = hoveredStep !== null && hoveredStep > i;

                        return (
                            <motion.div
                                key={step.num}
                                className="relative flex flex-col items-center cursor-pointer"
                                onMouseEnter={() => setHoveredStep(i)}
                                onMouseLeave={() => setHoveredStep(null)}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border-2 flex flex-col items-center justify-center mb-4 relative overflow-hidden transition-colors duration-500`}
                                    animate={{
                                        borderColor: isHovered ? 'transparent' : 'rgb(241 245 249)',
                                        boxShadow: isHovered
                                            ? `0 20px 40px -10px ${step.glow}`
                                            : '0 10px 15px -3px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    {/* Hover Background Gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0`}
                                        animate={{ opacity: isHovered ? 0.05 : 0 }}
                                    />

                                    <motion.div
                                        className={`w-12 h-12 flex items-center justify-center rounded-xl mb-1 ${isHovered ? 'bg-indigo-50/50' : ''}`}
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                            rotate: isHovered ? [0, -5, 5, 0] : 0
                                        }}
                                    >
                                        <step.icon className={`w-8 h-8 ${isHovered ? 'text-indigo-600' : 'text-indigo-400'}`} />
                                    </motion.div>

                                    <span className={`text-[10px] font-black tracking-tighter ${isHovered || isPrev ? 'text-indigo-600' : 'text-slate-400'}`}>
                                        {step.num}
                                    </span>

                                    {/* Active Indicator Bar */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: isHovered ? '100%' : '0%' }}
                                    />
                                </motion.div>

                                <div className="text-center group">
                                    <h4 className={`text-base font-bold transition-colors duration-300 ${isHovered ? 'text-indigo-600' : 'text-slate-800'}`}>
                                        {step.label}
                                    </h4>
                                    <p className={`text-[11px] font-medium transition-colors duration-300 ${isHovered ? 'text-slate-700' : 'text-slate-500'}`}>
                                        {step.sub}
                                    </p>
                                </div>

                                {/* Floating indicator above hovered item */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="absolute -top-1 w-2 h-2 rounded-full bg-indigo-500"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

