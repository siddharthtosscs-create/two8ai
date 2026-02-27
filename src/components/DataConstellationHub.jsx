import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, FileText, Zap, Globe, Sparkles, Activity } from 'lucide-react';

/* ─── Color palette (inline styles to avoid Tailwind purge issues) ─── */
const C = {
    indigo: { hex: '#6366f1', light: '#eef2ff', glow: 'rgba(99,102,241,0.35)' },
    violet: { hex: '#8b5cf6', light: '#ede9fe', glow: 'rgba(139,92,246,0.35)' },
    blue: { hex: '#3b82f6', light: '#eff6ff', glow: 'rgba(59,130,246,0.35)' },
    rose: { hex: '#f43f5e', light: '#fff1f2', glow: 'rgba(244,63,94,0.35)' },
    sky: { hex: '#0ea5e9', light: '#f0f9ff', glow: 'rgba(14,165,233,0.35)' },
    emerald: { hex: '#10b981', light: '#ecfdf5', glow: 'rgba(16,185,129,0.35)' },
    amber: { hex: '#f59e0b', light: '#fffbeb', glow: 'rgba(245,158,11,0.35)' },
    orange: { hex: '#f97316', light: '#fff7ed', glow: 'rgba(249,115,22,0.35)' },
    purple: { hex: '#a855f7', light: '#faf5ff', glow: 'rgba(168,85,247,0.35)' },
    cyan: { hex: '#06b6d4', light: '#ecfeff', glow: 'rgba(6,182,212,0.35)' },
    green: { hex: '#22c55e', light: '#f0fdf4', glow: 'rgba(34,197,94,0.35)' },
    pink: { hex: '#ec4899', light: '#fdf2f8', glow: 'rgba(236,72,153,0.35)' },
    fuchsia: { hex: '#d946ef', light: '#fdf4ff', glow: 'rgba(217,70,239,0.35)' },
};

/* ─── Data sources ─── */
const STRUCTURED = [
    { id: 'sap', name: 'SAP', type: 'ERP', icon: Database, color: 'indigo', desc: 'Enterprise resource planning sync' },
    { id: 'oracle', name: 'Oracle', type: 'Database', icon: Database, color: 'violet', desc: 'Relational database connector' },
    { id: 'salesforce', name: 'Salesforce', type: 'CRM', icon: Zap, color: 'blue', desc: 'Customer relationship data' },
    { id: 'sql', name: 'SQL/NoSQL', type: 'DB Engine', icon: Database, color: 'cyan', desc: 'Universal database driver' },
    { id: 'excel', name: 'Excel', type: 'Sheets', icon: FileText, color: 'emerald', desc: 'Spreadsheet auto-ingestion' },
    { id: 'hrms', name: 'HRMS', type: 'HR System', icon: Globe, color: 'amber', desc: 'Human resource data pipeline' },
    { id: 'inventory', name: 'Inventory', type: 'SCM', icon: Activity, color: 'orange', desc: 'Supply chain live tracking' },
];

const UNSTRUCTURED = [
    { id: 'pdfs', name: 'PDFs', type: 'OCR', icon: FileText, color: 'rose', desc: 'Intelligent PDF parsing' },
    { id: 'scans', name: 'Scanned Files', type: 'Vision', icon: FileText, color: 'pink', desc: 'Scanned document OCR' },
    { id: 'emails', name: 'Emails', type: 'NLP', icon: Globe, color: 'sky', desc: 'Email content extraction' },
    { id: 'whatsapp', name: 'WhatsApp', type: 'Chat', icon: Zap, color: 'green', desc: 'Encrypted chat ingestion' },
    { id: 'ocr', name: 'OCR Images', type: 'AI Vision', icon: Activity, color: 'fuchsia', desc: 'Image-to-text recognition' },
    { id: 'videos', name: 'Videos', type: 'Media', icon: Globe, color: 'purple', desc: 'Frame-level video analysis' },
];

