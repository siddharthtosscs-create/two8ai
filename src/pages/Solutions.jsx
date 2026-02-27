import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layout, Users, Code, Megaphone, Calendar, Terminal, ArrowRight, Sparkles, Command, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import FadeInSection from '../components/animations/FadeInSection';
import SolutionsHeroVisualizer from '../components/SolutionsHeroVisualizer';
import ToaiEcosystemDoc from '../assets/docs/The_TWO8_TOAI_Ecosystem.pdf';

const categories = ["Core Ops", "Growth", "Experience"];

const solutions = [
    {
        title: "Marketing",
        category: "Growth",
        desc: "Manage campaigns, automate content creation, and track creative assets in one place.",
        icon: Megaphone,
        benefits: ["Auto-generate copy", "Campaign tracking", "Asset management"],
        stats: "3x Faster Content",
        color: "violet"
    },
    {
        title: "Project Management",
        category: "Core Ops",
        desc: "Plan, track, and deliver your team's best work with AI-assisted scheduling and risk prediction.",
        icon: Calendar,
        benefits: ["Predictive timelines", "Resource allocation", "Automated updates"],
        stats: "Zero Missed Deadlines",
        color: "sky"
    },
    {
        title: "Software Development",
        category: "Core Ops",
        desc: "Build better products faster with AI-augmented coding, testing, and deployment workflows.",
        icon: Terminal,
        benefits: ["Code review automation", "Bug prediction", "Release management"],
        stats: "90% Bug Reduction",
        color: "emerald"
    },
    {
        title: "Human Resources",
        category: "Experience",
        desc: "Streamline recruitment, onboarding, and employee engagement with intelligent automation.",
        icon: Users,
        benefits: ["Resume screening", "Onboarding bots", "Employee surveys"],
        stats: "50% Faster Hiring",
        color: "fuchsia"
    },
    {
        title: "Sales & CRM",
        category: "Growth",
        desc: "Close more deals with predictive lead scoring and automated follow-ups.",
        icon: Layout,
        benefits: ["Lead scoring", "Email automation", "Pipeline analytics"],
        stats: "2x Deal Velocity",
        color: "amber"
    },
    {
        title: "IT Operations",
        category: "Core Ops",
        desc: "Monitor infrastructure, resolve incidents, and manage assets with proactive AI.",
        icon: Code,
        benefits: ["Incident response", "Asset tracking", "Compliance monitoring"],
        stats: "Self-healing Infra",
        color: "rose"
    }
];

