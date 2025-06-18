
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen } from 'lucide-react';
import { Course } from '@/data/courses';

interface SyllabusModalProps {
  course: Course;
}

const SyllabusModal = ({ course }: SyllabusModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full mb-4 justify-center py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-base font-medium"
        >
          <BookOpen className="w-5 h-5 mr-2 text-slate-600" />
          View Complete Curriculum
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
            {course.title} - Complete Curriculum
          </DialogTitle>
          <p className="text-slate-600 text-base">
            Detailed week-by-week breakdown of what you'll learn in this course
          </p>
        </DialogHeader>
        
        <ScrollArea className="mt-6 h-[60vh] pr-4">
          <div className="space-y-6">
            {course.syllabus.map((week) => (
              <div key={week.week} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                  <span className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-lg text-sm flex items-center justify-center mr-4">
                    {week.week}
                  </span>
                  {week.title}
                </h3>
                
                <div className="ml-14">
                  <h4 className="font-semibold text-slate-800 mb-3 text-base">Topics Covered:</h4>
                  <ul className="space-y-3">
                    {week.topics.map((topic, index) => (
                      <li key={index} className="text-slate-700 flex items-start text-sm leading-relaxed">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SyllabusModal;
