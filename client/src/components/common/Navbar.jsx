import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 10;
      setIsScrolled(shouldBeScrolled);
    };

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Find Events", href: "/browse-events" },
    { name: "Browse Destinations", href: "/browse-destinations" },
    { name: "Create Event", href: "/organizer/register" },
    { name: "Create Destination", href: "/destinations/create" },
  ];

  return (
    <>
      {/* Green bar */}
      <div className="bg-green-500 h-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end text-white text-sm font-medium">
          <div className="flex items-center space-x-6">
            <Link
              to="/auth/login"
              className="hover:text-green-200 transition-colors duration-200 cursor-pointer"
            >
              Login
            </Link>
            <span>|</span>
            <Link
              to="/auth/register"
              className="hover:text-green-200 transition-colors duration-200 cursor-pointer"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-8 left-0 right-0 z-[9999] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ease-in-out ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                TicketCraft
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile due to many items */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.slice(0, 8).map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ease-in-out ${
                      isScrolled
                        ? "text-gray-700 hover:text-green-600"
                        : "text-white hover:text-green-200"
                    }`}
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="inline w-4 h-4 ml-1" />
                    )}
                  </Link>

                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/get-started"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden transition-colors duration-200 ease-in-out ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-2 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 border-l-2 border-gray-100 ml-3">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-green-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact-sales"
                className="block mt-4 text-gray-700 hover:text-green-600 px-6 py-2 font-semibold text-center border border-gray-300 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Sales
              </Link>
              <Link
                to="/get-started"
                className="block mt-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-center"
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
