import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Server, Building2, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const industries = [
    {
        title: "E-commerce & Retail",
        desc: "Optimize inventory, personalize customer experiences, and automate support.",
        specs: ["Demand Forecasting", "Visual Search", "Chatbot Integration"],
        icon: ShoppingCart,
        color: "bg-rose-100 text-rose-600"
    },
    {
        title: "AI Companies / Tech Firms",
        desc: "Accelerate development cycles and manage complex data pipelines.",
        specs: ["Model Training Data", "Automated QA", "Infrastructure Optimization"],
        icon: Server,
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        title: "Government Bodies",
        desc: "Enhance citizen services, ensure compliance, and streamline bureaucracy.",
        specs: ["Document Processing", "Public Service Bots", "Secure Data Management"],
        icon: Building2,
        color: "bg-slate-100 text-slate-600"
    },
    {
        title: "Enterprises",
        desc: "Unify operations across global offices and disparate legacy systems.",
        specs: ["Knowledge Management", "Cross-Department Workflows", "Legacy Integration"],
        icon: Globe,
        color: "bg-emerald-100 text-emerald-600"
    }
];

const Industries = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndustry = industries[activeIndex];
    const ActiveIcon = activeIndustry.icon;

    return (
        <div className="bg-white pt-24 pb-24">
            <div className="container mx-auto px-6">
                {/* Hero section with two columns */}
                <section className="grid gap-12 lg:grid-cols-2 items-center mb-20">
                    {/* Left: text content */}
                    <FadeInSection className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-4 py-1 text-sm font-medium text-indigo-700 shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>Industry-ready AI orchestration</span>
                        </div>

                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                                AI that understands{" "}
                                <span className="text-indigo-600">your industry</span>.
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
                                TOAI plugs into your tools, data, and workflows so every team
                                – from retail to government – can deploy AI that actually ships value.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors"
                            >
                                Talk to our experts
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/solutions"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                            >
                                Explore solutions
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                            <div className="space-y-1">
                                <p className="font-semibold text-slate-800">4+ industries</p>
                                <p>Pre-built playbooks and workflows</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-slate-800">Weeks, not months</p>
                                <p>From pilot to production</p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Right: diagrammatic visual */}
                    <FadeInSection className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative mx-auto max-w-md"
                        >
                            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-100 via-sky-50 to-rose-100 rounded-[40px] blur-2xl opacity-70" />

                            <div className="relative rounded-[32px] bg-white/80 backdrop-blur-xl border border-slate-100 shadow-[0_24px_90px_rgba(15,23,42,0.18)] p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                            Industry overview
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Where TOAI is deployed today
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        Live
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {industries.map((item, idx) => (
                                        <motion.div
                                            key={item.title}
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className="rounded-2xl border border-slate-100 bg-slate-50/70 px-3 py-3 flex flex-col gap-2"
                                        >
                                            <div
                                                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs ${item.color}`}
                                            >
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <p className="text-xs font-semibold text-slate-900 leading-snug line-clamp-2">
                                                {item.title}
                                            </p>
                                            <p className="text-[11px] text-slate-500 line-clamp-2">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-500">Deploy once, reuse everywhere</p>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Unified orchestration layer
                                        </p>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <span className="w-8 h-8 rounded-full bg-indigo-100 border border-white flex items-center justify-center text-[11px] font-semibold text-indigo-700">
                                            AI
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-rose-100 border border-white flex items-center justify-center text-[11px] font-semibold text-rose-700">
                                            Ops
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-sky-100 border border-white flex items-center justify-center text-[11px] font-semibold text-sky-700">
                                            IT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </FadeInSection>
                </section>

                {/* Existing industries section below hero */}
                <FadeInSection className="max-w-4xl mx-auto mb-10 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50/80 border border-indigo-100 px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-indigo-700 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>Transforming industries with TOAI</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Transforming <span className="text-indigo-600">Industries</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600">
                        See how TOAI delivers value across different sectors.
                    </p>
                </FadeInSection>

                {/* Interactive industry explorer */}
                <section className="grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)] items-start">
                    {/* Vertical button list navigation */}
                    <div className="space-y-3">
                        {industries.map((item, idx) => (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`group w-full flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition-all ${
                                    idx === activeIndex
                                        ? 'border-indigo-500 bg-indigo-50/90 shadow-sm'
                                        : 'border-slate-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/40'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-9 h-9 rounded-2xl flex items-center justify-center text-slate-900 text-xs ${item.color}`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p
                                            className={`text-sm font-semibold ${
                                                idx === activeIndex ? 'text-indigo-900' : 'text-slate-900'
                                            }`}
                                        >
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                                    </div>
                                </div>
                                <span
                                    className={`text-[11px] font-semibold ${
                                        idx === activeIndex ? 'text-indigo-700' : 'text-slate-400 group-hover:text-indigo-600'
                                    }`}
                                >
                                    {idx === activeIndex ? 'Selected' : 'Select'}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Detail canvas */}
                    <motion.div
                        key={activeIndustry.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
                    >
                        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-50 blur-3xl opacity-80 pointer-events-none" />
                        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-sky-50 blur-3xl opacity-70 pointer-events-none" />

                        <div className="relative p-7 sm:p-8 lg:p-10 space-y-7">
                            <div className="flex flex-wrap items-start justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${activeIndustry.color}`}
                                    >
                                        <ActiveIcon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">
                                            Industry blueprint
                                        </p>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                                            {activeIndustry.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2 text-xs">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 border border-emerald-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Ready to deploy
                                    </span>
                                    <span className="text-slate-400">
                                        View {activeIndustry.specs.length} focused use cases
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                                {activeIndustry.desc} TOAI plugs into your existing tools and data so teams can ship
                                production-ready AI workflows without changing how they already work.
                            </p>

                            <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                                        Tailored offerings
                                    </p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {activeIndustry.specs.map((spec, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 shadow-sm hover:border-indigo-200 hover:text-indigo-700 transition-colors cursor-default"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5 space-y-3">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                        What this enables
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                                        <li className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                            <span>Faster experimentation with safe access to the right data.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            <span>Reusable flows tuned for {activeIndustry.title.toLowerCase()}.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                                            <span>Clear guardrails so teams can trust AI in day‑to‑day work.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <div className="text-xs sm:text-sm text-slate-500 max-w-xs">
                                    <p className="font-semibold text-slate-800 mb-1">
                                        See how TOAI delivers value across this sector.
                                    </p>
                                    <p>
                                        From first pilot to scaled roll-out, we co-design and iterate on AI use cases
                                        with your teams.
                                    </p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-700"
                                >
                                    Talk to our team <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Industries;
