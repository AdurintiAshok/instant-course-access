import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Course } from '@/data/courses';
import { Loader2, CheckCircle, User, Mail, Phone, GraduationCap, Info, X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: Course | null;
  courses: Course[];
}

const RegistrationModal = ({ isOpen, onClose, selectedCourse, courses }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: selectedCourse?.id || ''
  });

  // Reset form when modal opens/closes or course changes
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        courseId: selectedCourse?.id || prev.courseId
      }));
      setIsSuccess(false);
      setCountdown(30);
    }
  }, [isOpen, selectedCourse]);

  // Handle auto-close timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isSuccess) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            handleClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, isSuccess]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      courseId: ''
    });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Registration submitted:', formData);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl md:rounded-3xl border-0 shadow-2xl p-4 md:p-6">
        {isSuccess ? (
          <div className="py-4 md:py-8 flex flex-col items-center text-center space-y-4 md:space-y-6 animate-in fade-in zoom-in duration-300 px-2 md:px-4">
            <Card className="w-full border-green-100 shadow-sm bg-green-50/30">
              <CardContent className="pt-6 pb-6 md:pt-8 md:pb-8 flex flex-col items-center space-y-3 md:space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">Registration Successful!</h2>
                  <p className="text-slate-600 max-w-sm mx-auto text-xs md:text-sm leading-relaxed">
                    Our team will contact you shortly to guide you through the payment process and confirm your enrollment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="w-full max-w-xs space-y-3 md:space-y-4">
              <Button
                onClick={handleClose}
                className="w-full btn-primary text-white py-5 md:py-6 rounded-xl font-semibold text-base md:text-lg shadow-lg shadow-blue-200"
              >
                Close Now
              </Button>
              <p className="text-xs md:text-sm text-slate-400">
                Redirecting to home in {countdown} seconds...
              </p>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="pb-4 md:pb-6 border-b border-slate-100">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
                <span className="text-gradient">Course Registration</span>
              </DialogTitle>
              <p className="text-slate-600 text-center mt-2 text-sm md:text-base">
                Fill in your details to reserve your spot
              </p>
            </DialogHeader>

            <div className="pt-4 md:pt-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium flex items-center text-sm md:text-base">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="rounded-xl border-slate-200 py-3 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium flex items-center text-sm md:text-base">
                      <Mail className="w-4 h-4 mr-2 text-green-600" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="rounded-xl border-slate-200 py-3 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center text-sm md:text-base">
                    <Phone className="w-4 h-4 mr-2 text-purple-600" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className="rounded-xl border-slate-200 py-3 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="text-slate-700 font-medium flex items-center text-sm md:text-base">
                    <GraduationCap className="w-4 h-4 mr-2 text-indigo-600" />
                    Selected Course *
                  </Label>
                  <Select
                    value={formData.courseId}
                    onValueChange={(value) => handleInputChange('courseId', value)}
                    required
                  >
                    <SelectTrigger className="rounded-xl border-slate-200 py-3">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.title} - ₹{course.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 pt-4 md:pt-6 border-t border-slate-100">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 py-3 rounded-xl border-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-primary text-white py-3 rounded-xl font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Complete Registration
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
