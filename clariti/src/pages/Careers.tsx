import React from "react";
import { Button } from "@/components/ui/button";
import "../styles/magic-bento.css";

const Careers = () => {
  return (
    <div className="bg-white text-dark-900">
      {/* Hero Section */}
      <section
        className="relative text-center py-20"
        style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Seamless fade-out at bottom */}
        <div
          className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
          }}
        />
        <h1 className="section-title mb-4">Join the Clariti Team</h1>
        <p className="section-subtitle mx-auto max-w-2xl">
          We’re building the future of retail media performance. Come shape it
          with us.
        </p>
      </section>

      {/* Values Section */}
      <section className="section-container">
        <h2 className="section-title text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Innovation",
              desc: "We thrive on creativity, pushing boundaries to deliver world-class solutions.",
              icon: "💡",
            },
            {
              title: "Collaboration",
              desc: "We believe the best outcomes happen when we work together as one team.",
              icon: "🤝",
            },
            {
              title: "Growth",
              desc: "Your growth fuels our growth. We invest in learning and development.",
              icon: "📈",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="glass-card magic-bento-card p-8 text-center hover-lift transition"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-pulse-500 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-container">
        <h2 className="section-title text-center">Open Positions</h2>
        <div className="mt-10 space-y-6 max-w-3xl mx-auto">
          {[
            {
              title: "Frontend Developer",
              location: "Remote · Full Time",
            },
            {
              title: "Product Designer",
              location: "Bangalore · Full Time",
            },
            {
              title: "Customer Success Manager",
              location: "Remote · Contract",
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white rounded-2xl p-6 shadow-elegant magic-bento-card hover:shadow-elegant-hover transition"
            >
              <div>
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <span className="text-sm text-gray-600">{job.location}</span>
              </div>
              <Button className="bg-pulse-500 hover:bg-pulse-600 rounded-full px-6">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="section-title text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: "Flexible Hours",
                desc: "Balance your work and life with flexible scheduling.",
              },
              {
                title: "Health Coverage",
                desc: "Comprehensive medical and wellness benefits.",
              },
              {
                title: "Learning Budget",
                desc: "Annual budget for courses, events, and certifications.",
              },
              {
                title: "Remote-Friendly",
                desc: "Work from anywhere, collaborate everywhere.",
              },
            ].map((perk, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl text-center shadow-md magic-bento-card hover-lift transition"
              >
                <h3 className="text-lg font-semibold text-pulse-500 mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600 text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center py-10 bg-white border-t">
        <p className="text-gray-600 text-sm">
          © 2025 Clariti. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Careers;
