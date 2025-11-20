
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Smartphone, CheckCircle, ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { generatePaymentReference, paymentConfig } from '@/data/courses';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';

interface PaymentDetailsProps {
  courseId: string;
  courseName: string;
  coursePrice: string;
  onPaymentComplete: () => void;
}

const PaymentDetails = ({ courseId, courseName, coursePrice, onPaymentComplete }: PaymentDetailsProps) => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [paymentRef, setPaymentRef] = useState('');
  const [isWaitingForPayment, setIsWaitingForPayment] = useState(false);

  useEffect(() => {
    const ref = generatePaymentReference(courseId, Date.now());
    setPaymentRef(ref);
  }, [courseId]);

  // Simulate automatic payment detection for Desktop
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        toast({
          title: "Payment Detected! 💸",
          description: "Verifying your transaction...",
        });
        setTimeout(() => {
          onPaymentComplete();
        }, 1500);
      }, 5000); // Simulate 5s wait for user to scan and pay

      return () => clearTimeout(timer);
    }
  }, [isMobile, onPaymentComplete, toast]);

  // Handle mobile payment return
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isWaitingForPayment) {
        // User returned to the app after clicking payment link
        setIsWaitingForPayment(false);
        toast({
          title: "Verifying Payment...",
          description: "Please wait while we confirm your transaction.",
        });
        // Simulate verification delay
        setTimeout(() => {
          onPaymentComplete();
        }, 1500);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isWaitingForPayment, onPaymentComplete, toast]);

  const handleMobilePayment = (appName: string) => {
    setIsWaitingForPayment(true);

    // Construct UPI Link
    // Note: In a real app, you'd use the specific schema for each app if needed, 
    // but the generic upi:// payload usually works and lets the OS pick the app.
    // For specific apps, we might use intent URLs.
    // Here we use a generic UPI link which mobile OS handles by showing available UPI apps.
    // Or we can try to target specific schemes if we knew them (e.g. phonepe://, gpay://).

    const upiLink = `upi://pay?pa=8106644824@upi&pn=LearnHub&am=${coursePrice}&tr=${paymentRef}&tn=Course Registration`;

    // For demo purposes, we'll just open this link. 
    // In a real scenario, specific app schemes might be better for direct opening.
    window.location.href = upiLink;
  };

  return (
    <div className="space-y-6">

      {/* Course Details */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Payment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600">Course:</span>
              <span className="font-medium">{courseName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Amount:</span>
              <span className="font-bold text-green-600 text-lg">₹{coursePrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Reference ID:</span>
              <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded">{paymentRef}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="border-blue-100 shadow-sm">
        <CardHeader className="pb-3 bg-blue-50/50 border-b border-blue-100">
          <CardTitle className="text-base flex items-center text-blue-800">
            {isMobile ? (
              <>
                <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                Select UPI App
              </>
            ) : (
              <>
                <QrCode className="w-5 h-5 mr-2 text-blue-600" />
                Scan QR Code
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">

          {isMobile ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600 text-center mb-4">
                Choose your preferred app to pay securely
              </p>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  variant="outline"
                  className="h-14 justify-start px-4 border-slate-200 hover:bg-slate-50 hover:border-blue-200"
                  onClick={() => handleMobilePayment('Google Pay')}
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center mr-3 shadow-sm text-xs font-bold text-blue-600">G</div>
                  <span className="font-medium text-slate-700">Google Pay</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 justify-start px-4 border-slate-200 hover:bg-slate-50 hover:border-purple-200"
                  onClick={() => handleMobilePayment('PhonePe')}
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center mr-3 shadow-sm text-xs font-bold text-purple-600">Pe</div>
                  <span className="font-medium text-slate-700">PhonePe</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 justify-start px-4 border-slate-200 hover:bg-slate-50 hover:border-cyan-200"
                  onClick={() => handleMobilePayment('Paytm')}
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center mr-3 shadow-sm text-xs font-bold text-cyan-600">Pm</div>
                  <span className="font-medium text-slate-700">Paytm</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 justify-start px-4 border-slate-200 hover:bg-slate-50 hover:border-orange-200"
                  onClick={() => handleMobilePayment('BHIM')}
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center mr-3 shadow-sm text-xs font-bold text-orange-600">BH</div>
                  <span className="font-medium text-slate-700">BHIM UPI</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
                </Button>
              </div>
              <p className="text-xs text-slate-400 text-center mt-4">
                You will be redirected back automatically after payment
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* QR Code Section */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <QrCode className="w-48 h-48 text-slate-800" />
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-slate-700">Scan with any UPI App</p>
                <div className="flex gap-3 justify-center mt-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium">GPay</div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium">PhPe</div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium">Paytm</div>
                </div>
              </div>

              <div className="w-full pt-4 border-t border-slate-100 flex flex-col items-center">
                <div className="flex items-center text-blue-600 mb-2">
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  <span className="font-medium">Waiting for payment...</span>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  We will automatically detect your payment once completed.
                </p>
              </div>
            </div>
          )}

        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentDetails;
