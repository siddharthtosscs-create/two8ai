import { motion } from 'framer-motion';
import { useState } from 'react';

const FeatureCard = ({ icon, title, description, tagline, color = "indigo", size = "medium" }) => {
    const [isHovered, setHovered] = useState(false);

    const colorMap = {
        indigo: {
            accent: "bg-indigo-500",
            accentLight: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        orange: {
            accent: "bg-orange-500",
            accentLight: "bg-orange-50",
            iconColor: "text-orange-600",
        },
        green: {
            accent: "bg-emerald-500",
            accentLight: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
        purple: {
            accent: "bg-violet-500",
            accentLight: "bg-violet-50",
            iconColor: "text-violet-600",
        },
        violet: {
            accent: "bg-violet-500",
            accentLight: "bg-violet-50",
            iconColor: "text-violet-600",
        },
        blue: {
            accent: "bg-blue-500",
            accentLight: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        rose: {
            accent: "bg-rose-500",
            accentLight: "bg-rose-50",
            iconColor: "text-rose-600",
        },
    };

    const c = colorMap[color] || colorMap.indigo;
    const isLarge = size === "large";

    return (
        <motion.article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative h-full cursor-pointer rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-offset-2"
        >
            <div className={`relative h-full flex bg-white rounded-xl border border-slate-200/80 transition-all duration-300 ${isHovered ? "border-slate-300 shadow-lg shadow-slate-200/50" : "shadow-sm"}`}>
                {/* Left accent strip + icon */}
                <div className={`flex flex-col items-center justify-center shrink-0 ${c.accentLight} ${isLarge ? "w-20 sm:w-24 px-4" : "w-16 sm:w-20 px-3"}`}>
                    <motion.div
                        className={`rounded-lg ${c.accent} flex items-center justify-center ${isLarge ? "w-12 h-12 sm:w-14 sm:h-14" : "w-10 h-10 sm:w-11 sm:h-11"}`}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <span className={`text-white ${isLarge ? "[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7" : "[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6"}`}>
                            {icon}
                        </span>
                    </motion.div>
                </div>

                {/* Content */}
                <div className={`flex flex-col flex-1 min-w-0 ${isLarge ? "p-5 sm:p-6 lg:p-7" : "p-4 sm:p-5"}`}>
                    <h3 className={`font-bold text-slate-900 mb-0.5 transition-colors duration-200 group-hover:text-indigo-600 ${isLarge ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}>
                        {title}
                    </h3>
                    {tagline && (
                        <p className={`font-medium ${c.iconColor} mb-2 ${isLarge ? "text-xs sm:text-sm" : "text-xs"}`}>
                            {tagline}
                        </p>
                    )}
                    <p className={`text-slate-600 leading-relaxed flex-grow text-sm sm:text-base`}>
                        {description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 mt-3 pt-3 border-t border-slate-100">
                        <span className="relative inline-block">
                            Learn more
                            <motion.span
                                className="absolute left-0 bottom-0.5 h-0.5 bg-indigo-500 rounded-full origin-left"
                                initial={false}
                                animate={{ scaleX: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.25 }}
                            />
                        </span>
                        <motion.span
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            →
                        </motion.span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default FeatureCard;
