import Accordion from '../ui/Accordion';

const faqs = [
    {
        question: "How does the free trial work?",
        answer: "Our 14-day free trial gives you full access to all features."
    },
    {
        question: "Can I switch plans later?",
        answer: "You can upgrade or downgrade your plan at any time."
    }
];

export default function FAQ() {
    return (
        <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div>
                {faqs.map((faq, idx) => (
                    <Accordion key={idx} title={faq.question} content={faq.answer} />
                ))}
            </div>
        </section>
    );
}