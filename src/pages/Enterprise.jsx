import React from 'react';
import { motion } from 'framer-motion';
import { enterpriseSecurity } from '../data/content';
import { ShieldCheck, Lock, Globe, Server, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const Enterprise = () => {
    return (
        <div className="bg-white pt-24 pb-24">
            <div className="container mx-auto px-6">
                <FadeInSection className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6 border border-indigo-100">
                        Enterprise Grade
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8">
                        Security, Scale, and <br /><span className="text-indigo-600">Control</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Built for mission-critical operations. TOAI provides the governance, compliance, and reliability required by global organizations.
                    </p>
                </FadeInSection>

                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <FadeInSection direction="right" className="h-full">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden h-full shadow-2xl"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"
                            />
                            <ShieldCheck className="w-16 h-16 text-indigo-400 mb-8" />
                            <h3 className="text-3xl font-bold mb-6">Bank-Grade Security</h3>
                            <ul className="space-y-4 text-slate-300 text-lg">
                                {[
                                    "SOC 2 Type II Certified",
                                    "GDPR & HIPAA Compliant",
                                    "End-to-End Encryption",
                                    "Single Sign-On (SSO)"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </FadeInSection>

                    <FadeInSection direction="left" className="h-full">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-200 relative overflow-hidden h-full shadow-lg hover:shadow-xl transition-all"
                        >
                            <Server className="w-16 h-16 text-slate-900 mb-8" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Hybrid Deployment</h3>
                            <p className="text-xl text-slate-600 mb-8">
                                Deploy where you need it. TOAI supports full on-premise installation, private cloud (AWS, Azure, GCP), or our managed secure cloud.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["On-Premise", "Private Cloud", "Air-Gapped"].map((tag, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </FadeInSection>
                </div>

                <FadeInSection scale>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                        <h2 className="text-3xl font-bold mb-6 relative z-10">Ready for Enterprise Scale?</h2>
                        <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto relative z-10">
                            Get a custom deployment plan tailored to your organization's specific security and compliance needs.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block relative z-10">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
                                Contact Enterprise Sales <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default Enterprise;
