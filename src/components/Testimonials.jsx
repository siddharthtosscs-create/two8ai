import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeInSection from './animations/FadeInSection';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO, FinTek Global",
            quote: "TOAI transformed how we handle internal queries. Our support ticket volume dropped by 60% in the first month.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "David Miller",
            role: "Head of Ops, BuildRight",
            quote: "The workflow automation is simply magic. What used to take days now happens instantly when a new contract is signed.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Elena Rodriguez",
            role: "VP of Product, SoftFlow",
            quote: "Finally, an AI platform that is enterprise-ready. The security features and audit logs gave our compliance team peace of mind.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <FadeInSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-xl text-slate-500">See what our customers are saying about TOAI.</p>
                </FadeInSection>

                <FadeInSection delay={0.2} scale>
                    <div className="max-w-4xl mx-auto">
                        <Slider {...settings}>
                            {testimonials.map((t, i) => (
                                <div key={i} className="px-4 pb-12 outline-none">
                                    <div className="bg-slate-50 rounded-[3rem] p-12 text-center relative border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                        {/* Decorative Quote Icon */}
                                        <div className="text-6xl text-indigo-200 absolute top-8 left-10 font-serif leading-none select-none">“</div>

                                        <p className="text-2xl text-slate-700 italic font-medium leading-relaxed mb-8 relative z-10">
                                            "{t.quote}"
                                        </p>

                                        <div className="flex flex-col items-center justify-center space-y-4">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg cursor-pointer"
                                            >
                                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                            </motion.div>

                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                                                <p className="text-indigo-600 font-medium">{t.role}</p>
                                            </div>

                                            <div className="flex text-yellow-500 space-x-1">
                                                {[1, 2, 3, 4, 5].map(s => (
                                                    <motion.div
                                                        key={s}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1 + s * 0.05 }}
                                                    >
                                                        <Star className="w-4 h-4 fill-current" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Testimonials;
