import React, { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import {
    MessageSquare,
    Bot,
    Workflow,
    ShoppingBag,
    Database,
    Ticket,
    BarChart,
    FileText,
    Users,
    Shield,
    ChevronDown,
    ArrowRight,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Send,
    Cpu,
    Zap,
    Globe,
    Lock
} from 'lucide-react';

// Image Imports
import chatImg from '../assets/images/features/chat.png';
import agentsImg from '../assets/images/features/agents.png';
import workflowImg from '../assets/images/features/workflow.png';
import procurementImg from '../assets/images/features/procurement.png';
import knowledgeImg from '../assets/images/features/knowledge.png';
import analyticsImg from '../assets/images/features/analytics.png';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import FadeInSection from '../components/animations/FadeInSection';

// --- Enhanced Features Data ---
const featuresList = [
    {
        title: "Enterprise Conversation Engine",
        tagline: "Context-aware. Intent-aware. Business-aware.",
        desc: "A conversational intelligence interface that understands enterprise context, multi-system data, and operational intent across internal communications.",
        icon: MessageSquare,
        image: chatImg,
        size: "large",
        color: "hsl(255, 90%, 65%)",
        accent: "hsl(255, 90%, 95%)",
    },
    {
        title: "Enterprise Reasoning Agents",
        tagline: "Your systems. Your workflows.",
        desc: "Deploy intelligent agents trained on your organization’s data, workflows, and operational logic to execute complex reasoning and system coordination.",
        icon: Bot,
        image: agentsImg,
        size: "medium",
        color: "hsl(220, 90%, 60%)",
        accent: "hsl(220, 90%, 95%)",
    },
    {
        title: "Workflow Orchestration",
        tagline: "Automate processes. Coordinate systems.",
        desc: "An orchestration layer that connects applications, triggers workflows, and coordinates enterprise operations in real time.",
        icon: Workflow,
        image: workflowImg,
        size: "medium",
        color: "hsl(160, 85%, 45%)",
        accent: "hsl(160, 85%, 95%)",
    },
    {
        title: "Intelligent Procurement",
        tagline: "Predict demand. Optimize spending.",
        desc: "AI-driven procurement intelligence that analyzes vendor data, purchasing trends, and operational signals to optimize enterprise spending.",
        icon: ShoppingBag,
        image: procurementImg,
        size: "large",
        color: "hsl(30, 95%, 55%)",
        accent: "hsl(30, 95%, 95%)",
    },
    {
        title: "Enterprise Knowledge Graph",
        tagline: "Unified knowledge. Instant insight.",
        desc: "A centralized intelligence graph that connects documents, systems, and operational knowledge into a unified enterprise memory.",
        icon: Database,
        image: knowledgeImg,
        size: "medium",
        color: "hsl(280, 85%, 60%)",
        accent: "hsl(280, 85%, 95%)",
    },
    {
        title: "Support Intelligence",
        tagline: "Resolve faster. Escalate smarter.",
        desc: "AI-powered support orchestration that resolves common issues automatically while providing contextual intelligence for complex cases.",
        icon: Ticket,
        image: chatImg, // Fallback
        size: "medium",
        color: "hsl(10, 85%, 55%)",
        accent: "hsl(10, 85%, 95%)",
    },
    {
        title: "Operational Intelligence",
        tagline: "Monitor systems. Detect patterns.",
        desc: "Advanced analytics that uncover operational trends, system dependencies, and emerging risks across enterprise workflows.",
        icon: BarChart,
        image: analyticsImg,
        size: "medium",
        color: "hsl(200, 90%, 55%)",
        accent: "hsl(200, 90%, 95%)",
    },
    {
        title: "Document Intelligence",
        tagline: "Extract insight from every document.",
        desc: "AI-powered document understanding that converts contracts, reports, and archives into structured enterprise intelligence.",
        icon: FileText,
        image: workflowImg, // Fallback
        size: "large",
        color: "hsl(340, 85%, 60%)",
        accent: "hsl(340, 85%, 95%)",
    },
    {
        title: "Enterprise Entity Management",
        tagline: "Structure organizations with clarity.",
        desc: "Govern corporate entities, subsidiaries, and compliance structures through a unified enterprise intelligence layer.",
        icon: Users,
        image: agentsImg, // Fallback
        size: "medium",
        color: "hsl(255, 70%, 55%)",
        accent: "hsl(255, 70%, 95%)",
    },
    {
        title: "Governance & Security",
        tagline: "Control intelligence responsibly.",
        desc: "Enterprise-grade governance that ensures secure AI deployment, auditability, and policy enforcement across the TOAI platform.",
        icon: Shield,
        image: knowledgeImg, // Fallback
        size: "medium",
        color: "hsl(180, 80%, 45%)",
        accent: "hsl(180, 80%, 95%)",
    },
];

// --- Sub-Components ---

const BackgroundParticles = () => {
    const dots = useMemo(() => Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 20,
    })), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {dots.map(dot => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full bg-indigo-400"
                    style={{
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                        width: dot.size,
                        height: dot.size,
                    }}
                    animate={{
                        y: [0, -30, 0, 30, 0],
                        x: [0, 20, 0, -20, 0],
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: dot.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

const InteractiveHub = () => {
    const [hoveredNode, setHoveredNode] = useState(null);
    const containerRef = useRef(null);

    const hubLabels = [
        { label: "Reasoning Engine", icon: Cpu, angle: 0 },
        { label: "Workflow Orchestration", icon: Workflow, angle: 60 },
        { label: "Enterprise Knowledge Graph", icon: Database, angle: 120 },
        { label: "Governance & Security", icon: Shield, angle: 180 },
        { label: "Operational Intelligence", icon: BarChart, angle: 240 },
        { label: "Decision Support", icon: Ticket, angle: 300 },
    ];

    return (
        <div ref={containerRef} className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] aspect-square flex items-center justify-center">
            {/* Pulsing Rings */}
            {[1, 2, 3].map(i => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border border-indigo-200/40"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.4, 1.8],
                        opacity: [0.4, 0.2, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "easeOut"
                    }}
                    style={{ width: '100%', height: '100%' }}
                />
            ))}

            {/* Central Hub */}
            <motion.div
                className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full bg-white shadow-[0_0_50px_rgba(124,58,237,0.15)] flex items-center justify-center p-4 border border-indigo-100/50 group"
                whileHover={{ scale: 1.05 }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-50 items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative flex flex-col items-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="mb-1 lg:mb-2"
                    >
                        <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-indigo-600" strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-[8px] lg:text-xs font-black uppercase tracking-[0.2em] text-indigo-900 text-center">TOAI Intelligence Hub</span>
                </div>
            </motion.div>

            {/* Orbital Nodes */}
            {hubLabels.map((node, i) => {
                const angle = (node.angle * Math.PI) / 180;
                // Responsive radius — slightly larger to prevent overlap of wider labels
                const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 220;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const isHovered = hoveredNode === i;

                return (
                    <motion.div
                        key={i}
                        className="absolute z-30"
                        style={{ x, y }}
                        onMouseEnter={() => setHoveredNode(i)}
                        onMouseLeave={() => setHoveredNode(null)}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                    >
                        <div className="relative">
                            {/* Connector Line */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none overflow-visible">
                                <motion.line
                                    x1="200" y1="200"
                                    x2={200 - x} y2={200 - y}
                                    stroke={isHovered ? "hsl(255, 90%, 65%)" : "rgba(165, 180, 252, 0.4)"}
                                    strokeWidth={isHovered ? 2 : 1}
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                />
                            </svg>

                            {/* Node Button */}
                            <motion.div
                                className={`flex items-center gap-2 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg cursor-default transition-all duration-300 ${isHovered ? 'shadow-indigo-500/20 border-indigo-400 -translate-y-1' : ''}`}
                                whileHover={{ scale: 1.1 }}
                            >
                                <node.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${isHovered ? 'text-indigo-600' : 'text-slate-600'}`} />
                                <span className="text-xs lg:text-sm font-bold text-slate-800 whitespace-nowrap leading-tight">
                                    {node.label.split(' ').slice(0, 1).join(' ')}<br />
                                    {node.label.split(' ').slice(1).join(' ')}
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};


const FeatureCardV2 = ({ feature, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const Icon = feature.icon;

    // 3D Tilt State
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        x.set((mouseXVal / width) - 0.5);
        y.set((mouseYVal / height) - 0.5);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`group relative min-h-[440px] rounded-[2.5rem] bg-white border border-slate-200 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden`}
        >
            <div className="relative z-10 flex flex-col md:flex-row h-full">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 relative bg-slate-50 min-h-[300px] md:min-h-full">
                    <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 10, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 md:to-white" />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white relative">
                    {/* Technical Meta Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${isHovered ? 'animate-pulse' : ''}`} style={{ backgroundColor: feature.color }} />
                            <span className="text-[10px] font-black font-mono text-slate-400 tracking-tighter uppercase whitespace-nowrap">
                                NODE_CORE / ID-[{index.toString().padStart(3, '0')}]
                            </span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Operational
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: feature.accent }}>
                                <Icon className="w-6 h-6" style={{ color: feature.color }} strokeWidth={1.5} />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300" style={{ color: feature.color }}>
                                {feature.tagline}
                            </p>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                            {feature.title}
                        </h3>
                    </div>

                    <p className="text-slate-500 leading-relaxed font-medium text-lg mb-10">
                        {feature.desc}
                    </p>

                    {/* Orchestration Footer */}
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                        <motion.div
                            className="flex items-center gap-3 group/btn cursor-pointer"
                            whileHover={{ gap: '16px' }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-xl">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Activate Module</span>
                        </motion.div>

                        <div className="flex items-center gap-2">
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


// --- Main Page Component ---

const FeaturesHero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative flex flex-col items-center justify-center bg-white overflow-hidden px-6 pt-32 pb-10 lg:pt-40 lg:pb-16">
            <BackgroundParticles />

            {/* Background Blob */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
                    {/* Left Copy */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-100/50 mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-900/60">Enterprise Intelligence Platform</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6"
                        >
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500">Enterprise</span><br />
                            Intelligence.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg sm:text-xl text-slate-500 max-w-xl mb-8 leading-relaxed font-medium"
                        >
                            TOAI connects enterprise systems, data, and workflows to deliver contextual intelligence and coordinated decision-making at scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:bg-slate-800 transition-colors flex items-center justify-center gap-3"
                            >
                                <Send className="w-4 h-4" />
                                Deploy TOAI
                            </motion.a>
                            <motion.a
                                href="#features-matrix"
                                whileHover={{ scale: 1.02 }}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                            >
                                Platform Architecture
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <InteractiveHub />
                    </div>
                </div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 flex flex-col items-center gap-4 cursor-pointer"
                onClick={() => document.getElementById('features-matrix')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Discover</span>
            </motion.div>
        </section>
    );
};

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const nextFeature = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % featuresList.length);
    };

    const prevFeature = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + featuresList.length) % featuresList.length);
    };

    const goToFeature = (idx) => {
        setDirection(idx > activeIndex ? 1 : -1);
        setActiveIndex(idx);
    };

    return (
        <main className="bg-white min-h-screen">
            <FeaturesHero />

            {/* Main Module Selection Interface */}
            <section id="features-matrix" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-slate-50/30 border-y border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(124,58,237,0.05)_0%,transparent_50%)]" />

                <div className="container relative mx-auto px-6 max-w-7xl">
                    <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            className="inline-block px-5 py-2 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                        >
                            Platform Capability Explorer
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                            Explore Enterprise <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Intelligence Modules.</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Each capability integrates directly into your enterprise systems, transforming data, workflows, and decisions into coordinated intelligence.
                        </p>
                    </FadeInSection>

                    {/* Interactive Display Area with Arrows */}
                    <div className="relative w-full mx-auto flex items-center gap-4 sm:gap-8">
                        {/* Left Arrow */}
                        <motion.button
                            onClick={prevFeature}
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="hidden lg:flex w-16 h-16 rounded-full bg-white border border-slate-200 shadow-xl items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors z-20"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </motion.button>

                        <div className="flex-1">
                            <AnimatePresence mode="wait" initial={false} custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    initial={{ opacity: 0, x: direction * 50, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: direction * -50, scale: 0.95 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.23, 1, 0.32, 1]
                                    }}
                                >
                                    <FeatureCardV2 feature={featuresList[activeIndex]} index={activeIndex} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Arrow */}
                        <motion.button
                            onClick={nextFeature}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="hidden lg:flex w-16 h-16 rounded-full bg-white border border-slate-200 shadow-xl items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors z-20"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </motion.button>

                        {/* Mobile Controls */}
                        <div className="lg:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-8">
                            <button onClick={prevFeature} className="p-4 rounded-full bg-white shadow-lg text-slate-600">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                {activeIndex + 1} / {featuresList.length}
                            </span>
                            <button onClick={nextFeature} className="p-4 rounded-full bg-white shadow-lg text-slate-600">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Dots / Pagination */}
                    <div className="flex justify-center gap-3 mt-24">
                        {featuresList.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToFeature(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-12 bg-indigo-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative overflow-hidden rounded-[3rem] p-12 sm:p-20 text-center border border-slate-200/80 bg-[#f7f9fc] shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                    >
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                Ready to deploy <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                    enterprise intelligence?
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg sm:text-xl font-medium mb-10">
                                Organizations worldwide are deploying TOAI to connect systems, automate workflows, and transform enterprise data into coordinated intelligence.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-7 sm:px-8 py-3.5 sm:py-3.5 rounded-[0.875rem] bg-indigo-600 text-white font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-700 transition-colors"
                                >
                                    Deploy TOAI
                                </motion.a>
                                <motion.a
                                    href="/about"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-7 sm:px-8 py-3.5 sm:py-3.5 rounded-[0.875rem] bg-transparent border border-[#d4d7ec] text-indigo-600 font-black text-sm uppercase tracking-[0.2em] hover:bg-[#eef2ff] transition-colors"
                                >
                                    Explore Platform
                                </motion.a>
                            </div>
                            <p className="mt-6 text-xs sm:text-sm font-semibold text-slate-400 tracking-wide">
                                Enterprise-ready • Secure deployment • Hybrid infrastructure
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Features;

