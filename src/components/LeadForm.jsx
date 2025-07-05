"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useReducer, useState } from 'react'
import { Form, useForm } from 'react-hook-form'
export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();
    
    // Debug: Watch email field and log errors
    const emailValue = watch('email');
    console.log('Email value:', emailValue);
    console.log('Form errors:', errors);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const onSubmit = async (data) => {
        console.log('Form data being submitted:', data);
        console.log('Current form errors:', errors);
        
        // Check if there are any validation errors
        if (Object.keys(errors).length > 0) {
            console.log('Form has validation errors, preventing submission');
            setSubmitError('Please fix the validation errors before submitting');
            return;
        }
        
        setIsSubmitting(true);
        setSubmitError('');
        try {
            const response = await fetch('/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            let result;
            try {
                result = await response.json();
                console.log(' API Response:', result);
            } catch (jsonError) {
                console.error('JSON Parse Error:', jsonError);
                throw new Error('Invalid response from server');
            }

            if (!response.ok) {
                throw new Error(result.message || `HTTP ${response.status}: Failed to submit form`);
            }

            if (!result.success) {
                throw new Error(result.message || 'Form submission failed');
            }

            reset();
            setIsSubmitting(false);
            setTimeout(() => {
                setIsSubmitting(false);
                reset();
                if (isMounted) {
                    router.push('/thankyou');
                }
            }, 1000);

        } catch (error) {
            console.error('Error saving lead:', error);
            setSubmitError(error.message);
            setIsSubmitting(false);
        }
    };




    return (
        <div className='w-full '>
            <form onSubmit={handleSubmit(onSubmit)} className='  flex flex-col justify-evenly items-center  gap-1'>
                <div className=' flex flex-col justify-between items-center gap-3'>
                 
                    <h3 className="text-4xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get Your Free Strategy Call</h3>
                    <p className='text-xl text-gray-400 '>Fill out the form below and we'll get back to you within 24 hours</p>


                </div>
                <div className='w-full flex flex-col mt-4 justify-evenly items-start gap-3'>
                    <div className='flex w-full flex-col justify-start items-start gap-3'>
                        <label htmlFor="name" className='flex flex-col w-full justify-between gap-1 items-start '><p className='text-xl'>
                            FullName<span className='text-red-600 text-2xl'>*</span></p><input type="text"
                                id="name"
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Name must be at least 2 characters'
                                    }
                                })} placeholder='Enter Your Full Name' style={{
                                    boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                }} className='h-10 w-full bottom-1 rounded bg-[#2C333F] p-[12px] text-[#F1F2FF]' />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </label>

                    </div>
                    <div className='flex w-full flex-col justify-start items-start gap-3'>
                        <label htmlFor="email" className='flex flex-col w-full justify-between gap-1 items-start '>
                            <p className='text-xl'>Email Address<span className='text-red-600 text-2xl'>*</span>
                            </p>
                            <input type="email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Please enter a valid email address'
                                    },
                                    validate: (value) => {
                                        if (!value) return 'Email is required';
                                        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                        if (!emailRegex.test(value)) {
                                            return 'Please enter a valid email address';
                                        }
                                        return true;
                                    }
                                })} placeholder='Enter Your Email'
                                style={{
                                    boxShadow: "inset 0px -2px 10px rgba(255, 255, 255, 0.18)",
                                }} className='h-10 w-full bottom-1 rounded bg-[#2C333F] p-[12px] text-[#F1F2FF]' />
                            {errors.email && (
                                <span className="text-red-500 text-sm font-semibold bg-red-100 p-2 rounded border border-red-300">
                                     {errors.email.message}
                                </span>
                            )}
                        </label>

                    </div>
                    <div className='flex w-full flex-col justify-start items-start gap-3'>
                        <label htmlFor="phone" className='flex flex-col w-full justify-between gap-1 items-start '><p className='text-xl'>Phone Number<span className='text-red-600 text-2xl'>*</span></p>
                            <input type="tel"
                                id="phone" placeholder='Enter Your Phone No' {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[\+]?[1-9][\d]{0,15}$/,
                                        message: 'Please enter a valid phone number'
                                    },
                                    validate: (value) => {
                                        const cleanPhone = value.replace(/\s/g, '');
                                        return /^[\+]?[1-9][\d]{0,15}$/.test(cleanPhone) || 'Please enter a valid phone number';
                                    }
                                })} style={{
                                    boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                }} className='h-10 w-full bottom-1 rounded bg-[#2C333F] p-[12px] text-[#F1F2FF]' />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                        </label>

                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </span>
                    ) : (
                        'Get Started - Book Free Call!'
                    )}
                </button>
                {submitError && (
                    <div className="w-full mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        <strong>Error:</strong> {submitError}
                    </div>
                )}
                <p className="text-xs text-gray-400 mt-4 text-center">
                    By submitting this form, you agree to receive marketing communications from us.
                </p>
            </form>
        </div>
    )
}

