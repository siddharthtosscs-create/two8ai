import React from 'react';
import { motion } from 'framer-motion';
import { pricingTiers } from '../data/content';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const Pricing = () => {
    return (
        <div className="bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                        Flexible Plans
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                        Pricing that Scales with <span className="text-indigo-600">You</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600">
                        Choose the plan that fits your stage of growth.
                    </p>
                </FadeInSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, idx) => {
                        const isPopular = tier.name === 'Growth';
                        return (
                            <StaggerItem key={idx} className="h-full">
                                <motion.div
                                    whileHover={{ y: -10, scale: isPopular ? 1.05 : 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`relative p-8 rounded-3xl border h-full flex flex-col transition-all duration-300 ${isPopular ? 'border-2 border-indigo-500 shadow-2xl bg-white z-10' : 'border-slate-200 bg-slate-50 shadow-sm hover:border-indigo-200'}`}
                                >
                                    {isPopular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                                    <div className="mb-8">
                                        <span className="text-4xl font-extrabold text-slate-900">
                                            {tier.name === 'Enterprise' ? 'Custom' : tier.name === 'Growth' ? '$499' : '$199'}
                                        </span>
                                        {tier.name !== 'Enterprise' && <span className="text-slate-500 font-medium">/month</span>}
                                    </div>
                                    <p className="text-slate-500 mb-8 border-b border-slate-100 pb-8 min-h-[50px]">
                                        {tier.name === 'Starter' ? 'Perfect for small teams getting started with AI.' :
                                            tier.name === 'Growth' ? 'For scaling companies needing advanced workflows.' :
                                                'Full control and security for large organizations.'}
                                    </p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            to="/contact"
                                            className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200' : 'bg-white border border-slate-200 text-slate-900 hover:border-indigo-600 hover:text-indigo-600'
                                                }`}
                                        >
                                            {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default Pricing;
