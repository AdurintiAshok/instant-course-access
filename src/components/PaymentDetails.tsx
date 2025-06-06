
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, QrCode, Phone, CreditCard, Shield, AlertCircle } from 'lucide-react';
import { paymentConfig, generatePaymentReference } from '@/data/courses';

interface PaymentDetailsProps {
  courseId: string;
  courseName: string;
  coursePrice: string;
}

const PaymentDetails = ({ courseId, courseName, coursePrice }: PaymentDetailsProps) => {
  const [paymentRef, setPaymentRef] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const ref = generatePaymentReference(courseId, Date.now());
    setPaymentRef(ref);
  }, [courseId]);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Security Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">Secure Payment Instructions</h4>
            <p className="text-sm text-amber-700">
              Use the unique reference ID below for your payment. This ensures your registration is processed correctly and securely.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Reference */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
            Your Payment Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-blue-300">
            <div className="text-center">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-lg font-mono mb-2">
                {paymentRef}
              </Badge>
              <p className="text-sm text-slate-600 mb-3">
                Include this reference in your payment description
              </p>
              <Button
                onClick={() => copyToClipboard(paymentRef, 'reference')}
                variant="outline"
                size="sm"
                className="border-blue-300 hover:bg-blue-50"
              >
                {copiedField === 'reference' ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Reference
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

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
              <span className="font-bold text-green-600 text-lg">{coursePrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Reference ID:</span>
              <span className="font-mono text-sm">{paymentRef}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone Payment */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <Phone className="w-4 h-4 mr-2 text-green-600" />
              Mobile Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-sm text-slate-600 mb-1">Send payment to:</p>
                <p className="font-mono font-bold">{paymentConfig.phoneNumber}</p>
              </div>
              <Button
                onClick={() => copyToClipboard(paymentConfig.phoneNumber, 'phone')}
                variant="outline"
                size="sm"
                className="w-full"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Number
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* QR Code Payment */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <QrCode className="w-4 h-4 mr-2 text-blue-600" />
              QR Code Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="bg-slate-100 rounded-lg p-4 mb-3">
                <QrCode className="w-24 h-24 mx-auto text-slate-400" />
                <p className="text-xs text-slate-500 mt-2">Scan to pay</p>
              </div>
              <p className="text-xs text-slate-600">
                Use your banking app to scan and pay
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Notes */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-red-800 mb-2">Important Payment Notes</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Always include the reference ID: <strong>{paymentRef}</strong></li>
              <li>• Take a screenshot of your payment confirmation</li>
              <li>• Upload the screenshot in the registration form</li>
              <li>• Processing time: 1-2 business days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
