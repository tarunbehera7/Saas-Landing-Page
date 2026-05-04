import { Check, X } from 'lucide-react';

const features = [
    { name: 'Unlimited Projects', basic: true, pro: true, enterprise: true },
    { name: 'Custom Domain', basic: false, pro: true, enterprise: true },
    { name: 'Analytics Dashboard', basic: false, pro: true, enterprise: true },
    { name: '24/7 Priority Support', basic: false, pro: false, enterprise: true },
    { name: 'Dedicated Account Manager', basic: false, pro: false, enterprise: true },
];

export default function ComparisonTable() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Compare Plans</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Find the perfect plan for your specific needs.</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="py-4 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-800 rounded-tl-lg">Feature</th>
                                <th className="py-4 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-800 text-center">Basic</th>
                                <th className="py-4 px-6 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-semibold border-b border-gray-200 dark:border-gray-800 text-center">Pro</th>
                                <th className="py-4 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-800 text-center rounded-tr-lg">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                            {features.map((feature, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{feature.name}</td>
                                    <td className="py-4 px-6 text-center">
                                        {feature.basic ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-gray-300 dark:text-gray-600" />}
                                    </td>
                                    <td className="py-4 px-6 text-center bg-indigo-50/50 dark:bg-indigo-900/10">
                                        {feature.pro ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-gray-300 dark:text-gray-600" />}
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        {feature.enterprise ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-gray-300 dark:text-gray-600" />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}