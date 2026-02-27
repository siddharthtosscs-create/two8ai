import React from 'react';
import { motion } from 'framer-motion';
import { leadership, advisoryBoard } from '../data/content';
import { Linkedin, Twitter } from 'lucide-react';
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

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {leadership.map((leader, idx) => (
                        <StaggerItem key={idx}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="group h-full"
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[3/4] shadow-md group-hover:shadow-xl transition-all">
                                    {leader.image ? (
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-slate-100 flex items-center justify-center text-slate-300 text-6xl font-black opacity-30">
                                            {leader.name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex gap-4 justify-center text-white">
                                            <motion.div whileHover={{ scale: 1.2, color: '#818cf8' }}><Linkedin className="w-5 h-5 cursor-pointer" /></motion.div>
                                            <motion.div whileHover={{ scale: 1.2, color: '#818cf8' }}><Twitter className="w-5 h-5 cursor-pointer" /></motion.div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{leader.name}</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-2">{leader.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Advisory Board Section */}
                <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Advisory <span className="text-indigo-600">Board</span>
                    </h2>
                </FadeInSection>

                <StaggerContainer className="flex flex-wrap justify-center gap-8">
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
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex gap-4 justify-center text-white">
                                            <motion.div whileHover={{ scale: 1.2, color: '#818cf8' }}><Linkedin className="w-5 h-5 cursor-pointer" /></motion.div>
                                            <motion.div whileHover={{ scale: 1.2, color: '#818cf8' }}><Twitter className="w-5 h-5 cursor-pointer" /></motion.div>
                                        </div>
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