/* ─── Position calculator ─── */
const circlePos = (count, radius, idx, offset = -Math.PI / 2) => {
    const angle = offset + (2 * Math.PI * idx) / count;
    return { x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
};

/* ─── Pipeline step labels ─── */
const PIPELINE = ['Extract', 'Transform', 'Index', 'Ready'];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const DataConstellationHub = () => {
    const [active, setActive] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    /* Responsive check */
    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    /* Close panel on Escape */
    React.useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    /* Build positioned node array */
    const nodes = useMemo(() => {
        const rInner = isMobile ? 22 : 26;
        const rOuter = isMobile ? 38 : 42;

        const inner = STRUCTURED.map((s, i) => ({
            ...s, cat: 'Structured', ring: 'inner',
            ...circlePos(STRUCTURED.length, rInner, i),
        }));
        const outer = UNSTRUCTURED.map((s, i) => ({
            ...s, cat: 'Unstructured', ring: 'outer',
            ...circlePos(UNSTRUCTURED.length, rOuter, i, -Math.PI / 2 + Math.PI / UNSTRUCTURED.length),
        }));
        return [...inner, ...outer];
    }, [isMobile]);

    /* Ambient packet lines (always animate) */
    const ambientIds = ['sap', 'emails', 'salesforce'];

    const toggle = useCallback((node) => setActive(prev => prev?.id === node.id ? null : node), []);

    return (
        <section className="py-12 lg:py-28 relative overflow-hidden bg-white">
            {/* Rich ambient BG: mesh + radial glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 80% at 50% 40%, rgba(238,242,255,0.85) 0%, rgba(233,213,255,0.25) 40%, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,1) 100%)',
                }} />
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.06) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            {/* Subtle floating orbs */}
            <motion.div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity }} />
            <motion.div className="absolute bottom-[20%] right-[5%] w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }}
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* ── Header ── */}
                <div className="text-center mb-8 lg:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border mb-4 sm:mb-5"
                        style={{ background: C.indigo.light, borderColor: 'rgba(99,102,241,0.2)' }}
                    >
                        <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: C.indigo.hex }} />
                        <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em]" style={{ color: C.indigo.hex }}>Universal Adaptability</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight"
                    >
                        Zero-Silo{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">Infrastructure</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-xs sm:text-base text-slate-500 max-w-lg mx-auto"
                    >
                        Click any node to explore how TOAI connects every data source into one unified intelligence layer.
                    </motion.p>
                </div>

                {/* ── Constellation ── */}
                <motion.div
                    className="max-w-[640px] mx-auto mb-4 sm:mb-6"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                        <div className="absolute inset-0">

                            {/* SVG: rings, gradient defs, lines, packets */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                                <defs>
                                    <linearGradient id="orbitGradInner" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
                                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
                                    </linearGradient>
                                    <linearGradient id="orbitGradOuter" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.06" />
                                    </linearGradient>
                                </defs>
                                {/* Orbit rings with gradient stroke */}
                                <circle cx="50" cy="50" r={isMobile ? "22" : "26"} stroke="url(#orbitGradInner)" strokeWidth="0.35" strokeDasharray="2 2">
                                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="120s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="50" cy="50" r={isMobile ? "38" : "42"} stroke="url(#orbitGradOuter)" strokeWidth="0.3" strokeDasharray="2.5 2.5">
                                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="180s" repeatCount="indefinite" />
                                </circle>

                                {/* Connection lines */}
                                {nodes.map((n) => {
                                    const isActive = active?.id === n.id;
                                    const col = C[n.color] || C.indigo;
                                    return (
                                        <line key={`l-${n.id}`} x1={n.x} y1={n.y} x2="50" y2="50"
                                            stroke={isActive ? col.hex : 'rgba(148,163,184,0.12)'}
                                            strokeWidth={isActive ? '0.5' : '0.2'}
                                            strokeDasharray={isActive ? 'none' : '0.8 1.5'}
                                            style={{ transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)' }}
                                        />
                                    );
                                })}

                                {/* Active data-flow packets (more visible, multiple sizes) */}
                                {active && [0, 1, 2, 3, 4].map(i => (
                                    <circle key={`ap-${i}`} r={i % 2 === 0 ? 0.85 : 0.5} fill={C[active.color]?.hex || C.indigo.hex} opacity={0.9 - i * 0.1}>
                                        <animateMotion repeatCount="indefinite" dur="1.4s" begin={`${i * 0.3}s`}
                                            path={`M${active.x},${active.y} L50,50`} />
                                    </circle>
                                ))}

                                {/* Ambient packets when idle */}
                                {!active && ambientIds.map(aid => {
                                    const n = nodes.find(nd => nd.id === aid);
                                    if (!n) return null;
                                    return (
                                        <circle key={`amb-${aid}`} r="0.55" fill="#6366f1" opacity="0.3">
                                            <animateMotion repeatCount="indefinite" dur="2.8s" path={`M${n.x},${n.y} L50,50`} />
                                        </circle>
                                    );
                                })}
                            </svg>

                            {/* ── Central Core (enhanced glow + hover) ── */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-default">
                                <motion.div
                                    animate={{ scale: [1, 1.06, 1] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                    whileHover={{ scale: 1.08 }}
                                    className="relative"
                                >
                                    {/* Outer pulse rings */}
                                    <motion.div
                                        animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute -inset-6 rounded-full"
                                        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0, 0.25] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                        className="absolute -inset-4 rounded-full"
                                        style={{ background: 'rgba(99,102,241,0.15)' }}
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0, 0.2] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                        className="absolute -inset-3 rounded-full"
                                        style={{ background: 'rgba(139,92,246,0.12)' }}
                                    />
                                    {/* Core button */}
                                    <div
                                        className="w-12 h-12 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center relative z-10 border-2 border-white/30"
                                        style={{
                                            background: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #818cf8 100%)',
                                            boxShadow: '0 0 20px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-white drop-shadow-sm" />
                                    </div>
                                    <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                                        <div className="text-[8px] sm:text-[10px] font-black text-slate-800 uppercase tracking-tight">TOAI Core</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* ── Source Nodes (hover glow + tap feedback) ── */}
                            {nodes.map((node, i) => {
                                const col = C[node.color] || C.indigo;
                                const isActive = active?.id === node.id;
                                return (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.03 + i * 0.035, type: 'spring', stiffness: 280, damping: 22 }}
                                        className="absolute z-10 cursor-pointer"
                                        style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%,-50%)' }}
                                        onClick={() => toggle(node)}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.3 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                            className="relative group"
                                        >
                                            {/* Hover glow (always present, stronger on hover/active) */}
                                            <motion.div
                                                className="absolute -inset-2 sm:-inset-3 rounded-full pointer-events-none"
                                                style={{ background: col.glow }}
                                                initial={false}
                                                animate={{
                                                    scale: isActive ? [1, 1.5, 1] : 1,
                                                    opacity: isActive ? [0.5, 0, 0.5] : 0,
                                                }}
                                                transition={isActive ? { duration: 2, repeat: Infinity } : {}}
                                            />
                                            <motion.div
                                                className="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                style={{ background: col.glow, filter: 'blur(6px)' }}
                                            />
                                            {/* Node circle */}
                                            <motion.div
                                                className="w-7 h-7 sm:w-11 sm:h-11 rounded-full flex items-center justify-center relative z-10 transition-all duration-300"
                                                style={{
                                                    background: isActive ? col.hex : '#ffffff',
                                                    border: `2px solid ${isActive ? col.hex : '#e2e8f0'}`,
                                                    boxShadow: isActive ? `0 6px 24px ${col.glow}, 0 0 0 1px ${col.hex}40` : '0 2px 8px rgba(0,0,0,0.06)',
                                                }}
                                                whileHover={{ boxShadow: isActive ? undefined : `0 8px 20px ${col.glow}` }}
                                            >
                                                <node.icon className="w-3 h-3 sm:w-[18px] sm:h-[18px]" style={{ color: isActive ? '#fff' : col.hex }} />
                                            </motion.div>
                                            {/* Label: show on hover; when active (description open) show until box is closed */}
                                            {!isMobile && (
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap pointer-events-none z-10">
                                                    <span
                                                        className={`text-[7px] sm:text-[8px] font-bold uppercase tracking-wider transition-opacity duration-200 ${!isActive ? 'opacity-0 group-hover:opacity-100' : ''}`}
                                                        style={{ color: isActive ? col.hex : '#64748b' }}
                                                    >
                                                        {node.name}
                                                    </span>
                                                </div>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}

                            {/* ── Description box: Bottom Sheet for Mobile, Anchored for Desktop ── */}
                            <AnimatePresence>
                                {active && (
                                    <>
                                        {/* Backdrop for mobile */}
                                        {isMobile && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                onClick={() => setActive(null)}
                                                className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-[40]"
                                            />
                                        )}

                                        <motion.div
                                            key={active.id}
                                            initial={isMobile ? { opacity: 0, y: 100 } : { opacity: 0, scale: 0.92 }}
                                            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 }}
                                            exit={isMobile ? { opacity: 0, y: 100 } : { opacity: 0, scale: 0.96 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            className={`${isMobile ? 'fixed inset-x-4 bottom-6 mx-auto' : 'absolute'} z-[50] w-full max-w-[340px] rounded-3xl overflow-hidden pointer-events-auto shadow-2xl`}
                                            style={isMobile ? {
                                                width: 'calc(100% - 32px)',
                                            } : {
                                                left: `${active.x}%`,
                                                top: `${active.y}%`,
                                                transform: active.x < 50 ? 'translate(14%, -50%)' : 'translate(-114%, -50%)',
                                            }}
                                        >
                                            <div className="relative bg-white border border-slate-200/60 backdrop-blur-xl">
                                                <div className="flex items-start gap-4 p-5" style={{ background: 'rgba(255,255,255,0.8)' }}>
                                                    <div
                                                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                                                        style={{ background: C[active.color]?.light, border: `1px solid ${C[active.color]?.hex}25` }}
                                                    >
                                                        <active.icon className="w-6 h-6" style={{ color: C[active.color]?.hex }} />
                                                    </div>
                                                    <div className="flex-1 min-w-0 pr-6">
                                                        <div className="text-base font-black text-slate-900 leading-tight">{active.name}</div>
                                                        <div className="text-xs text-slate-500 mt-1 line-clamp-2">{active.desc}</div>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-wider"
                                                                style={{ background: active.cat === 'Structured' ? C.indigo.light : C.rose.light, color: active.cat === 'Structured' ? C.indigo.hex : C.rose.hex }}>
                                                                {active.cat}
                                                            </span>
                                                            <span className="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-wider bg-slate-100 text-slate-500">{active.type}</span>
                                                        </div>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => setActive(null)}
                                                        className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-white hover:shadow-sm transition-all shrink-0 z-10"
                                                        aria-label="Close"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="px-5 py-4 flex items-center gap-2 border-t border-slate-100/80 bg-slate-50/50">
                                                    <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: C[active.color]?.hex }} />
                                                    {PIPELINE.map((step, si) => (
                                                        <React.Fragment key={step}>
                                                            <div className="h-0.5 flex-1 min-w-[4px] rounded-full" style={{ background: `linear-gradient(90deg, ${C[active.color]?.hex}40, ${C[active.color]?.hex})` }} />
                                                            <span className="text-[8px] font-black uppercase tracking-tighter sm:tracking-wider shrink-0" style={{ color: si === PIPELINE.length - 1 ? '#059669' : '#64748b' }}>
                                                                {step}
                                                            </span>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>

                        </div>
                    </div>
                </motion.div>

                {/* ── Legend ── */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {[{ label: 'Structured', color: C.indigo }, { label: 'Unstructured', color: C.rose }].map((l, i) => (
                        <motion.div
                            key={l.label}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: i === 0 ? -10 : 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 + i * 0.05 }}
                        >
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full shadow-sm" style={{ background: l.color.hex }} />
                            <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">{l.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Hint when no node selected ── */}
                <div className="max-w-xl mx-auto" style={{ minHeight: isMobile ? 40 : 60 }}>
                    <AnimatePresence mode="wait">
                        {!active && (
                            <motion.div
                                key="hint"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-4 sm:py-6"
                            >
                                <p className="text-xs sm:text-sm text-slate-400 mb-1">Tap any node to explore its connection pipeline</p>
                                {!isMobile && <p className="text-[10px] text-slate-400/80">Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 font-mono">Esc</kbd> to close</p>}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── Bottom Stats ── */}
                <div className="max-w-2xl mx-auto mt-4 sm:mt-8 flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                    {[
                        { label: 'Data Sources', value: '13+' },
                        { label: 'Processing', value: 'Real-time' },
                        { label: 'Accuracy', value: '99.7%' },
                        { label: 'Deployment', value: 'On-Prem Ready' },
                    ].map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }}
                            className="flex items-center gap-1.5 sm:gap-2">
                            <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 uppercase tracking-wider">{s.label}:</span>
                            <span className="text-[10px] sm:text-xs font-black text-slate-700">{s.value}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataConstellationHub;
