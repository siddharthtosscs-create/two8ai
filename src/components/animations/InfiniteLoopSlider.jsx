import { motion } from 'framer-motion';

const InfiniteLoopSlider = ({ children, duration = 20, reverse = false }) => {
    return (
        <div className="flex overflow-hidden">
            <motion.div
                className="flex gap-8 sm:gap-12 min-w-full items-center"
                animate={{
                    x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
};

export default InfiniteLoopSlider;
