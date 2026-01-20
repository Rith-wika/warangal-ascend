import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Calendar, MapPin, Receipt, Home } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function PaymentSuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    // Fallback data if accessed directly
    const { amount = 0, attendees = [] } = location.state || {};

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-lg shadow-2xl border-0 overflow-hidden">
                <div className="bg-green-500 h-2"></div>
                <CardHeader className="flex flex-col items-center pb-2 pt-10">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 text-center">Payment Successful!</h1>
                    <p className="text-gray-500 text-center mt-2">
                        Your registration is confirmed.
                    </p>
                </CardHeader>

                <CardContent className="space-y-6 pt-6">
                    <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Warangal Ascend 2024</p>
                                <p className="text-sm text-gray-500">Saturday, Dec 14, 2024 • 10:00 AM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">NIT Warangal Auditorium</p>
                                <p className="text-sm text-gray-500">Hanamkonda, Warangal</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-200 my-2"></div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm">Amount Paid</span>
                            <span className="text-lg font-bold text-gray-900">₹{amount.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm">Transaction ID</span>
                            <span className="text-sm font-mono text-gray-700">TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pb-8">
                    <Button
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                        onClick={() => window.print()}
                    >
                        <div className="flex items-center gap-2">
                            <Receipt className="w-4 h-4" />
                            Download Receipt
                        </div>
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full border-gray-200"
                        onClick={() => navigate('/')}
                    >
                        <div className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Return to Home
                        </div>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
