import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import FadeInSection from './animations/FadeInSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
                    {/* Column 1: Description */}
                    <StaggerItem className="space-y-6">
                        <Logo className="h-14 w-auto" containerClassName="space-x-2" />
                        <p className="text-slate-500 leading-relaxed text-sm">
                            The Enterprise AI Operating System. Connecting structured and unstructured data to unify intelligence and automate workflows.
                        </p>
                        <div className="flex space-x-4">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, color: '#4F46E5' }}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:shadow-md transition-all border border-slate-100"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </StaggerItem>

                    {/* Column 2: Product Links */}
                    <StaggerItem>
                        <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            {/* 'Pricing' hidden */['Overview', 'Features', 'Solutions'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase() === 'overview' ? 'product' : item.toLowerCase()}`}
                                        className="text-slate-600 hover:text-indigo-600 transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>

                    {/* Column 3: Company Links */}
                    <StaggerItem>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Leadership', path: '/leadership' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-slate-600 hover:text-indigo-600 transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>

                    {/* Column 4: Resources */}
                    <StaggerItem>
                        <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: 'Services', path: '/services' },
                                { name: 'Industries', path: '/industries' },
                                { name: 'Privacy Policy', path: '/privacy-policy' },
                                { name: 'Terms & Conditions', path: '/terms-conditions' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-slate-600 hover:text-indigo-600 transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>
                </StaggerContainer>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        © 2026 TWO8AI — All Rights Reserved
                    </p>
                    <div className="flex space-x-8 text-sm font-medium">
                        <Link to="/privacy-policy" className="text-slate-500 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="text-slate-500 hover:text-indigo-600 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
