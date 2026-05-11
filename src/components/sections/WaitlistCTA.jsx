import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaitlistCTA() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success
    const [error, setError] = useState('');

    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1000);
    };

    return (
        <section className="py-24 bg-indigo-600 dark:bg-indigo-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide">
                        Early Access Program
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Ready to transform your workflow?
                    </h2>

                    <p className="text-indigo-100 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                        Join 10,000+ early adopters. Get exclusive access to beta features and a lifetime 20% discount.
                    </p>
                </motion.div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center space-x-2 bg-green-500/20 text-green-100 px-6 py-4 rounded-xl backdrop-blur-sm border border-green-500/30"
                    >
                        <span className="text-xl">🎉</span>
                        <span className="font-medium">
                            You're on the list! Keep an eye on your inbox.
                        </span>
                    </motion.div>
                ) : (
                    <>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3"
                        >
                            <div className="flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError('');
                                    }}
                                    placeholder="Enter your work email"
                                    required
                                    className="w-full px-5 py-4 rounded-xl text-gray-900 bg-white border-0 focus:ring-4 focus:ring-indigo-300 outline-none transition-shadow"
                                />

                                {error && (
                                    <p className="text-red-200 text-sm mt-2 text-left">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white px-8 py-4 rounded-xl font-medium transition-all disabled:opacity-70 whitespace-nowrap flex items-center justify-center min-w-[160px]"
                            >
                                {status === 'loading' ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Joining...
                                    </span>
                                ) : (
                                    'Join Waitlist'
                                )}
                            </button>
                        </form>

                        <p className="text-indigo-200 text-sm mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}