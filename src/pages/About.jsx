import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/content';
import {
    Target,
    Eye,
    Brain,
    Network,
    ShieldCheck,
    Users,
    Building2,
    Sparkles,
    Database,
    MessageCircle,
    Mail,
    Code,
    FileText,
    Folder
} from 'lucide-react';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const About = () => {
    return (
        <div className="bg-white pt-24 pb-24">
            {/* Hero – split layout */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    {/* Left: narrative */}
                    <FadeInSection className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs tracking-[0.22em] uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                            TWO8AI · TOAI Platform
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                                Building the intelligence layer
                                <br />
                                <span className="text-indigo-600">for every enterprise</span>
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 max-w-xl">
                                TWO8AI is building TOAI, an intelligence OS that sits at the center of all your systems
                                and connects data, tools, and workflows into one coherent brain for the enterprise.
                            </p>
                        </div>
                    </FadeInSection>

                    {/* Right: diagrammatic system view */}
                    <FadeInSection className="relative lg:-mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="relative max-w-xl mx-auto"
                        >
                            {/* Soft gradient shell */}
                            <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 blur-2xl opacity-80" />

                            {/* Main card */}
                            <div className="relative rounded-[32px] bg-white/95 backdrop-blur-xl border border-orange-100 shadow-[0_24px_80px_rgba(248,113,22,0.22)] px-6 py-7">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-5">
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-500">
                                            TOAI intelligence map
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Systems that plug into the TOAI core.
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Production ready
                                    </span>
                                </div>

                                {/* Center node + spokes layout */}
                                <div className="relative py-6">
                                    {/* Horizontal glow */}
                                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-20 bg-gradient-to-r from-transparent via-orange-100/80 to-transparent blur-xl pointer-events-none" />

                                    {/* Left column nodes */}
                                    <div className="relative flex items-center justify-between gap-4">
                                        <div className="flex flex-col gap-3">
                                            <DiagramNode
                                                side="left"
                                                icon={Users}
                                                label="CRM"
                                                tag="Customer data"
                                                colorClass="bg-orange-500"
                                            />
                                            <DiagramNode
                                                side="left"
                                                icon={MessageCircle}
                                                label="WhatsApp"
                                                tag="Conversations"
                                                colorClass="bg-emerald-500"
                                            />
                                            <DiagramNode
                                                side="left"
                                                icon={Mail}
                                                label="Emails"
                                                tag="Threads & tickets"
                                                colorClass="bg-sky-500"
                                            />
                                            <DiagramNode
                                                side="left"
                                                icon={Code}
                                                label="APIs"
                                                tag="Internal services"
                                                colorClass="bg-slate-900"
                                            />
                                        </div>

                                        {/* Center TOAI core */}
                                        <div className="relative z-10 flex flex-col items-center justify-center px-7 py-5 rounded-[1.75rem] bg-white shadow-[0_18px_45px_rgba(248,113,22,0.45)] border border-orange-100">
                                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-1">
                                                TOAI
                                            </p>
                                            <p className="text-sm font-semibold text-slate-900">Intelligence OS</p>
                                        </div>

                                        {/* Right column nodes */}
                                        <div className="flex flex-col gap-3 items-end">
                                            <DiagramNode
                                                side="right"
                                                icon={Building2}
                                                label="ERP"
                                                tag="Operations"
                                                colorClass="bg-orange-500"
                                            />
                                            <DiagramNode
                                                side="right"
                                                icon={Folder}
                                                label="Google Drive"
                                                tag="Files & assets"
                                                colorClass="bg-amber-500"
                                            />
                                            <DiagramNode
                                                side="right"
                                                icon={FileText}
                                                label="Docs"
                                                tag="Knowledge base"
                                                colorClass="bg-rose-500"
                                            />
                                            <DiagramNode
                                                side="right"
                                                icon={Database}
                                                label="Database"
                                                tag="Transactional data"
                                                colorClass="bg-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Simple connecting lines behind nodes */}
                                    <div className="pointer-events-none absolute inset-0">
                                        <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 opacity-60" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </FadeInSection>
                </div>
            </section>

            {/* Company stats */}
            <section className="bg-slate-50 py-16 border-y border-slate-100 mb-20">
                <div className="container mx-auto px-6">
                    <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {aboutContent.stats.map((stat, idx) => (
                            <StaggerItem key={idx}>
                                <AnimatedStat value={stat.value} label={stat.label} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Mission & vision */}
            <section className="container mx-auto px-6 mb-20">
                <FadeInSection className="max-w-3xl mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50/80 border border-indigo-100 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-indigo-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span>Mission &amp; Vision</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                        The philosophy behind <span className="text-indigo-600">TOAI</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600">
                        Why we&apos;re building this platform and the world we&apos;re aiming it at.
                    </p>
                </FadeInSection>

                <div className="grid md:grid-cols-2 gap-10">
                    <FadeInSection direction="up">
                        <motion.div
                            whileHover={{ y: -10, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                            className="group relative h-full overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-[0_28px_80px_rgba(15,23,42,0.85)] px-8 sm:px-10 py-10 sm:py-12 transition-all duration-300 hover:border-indigo-500/70 hover:shadow-[0_32px_90px_rgba(79,70,229,0.9)]"
                        >
                            <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-2" />
                            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl transition-transform duration-500 group-hover:-translate-x-3 group-hover:translate-y-2" />

                            <div className="relative flex flex-col gap-5 transition-transform duration-300 group-hover:translate-y-1">
                                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-indigo-100 backdrop-blur transition-colors duration-300 group-hover:bg-white/10 group-hover:border-indigo-300/70">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/40 shadow-[0_0_0_rgba(79,70,229,0.0)] transition-all duration-300 group-hover:bg-indigo-500/40 group-hover:shadow-[0_0_24px_rgba(79,70,229,0.9)]">
                                        <Target className="w-4 h-4 text-indigo-100 transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <span className="tracking-[0.22em] uppercase">Our Mission</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight transition-colors duration-300 group-hover:text-indigo-100">
                                    Turn scattered enterprise systems into one intelligence layer.
                                </h3>
                                <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed max-w-xl">
                                    {aboutContent.mission}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-indigo-300/70">
                                        Outcome-first AI
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-indigo-300/70">
                                        Deep systems understanding
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-indigo-300/70">
                                        Built with operators
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </FadeInSection>

                    <FadeInSection direction="up" delay={0.1}>
                        <motion.div
                            whileHover={{ y: -10, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                            className="group relative h-full overflow-hidden rounded-[2.5rem] border border-indigo-500/60 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-[0_28px_80px_rgba(79,70,229,0.7)] px-8 sm:px-10 py-10 sm:py-12 transition-all duration-300 hover:border-white/70 hover:shadow-[0_34px_96px_rgba(129,140,248,0.95)]"
                        >
                            <div className="pointer-events-none absolute -top-24 left-6 h-56 w-56 rounded-full bg-white/15 blur-3xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:translate-x-2" />
                            <div className="pointer-events-none absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-sky-400/30 blur-3xl transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-3" />

                            <div className="relative flex flex-col gap-5 transition-transform duration-300 group-hover:translate-y-1">
                                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-indigo-50 backdrop-blur transition-colors duration-300 group-hover:bg-white/20 group-hover:border-white/60">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/40 shadow-[0_0_0_rgba(255,255,255,0.0)] transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-[0_0_26px_rgba(191,219,254,0.95)]">
                                        <Eye className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <span className="tracking-[0.22em] uppercase">Our Vision</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight transition-colors duration-300 group-hover:text-white">
                                    A world where every enterprise has a calm, orchestration-first brain.
                                </h3>
                                <p className="text-sm sm:text-base text-indigo-50 leading-relaxed max-w-xl">
                                    {aboutContent.vision}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-indigo-50/90">
                                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/70">
                                        Human-in-the-loop by design
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/70">
                                        Trustable AI in production
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/70">
                                        Open &amp; interoperable
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </FadeInSection>
                </div>
            </section>

            {/* How TOAI shows up in organisations */}
            <section className="container mx-auto px-6 mb-20">
                <FadeInSection className="max-w-4xl mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        What we&apos;re building with TOAI
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600">
                        Three simple pillars that show how TOAI lands inside real organisations.
                    </p>
                </FadeInSection>

                <div className="relative">
                    <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-indigo-50/80 to-transparent blur-3xl" />
                    <div className="relative grid md:grid-cols-3 gap-6">
                        <AboutPillar
                            index={1}
                            icon={Brain}
                            title="Unified knowledge fabric"
                            tagline="Everything your teams know, in one view."
                            points={[
                                'Connect ERPs, CRMs, tickets, docs, and warehouses.',
                                'Normalise into a single, queryable model.',
                                'Power search, retrieval, and reasoning everywhere.'
                            ]}
                        />
                        <AboutPillar
                            index={2}
                            icon={Network}
                            title="Department-ready workflows"
                            tagline="AI that plugs into how teams already work."
                            points={[
                                'Prebuilt flows for sales, support, ops, and IT.',
                                'Trigger from chat, email, or internal tools.',
                                'Ship value without ripping out existing systems.'
                            ]}
                        />
                        <AboutPillar
                            index={3}
                            icon={ShieldCheck}
                            title="Enterprise-grade guardrails"
                            tagline="Trustable AI in the middle of critical systems."
                            points={[
                                'Granular permissions and data boundaries.',
                                'Full observability on prompts, actions, and outcomes.',
                                'Designed for audits, security teams, and regulators.'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <FadeInSection className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    Guided by &quot;Total Openness in Striving for Success&quot;
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mb-4">
                    For us, TOAI is as much a philosophy as it is a platform. We build in partnership with customers,
                    stay transparent about trade-offs, and focus on shipping real value into complex enterprises—not
                    just prototypes.
                </p>
                <p className="text-sm sm:text-base text-slate-500">
                    That&apos;s why we design TOAI to be open, interoperable, and deeply aligned with how your teams
                    already operate today.
                </p>
            </FadeInSection>
        </div>
    );
};

const DatabaseIcon = (props) => <div {...props}><span className="sr-only">Database</span></div>;

const DiagramNode = ({ icon: Icon, label, tag, colorClass }) => (
    <motion.div
        whileHover={{ y: -4, scale: 1.03 }}
        className="pointer-events-auto"
    >
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_14px_35px_rgba(15,23,42,0.12)] px-3 py-2.5 text-[11px] min-w-[140px] flex items-center gap-3">
            <div className={`flex h-7 w-7 items-center justify-center rounded-xl ${colorClass} text-white`}>
                {Icon && <Icon className="w-3.5 h-3.5" />}
            </div>
            <div className="space-y-0.5">
                <p className="font-semibold text-slate-900 leading-snug">{label}</p>
                <p className="text-[10px] text-slate-500">{tag}</p>
            </div>
        </div>
    </motion.div>
);

const AnimatedStat = ({ value, label }) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        const match = value.match(/[\d.]+/);
        if (!match) return;

        const numericPart = parseFloat(match[0]);
        const suffix = value.slice(match[0].length);

        let frameId;
        const duration = 1400;
        const start = performance.now();

        const animate = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            const current = numericPart * progress;
            const formatted =
                Number.isInteger(numericPart) ? Math.round(current).toString() : current.toFixed(1);

            setDisplayValue(`${formatted}${suffix}`);

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            }
        };

        setDisplayValue(`0${suffix}`);
        frameId = requestAnimationFrame(animate);

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [value]);

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="space-y-1"
        >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-600 tracking-tight">
                {displayValue}
            </div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {label}
            </div>
        </motion.div>
    );
};

const AboutPillar = ({ index, icon: Icon, title, tagline, points }) => (
    <FadeInSection>
        <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            className="group h-full rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-indigo-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    <span>Pillar {index}</span>
                </div>
                {Icon && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1.5">{title}</h3>
            {tagline && (
                <p className="text-xs sm:text-sm text-slate-500 mb-3">
                    {tagline}
                </p>
            )}
            {Array.isArray(points) && points.length > 0 && (
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-500 transition-colors duration-200" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    </FadeInSection>
);

export default About;
