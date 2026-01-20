import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, QrCode, Building, CheckCircle2 } from 'lucide-react';

const TICKET_PRICE = 499; // Example price

export default function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { attendees, count } = location.state || { attendees: [], count: 0 };
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isLoading, setIsLoading] = useState(false);

    const totalAmount = count * TICKET_PRICE;
    const primaryAttendee = attendees[0] || {};

    const handlePayment = async () => {
        setIsLoading(true);
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        navigate('/payment-success', { state: { attendees, amount: totalAmount } });
    };

    if (count === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>No Registration Found</CardTitle>
                        <CardDescription>Please start the registration process again.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button onClick={() => navigate('/')}>Go Home</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Summary */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-t-4 border-t-primary shadow-lg sticky top-24">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl">Registration Summary</CardTitle>
                            <CardDescription>Confirm your details before payment</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500">Event Name</p>
                                <p className="text-base font-semibold text-gray-900">Warangal Ascend 2024</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500">Participant Name</p>
                                <p className="text-base font-medium text-gray-900">{primaryAttendee.fullName}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500">Email</p>
                                <p className="text-base font-medium text-gray-900 truncate">{primaryAttendee.email}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500">Tickets Count</p>
                                <p className="text-base font-medium text-gray-900">{count} x Participant(s)</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500">Registration ID</p>
                                <p className="text-sm font-mono text-gray-600 bg-gray-100 p-1 rounded inline-block">
                                    REG-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">Total Amount</span>
                                <span className="text-2xl font-bold text-primary">₹{totalAmount.toLocaleString('en-IN')}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Payment Options */}
                <div className="lg:col-span-2">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Select Payment Method</h1>

                    <div className="space-y-4">
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                <Label
                                    htmlFor="card"
                                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-full"
                                >
                                    <CreditCard className="mb-3 h-6 w-6" />
                                    <span className="text-sm font-medium">Card Payment</span>
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                                <Label
                                    htmlFor="upi"
                                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-full"
                                >
                                    <QrCode className="mb-3 h-6 w-6" />
                                    <span className="text-sm font-medium">UPI / QR</span>
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="netbanking" id="netbanking" className="peer sr-only" />
                                <Label
                                    htmlFor="netbanking"
                                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-full"
                                >
                                    <Building className="mb-3 h-6 w-6" />
                                    <span className="text-sm font-medium">Net Banking</span>
                                </Label>
                            </div>
                        </RadioGroup>

                        <Card className="mt-6 border-0 shadow-md">
                            <CardContent className="p-8">
                                {paymentMethod === 'card' && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Cardholder Name</Label>
                                                <Input placeholder="Enter name on card" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Card Number</Label>
                                                <Input placeholder="0000 0000 0000 0000" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Expiry Date (MM/YY)</Label>
                                                    <Input placeholder="MM/YY" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>CVV</Label>
                                                    <Input placeholder="123" />
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <Checkbox id="save-card" />
                                                <Label htmlFor="save-card" className="font-normal text-sm cursor-pointer">
                                                    Securely save this card for future payments
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'upi' && (
                                    <div className="space-y-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-2 duration-300 py-4">
                                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200">
                                            {/* Mock QR Code */}
                                            <div className="w-48 h-48 bg-gray-100 flex items-center justify-center rounded-lg">
                                                <QrCode className="w-24 h-24 text-gray-300" />
                                            </div>
                                        </div>
                                        <div className="space-y-2 w-full max-w-xs">
                                            <p className="text-sm text-gray-500">Scan QR or enter UPI ID</p>
                                            <Input placeholder="example@upi" className="text-center" />
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'netbanking' && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300 py-4">
                                        <div className="space-y-2">
                                            <Label>Select Bank</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Choose your bank" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="sbi">State Bank of India</SelectItem>
                                                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                                                    <SelectItem value="icici">ICICI Bank</SelectItem>
                                                    <SelectItem value="axis">Axis Bank</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <p className="text-sm text-gray-500">You will be redirected to the bank's secure login page to complete the transaction.</p>
                                    </div>
                                )}

                                <Button
                                    className="w-full mt-8 h-12 text-lg font-medium shadow-xl shadow-primary/20"
                                    onClick={handlePayment}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : `Pay ₹${totalAmount.toLocaleString('en-IN')}`}
                                </Button>
                                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Secure Payment Gateway
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
