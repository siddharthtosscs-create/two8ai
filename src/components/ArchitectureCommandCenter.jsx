import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Layers, Server, ShieldCheck, Brain, Zap, Lock, Network, Cpu, ChevronRight, Fingerprint, ScanLine, Radio } from 'lucide-react';

/* ─────────────────────────────────────────
   TYPEWRITER TEXT
   ───────────────────────────────────────── */
const TypewriterText = ({ text, delay = 0, speed = 30, className = '' }) => {
    const [displayed, setDisplayed] = useState('');
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        const startTimer = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(startTimer);
    }, [isInView, delay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <span ref={ref} className={className}>
            {displayed}
            {started && displayed.length < text.length && (
                <span className="inline-block w-[2px] h-[1em] bg-indigo-500 ml-0.5 animate-pulse align-middle" />
            )}
        </span>
    );
};

/* ─────────────────────────────────────────
   SCAN LINE OVERLAY (light mode)
   ───────────────────────────────────────── */
const ScanLineOverlay = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
            className="absolute left-0 right-0 h-[2px]"
            style={{
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), rgba(129,140,248,0.25), rgba(99,102,241,0.15), transparent)',
                boxShadow: '0 0 20px rgba(99,102,241,0.1), 0 0 60px rgba(99,102,241,0.05)',
            }}
        />
    </div>
);

/* ─────────────────────────────────────────
   ANIMATED HEX GRID BACKGROUND (light)
   ───────────────────────────────────────── */
const HexGrid = () => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="hexPattern" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#6366f1" strokeWidth="0.5" />
                <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#6366f1" strokeWidth="0.3" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
    </svg>
);

/* ─────────────────────────────────────────
   ENERGY BEAM (SVG animated path)
   ───────────────────────────────────────── */
const EnergyBeam = ({ x1, y1, x2, y2, delay = 0, color = '#6366f1' }) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2 - 40;
    const pathD = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;

    return (
        <g>
            {/* Base beam */}
            <motion.path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeOpacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay, ease: 'easeInOut' }}
            />
            {/* Glow beam */}
            <motion.path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeOpacity="0.06"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay, ease: 'easeInOut' }}
            />
            {/* Pulse particle traveling along beam */}
            <motion.circle
                r="3"
                fill={color}
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    offsetDistance: ['0%', '100%'],
                }}
                transition={{
                    duration: 3,
                    delay: delay + 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                }}
                style={{ offsetPath: `path("${pathD}")` }}
            />
            <motion.circle
                r="6"
                fill={color}
                opacity="0.12"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.15, 0.15, 0],
                    offsetDistance: ['0%', '100%'],
                }}
                transition={{
                    duration: 3,
                    delay: delay + 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                }}
                style={{ offsetPath: `path("${pathD}")` }}
            />
        </g>
    );
};

/* ─────────────────────────────────────────
   FLOATING METRICS HUD (light mode)
   ───────────────────────────────────────── */
const FloatingHUD = ({ label, value, unit, x, y, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        className="absolute hidden lg:block"
        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
        <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay * 2 }}
            className="px-3.5 py-2 rounded-xl bg-white/80 border border-slate-200/80 backdrop-blur-md shadow-lg shadow-slate-200/40"
        >
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{label}</div>
            <div className="text-sm font-black text-slate-900">
                {value}<span className="text-indigo-500 text-xs ml-0.5">{unit}</span>
            </div>
        </motion.div>
    </motion.div>
);

/* ─────────────────────────────────────────
   STATION NODE - Interactive Card (Light)
   ───────────────────────────────────────── */
