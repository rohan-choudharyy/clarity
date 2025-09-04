import React, { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Request submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return <section id="contact" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
          <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
              Contact
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
              See Clariti in action
            </h2>
          </div>
          <div className="bg-white p-4 sm:p-8" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" required />
              </div>
              <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" required />
              </div>
              <div>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" required />
              </div>
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300">
                  Request demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;