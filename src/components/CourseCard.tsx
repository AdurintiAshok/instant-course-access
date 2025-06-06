
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Clock, User, BookOpen } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  onRegister: (courseId: string) => void;
}

const CourseCard = ({ course, onRegister }: CourseCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="hover-lift bg-card border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {course.category}
          </Badge>
          <span className="text-2xl font-bold text-primary">{course.price}</span>
        </div>
        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.level}</span>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full mb-3 justify-between">
              View Syllabus
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-3 mb-4">
            <div className="border rounded-lg p-4 bg-muted/30">
              <h4 className="font-semibold mb-3 text-primary">Course Curriculum</h4>
              <div className="space-y-3">
                {course.syllabus.map((week) => (
                  <div key={week.week} className="border-l-2 border-primary/30 pl-4">
                    <h5 className="font-medium text-sm mb-1">
                      Week {week.week}: {week.title}
                    </h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {week.topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
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
          className="w-full course-gradient text-white hover:opacity-90 transition-opacity"
        >
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
