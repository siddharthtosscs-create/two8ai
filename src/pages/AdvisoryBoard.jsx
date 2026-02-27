import React from 'react';
import { motion } from 'framer-motion';
import { advisoryBoard } from '../data/content';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const AdvisoryBoard = () => {
    return (
        <div className="bg-white pt-24 pb-24">
            <div className="container mx-auto px-6">
                <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6">
                        Advisory <span className="text-indigo-600">Board</span>
                    </h1>
                    <p className="text-xl text-slate-600">
                        Industry veterans guiding our strategic path.
                    </p>
                </FadeInSection>

                <StaggerContainer className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {advisoryBoard.map((advisor, idx) => (
                        <StaggerItem key={idx}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl hover:border-indigo-100 transition-all cursor-default h-full flex flex-col items-center"
                            >
                                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center text-indigo-600 text-3xl font-bold shadow-inner">
                                    {advisor.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{advisor.name}</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-3">{advisor.role}</p>
                                <p className="text-slate-500 text-sm flex-grow">{advisor.bio}</p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default AdvisoryBoard;
