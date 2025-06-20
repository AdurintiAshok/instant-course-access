import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, Users, Award, ArrowUp, Star, CheckCircle, Play, Sparkles, TrendingUp, Globe } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import RegistrationModal from '@/components/RegistrationModal';
import { courses, Course } from '@/data/courses';
import { Hero } from '@/components/ui/animated-hero';

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

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
      {/* Hero Section */}
      <Hero />

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
                name: "Sarah Johnson",
                role: "Software Developer at Google",
                content: "The courses are incredibly well-structured and the instructors are top-notch. I landed my dream job within 3 months of completing the program!",
                rating: 5,
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Product Manager at Microsoft", 
                content: "Excellent platform with practical, hands-on learning. The community support is fantastic and the projects were exactly what I needed for my portfolio.",
                rating: 5,
                avatar: "MC"
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist at Netflix",
                content: "The best investment I've made in my career. The skills I learned here directly apply to my daily work and helped me get promoted twice!",
                rating: 5,
                avatar: "ER"
              }
            ].map((testimonial, index) => (
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
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  LearnHub Academy
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
                <p className="hover:text-white cursor-pointer transition-colors">About Us</p>
                <p className="hover:text-white cursor-pointer transition-colors">Contact</p>
                <p className="hover:text-white cursor-pointer transition-colors">FAQs</p>
                <p className="hover:text-white cursor-pointer transition-colors">Support</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-8 text-white text-lg">Follow Us</h4>
              <div className="space-y-4 text-slate-400">
                <p className="hover:text-white cursor-pointer transition-colors">LinkedIn</p>
                <p className="hover:text-white cursor-pointer transition-colors">Twitter</p>
                <p className="hover:text-white cursor-pointer transition-colors">Instagram</p>
                <p className="hover:text-white cursor-pointer transition-colors">YouTube</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LearnHub Academy. All rights reserved. Built with ❤️ for learners worldwide.</p>
          </div>
        </div>
      </footer>

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
