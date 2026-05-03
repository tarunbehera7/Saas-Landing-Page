import { motion } from 'framer-motion';

const testimonials = [
    {
        content: "This tool has completely revolutionized how our team works. We've seen a 40% increase in productivity since day one.",
        author: "Sarah Jenkins",
        role: "CTO at TechFlow",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
        content: "The best investment we've made this year. The intuitive interface and powerful features are unmatched in the market.",
        author: "Marcus Doe",
        role: "Product Manager",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        content: "Customer support is stellar, and the platform itself just works flawlessly. Highly recommended for scaling teams.",
        author: "Elena Rodriguez",
        role: "Director of Ops",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    }
];


export default function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Loved by thousands of users
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Don't just take our word for it. Here's what our customers have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                        >
                            <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                                "{item.content}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.author}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section >
    );
}