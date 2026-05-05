const steps = [
    {
        title: 'Create Account',
        description: 'Sign up in less than 2 minutes. No credit card required to start your free trial.',
    },
    {
        title: 'Configure Space',
        description: 'Set up your workspace and invite your team members to collaborate instantly.',
    },
    {
        title: 'Launch & Scale',
        description: 'Deploy your projects and watch your productivity soar with our automated tools.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="mt-4 text-gray-600">
                        Get up and running in three simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="text-center">
                            <h3 className="text-xl font-bold mb-3">
                                {idx + 1}. {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}