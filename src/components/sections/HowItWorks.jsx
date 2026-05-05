import { UserPlus, Settings, Rocket } from 'lucide-react';

const steps = [
    {
        title: 'Create Account',
        description: 'Sign up in less than 2 minutes. No credit card required to start your free trial.',
        icon: UserPlus,
    },
    {
        title: 'Configure Space',
        description: 'Set up your workspace and invite your team members to collaborate instantly.',
        icon: Settings,
    },
    {
        title: 'Launch & Scale',
        description: 'Deploy your projects and watch your productivity soar with our automated tools.',
        icon: Rocket,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        How It Works
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Get up and running in three simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center">

                            <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-indigo-50 dark:border-indigo-900/30 flex items-center justify-center shadow-lg mb-6">
                                <step.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {idx + 1}. {step.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {step.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}