const cardStyles = {
    violet: { bg: 'bg-violet-50/50', border: 'border-violet-200 hover:border-violet-400', icon: 'bg-violet-500', text: 'text-violet-700', tag: 'bg-violet-100 text-violet-700 hover:bg-violet-200', glow: 'from-violet-400/20' },
    sky: { bg: 'bg-sky-50/50', border: 'border-sky-200 hover:border-sky-400', icon: 'bg-sky-500', text: 'text-sky-700', tag: 'bg-sky-100 text-sky-700 hover:bg-sky-200', glow: 'from-sky-400/20' },
    emerald: { bg: 'bg-emerald-50/50', border: 'border-emerald-200 hover:border-emerald-400', icon: 'bg-emerald-500', text: 'text-emerald-700', tag: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200', glow: 'from-emerald-400/20' },
    fuchsia: { bg: 'bg-fuchsia-50/50', border: 'border-fuchsia-200 hover:border-fuchsia-400', icon: 'bg-fuchsia-500', text: 'text-fuchsia-700', tag: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200', glow: 'from-fuchsia-400/20' },
    amber: { bg: 'bg-amber-50/50', border: 'border-amber-200 hover:border-amber-400', icon: 'bg-amber-500', text: 'text-amber-700', tag: 'bg-amber-100 text-amber-700 hover:bg-amber-200', glow: 'from-amber-400/20' },
    rose: { bg: 'bg-rose-50/50', border: 'border-rose-200 hover:border-rose-400', icon: 'bg-rose-500', text: 'text-rose-700', tag: 'bg-rose-100 text-rose-700 hover:bg-rose-200', glow: 'from-rose-400/20' },
};

const Solutions = () => {
    const heroRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDocsOpen, setIsDocsOpen] = useState(false);
    const [isDocsFullscreen, setIsDocsFullscreen] = useState(false);
    const { scrollY } = useScroll();

    const heroY = useTransform(scrollY, [0, 500], [0, 120]);
    const heroOpacity = useTransform(scrollY, [0, 0.4], [1, 0]);

    const filteredSolutions = selectedCategory === "All"
        ? solutions
        : solutions.filter(s => s.category === selectedCategory);

    return (
        <div className="bg-white">
            {/* Hero Section - Product-style split layout */}
            <section
                ref={heroRef}
                className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center pt-24 lg:pt-16 pb-12 lg:pb-8 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-blue-50/30"
            >
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div
                        style={{ y: heroY }}
                        className="absolute -top-[10%] -right-[5%] w-[900px] h-[900px] bg-gradient-to-br from-indigo-200/20 to-blue-200/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[100px]"
                    />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                        {/* Left: Text Content */}
                        <div className="lg:w-[45%] text-center lg:text-left">
                            <StaggerContainer>
                                <StaggerItem>
                                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-[10px] sm:text-xs mb-6 shadow-2xl shadow-indigo-500/20 tracking-[0.2em] uppercase border border-white/10 group cursor-default">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                                        <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
                                        <span>Solutions for Every Team</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.95] perspective-1000">
                                        Tailored for <br />
                                        <span className="relative inline-block mt-1">
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 drop-shadow-sm">
                                                Your Workflow
                                            </span>
                                        </span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem>
                                    <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                                        See how TOAI adapts to the <span className="text-indigo-600 font-black border-b-2 border-indigo-100">unique needs</span> of different departments. Manage campaigns, automate workflows, and scale intelligence across your organization.
                                    </p>
                                </StaggerItem>

                                <StaggerItem>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                        <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                                            <Link to="/contact" className="group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-[1.5rem] font-black text-base transition-all shadow-2xl shadow-indigo-500/30">
                                                Request Demo
                                                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </Link>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <button
                                                type="button"
                                                onClick={() => setIsDocsOpen(true)}
                                                className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-900 hover:border-indigo-600 hover:text-indigo-600 px-8 py-3.5 rounded-[1.5rem] font-bold text-base transition-all shadow-xl shadow-slate-200/50"
                                            >
                                                <Command className="w-5 h-5 opacity-60" />
                                                Docs
                                            </button>
                                        </motion.div>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Right: Interactive Visualizer */}
                        <div className="lg:w-[55%] w-full relative">
                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-6 right-0 z-40 bg-white/5 backdrop-blur-md border border-indigo-500/10 p-3 rounded-2xl shadow-2xl hidden md:flex items-center gap-3"
                            >
                                <MousePointer2 className="w-4 h-4 text-indigo-500" />
                                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Hover to explore departments</span>
                            </motion.div>

                            <FadeInSection delay={0.6} direction="none" scale>
                                <SolutionsHeroVisualizer />
                            </FadeInSection>
                        </div>
                    </div>
                </div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
                />
            </section>

            {/* Docs Dialog */}
            {isDocsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div
                        className={`relative bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col ${
                            isDocsFullscreen ? 'w-screen h-screen rounded-none' : 'w-[90vw] max-w-5xl h-[80vh]'
                        }`}
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <Command className="w-4 h-4 text-slate-500" />
                                <span className="text-sm font-semibold text-slate-700">
                                    TWO8 TOAI Ecosystem Docs
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsDocsFullscreen((prev) => !prev)}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 bg-white transition-colors"
                                >
                                    {isDocsFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsDocsOpen(false);
                                        setIsDocsFullscreen(false);
                                    }}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-600 hover:border-rose-500 hover:text-rose-600 bg-white transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <iframe
                                title="The TWO8 TOAI Ecosystem"
                                src={ToaiEcosystemDoc}
                                className="w-full h-full rounded-b-2xl"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Solutions Content - Enhanced Bento Grid (Light Theme) */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_70%)]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <FadeInSection>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                Specialized Engines
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
                                One API. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Infinite Impact.</span>
                            </h2>
                            <p className="text-slate-500 font-medium max-w-xl mx-auto">
                                Across every functional unit, TOAI delivers purpose-built modules designed to solve your most complex operational challenges.
                            </p>
                        </FadeInSection>

                        {/* PREMIUM TOGGLER */}
                        <FadeInSection delay={0.2}>
                            <div className="mt-12 flex items-center justify-center px-4">
                                <div className="max-w-full overflow-x-auto no-scrollbar pb-2">
                                    <div className="p-1.5 bg-slate-100 rounded-[2rem] flex items-center gap-1 shadow-inner border border-slate-200/50 backdrop-blur-xl relative w-max mx-auto">
                                        {["All", ...categories].map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 z-10 whitespace-nowrap ${selectedCategory === cat
                                                    ? 'text-white'
                                                    : 'text-slate-500 hover:text-slate-900'
                                                    }`}
                                            >
                                                {selectedCategory === cat && (
                                                    <motion.div
                                                        layoutId="activeCategory"
                                                        className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-200"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                <span className="relative z-10 font-black">{cat}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredSolutions.map((item, idx) => {
                                const style = cardStyles[item.color];
                                return (
                                    <motion.div
                                        key={item.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        transition={{
                                            duration: 0.4,
                                            delay: idx * 0.05,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="group h-full"
                                    >
                                        <div
                                            className={`relative h-full overflow-hidden rounded-[2rem] p-8 flex flex-col justify-between cursor-pointer border-2 transition-all duration-500 ${style.bg} ${style.border} group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 backdrop-blur-sm`}
                                        >
                                            {/* Animated Glow Back */}
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${style.glow} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full -mr-10 -mt-10`} />

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-8">
                                                    <motion.div
                                                        whileHover={{ scale: 1.1, rotate: 12 }}
                                                        className={`w-16 h-16 rounded-2xl ${style.icon} flex items-center justify-center shadow-xl shadow-current group-hover:shadow-2xl transition-all duration-500`}
                                                    >
                                                        <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                                    </motion.div>
                                                    <div className="text-right">
                                                        <span className={`text-[10px] font-black uppercase tracking-tighter opacity-40 mb-1 block ${style.text}`}>Performance</span>
                                                        <span className={`text-sm font-black ${style.text}`}>{item.stats}</span>
                                                    </div>
                                                </div>

                                                <h3 className={`text-2xl font-black ${style.text} mb-4 group-hover:translate-x-1 transition-transform`}>
                                                    {item.title}
                                                </h3>

                                                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                                                    {item.desc}
                                                </p>

                                                <div className="flex flex-wrap gap-2.5 mb-2">
                                                    {item.benefits.map((benefit, i) => (
                                                        <span
                                                            key={i}
                                                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 border border-transparent hover:border-current cursor-default ${style.tag}`}
                                                        >
                                                            {benefit}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative z-10 pt-6 mt-8 border-t border-slate-200/50 flex items-center justify-between group-hover:border-slate-300/50 transition-colors">
                                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Explore Solution</span>
                                                <div className={`w-8 h-8 rounded-full border-2 ${style.border} flex items-center justify-center group-hover:bg-white group-hover:translate-x-1 transition-all`}>
                                                    <ArrowRight className={`w-4 h-4 ${style.text}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
