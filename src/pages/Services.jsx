import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import ServicesHeroVisual from '../components/ServicesHeroVisual';

const servicePalettes = [
    {
        bar: "from-indigo-500 via-violet-500 to-sky-400",
        cardBg: "from-indigo-50 via-white to-sky-50",
        pillBg: "bg-indigo-50",
        pillText: "text-indigo-700",
        statusText: "text-emerald-500",
        iconRing: "bg-emerald-50 text-emerald-500",
    },
    {
        bar: "from-emerald-500 via-teal-400 to-cyan-400",
        cardBg: "from-emerald-50 via-white to-cyan-50",
        pillBg: "bg-emerald-50",
        pillText: "text-emerald-700",
        statusText: "text-cyan-500",
        iconRing: "bg-cyan-50 text-cyan-500",
    },
    {
        bar: "from-fuchsia-500 via-rose-500 to-orange-400",
        cardBg: "from-fuchsia-50 via-white to-orange-50",
        pillBg: "bg-fuchsia-50",
        pillText: "text-fuchsia-700",
        statusText: "text-rose-500",
        iconRing: "bg-rose-50 text-rose-500",
    },
];

const Services = () => {
    return (
        <div className="bg-white pt-24 pb-24">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="relative mb-24 lg:mb-32">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -z-10" />
                    <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px] -z-10" />

                    <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                        {/* Left: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-white border border-indigo-100/80 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Professional Services
                            </motion.div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                Turn complex{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500">
                                    systems into outcomes
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                                Strategy, implementation, and ongoing AI operations—delivered by specialized
                                teams who bridge the gap between complex data and business growth.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    {
                                        title: "End‑to‑end delivery",
                                        desc: "From discovery and design to deployment and adoption.",
                                        icon: CheckCircle,
                                        color: "text-emerald-500",
                                        bg: "bg-emerald-50/50"
                                    },
                                    {
                                        title: "Embedded expertise",
                                        desc: "Cross‑functional teams that plug into your existing stack.",
                                        icon: CheckCircle,
                                        color: "text-indigo-500",
                                        bg: "bg-indigo-50/50"
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        whileHover={{ y: -4 }}
                                    >
                                        <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-full -mr-12 -mt-12 blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                                        <div className="relative flex items-start gap-4">
                                            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                                                <item.icon className={`w-5 h-5 ${item.color}`} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl shadow-slate-200 hover:shadow-indigo-100 hover:bg-slate-800 transition-all gap-2 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                    <span className="relative flex items-center gap-2">
                                        Talk to our team
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <a
                                    href="#services-list"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-slate-100 text-slate-700 font-bold hover:border-indigo-100 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all shadow-sm"
                                >
                                    Explore all services
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Premium Visual Container */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Decorative Blobs */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl" />

                            {/* Main Glass Card */}
                            <div className="relative rounded-[3rem] p-4 sm:p-6 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                                {/* Inner gradient border effect */}
                                <div className="absolute inset-0 border-[3px] border-transparent bg-gradient-to-tr from-indigo-100/20 via-white/40 to-purple-100/20 rounded-[3rem] pointer-events-none" />

                                <div className="relative rounded-[2.5rem] bg-white shadow-inner-lg p-6 sm:p-10 border border-slate-100/50">
                                    <ServicesHeroVisual />

                                    <motion.div
                                        className="mt-12 px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 group cursor-default"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.15em] uppercase text-indigo-500">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                            </span>
                                            How we work
                                        </div>
                                        <div className="h-4 w-[1px] bg-slate-200 hidden sm:block" />
                                        <p className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                                            Strategy → Build → Operate. One team, end to end.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Stats Label */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Reach</p>
                                        <p className="text-xl font-black text-slate-900 leading-tight">100+ AI Teams</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Services List */}
                <StaggerContainer
                    id="services-list"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => {
                        const palette = servicePalettes[idx % servicePalettes.length];
                        const serviceNumber = String(idx + 1).padStart(2, "0");

                        return (
                            <StaggerItem key={idx} className="h-full">
                                <motion.div
                                    whileHover={{ y: -12, scale: 1.03, rotate: idx % 2 === 0 ? -0.4 : 0.4 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="relative h-full group rounded-3xl overflow-hidden"
                                >
                                    {/* Animated top accent */}
                                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${palette.bar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-indigo-50/60" />
                                    </div>

                                    {/* Card body */}
                                    <div className={`relative h-full bg-gradient-to-br ${palette.cardBg} border border-slate-100 group-hover:border-transparent shadow-sm group-hover:shadow-2xl transition-all duration-300 p-8 flex flex-col`}>
                                        <div className="flex items-center justify-between mb-4 text-xs font-semibold uppercase tracking-[0.18em]">
                                            <span className={`px-2.5 py-1 rounded-full ${palette.pillBg} ${palette.pillText}`}>
                                                Service {serviceNumber}
                                            </span>
                                            <span className={`hidden sm:inline-flex items-center gap-1 ${palette.statusText}`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                                In demand
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 min-h-[3.5rem] flex items-center group-hover:text-slate-900">
                                            <span className="relative inline-flex items-center">
                                                <span className={`absolute -left-4 -right-2 -bottom-1 h-2 rounded-full bg-gradient-to-r from-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                                                <span className="relative">{service.title}</span>
                                            </span>
                                        </h3>

                                        <div className="flex-grow space-y-3 mb-6">
                                            {service.benefits.map((benefit, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    whileHover={{ x: 3 }}
                                                >
                                                    <motion.span
                                                        className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-transparent bg-white shadow-sm ${palette.iconRing}`}
                                                        animate={{ scale: [1, 1.06, 1] }}
                                                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
                                                    >
                                                        <CheckCircle className="w-3.5 h-3.5" />
                                                    </motion.span>
                                                    <span className="text-slate-600 group-hover:text-slate-700 transition-colors text-sm">
                                                        {benefit}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
                                            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 hidden sm:block">
                                                Tailored for{" "}
                                                <span className="text-slate-900">
                                                    growth & efficiency
                                                </span>
                                            </div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.96 }}
                                            >
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-900 text-slate-50 font-semibold text-sm border border-slate-900/10 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-900 transition-all gap-2 shadow-sm hover:shadow-lg"
                                                >
                                                    Get Started
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default Services;