const StationNode = ({ station, index, isActive, onClick }) => {
    const colors = {
        indigo: {
            ring: 'border-indigo-400/40',
            glow: 'shadow-indigo-200/40',
            text: 'text-indigo-600',
            textSoft: 'text-indigo-500',
            bg: 'bg-indigo-500',
            bgSoft: 'bg-indigo-50',
            border: 'border-indigo-200',
            borderActive: 'border-indigo-300',
            specDot: 'bg-indigo-500',
        },
        blue: {
            ring: 'border-blue-400/40',
            glow: 'shadow-blue-200/40',
            text: 'text-blue-600',
            textSoft: 'text-blue-500',
            bg: 'bg-blue-500',
            bgSoft: 'bg-blue-50',
            border: 'border-blue-200',
            borderActive: 'border-blue-300',
            specDot: 'bg-blue-500',
        },
        emerald: {
            ring: 'border-emerald-400/40',
            glow: 'shadow-emerald-200/40',
            text: 'text-emerald-600',
            textSoft: 'text-emerald-500',
            bg: 'bg-emerald-500',
            bgSoft: 'bg-emerald-50',
            border: 'border-emerald-200',
            borderActive: 'border-emerald-300',
            specDot: 'bg-emerald-500',
        },
    };
    const c = colors[station.color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
            onClick={() => onClick(index)}
            className="relative cursor-pointer group"
        >
            {/* Outer pulse ring */}
            <motion.div
                animate={isActive ? { scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute -inset-3 rounded-[2rem] border ${isActive ? c.ring : 'border-transparent'} transition-all duration-500`}
            />

            <div className={`relative p-8 lg:p-10 rounded-[1.8rem] transition-all duration-700 overflow-hidden
                ${isActive
                    ? `bg-white border ${c.borderActive} shadow-xl ${c.glow}`
                    : 'bg-white/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50'
                }`}
            >
                {/* Background gradient on active */}
                <motion.div
                    animate={{ opacity: isActive ? 0.04 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${station.gradient} rounded-[1.8rem]`}
                />

                {/* Corner scanner effect */}
                {isActive && (
                    <motion.div
                        animate={{ rotate: [0, 90] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-4 right-4 w-8 h-8"
                    >
                        <div className={`w-full h-[2px] ${c.bg} opacity-30`} />
                        <div className={`w-[2px] h-full ${c.bg} opacity-30 absolute top-0 right-0`} />
                    </motion.div>
                )}

                <div className="relative z-10">
                    {/* Status + Icon Row */}
                    <div className="flex items-center justify-between mb-6">
                        <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
                                ${isActive
                                    ? `${c.bgSoft} border ${c.border}`
                                    : 'bg-slate-50 border border-slate-200 group-hover:border-slate-300'}`}
                        >
                            <station.icon className={`w-7 h-7 transition-colors duration-500 ${isActive ? c.text : 'text-slate-400 group-hover:text-slate-600'}`} />
                        </motion.div>

                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ scale: isActive ? [1, 1.3, 1] : 1, opacity: isActive ? [0.5, 1, 0.5] : 0.3 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className={`w-2 h-2 rounded-full ${isActive ? c.bg : 'bg-slate-300'}`}
                            />
                            <span className={`text-[9px] font-mono uppercase tracking-widest ${isActive ? c.textSoft : 'text-slate-400'}`}>
                                {isActive ? 'ACTIVE' : 'STANDBY'}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-black uppercase tracking-tight mb-3 transition-colors duration-500
                        ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {station.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-5 transition-colors duration-500
                        ${isActive ? 'text-slate-600' : 'text-slate-500'}`}>
                        {station.desc}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {station.features.map((feat, fi) => (
                            <span
                                key={fi}
                                className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all duration-500
                                    ${isActive
                                        ? `${c.bgSoft} ${c.text} border ${c.border}`
                                        : 'bg-slate-50 text-slate-500 border border-slate-200 group-hover:border-slate-300'}`}
                            >
                                {feat}
                            </span>
                        ))}
                    </div>

                    {/* Expandable Specs Panel */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="pt-5 border-t border-slate-200">
                                    {/* Terminal-style specs */}
                                    <div className="space-y-2.5 font-mono">
                                        {station.specs.map((spec, si) => (
                                            <motion.div
                                                key={si}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: si * 0.12 }}
                                                className="flex items-center justify-between"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${c.specDot}`} />
                                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{spec.label}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-xs font-black text-slate-900">{spec.value}</span>
                                                    <span className={`text-[10px] ${c.textSoft}`}>{spec.unit}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* System log line */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-4 pt-3 border-t border-slate-100"
                                    >
                                        <div className="flex items-center gap-2 text-[9px] font-mono">
                                            <span className={c.textSoft}>▸</span>
                                            <TypewriterText
                                                text={station.logMessage}
                                                delay={600}
                                                speed={20}
                                                className="text-slate-400"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Click hint */}
                    {!isActive && (
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-indigo-500 transition-colors mt-2"
                        >
                            <ScanLine className="w-3 h-3" />
                            <span className="uppercase tracking-widest">Tap to analyze</span>
                            <ChevronRight className="w-3 h-3" />
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT: Architecture Command Center (Light)
   ═══════════════════════════════════════════════════ */
const ArchitectureCommandCenter = () => {
    const [activeStation, setActiveStation] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [bootPhase, setBootPhase] = useState(0); // 0=hidden, 1=booting, 2=ready

    useEffect(() => {
        if (!isInView) return;
        setBootPhase(1);
        const t1 = setTimeout(() => setBootPhase(2), 1800);
        return () => clearTimeout(t1);
    }, [isInView]);

    const stations = [
        {
            icon: Layers,
            title: 'Intelligence Layer',
            desc: 'Proprietary vectorization engine that translates multi-modal data into singular cognitive context.',
            color: 'indigo',
            gradient: 'from-indigo-600 to-violet-600',
            features: ['LLM Agnostic', 'Context Persistent', 'Multi-modal'],
            specs: [
                { label: 'Vector Throughput', value: '2.4M', unit: '/sec' },
                { label: 'Context Window', value: '128K', unit: 'tokens' },
                { label: 'Accuracy', value: '99.7', unit: '%' },
            ],
            logMessage: 'Cognitive engine initialized. Vector pipeline nominal.',
        },
        {
            icon: Server,
            title: 'Adaptive Connectors',
            desc: 'Auto-discovery of data structures across SAP, Salesforce, and archaic file shares with zero config.',
            color: 'blue',
            gradient: 'from-blue-600 to-cyan-500',
            features: ['Zero Config', 'Auto-Discovery', 'Schema Mapping'],
            specs: [
                { label: 'Connectors', value: '200', unit: '+' },
                { label: 'Sync Latency', value: '<50', unit: 'ms' },
                { label: 'Uptime SLA', value: '99.99', unit: '%' },
            ],
            logMessage: 'Connector fabric online. 200+ endpoints mapped.',
        },
        {
            icon: ShieldCheck,
            title: 'Sovereign Security',
            desc: 'Deploy anywhere. Remain air-gapped. Your LLM weights and vector data never leave your VPN.',
            color: 'emerald',
            gradient: 'from-emerald-600 to-teal-500',
            features: ['Air-Gapped', 'PII Redaction', 'On-Prem Ready'],
            specs: [
                { label: 'Encryption', value: 'AES', unit: '-256' },
                { label: 'Compliance', value: 'SOC2', unit: '+ GDPR' },
                { label: 'Data Residency', value: '100', unit: '%' },
            ],
            logMessage: 'Security perimeter active. Zero-trust validated.',
        },
    ];

    const handleStationClick = useCallback((index) => {
        setActiveStation(prev => prev === index ? null : index);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative pt-6 pb-20 lg:pt-10 lg:pb-28 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 30%, #f1f5f9 50%, #f8fafc 70%, #ffffff 100%)',
            }}
        >
            {/* ── Background Layers ── */}
            <HexGrid />
            <ScanLineOverlay />

            {/* Radial gradient spotlights (soft light colors) */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100/20 rounded-full blur-[180px] pointer-events-none" />

            {/* Animated grid lines (very subtle on light bg) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* ── Boot Animation Overlay ── */}
                <AnimatePresence>
                    {bootPhase === 1 && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-50 flex items-center justify-center"
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [0.5, 1.2, 1], opacity: [0, 1, 1] }}
                                transition={{ duration: 1.2 }}
                                className="text-center"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className="w-16 h-16 mx-auto mb-6 rounded-2xl border-2 border-indigo-300 bg-white shadow-lg shadow-indigo-100 flex items-center justify-center"
                                >
                                    <Cpu className="w-8 h-8 text-indigo-600" />
                                </motion.div>
                                <div className="text-sm font-mono text-indigo-600 tracking-widest uppercase">
                                    <TypewriterText text="Initializing Architecture..." delay={200} speed={40} />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Main Content (fades in after boot) ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: bootPhase >= 2 ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* ── Header ── */}
                    <div className="text-center mb-14">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: bootPhase >= 2 ? '100%' : 0 }}
                            transition={{ duration: 1.5 }}
                            className="mx-auto mb-8 h-px max-w-md"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent)' }}
                        />

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: bootPhase >= 2 ? 0 : 20, opacity: bootPhase >= 2 ? 1 : 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 bg-indigo-50 border border-indigo-200/60"
                        >
                            <Radio className="w-3.5 h-3.5 text-indigo-500" />
                            <span className="text-[10px] font-mono text-indigo-600 uppercase tracking-[0.3em]">Architecture Overview</span>
                            <motion.div
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                            />
                        </motion.div>

                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: bootPhase >= 2 ? 0 : 30, opacity: bootPhase >= 2 ? 1 : 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6"
                        >
                            <span className="text-slate-900">Built for </span>
                            <span className="relative">
                                <span className="text-transparent bg-clip-text" style={{
                                    backgroundImage: 'linear-gradient(135deg, #6366f1, #4f46e5, #7c3aed, #6366f1)',
                                    backgroundSize: '200% 200%',
                                    animation: 'gradientShift 4s ease infinite',
                                }}>
                                    Cognitive Scale
                                </span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: bootPhase >= 2 ? 1 : 0 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full origin-left"
                                    style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)' }}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: bootPhase >= 2 ? 0 : 20, opacity: bootPhase >= 2 ? 1 : 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
                        >
                            We didn't just build an AI tool. We built the fundamental intelligence layer that transforms how enterprises interact with their own collective memory.
                        </motion.p>
                    </div>

                    {/* ── SVG Connection Beams (Desktop only) ── */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none z-[2]">
                        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {bootPhase >= 2 && (
                                <>
                                    <EnergyBeam x1={600} y1={340} x2={200} y2={520} delay={0.5} color="#818cf8" />
                                    <EnergyBeam x1={600} y1={340} x2={600} y2={520} delay={0.8} color="#60a5fa" />
                                    <EnergyBeam x1={600} y1={340} x2={1000} y2={520} delay={1.1} color="#34d399" />
                                </>
                            )}
                        </svg>
                    </div>

                    {/* ── Central Core ── */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: bootPhase >= 2 ? 1 : 0, opacity: bootPhase >= 2 ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="flex justify-center mb-16 relative"
                    >
                        <div className="relative">
                            {/* Rotating outer ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-6 rounded-full border border-dashed border-indigo-300/40"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-12 rounded-full border border-dotted border-indigo-200/30"
                            />

                            {/* Pulse rings */}
                            <motion.div
                                animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -inset-4 rounded-full bg-indigo-300/15"
                            />
                            <motion.div
                                animate={{ scale: [1, 2.2, 1], opacity: [0.15, 0, 0.15] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="absolute -inset-4 rounded-full bg-indigo-200/10"
                            />

                            {/* Core */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                className="relative w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer"
                                style={{
                                    background: 'linear-gradient(135deg, #4f46e5, #6366f1, #818cf8)',
                                    boxShadow: '0 8px 30px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1), inset 0 1px 1px rgba(255,255,255,0.3)',
                                }}
                            >
                                <Brain className="w-9 h-9 text-white" />
                            </motion.div>

                            {/* Core label */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                            >
                                <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-[0.4em]">TOAI Core</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── Floating HUD Metrics ── */}
                    {bootPhase >= 2 && (
                        <>
                            <FloatingHUD label="Throughput" value="2.4M" unit="/s" x={8} y={35} delay={1} />
                            <FloatingHUD label="Latency" value="<50" unit="ms" x={92} y={35} delay={1.3} />
                            <FloatingHUD label="Nodes" value="200" unit="+" x={15} y={70} delay={1.6} />
                            <FloatingHUD label="Uptime" value="99.99" unit="%" x={85} y={70} delay={1.9} />
                        </>
                    )}

                    {/* ── Station Cards Grid ── */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {stations.map((station, index) => (
                            <StationNode
                                key={index}
                                station={station}
                                index={index}
                                isActive={activeStation === index}
                                onClick={handleStationClick}
                                totalStations={stations.length}
                            />
                        ))}
                    </div>

                    {/* ── Bottom Status Bar ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-10"
                    >
                        {[
                            { label: 'System Status', value: 'Operational', dotColor: 'bg-emerald-500' },
                            { label: 'Architecture', value: 'v3.2.1', dotColor: 'bg-indigo-500' },
                            { label: 'Last Sync', value: 'Just now', dotColor: 'bg-blue-500' },
                            { label: 'Regions', value: '12 Active', dotColor: 'bg-violet-500' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                    className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`}
                                />
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{item.label}:</span>
                                <span className="text-[10px] font-mono text-slate-700 font-bold">{item.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Inline keyframes for gradient animation */}
            <style>{`
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
};

export default ArchitectureCommandCenter;
