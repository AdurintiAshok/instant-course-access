
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Clock, User, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  onRegister: (courseId: string) => void;
}

const CourseCard = ({ course, onRegister }: CourseCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="group card-hover bg-white border-0 shadow-lg rounded-3xl overflow-hidden h-fit">
      <CardHeader className="pb-6 relative bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            variant="secondary" 
            className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-3 py-1 rounded-full text-sm font-medium"
          >
            {course.category}
          </Badge>
          <div className="text-right">
            <span className="text-3xl font-bold text-slate-800">{course.price}</span>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-slate-600 ml-1">4.9 (120+)</span>
            </div>
          </div>
        </div>
        
        <CardTitle className="text-2xl mb-3 text-slate-800 leading-tight">
          {course.title}
        </CardTitle>
        
        <CardDescription className="text-slate-600 leading-relaxed text-base">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-slate-50 rounded-xl">
            <Clock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
            <div className="text-xs text-slate-600">Duration</div>
            <div className="text-sm font-semibold text-slate-800">{course.duration}</div>
          </div>
          
          <div className="text-center p-3 bg-slate-50 rounded-xl">
            <User className="w-5 h-5 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-slate-600">Instructor</div>
            <div className="text-sm font-semibold text-slate-800">{course.instructor}</div>
          </div>
          
          <div className="text-center p-3 bg-slate-50 rounded-xl">
            <BookOpen className="w-5 h-5 mx-auto mb-1 text-purple-600" />
            <div className="text-xs text-slate-600">Level</div>
            <div className="text-sm font-semibold text-slate-800">{course.level}</div>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full mb-6 justify-between py-3 rounded-xl border-2 hover:bg-slate-50 transition-all"
            >
              <span className="font-medium">View Curriculum</span>
              {isOpen ? 
                <ChevronUp className="w-5 h-5 text-slate-600" /> : 
                <ChevronDown className="w-5 h-5 text-slate-600" />
              }
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold mb-4 text-slate-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Course Curriculum
              </h4>
              
              <div className="space-y-4">
                {course.syllabus.map((week) => (
                  <div key={week.week} className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                    <h5 className="font-medium text-slate-800 mb-2 flex items-center">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center mr-3">
                        {week.week}
                      </span>
                      {week.title}
                    </h5>
                    <ul className="space-y-1 ml-9">
                      {week.topics.map((topic, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Button 
          onClick={() => onRegister(course.id)}
          className="w-full btn-primary text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl group"
        >
          <span>Enroll Now</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
