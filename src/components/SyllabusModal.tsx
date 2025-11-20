
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

      <DialogContent className="w-[95vw] max-w-4xl max-h-[85vh] p-4 md:p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-slate-900 mb-2 pr-8">
            {course.title} - Complete Curriculum
          </DialogTitle>
          <p className="text-slate-600 text-sm md:text-base">
            Detailed week-by-week breakdown of what you'll learn in this course
          </p>
        </DialogHeader>

        <ScrollArea className="mt-4 h-[60vh] pr-4">
          <div className="space-y-4 md:space-y-6">
            {course.syllabus.map((week) => (
              <div key={week.week} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 md:p-6 border border-indigo-200">
                <h3 className="font-bold text-slate-900 mb-3 md:mb-4 flex items-center text-base md:text-lg">
                  <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-lg text-xs md:text-sm flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    {week.week}
                  </span>
                  {week.title}
                </h3>

                <div className="ml-11 md:ml-14">
                  <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">Topics Covered:</h4>
                  <ul className="space-y-2 md:space-y-3">
                    {week.topics.map((topic, index) => (
                      <li key={index} className="text-slate-700 flex items-start text-xs md:text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-400 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0" />
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
