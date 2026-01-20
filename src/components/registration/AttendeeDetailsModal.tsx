import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Attendee {
    fullName: string;
    email: string;
    phone: string;
    gender: string;
}

interface RegistrationFormData {
    attendees: Attendee[];
}

interface AttendeeDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    count: number;
    onSubmit: (data: RegistrationFormData) => void;
}

export function AttendeeDetailsModal({ isOpen, onClose, count, onSubmit }: AttendeeDetailsModalProps) {
    const { control, handleSubmit, register, reset, formState: { errors } } = useForm<RegistrationFormData>({
        defaultValues: {
            attendees: Array(count).fill({ fullName: '', email: '', phone: '', gender: '' })
        }
    });

    const { fields } = useFieldArray({
        control,
        name: "attendees"
    });

    React.useEffect(() => {
        if (isOpen) {
            reset({
                attendees: Array(count).fill({ fullName: '', email: '', phone: '', gender: '' })
            });
        }
    }, [count, isOpen, reset]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] h-[90vh] bg-white/95 backdrop-blur-xl border-white/20 p-0 flex flex-col gap-0 overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white relative z-20">
                    <div>
                        <DialogTitle className="text-2xl font-bold text-gray-900">Attendee Details</DialogTitle>
                        <p className="text-sm text-gray-500 mt-1">Please fill in details for {count} person{count > 1 ? 's' : ''}.</p>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-900"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Scrollable Form Area */}
                <ScrollArea className="flex-1 p-6">
                    <form id="attendee-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8 pr-4">
                        {fields.map((field, index) => (
                            <div key={field.id} className="bg-gray-50/50 p-6 rounded-xl border border-gray-100/50 hover:shadow-md transition-all duration-300">
                                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        {index + 1}
                                    </span>
                                    Attendee {index + 1}
                                </h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor={`attendees.${index}.fullName`} className="text-sm font-medium text-gray-700">
                                            Full Name <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            {...register(`attendees.${index}.fullName` as const, { required: "Full name is required" })}
                                            placeholder="Enter your Name"
                                            className="bg-white border-gray-200 focus:ring-primary focus:border-primary"
                                        />
                                        {errors.attendees?.[index]?.fullName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.attendees[index]?.fullName?.message}</p>
                                        )}
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-2">
                                        <Label htmlFor={`attendees.${index}.email`} className="text-sm font-medium text-gray-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            {...register(`attendees.${index}.email` as const, {
                                                required: "Email is required",
                                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                            })}
                                            placeholder="Enter your Email"
                                            type="email"
                                            className="bg-white border-gray-200 focus:ring-primary focus:border-primary"
                                        />
                                        {errors.attendees?.[index]?.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.attendees[index]?.email?.message}</p>
                                        )}
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <Label htmlFor={`attendees.${index}.phone`} className="text-sm font-medium text-gray-700">
                                            Phone Number <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            {...register(`attendees.${index}.phone` as const, { required: "Phone number is required" })}
                                            placeholder=""
                                            className="bg-white border-gray-200 focus:ring-primary focus:border-primary"
                                        />
                                        {errors.attendees?.[index]?.phone && (
                                            <p className="text-red-500 text-xs mt-1">{errors.attendees[index]?.phone?.message}</p>
                                        )}
                                    </div>

                                    {/* Gender */}
                                    <div className="space-y-2">
                                        <Label htmlFor={`attendees.${index}.gender`} className="text-sm font-medium text-gray-700">
                                            Gender <span className="text-red-500">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name={`attendees.${index}.gender` as const}
                                            rules={{ required: "Gender is required" }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className="bg-white border-gray-200 focus:ring-primary focus:border-primary">
                                                        <SelectValue placeholder="Select gender" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.attendees?.[index]?.gender && (
                                            <p className="text-red-500 text-xs mt-1">{errors.attendees[index]?.gender?.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </form>
                </ScrollArea>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-3 z-20">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="px-8 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        form="attendee-form"
                        className="px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                    >
                        Confirm Registration
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
