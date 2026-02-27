import React from 'react';
import FadeInSection from '../components/animations/FadeInSection';

const TermsConditions = () => {
    return (
        <div className="bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <FadeInSection>
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
                    <p className="text-slate-500 mb-8">Last Updated: February 2026</p>

                    <div className="prose prose-lg prose-indigo max-w-none text-slate-600">
                        <p>
                            Welcome to TWO8AI! These Terms and Conditions outline the rules and regulations for the use of TWO8AI's Website, located at two8ai.com.
                        </p>
                        <p>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use TWO8AI if you do not agree to take all of the terms and conditions stated on this page.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. License</h3>
                        <p>
                            Unless otherwise stated, TWO8AI and/or its licensors own the intellectual property rights for all material on TWO8AI. All intellectual property rights are reserved. You may access this from TWO8AI for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <p className="mt-4">You must not:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Republish material from TWO8AI</li>
                            <li>Sell, rent or sub-license material from TWO8AI</li>
                            <li>Reproduce, duplicate or copy material from TWO8AI</li>
                            <li>Redistribute content from TWO8AI</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. User Accounts</h3>
                        <p>
                            If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Enterprise usage</h3>
                        <p>
                            Our TOAI platform is designed for enterprise use. You agree to use the platform in compliance with all applicable laws and regulations. Unauthorized use of the platform, including but not limited to unauthorized entry into our systems, misuse of passwords, or misuse of any information posted on the platform is strictly prohibited.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h3>
                        <p>
                            In no event shall TWO8AI, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. TWO8AI, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Governing Law</h3>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Changes to Terms</h3>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will act reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at two8ai@gmail.com.
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default TermsConditions;
