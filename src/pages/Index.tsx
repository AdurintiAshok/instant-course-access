
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, Users, Award, ArrowUp } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center course-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop"
            alt="Programming background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn and Grow with Our
            <span className="block text-yellow-300">Expert-Led Courses</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Browse our catalog and enroll in minutes. Transform your career with hands-on learning from industry professionals.
          </p>
          <Button 
            onClick={scrollToCourses}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Courses
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 course-gradient-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground">Expert-Led Courses</p>
            </div>
            <div className="space-y-2">
              <Users className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-3xl font-bold text-primary">10,000+</h3>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
            <div className="space-y-2">
              <Award className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-3xl font-bold text-primary">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section id="courses" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 course-gradient bg-clip-text text-transparent">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from our carefully curated selection of courses designed to help you master in-demand skills and advance your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold course-gradient bg-clip-text text-transparent mb-4">
                LearnHub Academy
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering learners worldwide with expert-led courses designed for real-world success. Join thousands of students who have transformed their careers with us.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-primary cursor-pointer transition-colors">About Us</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Contact</p>
                <p className="hover:text-primary cursor-pointer transition-colors">FAQs</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Support</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-primary cursor-pointer transition-colors">LinkedIn</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Twitter</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Instagram</p>
                <p className="hover:text-primary cursor-pointer transition-colors">YouTube</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 LearnHub Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 course-gradient text-white rounded-full w-12 h-12 shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
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
