import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, Users, Award, ArrowUp, Star, CheckCircle, Play, Sparkles, TrendingUp, Globe } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import RegistrationModal from '@/components/RegistrationModal';
import FallingConfetti from '@/components/FallingConfetti';
import AnimatedTagline from '@/components/AnimatedTagline';
import Footer from '@/components/Footer';
import { courses, Course } from '@/data/courses';

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showConfetti, setShowConfetti] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4000);

    // Remove component after 5 seconds (1s fade duration)
    const removeTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === '#courses') {
      const element = document.getElementById('courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleRegister = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourse(course || null);
    setIsRegistrationOpen(true);
  };

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Falling Confetti Animation */}
      {showConfetti && (
        <div className={`transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
          <FallingConfetti />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 hidden md:block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Join 50,000+ Successful Learners
            </span>
          </div>
          <h1 className="mt-24 md:mt-0 text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              Master Skills That
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shape Your Future
            </span>
          </h1>



          <p className="text-xl md:text-2xl mb-6 text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your career with industry-leading courses designed by experts.
            Learn practical skills, build real projects, and land your dream job.
          </p>

          <AnimatedTagline />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              onClick={scrollToCourses}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore Courses
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "98%", label: "Success Rate", icon: TrendingUp },
              { number: "50+", label: "Expert Courses", icon: BookOpen },
              { number: "24/7", label: "Support", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Everything you need to succeed in your learning journey, backed by industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Expert-Led Content",
                description: "Learn from industry professionals with years of real-world experience and proven track records",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Join a thriving community of learners and get help from peers and mentors whenever you need it",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Award,
                title: "Certified Learning",
                description: "Earn industry-recognized certificates that validate your skills and boost your career prospects",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section id="courses" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Courses
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Handpicked courses designed by industry experts to help you master in-demand skills and advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onRegister={handleRegister}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              What Our Students Say
            </h2>
            <p className="text-xl text-slate-600 font-light">Real stories from real learners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Aarav Reddy",
                role: "Fresher at Infosys",
                content: "The course helped me build strong fundamentals. I cracked my Infosys interview with confidence thanks to the hands-on projects!",
                rating: 5,
                avatar: "AR"
              },
              {
                name: "Uday Kiran",
                role: "Fresher at TCS",
                content: "Very beginner-friendly and practical. The exercises improved my problem-solving skills and the guidance was amazing throughout.",
                rating: 5,
                avatar: "SP"
              },
              {
                name: "Rupesh Kumar",
                role: "Fresher at Young Minds",
                content: "The best platform for freshers! The clear explanations and real-world projects helped me get placed in Cognizant.",
                rating: 5,
                avatar: "KM"
              }
            ]
              .map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                        <div className="text-slate-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-600 leading-relaxed">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        selectedCourse={selectedCourse}
        courses={courses}
      />
    </div>
  );
};

export default Index;
