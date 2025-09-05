
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Course } from '@/data/courses';
import { Upload, Loader2, CheckCircle, User, Mail, Phone, GraduationCap, Clock, CreditCard, ArrowRight } from 'lucide-react';
import PaymentDetails from './PaymentDetails';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: Course | null;
  courses: Course[];
}

const RegistrationModal = ({ isOpen, onClose, selectedCourse, courses }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTab, setCurrentTab] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: selectedCourse?.id || '',
    preferredBatch: '',
    transactionDigits: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Registration submitted:', formData);
    
    toast({
      title: "🎉 Registration Successful!",
      description: "Welcome aboard! Check your email for course access details.",
    });

    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      courseId: '',
      preferredBatch: '',
      transactionDigits: ''
    });
    setCurrentTab('form');
  };

  const selectedCourseData = courses.find(c => c.id === formData.courseId);

  const proceedToPayment = () => {
    if (!formData.name || !formData.email || !formData.courseId) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and course selection are required to proceed.",
        variant: "destructive"
      });
      return;
    }
    setCurrentTab('payment');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl border-0 shadow-2xl">
        <DialogHeader className="pb-6 border-b border-slate-100">
          <DialogTitle className="text-3xl font-bold text-center">
            <span className="text-gradient">Course Registration</span>
          </DialogTitle>
          <p className="text-slate-600 text-center mt-2">
            Complete your registration in two simple steps
          </p>
        </DialogHeader>
        
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="pt-6">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="form" className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Personal Details
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium flex items-center">
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
                  <Label htmlFor="email" className="text-slate-700 font-medium flex items-center">
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
                <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center">
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
                <Label htmlFor="course" className="text-slate-700 font-medium flex items-center">
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
                        {course.title} - {course.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="batch" className="text-slate-700 font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-orange-600" />
                  Preferred Batch *
                </Label>
                <Select 
                  value={formData.preferredBatch} 
                  onValueChange={(value) => handleInputChange('preferredBatch', value)}
                  required
                >
                  <SelectTrigger className="rounded-xl border-slate-200 py-3">
                    <SelectValue placeholder="Select preferred batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">🌅 Morning Batch (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">☀️ Afternoon Batch (2 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">🌆 Evening Batch (6 PM - 9 PM)</SelectItem>
                    <SelectItem value="weekend">🎯 Weekend Batch (Sat-Sun)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 pt-6 border-t border-slate-100">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose} 
                  className="flex-1 py-3 rounded-xl border-2"
                >
                  Cancel
                </Button>
                <Button 
                  type="button" 
                  onClick={proceedToPayment}
                  className="flex-1 btn-primary text-white py-3 rounded-xl font-semibold"
                >
                  Proceed to Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="payment">
            <div className="space-y-6">
              {selectedCourseData && (
                <PaymentDetails
                  courseId={selectedCourseData.id}
                  courseName={selectedCourseData.title}
                  coursePrice={selectedCourseData.price}
                />
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="transactionDigits" className="text-slate-700 font-medium flex items-center">
                    <CreditCard className="w-4 h-4 mr-2 text-emerald-600" />
                    Payment Transaction Last 6 Digits *
                  </Label>
                  <Input
                    id="transactionDigits"
                    value={formData.transactionDigits}
                    onChange={(e) => handleInputChange('transactionDigits', e.target.value)}
                    placeholder="Enter last 6 digits of transaction"
                    className="rounded-xl border-slate-200 py-3 focus:border-blue-500"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    required
                  />
                  <p className="text-sm text-slate-500">
                    Enter the last 6 digits of your payment transaction ID
                  </p>
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-100">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setCurrentTab('form')} 
                    className="flex-1 py-3 rounded-xl border-2"
                  >
                    Back to Form
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
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
