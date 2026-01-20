import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

interface MemberSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onProceed: (count: number) => void;
}

export function MemberSelectionModal({ isOpen, onClose, onProceed }: MemberSelectionModalProps) {
    const [count, setCount] = useState(1);

    const increment = () => setCount((prev) => Math.min(prev + 10, prev + 1));
    const decrement = () => setCount((prev) => Math.max(1, prev - 1));

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl p-0 overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Side - Event Title */}
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-primary to-primary/80 p-8 flex flex-col justify-center text-white relative">
                        {/* Decorative Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

                        <h2 className="text-3xl font-display font-bold mb-2 relative z-10">Warangal Ascend</h2>
                        <p className="text-white/80 relative z-10">Join us for the event of the year.</p>
                    </div>

                    {/* Right Side - Selection */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-white">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">Select Members</h3>

                        <div className="flex items-center gap-6 mb-8">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={decrement}
                                disabled={count <= 1}
                                className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors"
                                aria-label="Decrease count"
                            >
                                <Minus className="h-5 w-5" />
                            </Button>

                            <span className="text-4xl font-bold text-gray-800 min-w-[3ch] text-center">
                                {count}
                            </span>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={increment}
                                className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors"
                                aria-label="Increase count"
                            >
                                <Plus className="h-5 w-5" />
                            </Button>
                        </div>

                        <Button
                            onClick={() => onProceed(count)}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Register Now
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
