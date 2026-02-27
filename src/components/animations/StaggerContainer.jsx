import { motion } from 'framer-motion';

const StaggerContainer = ({
    children,
    staggerChildren = 0.1,
    delayChildren = 0,
    className = '',
    viewport = { once: true, margin: "-50px" }
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = '', yOffset = 20 }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: yOffset },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10 // smooth spring
            }
        }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
