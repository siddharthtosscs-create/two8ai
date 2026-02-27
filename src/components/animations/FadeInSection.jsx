import { motion } from 'framer-motion';

const FadeInSection = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    once = true,
    scale = false
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 }
    };

    const initial = {
        opacity: 0,
        ...directions[direction],
        scale: scale ? 0.95 : 1
    };

    const whileInView = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] // smooth cubic-bezier
        }
    };

    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{ once, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
