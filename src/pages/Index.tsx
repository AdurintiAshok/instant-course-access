
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, Users, Award, ArrowUp, Star, CheckCircle, Play } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import RegistrationModal from '@/components/RegistrationModal';
import { courses, Course } from '@/data/courses';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-blue-800 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Trusted by 50,000+ Students Worldwide
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
            <span className="text-gradient">Master New Skills</span>
            <br />
            <span className="text-slate-800">with Expert Guidance</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful learners who've transformed their careers with our industry-leading courses. Learn from the best, practice with real projects.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              onClick={scrollToCourses}
              size="lg"
              className="btn-primary text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl"
            >
              Explore Courses
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg rounded-full border-2 hover:bg-white/80 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">50+</div>
              <div className="text-slate-600 text-sm">Expert Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">98%</div>
              <div className="text-slate-600 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">24/7</div>
              <div className="text-slate-600 text-sm">Support</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Expert-Led Content</h3>
              <p className="text-slate-600">Learn from industry professionals with years of real-world experience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Community Support</h3>
              <p className="text-slate-600">Connect with fellow learners and get help when you need it</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Certified Learning</h3>
              <p className="text-slate-600">Earn recognized certificates to showcase your new skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section id="courses" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Featured Courses</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Handpicked courses designed by industry experts to help you master in-demand skills and advance your career.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">What Our Students Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Developer",
                content: "The courses are incredibly well-structured and the instructors are top-notch. I landed my dream job within 3 months!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Product Manager", 
                content: "Excellent platform with practical, hands-on learning. The community support is fantastic too.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist",
                content: "The best investment I've made in my career. The skills I learned here directly apply to my daily work.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 card-hover">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">LearnHub Academy</h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Empowering learners worldwide with expert-led courses designed for real-world success. Transform your career with us.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">Trusted by 50,000+ students</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3 text-slate-400">
                <p className="hover:text-white cursor-pointer transition-colors">About Us</p>
                <p className="hover:text-white cursor-pointer transition-colors">Contact</p>
                <p className="hover:text-white cursor-pointer transition-colors">FAQs</p>
                <p className="hover:text-white cursor-pointer transition-colors">Support</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Follow Us</h4>
              <div className="space-y-3 text-slate-400">
                <p className="hover:text-white cursor-pointer transition-colors">LinkedIn</p>
                <p className="hover:text-white cursor-pointer transition-colors">Twitter</p>
                <p className="hover:text-white cursor-pointer transition-colors">Instagram</p>
                <p className="hover:text-white cursor-pointer transition-colors">YouTube</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LearnHub Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 btn-primary text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
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
