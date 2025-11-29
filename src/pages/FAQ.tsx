import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "How do I enroll in a course?",
            answer: "Enrolling is simple! Browse our course catalog, select the course you're interested in, and click the 'Register Now' button. Fill in your details, and our team will guide you through the rest of the process."
        },
        {
            question: "Are the courses suitable for beginners?",
            answer: "Yes! Most of our courses are designed to take you from a beginner level to industry-ready. We also offer intermediate and advanced courses for those looking to upskill."
        },
        {
            question: "What is the mode of instruction?",
            answer: "Our courses are a blend of self-paced video lessons, live mentorship sessions, and hands-on projects. This ensures you learn at your own pace while getting the support you need."
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via the Contact Us page, or email us directly at techlogicwise@gmail.com. We typically respond within 24 hours."
        },
        {
            question: "Is there a refund policy?",
            answer: "We offer a 1-day money-back guarantee if you're not satisfied with the course content. Please contact our support team for assistance."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 mt-3">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions about our courses, platform, and learning experience.
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-6 bg-white shadow-sm data-[state=open]:border-blue-200 data-[state=open]:shadow-md transition-all">
                                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQ;
