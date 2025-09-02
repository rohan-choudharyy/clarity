
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            See how leading brands drive lift with Clariti
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our platform transforms retail media performance with unified 
            campaign management and SKU-level insights.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/917075c4-2fe7-4680-9491-6e2c09c3dee2.png" 
              alt="The Clariti Platform Dashboard showing unified retail media campaign management" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">The Clariti Platform</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Unify retail media campaigns across all networks in one platform. Track performance 
              at the SKU level, optimize budgets in real-time, and measure true ROAS with 
              comprehensive reporting and analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
