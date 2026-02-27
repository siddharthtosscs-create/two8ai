import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ tier, price, features, highlighted = false }) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: highlighted ? 1.06 : 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative p-10 rounded-[2.5rem] border flex flex-col h-full transition-all duration-300 ${highlighted
                ? 'bg-indigo-900 text-white border-indigo-700 shadow-2xl scale-105 z-10'
                : 'bg-white text-slate-900 border-slate-100 shadow-xl hover:border-indigo-100'
                }`}
        >
            {highlighted && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: -24 }} // Positioned above
                    className="absolute top-0 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg whitespace-nowrap"
                >
                    Most Popular
                </motion.div>
            )}

            <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-indigo-200' : 'text-indigo-600'}`}>{tier}</h3>
            <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold">{price}</span>
                {price !== 'Contact' && <span className={`ml-2 text-lg ${highlighted ? 'text-indigo-300' : 'text-slate-400'}`}>/mo</span>}
            </div>

            <ul className="space-y-6 mb-12 flex-grow">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${highlighted ? 'bg-indigo-500/30' : 'bg-indigo-50'}`}>
                            <Check className={`w-4 h-4 ${highlighted ? 'text-white' : 'text-indigo-600'}`} />
                        </div>
                        <span className={highlighted ? 'text-indigo-100' : 'text-slate-600'}>{f}</span>
                    </li>
                ))}
            </ul>

            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${highlighted
                    ? 'bg-white text-indigo-900 hover:bg-slate-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
                    }`}
            >
                {price === 'Contact' ? 'Talk to Sales' : 'Start Trial'}
            </motion.button>
        </motion.div>
    );
};

export default PricingCard;
