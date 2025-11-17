import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, User, BookOpen, Star, ArrowRight, Code } from 'lucide-react';
import { Course } from '@/data/courses';
import SyllabusModal from './SyllabusModal';

interface CourseCardProps {
  course: Course;
  onRegister: (courseId: string) => void;
}

const CourseCard = ({ course, onRegister }: CourseCardProps) => {
  return (
    <Card className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <CardHeader className="pb-6 relative bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            variant="secondary" 
            className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-3 py-1 rounded-full text-sm font-medium"
          >
            {course.category}
          </Badge>
          <div className="text-right">
            <div className="text-3xl font-bold text-slate-900 mb-1">{course.price}</div>
            <div className="flex items-center justify-end">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="text-sm text-slate-600">4.9 (120+)</span>
            </div>
          </div>
        </div>
        
        <CardTitle className="text-2xl mb-3 text-slate-900 leading-tight font-bold">
          {course.title}
        </CardTitle>
        
        <CardDescription className="text-slate-600 leading-relaxed text-base">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 pb-6">
        {/* Course Info Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <Clock className="w-5 h-5 mx-auto mb-2 text-blue-600" />
            <div className="text-xs text-slate-600 mb-1">Duration</div>
            <div className="text-sm font-semibold text-slate-900">{course.duration}</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <User className="w-5 h-5 mx-auto mb-2 text-green-600" />
            <div className="text-xs text-slate-600 mb-1">Instructor</div>
            <div className="text-sm font-semibold text-slate-900">{course.instructor}</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <BookOpen className="w-5 h-5 mx-auto mb-2 text-purple-600" />
            <div className="text-xs text-slate-600 mb-1">Level</div>
            <div className="text-sm font-semibold text-slate-900">{course.level}</div>
          </div>
        </div>

        {/* Projects Section - Collapsible */}
        <Accordion type="single" collapsible className="mb-6">
          <AccordionItem value="projects" className="border-0">
            <AccordionTrigger className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl px-5 py-4 border border-emerald-200 hover:no-underline hover:bg-gradient-to-br hover:from-emerald-100 hover:to-green-100">
              <h4 className="font-semibold text-slate-900 flex items-center text-base">
                <Code className="w-5 h-5 mr-2 text-emerald-600" />
                Build Real Projects
              </h4>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-3">
                {course.projects.map((project, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-3 border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Curriculum Modal */}
        <SyllabusModal course={course} />

        <Button 
          onClick={() => onRegister(course.id)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl group transition-all"
        >
          <span>Enroll Now</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
