
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Clock, User, BookOpen, Star, ArrowRight, Briefcase, Target } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  onRegister: (courseId: string) => void;
}

const CourseCard = ({ course, onRegister }: CourseCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="group card-hover bg-white border-0 shadow-md rounded-2xl overflow-hidden">
      <CardHeader className="pb-4 relative bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex justify-between items-start mb-3">
          <Badge 
            variant="secondary" 
            className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-2 py-1 rounded-full text-xs font-medium"
          >
            {course.category}
          </Badge>
          <div className="text-right">
            <span className="text-2xl font-bold text-slate-800">{course.price}</span>
            <div className="flex items-center mt-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs text-slate-600 ml-1">4.9 (120+)</span>
            </div>
          </div>
        </div>
        
        <CardTitle className="text-xl mb-2 text-slate-800 leading-tight">
          {course.title}
        </CardTitle>
        
        <CardDescription className="text-slate-600 leading-relaxed text-sm line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4 pb-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <Clock className="w-4 h-4 mx-auto mb-1 text-blue-600" />
            <div className="text-xs text-slate-600">Duration</div>
            <div className="text-xs font-semibold text-slate-800">{course.duration}</div>
          </div>
          
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <User className="w-4 h-4 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-slate-600">Instructor</div>
            <div className="text-xs font-semibold text-slate-800">{course.instructor}</div>
          </div>
          
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <BookOpen className="w-4 h-4 mx-auto mb-1 text-purple-600" />
            <div className="text-xs text-slate-600">Level</div>
            <div className="text-xs font-semibold text-slate-800">{course.level}</div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
          <h4 className="font-semibold mb-3 text-slate-800 flex items-center text-sm">
            <Target className="w-4 h-4 mr-2 text-green-600" />
            Real-World Projects
          </h4>
          <div className="space-y-2">
            {course.projects.map((project, index) => (
              <div key={index} className="flex items-start">
                <Briefcase className="w-3 h-3 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-xs text-slate-700 leading-relaxed">{project}</span>
              </div>
            ))}
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full mb-3 justify-between py-2 rounded-lg border hover:bg-slate-50 transition-all text-sm"
            >
              <span className="font-medium">View Curriculum</span>
              {isOpen ? 
                <ChevronUp className="w-4 h-4 text-slate-600" /> : 
                <ChevronDown className="w-4 h-4 text-slate-600" />
              }
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-3 mb-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold mb-3 text-slate-800 flex items-center text-sm">
                <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                Course Curriculum
              </h4>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {course.syllabus.map((week) => (
                  <div key={week.week} className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                    <h5 className="font-medium text-slate-800 mb-2 flex items-center text-sm">
                      <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center mr-2">
                        {week.week}
                      </span>
                      {week.title}
                    </h5>
                    <ul className="space-y-1 ml-7">
                      {week.topics.slice(0, 2).map((topic, index) => (
                        <li key={index} className="text-xs text-slate-600 flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                      {week.topics.length > 2 && (
                        <li className="text-xs text-slate-500 italic ml-3">
                          +{week.topics.length - 2} more topics...
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Button 
          onClick={() => onRegister(course.id)}
          className="w-full btn-primary text-white py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg group"
        >
          <span>Enroll Now</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
