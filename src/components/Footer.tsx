import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Tech Logicwise
                            </span>
                        </h3>
                        <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                            Empowering learners worldwide with expert-led courses designed for real-world success. Transform your career with industry-proven curriculum.
                        </p>
                        <div className="flex items-center gap-4">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-slate-300">Trusted by 50,000+ students globally</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-8 text-white text-lg">Quick Links</h4>
                        <div className="space-y-4 text-slate-400">
                            <Link to="/about" className="block hover:text-white cursor-pointer transition-colors">About Us</Link>
                            <Link to="/contact" className="block hover:text-white cursor-pointer transition-colors">Contact</Link>
                            <Link to="/faq" className="block hover:text-white cursor-pointer transition-colors">FAQs</Link>
                            <Link to="/support" className="block hover:text-white cursor-pointer transition-colors">Support</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-8 text-white text-lg">Follow Us</h4>
                        <div className="space-y-4 text-slate-400">
                            <p className="hover:text-white cursor-pointer transition-colors">LinkedIn</p>

                            <p className="hover:text-white cursor-pointer transition-colors">YouTube</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                    <p>&copy; 2025 Tech Hub. All rights reserved. Built with ❤️ for learners worldwide.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
