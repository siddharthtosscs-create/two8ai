import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/TWo8ai_logo.png';

export const Logo = ({ className = "h-10 w-auto", to = "/", onClick, ...props }) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`flex items-center gap-2 group ${props.containerClassName || ''}`}
        >
            <motion.img
                whileHover={{ scale: 1.25 }}
                src={LogoImg}
                alt="TWO8AI"
                className={`${className} object-contain`}
                {...props}
            />
        </Link>
    );
};

export default Logo;
