import React, { useRef } from 'react';
import FlipkartLogo from '../assets/images/brands/Flipkart-Logo.wine.png';
import PhonePeLogo from '../assets/images/brands/PhonePe-Logo.png';
import DefinedCrowdLogo from '../assets/images/brands/definedcrowd-logo-vector.png';
import ShaipLogo from '../assets/images/brands/5446276-shaip-logo-1-951x307.png';
import TellusLogo from '../assets/images/brands/tellus.png';
import HeroSection from '../components/HeroSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import InfiniteLoopSlider from '../components/animations/InfiniteLoopSlider';
import CapabilitiesDiagram from '../components/CapabilitiesDiagram';
import EnterpriseEngine from '../components/EnterpriseEngine';
import {
    trustedBrands,
    whatIsToai,
    coreFeatures,
    enterpriseSecurity
} from '../data/content';
import {
    CheckCircle,
    ArrowRight,
    Database,
    Brain,
    Network,
    Globe,
    ShieldCheck,
    Lock,
    Users,
    FileText,
    Zap,
    Activity,
    ShoppingBag
} from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white overflow-x-hidden">
            <HeroSection />

            {/* Trust Section - Infinite Marquee */}
            <section className="py-8 sm:py-10 md:py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8">
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted by global brands</p>
                </div>
                <InfiniteLoopSlider duration={40}>
                    {[...trustedBrands, ...trustedBrands].map((brand, idx) => {
                        const logoSrc = {
                            "Flipkart": FlipkartLogo,
                            "PhonePe": PhonePeLogo,
                            "Defined Crowd": DefinedCrowdLogo,
                            "Shaip AI": ShaipLogo,
                            "Tellus International": TellusLogo
                        }[brand];

                        return (
                            <div key={idx} className="px-6 sm:px-10">
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex items-center gap-4 bg-white/60 backdrop-blur-xl border border-white/40 px-6 py-4 rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] hover:border-indigo-200 transition-all duration-300 group cursor-default relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10 h-10 sm:h-12 w-auto flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={logoSrc} alt={brand} className="h-full w-auto object-contain max-w-[120px]" />
                                    </div>
                                    <span className="relative z-10 text-base sm:text-lg font-black text-slate-800 tracking-tight whitespace-nowrap group-hover:text-indigo-600 transition-colors hidden sm:inline-block">
                                        {brand}
                                    </span>
                                </motion.div>
                            </div>
                        );
                    })}
                </InfiniteLoopSlider>
            </section>

            {/* What is TOAI Section - Immersive Version */}
            <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden">
                {/* Background Text Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15vw] font-black text-slate-200/40 select-none pointer-events-none -z-10 tracking-tighter">
                    INTELLIGENCE
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-8">
                        {/* Text Content - Now Centered and Single Block */}
                        <div className="max-w-4xl text-center">
                            <FadeInSection>
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-4">
                                    <div className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                                    Core Architecture
                                </div>

                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
                                    What is <span className="text-indigo-600">TOAI</span>?
                                </h2>

                                <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-4 font-medium">
                                    TOAI is not a chatbot. It is the <span className="text-slate-900 font-bold">Enterprise AI Foundation Layer</span>—a centralized nervous system that unifies your entire organization's data and software ecosystem.
                                </p>
                            </FadeInSection>
                        </div>

                        {/* Interactive Visual Core - Below Description */}
                        <div className="w-full relative group">
                            <FadeInSection scale delay={0.2}>
                                <EnterpriseEngine />
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* How TOAI Works */}
            <section className="py-20 bg-slate-50/30 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-6 border border-indigo-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                            Operational Flow
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">How It Works</h2>
                        <p className="text-lg text-slate-600 font-medium">From chaotic raw data to actionable enterprise intelligence in four seamless steps.</p>
                    </FadeInSection>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line - Desktop Only */}
                        <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                {
                                    step: "01",
                                    title: "Connect",
                                    desc: "Ingest data from any enterprise source—ERP, CRM, or document stores.",
                                    icon: Database,
                                    color: "from-blue-500 to-indigo-600",
                                    glow: "group-hover:shadow-blue-500/20"
                                },
                                {
                                    step: "02",
                                    title: "Normalize",
                                    desc: "Unified knowledge structure across all structured and unstructured data.",
                                    icon: Network,
                                    color: "from-purple-500 to-indigo-600",
                                    glow: "group-hover:shadow-purple-500/20"
                                },
                                {
                                    step: "03",
                                    title: "Understand",
                                    desc: "Proprietary TOAI agents extract deep context and semantic relationships.",
                                    icon: Brain,
                                    color: "from-emerald-500 to-teal-600",
                                    glow: "group-hover:shadow-emerald-500/20"
                                },
                                {
                                    step: "04",
                                    title: "Deliver",
                                    desc: "Execute smart workflows and power your entire AI ecosystem.",
                                    icon: CheckCircle,
                                    color: "from-orange-500 to-amber-600",
                                    glow: "group-hover:shadow-orange-500/20"
                                }
                            ].map((item, idx) => (
                                <FadeInSection key={idx} delay={idx * 0.1}>
                                    <div className="group flex flex-col items-center text-center">
                                        {/* Icon & Step Circle */}
                                        <div className="relative mb-8">
                                            {/* Ripple Animation */}
                                            <div className="absolute inset-0 bg-indigo-100 rounded-[2rem] scale-90 group-hover:scale-125 opacity-0 group-hover:opacity-40 transition-all duration-700" />

                                            <div className={`relative w-24 h-24 rounded-[2rem] bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 ${item.glow}`}>
                                                <item.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />

                                                {/* Step Number Badge */}
                                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-white text-slate-900 border border-slate-100 shadow-lg flex items-center justify-center font-black text-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-colors">
                                                    {item.step}
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>

                                        {/* Decorative Arrow - Mobile/Tablet Only (Vertical) */}
                                        {idx < 3 && (
                                            <div className="lg:hidden mt-8 text-indigo-100">
                                                <ArrowRight className="w-8 h-8 rotate-90" />
                                            </div>
                                        )}
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-12 sm:py-24 bg-white">
                <div className="container mx-auto">
                    <CapabilitiesDiagram />
                </div>
            </section>


            {/* Enterprise Security Section - Interactive Security Hub */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Tech Elements */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#e0e7ff_0%,transparent_50%)]" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,#fef2f2_0%,transparent_50%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side: Command Center Info */}
                        <div className="lg:w-5/12 space-y-8">
                            <FadeInSection>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest mb-4">
                                    <Activity className="w-3 h-3" />
                                    Live Infrastructure Status
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
                                    The TOAI <span className="text-indigo-600">Secure</span> Ecosystem
                                </h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                                    A multi-layered architecture designed to meet the rigorous demands of global financial and healthcare institutions.
                                </p>

                                {/* Mini Dashboard Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        { label: "Data Encryption", value: "AES-256", status: "Active" },
                                        { label: "Compliance", value: "SOC2 / HIPAA", status: "Verified" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">{stat.label}</div>
                                            <div className="text-sm font-black text-slate-900">{stat.value}</div>
                                            <div className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-emerald-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                {stat.status}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-4">
                                    {enterpriseSecurity.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                                <CheckCircle className="w-3.5 h-3.5 text-indigo-600" />
                                            </div>
                                            <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </FadeInSection>
                        </div>

                        {/* Right Side: Interactive Node Visualizer */}
                        <div className="lg:w-7/12 w-full">
                            <FadeInSection scale>
                                <div className="relative aspect-square sm:aspect-square max-w-[600px] mx-auto flex items-center justify-center">

                                    {/* Connection Lines (SVG) - Hidden on Mobile */}
                                    <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        {/* Animated Path Connections */}
                                        <motion.path
                                            d="M300,300 L150,150" stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                                        />
                                        <motion.path
                                            d="M300,300 L450,150" stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }}
                                        />
                                        <motion.path
                                            d="M300,300 L150,450" stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }}
                                        />
                                        <motion.path
                                            d="M300,300 L450,450" stroke="url(#lineGrad)" strokeWidth="2" fill="none"
                                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.1 }}
                                        />
                                    </svg>

                                    {/* Central Secure Core - Scaled for Mobile */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-48 h-48 sm:w-64 sm:h-64 border border-indigo-100 rounded-full border-dashed"
                                    />
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.3)] ring-4 sm:ring-8 ring-indigo-50"
                                    >
                                        <ShieldCheck className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                                        <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20" />
                                    </motion.div>

                                    {/* Orbital Node Cards - Absolute on Desktop, Grid-like on Mobile */}
                                    <div className="absolute inset-0 grid grid-cols-2 gap-4 sm:block pointer-events-none">
                                        {[
                                            { Icon: Lock, title: "RBAC", pos: "sm:top-10 sm:left-10", color: "bg-blue-500", delay: 0 },
                                            { Icon: Globe, title: "Hybrid", pos: "sm:top-10 sm:right-10", color: "bg-rose-500", delay: 0.2 },
                                            { Icon: FileText, title: "Audits", pos: "sm:bottom-10 sm:left-10", color: "bg-emerald-500", delay: 0.4 },
                                            { Icon: Users, title: "Tenancy", pos: "sm:bottom-10 sm:right-10", color: "bg-amber-500", delay: 0.6 }
                                        ].map((node, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: node.delay }}
                                                whileHover={{ y: -10 }}
                                                className={`pointer-events-auto sm:absolute ${node.pos} group cursor-pointer flex justify-center items-center`}
                                            >
                                                <div className="relative bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 w-full sm:w-44 max-w-[160px] sm:max-w-none">
                                                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${node.color} flex items-center justify-center text-white mb-2 sm:mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                                                        <node.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </div>
                                                    <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-0.5 sm:mb-1">{node.title}</h4>
                                                    <p className="text-[8px] sm:text-[10px] text-slate-500 font-bold leading-tight uppercase tracking-tighter">Enterprise Standard</p>

                                                    {/* Details - Visible on hover for larger screens */}
                                                    <div className="hidden sm:block max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 mt-2">
                                                        <div className="text-[10px] text-slate-400 font-medium">Verified security protocol active across all nodes.</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Tech Decals - Hidden on Mobile */}
                                    <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />
                                    <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -z-10" />
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent -z-10" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInSection scale className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight">
                            Transform Your Organization with <span className="text-indigo-600">TOAI</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="bg-indigo-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-2xl transition-all inline-block"
                                >
                                    Request a Demo Today
                                </Link>
                            </motion.div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
