
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Course } from '@/data/courses';
import { Upload, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: Course | null;
  courses: Course[];
}

const RegistrationModal = ({ isOpen, onClose, selectedCourse, courses }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: selectedCourse?.id || '',
    preferredBatch: '',
    paymentScreenshot: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, paymentScreenshot: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Registration submitted:', formData);
    
    toast({
      title: "Registration Successful!",
      description: "Thank you! We've received your registration. Check your email for updates.",
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
      paymentScreenshot: null
    });
  };

  const selectedCourseData = courses.find(c => c.id === formData.courseId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold course-gradient bg-clip-text text-transparent">
            Course Registration
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Selected Course *</Label>
              <Select 
                value={formData.courseId} 
                onValueChange={(value) => handleInputChange('courseId', value)}
                required
              >
                <SelectTrigger>
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

            {selectedCourseData && (
              <div className="p-4 bg-muted/50 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">{selectedCourseData.title}</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Duration:</strong> {selectedCourseData.duration}</p>
                  <p><strong>Instructor:</strong> {selectedCourseData.instructor}</p>
                  <p><strong>Price:</strong> {selectedCourseData.price}</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="batch">Preferred Batch *</Label>
              <Select 
                value={formData.preferredBatch} 
                onValueChange={(value) => handleInputChange('preferredBatch', value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning Batch (9 AM - 12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon Batch (2 PM - 5 PM)</SelectItem>
                  <SelectItem value="evening">Evening Batch (6 PM - 9 PM)</SelectItem>
                  <SelectItem value="weekend">Weekend Batch (Sat-Sun)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment">Payment Screenshot *</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  id="payment"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <Label htmlFor="payment" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">
                    {formData.paymentScreenshot ? formData.paymentScreenshot.name : 'Click to upload payment screenshot'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, or PDF (max 5MB)
                  </p>
                </Label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 course-gradient text-white hover:opacity-90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
