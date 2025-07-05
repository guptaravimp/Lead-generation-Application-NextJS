"use client"
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Popup from "@/components/Popup";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isdarkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={` ${isdarkMode ? 'bg-gradient-to-br relative overflow-hidden from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'} w-full h-full `}>

      <div className="max-w-full flex flex-col justify-evenly items-center mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get More Customers
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Book a Free Strategy Call!
          </h2>
          <p className={`text-xl md:text-2xl mb-8 ${isdarkMode ? "text-gray-500" : "text-[#131B2B]"}  max-w-3xl mx-auto leading-relaxed`}>
            Join <span className="text-blue-600 font-bold">500+ businesses</span> that have grown their revenue by{' '}
            <span className="text-green-600 font-bold">300%</span> in just 6 months with our proven strategies
          </p>
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ⚡ Limited spots available this week!
          </div>
        </div>

        <div className="w-[85%]  hero   flex justify-between">
          <div className="w-[46%] first bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-xl">
            <div className={`transition-all duration-1000 delay-300 `}>
              <h3 className="text-3xl font-bold mb-8 text-white">What You&aposll Get </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "✅",
                    title: "Custom Growth Strategy",
                    description: "Tailored specifically to your business model "
                  },
                  {
                    icon: "✅",
                    title: "Expert Consultation",
                    description: "30-minute session with our growth specialists"
                  },
                  {
                    icon: "✅",
                    title: "Actionable Roadmap",
                    description: "Step-by-step plan to increase your revenue"
                  },
                  {
                    icon: "✅",
                    title: "Free Marketing Audit",
                    description: "Comprehensive analysis of your current efforts"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start   group">
                    <div className="text-3xl  group-hover:scale-110 transition-transform duration-200">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl  flex justify-start items-start font-semibold ml-0.5 text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300 flex justify-start items-start  ml-0.5 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[46%] first bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-xl">
            <LeadForm />
          </div>
        </div>


      </div>
      <Footer />
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}
