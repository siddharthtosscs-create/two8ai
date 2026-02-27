import React from 'react';
import FadeInSection from '../components/animations/FadeInSection';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <FadeInSection>
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8">Last Updated: February 2026</p>

                    <div className="prose prose-lg prose-indigo max-w-none text-slate-600">
                        <p>
                            At TWO8AI ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (two8ai.com) and use our TOAI platform.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h3>
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number that you voluntarily give to us when you register with the Site or our mobile application, or when you choose to participate in various activities related to the Site and our mobile application.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Use of Your Information</h3>
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Create and manage your account.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Disclosure of Your Information</h3>
                        <p>
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Security of Your Information</h3>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h3>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <p className="mt-4 font-bold">
                            TWO8AI<br />
                            Email: two8ai@gmail.com<br />
                            Website: www.two8ai.com
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
