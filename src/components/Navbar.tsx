import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const handleRegisterClick = () => {
        if (location.pathname !== '/') {
            navigate('/#courses');
        } else {
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold relative z-50">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Tech Logicwise
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors relative group ${isActive(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}
                        <Button
                            onClick={handleRegisterClick}
                            className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            Register Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-slate-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <button
                    className="absolute top-6 right-6 p-2 text-slate-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-2xl font-semibold ${isActive(link.path) ? 'text-blue-600' : 'text-slate-900'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
                <Button
                    onClick={handleRegisterClick}
                    className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-lg shadow-xl"
                >
                    Register Now
                </Button>
            </div>
        </>
    );
};

export default Navbar;
