'use client';

import { useEffect, useState } from 'react';

export default function Popup({ show, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (show) {
        onClose();
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
  
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-sm">
       
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

   
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className={`relative max-w-md w-full transition-all duration-500 transform ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
     
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
           
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-pink-400 to-red-500 rounded-full opacity-20"></div>
            
           
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white/30 transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

           
            <div className="relative z-10 text-center">
         
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-3xl">🎉</span>
                </div>
                <div className="absolute -top-20 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <button  className='w-8 h-8 cursor-pointer'>
                    <span className="text-white text-xs font-bold border-2">%</span>
                    </button>
                </div>
              </div>

           
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Special Offer!
              </h3>

           
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-2">
                  Get <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">10% OFF</span>
                </p>
                <p className="text-gray-600">
                  your first month when you sign up today!
                </p>
              </div>

            
              <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                ⏰ Limited time offer - expires in 24 hours
              </div>

         
              <div className="space-y-2 mb-8 text-left">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Instant access to premium features
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  No setup fees or hidden costs
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Cancel anytime, no questions asked
                </div>
              </div>

             
              <div className="space-y-3">
                <button
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  🎯 Claim 10% Discount Now
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-gray-500 hover:text-gray-700 py-3 transition-colors duration-200 font-medium"
                >
                  Maybe Later
                </button>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 