import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Target, TrendingUp, Zap } from "lucide-react";

const Solutions = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Brands Solution */}
        <section className="py-16 bg-white" id="brands">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-on-scroll">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                Drive growth with every dollar.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Maximize ROAS and lower CAC with SKU-level measurement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-gray-50 animate-on-scroll">
                <Target className="w-12 h-12 text-pulse-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Unified retail media planning</h3>
                <p className="text-gray-600">Plan campaigns across all RMNs from one centralized platform.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50 animate-on-scroll">
                <TrendingUp className="w-12 h-12 text-pulse-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Optimized spend across RMNs</h3>
                <p className="text-gray-600">AI-powered budget allocation to top-performing channels.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50 animate-on-scroll">
                <Zap className="w-12 h-12 text-pulse-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Real-time insights</h3>
                <p className="text-gray-600">Performance marketers get SKU-level data instantly.</p>
              </div>
            </div>
            
            <div className="text-center animate-on-scroll">
              <a 
                href="#demo" 
                className="inline-flex items-center justify-center group" 
                style={{
                  backgroundColor: '#FE5C02',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: '24px',
                  padding: '18px 32px',
                  border: '1px solid white',
                  fontWeight: '600',
                }}
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;