import React from 'react';
import { motion } from 'framer-motion';
import { clients, clientResults } from '../data/content';
import { CheckCircle, BarChart, Clock, Zap, Quote, Sparkles } from 'lucide-react';
import FlipkartLogo from '../assets/images/brands/Flipkart-Logo.wine.png';
import PhonePeLogo from '../assets/images/brands/PhonePe-Logo.png';
import DefinedCrowdLogo from '../assets/images/brands/definedcrowd-logo-vector.png';
import ShaipLogo from '../assets/images/brands/5446276-shaip-logo-1-951x307.png';
import TellusLogo from '../assets/images/brands/tellus.png';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const Clients = () => {
    const statsIcons = [CheckCircle, Clock, Zap, BarChart];

    const brandLogos = [
        { name: 'Flipkart', segment: 'Commerce', logo: FlipkartLogo },
        { name: 'PhonePe', segment: 'Fintech', logo: PhonePeLogo },
        { name: 'Defined Crowd', segment: 'AI Data', logo: DefinedCrowdLogo },
        { name: 'Shaip AI', segment: 'Healthcare AI', logo: ShaipLogo },
        { name: 'Tellus International', segment: 'CX & Support', logo: TellusLogo }
    ];

    return (
        <div className="min-h-screen bg-[#fafbff] overflow-hidden">
            {/* Ambient background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-indigo-200/40 via-violet-100/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl" />
                <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-100/25 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-6 pt-28 pb-32">
                {/* Hero — bold and editorial */}
                <FadeInSection className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        Client Ecosystem
                    </motion.div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05]">
                        Trusted by{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
                                Global Leaders
                            </span>
                            <motion.span
                                layoutId="underline"
                                className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-200/60 -z-0 rounded-full"
                                initial={false}
                            />
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        Enterprise AI, live in production with category-defining brands.
                    </p>
                </FadeInSection>

                {/* Logo constellation — bento-style grid with depth */}
                <FadeInSection>
                    <div className="relative mb-24">
                        <div className="max-w-6xl mx-auto">
                            <div className="relative flex items-center justify-center mb-14">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                                    className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-dashed border-indigo-200/80"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                                    className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border border-dashed border-violet-200/60"
                                />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center text-white shadow-2xl shadow-slate-900/30 ring-4 ring-white/20"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-indigo-300 mb-1">
                                        TOAI
                                    </span>
                                    <span className="text-sm font-bold text-slate-100">
                                        Enterprise AI Core
                                    </span>
                                </motion.div>
                            </div>

                            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6" staggerChildren={0.08}>
                                {brandLogos.map((brand, idx) => (
                                    <StaggerItem key={brand.name} yOffset={24}>
                                        <motion.div
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className="group relative bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] px-5 py-6 flex flex-col items-center justify-center overflow-hidden transition-shadow duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative z-10 h-11 md:h-14 w-full flex items-center justify-center mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                                <img
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    className="h-full w-auto object-contain max-w-[130px]"
                                                />
                                            </div>
                                            <div className="relative z-10 text-center">
                                                <div className="text-sm font-bold text-slate-900 tracking-tight">
                                                    {brand.name}
                                                </div>
                                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mt-1.5 group-hover:text-indigo-500 transition-colors">
                                                    {brand.segment}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </FadeInSection>

                {/* Engagement blueprint — card-style with icons */}
                <FadeInSection className="mb-24">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-400 mb-10">
                            How we engage
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent -translate-y-1/2" />
                            {['Discover', 'Design', 'Deploy'].map((stage, idx) => (
                                <motion.div
                                    key={stage}
                                    whileHover={{ y: -6 }}
                                    className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_8px_32px_rgba(15,23,42,0.06)] p-8 flex flex-col items-center text-center hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] transition-shadow duration-300"
                                >
                                    <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                        <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm shadow-lg shadow-indigo-500/30">
                                            0{idx + 1}
                                        </span>
                                        {stage}
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-600">
                                        {clients
                                            .slice(idx * 3, idx * 3 + 3)
                                            .map((client) => (
                                                <span
                                                    key={client}
                                                    className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600"
                                                >
                                                    {client}
                                                </span>
                                            ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* Trust quote strip */}
                <FadeInSection className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <Quote className="w-10 h-10 text-indigo-200 mx-auto mb-4" />
                        <p className="text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed">
                            From pilots to scaled, measurable outcomes — we ship AI that moves the needle.
                        </p>
                    </motion.div>
                </FadeInSection>

                {/* Proven Impact — premium dark block */}
                <FadeInSection scale>
                    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-[2.5rem] p-12 lg:p-20 text-white text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/25 rounded-full blur-3xl group-hover:bg-indigo-500/35 transition-all duration-1000" />
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
                            transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
                            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,23,42,0.4)_100%)]" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Proven Impact</h2>
                            <p className="text-sm md:text-base text-slate-400 mb-14 uppercase tracking-[0.2em] font-semibold">
                                Results that speak
                            </p>
                            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" staggerChildren={0.12}>
                                {clientResults.map((result, idx) => {
                                    const Icon = statsIcons[idx % statsIcons.length];
                                    const parts = result.split(' ');
                                    const headline = parts[0];
                                    const rest = parts.slice(1).join(' ');
                                    return (
                                        <StaggerItem key={idx} yOffset={16}>
                                            <motion.div
                                                whileHover={{ y: -4, scale: 1.02 }}
                                                className="flex flex-col items-center"
                                            >
                                                <motion.div
                                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                                    className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm border border-white/10 shadow-inner"
                                                >
                                                    <Icon className="w-8 h-8 text-indigo-400" />
                                                </motion.div>
                                                <h3 className="text-3xl font-bold text-white mb-1">{headline}</h3>
                                                <p className="text-slate-400 uppercase tracking-wider text-xs font-semibold">
                                                    {rest}
                                                </p>
                                            </motion.div>
                                        </StaggerItem>
                                    );
                                })}
                            </StaggerContainer>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default Clients;
