import { ArrowLeft, Wrench, CreditCard, Book, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Support = () => {
    const categories = [
        {
            icon: Wrench,
            title: "Technical Support",
            description: "Issues with login, platform access, or video playback.",
            link: "/contact"
        },
        {
            icon: CreditCard,
            title: "Billing & Payments",
            description: "Questions about invoices, refunds, or payment methods.",
            link: "/contact"
        },
        {
            icon: Book,
            title: "Course Content",
            description: "Help with assignments, quizzes, or course materials.",
            link: "/contact"
        },
        {
            icon: MessageCircle,
            title: "General Inquiries",
            description: "Any other questions or feedback you might have.",
            link: "/contact"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                        How can we help you?
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Browse our help topics or get in touch with our support team.
                    </p>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={category.link}
                                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                    <category.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {category.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Still need help?</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                        Our support team is available Monday through Friday, 9am to 5pm EST.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-8">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Support;
