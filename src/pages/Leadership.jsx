import React from 'react';
import { motion } from 'framer-motion';
import { leadership, advisoryBoard } from '../data/content';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const Leadership = () => {
    return (
        <div className="bg-white pt-24 pb-24">
            <div className="container mx-auto px-6">
                <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6">
                        Meet Our <span className="text-indigo-600">Leaders</span>
                    </h1>
                    <p className="text-xl text-slate-600">
                        The visionaries driving TWO8AI forward.
                    </p>
                </FadeInSection>

                <StaggerContainer className="flex flex-col gap-10 mb-24">
                    {leadership.map((leader, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                    className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm px-6 py-6 sm:px-8 sm:py-8 flex flex-col gap-6 ${
                                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } md:items-center md:gap-10`}
                                >
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-50/60 via-white to-violet-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative w-full md:w-[40%] max-w-xs mx-auto md:mx-0">
                                        <div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-square shadow-lg group-hover:shadow-2xl transition-all">
                                            {leader.image ? (
                                                <motion.img
                                                    whileHover={{ scale: 1.03 }}
                                                    transition={{ duration: 0.4 }}
                                                    src={leader.image}
                                                    alt={leader.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-slate-100 flex items-center justify-center text-slate-300 text-6xl font-black opacity-30">
                                                    {leader.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative w-full md:w-[60%] text-center md:text-left flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                            {leader.name}
                                        </h3>
                                        <p className="text-indigo-600 font-semibold text-sm md:text-base mb-4">
                                            {leader.role}
                                        </p>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                                            {leader.bio}
                                        </p>
                                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed opacity-95">
                                            As {leader.role} at TWO8AI, {leader.name} plays a key role in shaping strategy, empowering teams, and ensuring every decision is aligned with our mission to build intelligent, human-centric products for the enterprises we serve.
                                        </p>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                {/* Advisory Board Section */}
                <FadeInSection className="hidden text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Advisory <span className="text-indigo-600">Board</span>
                    </h2>
                </FadeInSection>

                <StaggerContainer className="hidden flex flex-wrap justify-center gap-8">
                    {advisoryBoard.map((advisor, idx) => (
                        <StaggerItem key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group h-full"
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[3/4] shadow-md group-hover:shadow-xl transition-all">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-slate-100 flex items-center justify-center text-slate-300 text-6xl font-black opacity-30">
                                        {advisor.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{advisor.name}</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-2">{advisor.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{advisor.bio}</p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default Leadership;
