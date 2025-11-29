import { ArrowLeft, Users, BookOpen, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-white">


            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 mt-5">
                        Empowering the Next Generation of Tech Leaders
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mt-5">
                        We believe that quality education should be accessible to everyone. Our mission is to bridge the gap between academic learning and industry requirements.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Founded in 2025, Tech Logicwise  has helped thousands of students launch their careers in technology. We focus on practical, hands-on learning that prepares you for real-world challenges.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our curriculum is constantly updated to reflect the latest industry trends, ensuring that our students are always ahead of the curve.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Users, label: "Students", value: "50k+" },
                                { icon: BookOpen, label: "Courses", value: "100+" },
                                { icon: Award, label: "Instructors", value: "50+" },
                                { icon: Globe, label: "Countries", value: "30+" }
                            ].map((stat, index) => (
                                <div key={index} className="bg-slate-50 p-6 rounded-2xl text-center">
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-slate-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
