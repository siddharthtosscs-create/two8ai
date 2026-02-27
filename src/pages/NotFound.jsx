import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen text-center px-6 bg-slate-50 overflow-hidden relative">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-50%] right-[-50%] w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
            />

            <div className="space-y-8 relative z-10">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-9xl font-black text-indigo-600"
                >
                    404
                </motion.h1>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl font-bold text-slate-900">Module Not Found</h2>
                    <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
                        It seems the page you are looking for has been automated out of existence. Or maybe it's just a broken link.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
