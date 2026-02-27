import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import VideoPlayerModal from './VideoPlayerModal';
import ToaiHeroImg from '../assets/images/Toai_hero.png';
import FadeInSection from './animations/FadeInSection';

const HeroSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityBackground = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <>
            <section ref={containerRef} className="relative pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 md:pb-8 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50 border-b border-indigo-50">
                {/* Background Blobs - Parallax Effect */}
                <motion.div
                    style={{ y: yBackground, opacity: opacityBackground }}
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-indigo-200/30 rounded-full blur-3xl -z-10"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -10, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 2
                        }}
                        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-rose-100/40 rounded-full blur-3xl -z-10"
                    />
                </motion.div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
                            <FadeInSection delay={0.1}>
                                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-indigo-700 font-semibold text-xs sm:text-sm border border-indigo-100 shadow-sm">
                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>Enterprise AI Foundation Layer</span>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={0.2}>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                    TOAI — The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">Enterprise AI</span> Operating System
                                </h1>
                            </FadeInSection>

                            <FadeInSection delay={0.3}>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                    An AI foundation layer that connects structured and unstructured data across your organization to automate workflows, enhance decision-making, and unify intelligence.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.4}>
                                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsVideoOpen(true)}
                                        className="w-full sm:w-auto bg-white text-indigo-600 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-base font-bold shadow-xl shadow-indigo-100 hover:shadow-indigo-200 hover:bg-indigo-50 transition-all border border-indigo-100/50 flex items-center justify-center space-x-2"
                                    >
                                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-indigo-600" />
                                        <span>Watch Demo</span>
                                    </motion.button>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                        <Link
                                            to="/contact"
                                            className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-base font-bold hover:border-indigo-600 hover:text-indigo-600 transition-colors hover:bg-indigo-50 flex items-center justify-center space-x-2"
                                        >
                                            <span>Get Started</span>
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className="lg:w-1/2 relative w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative z-10 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-white"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none" />
                                    <img
                                        src={ToaiHeroImg}
                                        alt="TOAI Dashboard"
                                        className="w-full h-auto object-contain"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Decorative elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 w-full h-full bg-gradient-to-tr from-indigo-600/10 to-rose-500/10 -z-10 rounded-full blur-3xl transform rotate-12"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Player Modal */}
            <VideoPlayerModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoSrc="/src/assets/videos/demo_video.mp4"
            />
        </>
    );
};

export default HeroSection;
