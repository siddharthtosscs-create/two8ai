import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    Zap,
    Cpu,
    ShieldCheck,
    Brain,
    FileText,
    ArrowUpRight,
    Activity,
    Network,
    Lock
} from 'lucide-react';

const EnterpriseEngine = () => {
    const [activeSection, setActiveSection] = useState(null);

    const modules = [
        {
            id: 'unify',
            title: 'Unified Knowledge',
            icon: Database,
            color: 'from-blue-600 to-indigo-600',
            stats: '100% Connectivity',
            desc: 'Connects to SAP, Oracle, and legacy systems into a single source of truth.',
            grid: 'md:col-span-8 md:row-span-1',
            details: ['Multi-source Sync', 'Live Ingestion', 'Knowledge Graph']
        },
        {
            id: 'process',
            title: 'Holographic OCR',
            icon: FileText,
            color: 'from-rose-500 to-orange-600',
            stats: '99.9% Accuracy',
            desc: 'Turns complex PDFs into data.',
            grid: 'md:col-span-4 md:row-span-1',
            details: ['Handwritten Notes', 'Forms']
        },
        {
            id: 'security',
            title: 'Enterprise Trust',
            icon: ShieldCheck,
            color: 'from-emerald-500 to-teal-600',
            stats: 'Banking-Grade',
            desc: 'Secure hybrid deployment.',
            grid: 'md:col-span-4 md:row-span-1',
            details: ['Audit Logs', 'RBAC']
        },
        {
            id: 'core',
            title: 'TOAI CORE',
            icon: Brain,
            color: 'from-indigo-600 to-purple-700',
            stats: 'Neural Engine',
            desc: 'The central intelligence system.',
            grid: 'md:col-span-4 md:row-span-1',
            details: ['Reasoning Agents', 'NLP']
        },
        {
            id: 'action',
            title: 'Smart Automation',
            icon: Zap,
            color: 'from-amber-500 to-yellow-600',
            stats: 'Real-time',
            desc: 'Trigger workflows across apps.',
            grid: 'md:col-span-4 md:row-span-1',
            details: ['API Trigger', 'Webhooks']
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-4 select-none">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 lg:gap-6">
                {modules.map((module) => (
                    <motion.div
                        key={module.id}
                        onMouseEnter={() => setActiveSection(module.id)}
                        onMouseLeave={() => setActiveSection(null)}
                        whileHover={{ y: -5 }}
                        className={`${module.grid} relative overflow-hidden bg-white rounded-[2.5rem] p-6 lg:p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_25px_80px_rgba(99,102,241,0.08)]`}
                    >
                        {/* Hover Subtle Gradient Accent */}
                        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${module.color} opacity-[0.03] rounded-full blur-3xl -mr-24 -mt-24 group-hover:opacity-[0.08] transition-opacity duration-700`} />

                        <div className="relative z-10 w-full">
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <module.icon className="w-7 h-7" />
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-50/50 px-3 py-1.5 rounded-lg border border-indigo-100/50">
                                    {module.stats}
                                </div>
                            </div>

                            <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {module.title}
                            </h3>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xs mb-6">
                                {module.desc}
                            </p>

                            {/* Internal Visual/List to fill space naturally */}
                            <div className="flex flex-wrap gap-2">
                                {module.details.map((detail, i) => (
                                    <span key={i} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 rounded-md bg-slate-50/30 group-hover:border-indigo-100 group-hover:text-indigo-400 transition-colors">
                                        {detail}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between relative z-10">
                            <div className="flex gap-1.5">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={activeSection === module.id ? { scaleY: [1, 2, 1], opacity: [0.5, 1, 0.5] } : {}}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                        className="w-1 h-3 bg-indigo-100 rounded-full group-hover:bg-indigo-500 transition-all duration-300"
                                    />
                                ))}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Fine decorative tech detail */}
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            <module.icon className="w-32 h-32" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EnterpriseEngine;
