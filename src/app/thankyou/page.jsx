'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(24);
  const isdarkMode=useSelector((state)=>state.theme.darkMode)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen ${isdarkMode ? 'bg-gradient-to-br relative overflow-hidden from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'} flex items-center justify-center p-4`}>
      <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-green-500 text-8xl mb-6">🎉</div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Your information has been submitted successfully. We're excited to help you grow your business!
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">What Happens Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-blue-800">We'll Review Your Information</h3>
                <p className="text-blue-700">Our team will analyze your business needs and prepare a customized strategy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-blue-800">Schedule Your Free Call</h3>
                <p className="text-blue-700">You'll receive an email within {countdown} hours to schedule your 30-minute consultation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-blue-800">Get Your Growth Roadmap</h3>
                <p className="text-blue-700">During the call, we'll provide actionable strategies to increase your revenue.</p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Back to Home
          </Link>
          
          
        </div>
      </div>
    </div>
  );
} 