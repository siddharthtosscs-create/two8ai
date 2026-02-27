import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, MapPin, Send, Loader2 } from 'lucide-react';
import FadeInSection from '../components/animations/FadeInSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formState.name.trim() || !formState.email.trim() || !formState.mobile.trim() || !formState.message.trim()) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formState.email.trim())) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(formState.mobile.trim())) {
            setStatus('error');
            setErrorMessage('Mobile number must be exactly 10 digits.');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        const apiUrl = import.meta.env.VITE_CONTACT_API_URL || 'https://emails-api-puce.vercel.app/api/email';
        const apiPayload = {
            name: formState.name.trim(),
            email: formState.email.trim(),
            mobileNumber: formState.mobile.trim() || 'Not provided',
            message: `Enquiry from TWO8AI Website\n\n${formState.message.trim()}`
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(apiPayload)
            });

            const contentType = response.headers.get('content-type') || '';
            const result = contentType.includes('application/json')
                ? await response.json()
                : { message: await response.text() };

            if (!response.ok) {
                throw new Error(result.error || result.message || `HTTP ${response.status} - ${response.statusText}`);
            }

            if (result.error) {
                throw new Error(result.error);
            }

            setStatus('success');
            setFormState({ name: '', email: '', mobile: '', message: '' });
        } catch (error) {
            console.error('Contact form submission failed:', error);

            const isNetworkError =
                error?.message?.includes('Failed to fetch') ||
                error?.message?.includes('NetworkError') ||
                error?.name === 'TypeError';

            setErrorMessage(
                isNetworkError
                    ? 'Network error: unable to connect to the email service.'
                    : `Sorry, there was an error: ${error.message}`
            );
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <FadeInSection direction="right" className="lg:w-1/3 space-y-8">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Get in Touch</h1>
                            <p className="text-base sm:text-lg text-slate-600">
                                Ready to transform your enterprise? Our team is here to help you get started with TOAI.
                            </p>
                        </div>

                        <StaggerContainer className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'two8ai@gmail.com', href: 'mailto:two8ai@gmail.com' },
                                { icon: Globe, label: 'Website', value: 'www.two8ai.com', href: 'https://www.two8ai.com', target: '_blank' },
                                { icon: MapPin, label: 'Office', value: 'First Floor, Shiv Hari Complex, next to Gulzar Hotel, Jabalpur, MP 482003' }
                            ].map((item, idx) => (
                                <StaggerItem key={idx}>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm border border-indigo-100">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                                            {item.href ? (
                                                <a href={item.href} target={item.target} rel={item.target ? "noopener noreferrer" : undefined} className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-slate-600 font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </FadeInSection>

                    {/* Contact Form */}
                    <FadeInSection direction="left" delay={0.2} className="lg:w-2/3">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] border border-slate-100 shadow-xl"
                        >
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"
                                        >
                                            <Send className="w-10 h-10" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600">We'll get back to you shortly.</p>
                                        <button onClick={() => setStatus('idle')} className="mt-8 text-indigo-600 font-bold hover:underline">Send another message</button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="mobile" className="text-sm font-bold text-slate-700">Mobile Number</label>
                                                <input
                                                    type="tel"
                                                    id="mobile"
                                                    name="mobile"
                                                    required
                                                    pattern="\d{10}"
                                                    maxLength={10}
                                                    inputMode="numeric"
                                                    title="Please enter exactly 10 digits"
                                                    value={formState.mobile}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                                                    placeholder="9876543210"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows="4"
                                                value={formState.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white resize-none"
                                                placeholder="Tell us about your needs..."
                                            ></textarea>
                                        </div>

                                        {status === 'error' && errorMessage && (
                                            <p className="text-sm text-red-600">{errorMessage}</p>
                                        )}

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {status === 'submitting' ? (
                                                <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                                            ) : (
                                                <>Send Message <Send className="w-5 h-5" /></>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
};

export default Contact;
