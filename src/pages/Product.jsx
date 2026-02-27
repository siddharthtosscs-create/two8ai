import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { productPageContent } from '../data/content';
import {
    Database,
    FileText,
    Zap,
    ArrowRight,
    Sparkles,
    Activity,
    Globe,
    ChevronRight,
    MousePointer2,
    Command
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import ProductHeroVisualizer from '../components/ProductHeroVisualizer';
import ArchitectureCommandCenter from '../components/ArchitectureCommandCenter';
import DataConstellationHub from '../components/DataConstellationHub';

const Product = () => {
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="bg-white">
            {/* Hero Section - The Enterprise Intelligence Portal */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center pt-16 pb-8 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-blue-50/30">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div
                        style={{ y: yTransform }}
                        className="absolute -top-[10%] -right-[5%] w-[900px] h-[900px] bg-gradient-to-br from-indigo-200/20 to-blue-200/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[100px]"
                    />

                    {/* Animated Tech Grid */}
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
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
                        {/* Text Content - High Impact */}
                        <div className="lg:w-[45%] text-center lg:text-left">
                            <StaggerContainer>
                                <StaggerItem>
                                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-[10px] sm:text-xs mb-6 shadow-2xl shadow-indigo-500/20 tracking-[0.2em] uppercase border border-white/10 group cursor-default">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                                        <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
                                        <span>Evolution of Enterprise AI</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.95] perspective-1000">
                                        Unified <br />
                                        <span className="relative inline-block mt-1">
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 drop-shadow-sm">
                                                Knowledge
                                            </span>
                                            <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                                Engine
                                            </span>
                                        </span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem>
                                    <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                                        Synthesize and search across <span className="text-indigo-600 font-black border-b-2 border-indigo-100">every legacy silo</span> within minutes. TOAI is the neural fabric that connects your ERP, CRM, and documents into a living intelligence layer.
                                    </p>
                                </StaggerItem>

                                <StaggerItem>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link to="/contact" className="group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-[1.5rem] font-black text-base transition-all shadow-2xl shadow-indigo-500/30">
                                                Request Demo
                                                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </Link>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link to="/contact" className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-900 hover:border-indigo-600 hover:text-indigo-600 px-8 py-3.5 rounded-[1.5rem] font-bold text-base transition-all shadow-xl shadow-slate-200/50">
                                                <Command className="w-5 h-5 opacity-60" />
                                                Docs
                                            </Link>
                                        </motion.div>
                                    </div>
                                </StaggerItem>

                                <StaggerItem>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2.5 }}
                                        className="mt-6 flex flex-col sm:flex-row items-center gap-6 lg:justify-start"
                                    >
                                        <div className="flex -space-x-4">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -5, zIndex: 50 }}
                                                    className="w-12 h-12 rounded-2xl border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-lg"
                                                >
                                                    <img src={`https://i.pravatar.cc/150?u=${i + 100}`} alt="user" className="w-full h-full object-cover" />
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="text-left">
                                            <div className="flex items-center gap-1.5 mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Sparkles key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                                                ))}
                                                <span className="text-xs font-black text-slate-900 ml-1 italic">Vanguard Tier</span>
                                            </div>
                                            <div className="text-sm font-bold text-slate-500 tracking-tight">
                                                Powering <span className="text-indigo-600">500+</span> Enterprise Vector Depots
                                            </div>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Ultra Interactive Visual Container */}
                        <div className="lg:w-[55%] w-full relative">
                            {/* Floating Interaction Hint */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-6 right-0 z-40 bg-white/5 backdrop-blur-md border border-indigo-500/10 p-3 rounded-2xl shadow-2xl hidden md:flex items-center gap-3"
                            >
                                <MousePointer2 className="w-4 h-4 text-indigo-500" />
                                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Hover to probe nodes</span>
                            </motion.div>

                            <FadeInSection delay={0.6} direction="none" scale>
                                <ProductHeroVisualizer />
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                ARCHITECTURE COMMAND CENTER — Immersive Dark Section
               ══════════════════════════════════════════════════════ */}
            <ArchitectureCommandCenter />

            {/* ══════════════════════════════════════════════════════
                DATA CONSTELLATION — Interactive Orbital Visualization
               ══════════════════════════════════════════════════════ */}
            <DataConstellationHub />

            {/* CTA - Final Enterprise Invitation */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <FadeInSection scale>
                        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.9]">
                            Scale <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Cognition</span>
                        </h2>
                        <p className="text-2xl text-slate-500 mb-16 font-medium max-w-3xl mx-auto">
                            Join the world's most innovative enterprises using TOAI to drive decision-making at the speed of thought.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                            <Link to="/contact" className="flex items-center gap-4 bg-slate-900 border-2 border-slate-900 text-white px-16 py-7 rounded-[3rem] font-black text-2xl transition-all shadow-3xl hover:bg-white hover:text-slate-900 group">
                                Deploy Intelligence
                                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </FadeInSection>
                </div>
            </section>

        </div>
    );
};

export default Product;
