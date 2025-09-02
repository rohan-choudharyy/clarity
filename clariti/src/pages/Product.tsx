import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Play, Target, Zap } from "lucide-react";

const Product = () => {
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

  const steps = [
    {
      icon: <Target className="w-8 h-8 text-pulse-500" />,
      title: "Plan",
      description: "Unify campaigns across RMNs in one place."
    },
    {
      icon: <Play className="w-8 h-8 text-pulse-500" />,
      title: "Activate",
      description: "Launch with speed and accuracy."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pulse-500" />,
      title: "Measure",
      description: "SKU-level insights, real-time dashboards."
    },
    {
      icon: <Zap className="w-8 h-8 text-pulse-500" />,
      title: "Optimize",
      description: "Shift budgets where they perform best."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-on-scroll">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                The Clariti Platform.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                One platform to plan, activate, measure, and optimize retail media.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto mb-16">
              <img 
                src="/lovable-uploads/917075c4-2fe7-4680-9491-6e2c09c3dee2.png" 
                alt="The Clariti Platform Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl animate-on-scroll"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 animate-on-scroll hover:shadow-elegant transition-shadow duration-300"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
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
                Request a Demo
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

export default Product;