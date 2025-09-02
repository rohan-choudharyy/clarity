
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Clariti"
        >
          <img 
            src="/logo.svg" 
            alt="Clariti Logo" 
            className="h-20 sm:h-20" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          <a 
            href="/" 
            className="nav-link"
          >
            Home
          </a>
          <a href="/solutions" className="nav-link">Solutions</a>
          <a href="/product" className="nav-link">Product</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/case-studies" className="nav-link">Case Studies</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/careers" className="nav-link">Careers</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="#demo" 
            className="inline-flex items-center justify-center" 
            style={{
              backgroundColor: '#FE5C02',
              borderRadius: '1440px',
              boxSizing: 'border-box',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: '20px',
              padding: '12px 20px',
              border: '1px solid white',
              fontWeight: '500',
            }}
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="lg:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 lg:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4 items-center mt-8">
          <a 
            href="/" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="/solutions" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Solutions
          </a>
          <a 
            href="/product" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Product
          </a>
          <a 
            href="/services" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Services
          </a>
          <a 
            href="/case-studies" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Case Studies
          </a>
          <a 
            href="/contact" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
          <div className="mt-4">
            <a 
              href="#demo" 
              className="inline-flex items-center justify-center" 
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: '20px',
                padding: '12px 20px',
                border: '1px solid white',
                fontWeight: '500',
              }}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Book a Demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
