import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Server, Building2, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const industries = [
    {
        title: "E-commerce & Retail",
        desc: "Optimize inventory management, personalize customer experiences, and automate retail operations with AI-driven workflows.",
        detailDesc:
            "Optimize inventory planning, personalize customer journeys, and automate retail operations through intelligent workflows.",
        integrationDesc:
            "TOAI integrates with your existing commerce platforms, data systems, and operational tools so teams can deploy production-ready AI without disrupting existing processes.",
        specs: ["Demand Forecasting", "Visual Product Search", "Customer Support Automation"],
        enables: [
            "Faster experimentation with governed access to retail data.",
            "Reusable workflows optimized for digital commerce environments.",
            "Trusted AI operations with clear operational guardrails."
        ],
        sectorHeading: "See how TOAI drives intelligence across retail operations.",
        sectorBody:
            "From pilot deployment to scaled rollout, we collaborate with your teams to design and operationalize AI workflows.",
        icon: ShoppingCart,
        color: "bg-rose-100 text-rose-600"
    },
    {
        title: "AI Companies / Tech Firms",
        desc: "Accelerate product development, manage complex data pipelines, and scale AI-driven engineering workflows.",
        detailDesc:
            "Accelerate product development, manage complex data pipelines, and scale AI-driven engineering workflows.",
        integrationDesc:
            "TOAI integrates with development environments, infrastructure systems, and engineering data so teams can deploy production-grade AI workflows seamlessly.",
        specs: ["Model Training Data Pipelines", "Automated Quality Assurance", "Infrastructure Optimization"],
        enables: [
            "Faster experimentation with secure data access.",
            "Reusable workflows optimized for AI and technology teams.",
            "Governance frameworks that ensure reliable AI development."
        ],
        sectorHeading: "See how TOAI powers intelligence across technology organizations.",
        sectorBody:
            "From initial experimentation to scaled infrastructure deployment, we co-develop AI solutions alongside engineering teams.",
        icon: Server,
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        title: "Government Bodies",
        desc: "Improve public services, maintain regulatory compliance, and streamline administrative processes.",
        detailDesc:
            "Improve public service delivery, maintain regulatory compliance, and streamline administrative operations.",
        integrationDesc:
            "TOAI integrates with existing government systems and data platforms so agencies can deploy secure AI workflows without disrupting established processes.",
        specs: ["Document Processing Automation", "Citizen Service Bots", "Secure Data Management"],
        enables: [
            "Faster innovation with secure and compliant data access.",
            "Reusable workflows tailored for government operations.",
            "Trusted AI systems with strong governance controls."
        ],
        sectorHeading: "See how TOAI enhances intelligence across public sector operations.",
        sectorBody:
            "From pilot programs to nationwide deployment, we co-design AI solutions with government teams.",
        icon: Building2,
        color: "bg-slate-100 text-slate-600"
    },
    {
        title: "Enterprises",
        desc: "Connect global operations, unify legacy systems, and coordinate workflows across enterprise teams.",
        detailDesc:
            "Connect global operations, unify legacy systems, and coordinate workflows across enterprise teams.",
        integrationDesc:
            "TOAI integrates with existing enterprise software, data systems, and operational platforms to enable scalable intelligence across the organization.",
        specs: ["Enterprise Knowledge Management", "Cross-Department Workflow Automation", "Legacy System Integration"],
        enables: [
            "Faster experimentation with governed enterprise data access.",
            "Reusable intelligence workflows across departments.",
            "Reliable AI systems with clear operational guardrails."
        ],
        sectorHeading: "See how TOAI enables intelligence across enterprise environments.",
        sectorBody:
            "From initial deployment to organization-wide scale, we work with teams to design and implement AI workflows.",
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
                            <span>Industry-Ready Enterprise Intelligence</span>
                        </div>

                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                                Intelligence built for{" "}
                                <span className="text-indigo-600">your industry</span>.
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
                                TOAI integrates with your systems, data, and workflows so organizations across industries—from retail to government—can deploy enterprise intelligence that delivers real operational outcomes.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors"
                            >
                                Speak with our experts
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/solutions"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                            >
                                Explore industry solutions
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                            <div className="space-y-1">
                                <p className="font-semibold text-slate-800">Multiple industries supported</p>
                                <p>Pre-built industry playbooks</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-slate-800">Weeks, not months</p>
                                <p>From pilot to full deployment</p>
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
                                            Industry Deployment Overview
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Industries currently deploying TOAI
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
                                        <p className="text-xs text-slate-500">Deploy once. Scale across industries.</p>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Unified enterprise intelligence layer
                                        </p>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <span className="w-8 h-8 rounded-full bg-indigo-100 border border-white flex items-center justify-center text-[11px] font-semibold text-indigo-700">
                                            AI
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-rose-100 border border-white flex items-center justify-center text-[11px] font-semibold text-rose-700">
                                            Operations
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
                        <span>Transforming Industries with TOAI</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Transforming <span className="text-indigo-600">Industries</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600">
                        See how TOAI delivers operational intelligence across key industries.
                    </p>
                </FadeInSection>

                {/* Optional micro-section: Industry Blueprints intro */}
                <FadeInSection className="max-w-3xl mx-auto mb-8 text-center">
                    <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-indigo-700 mb-2">
                        Industry Blueprints
                    </h3>
                    <p className="text-sm md:text-base text-slate-600">
                        Pre-built intelligence frameworks designed for real-world industry workflows.
                    </p>
                    <p className="text-sm md:text-base text-slate-600 mt-1">
                        Each blueprint combines TOAI&apos;s orchestration layer with domain-specific use cases to accelerate deployment.
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
                                {activeIndustry.detailDesc} {activeIndustry.integrationDesc}
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
                                        {activeIndustry.enables.map((item, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <div className="text-xs sm:text-sm text-slate-500 max-w-xs">
                                    <p className="font-semibold text-slate-800 mb-1">
                                        {activeIndustry.sectorHeading}
                                    </p>
                                    <p>
                                        {activeIndustry.sectorBody}
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
