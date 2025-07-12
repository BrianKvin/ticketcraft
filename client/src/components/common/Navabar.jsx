import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Platform", href: "/platform" },
    { name: "Ticketing", href: "/ticketing" },
    { name: "Marketing", href: "/marketing" },
    { name: "On Site", href: "/on-site" },
    { name: "Timed Entry Ticketing", href: "/timed-entry" },
  ];

  return (
    <>
      {/* Green bar */}
      <div className="bg-green-500 h-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end text-white text-sm font-medium">
          <div className="flex items-center space-x-6">
            <Link to="/contact-sales">Contact Sales</Link>
            <span>|</span>
            <Link to="/contact-support">Contact Support</Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
            TicketCraft
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`xl:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/get-started"
                className="block px-3 py-2 text-white bg-green-500 rounded-full font-medium hover:bg-green-600 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;