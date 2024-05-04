import React, { useState } from "react";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    closeMobileMenu();
  };

  const handleProjectsClick = () => {
    window.scrollTo({
      top: window.innerHeight * 1.1,
      behavior: "smooth",
    });
    closeMobileMenu();
  };

  const handleIllustrationsClick = () => {
    window.scrollTo({
      top: window.innerHeight * 4.7,
      behavior: "smooth",
    });
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white font-Inter font-medium">
      <div className="flex justify-between items-center sm:px-8 px-4 py-2">
        <div className="text-3xl">The Godseeker</div>
        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex sm:justify-end font-bold text-xl">
          <div
            className="ml-6 cursor-pointer hover:text-red-600 transition duration-500"
            onClick={handleProjectsClick}
          >
            PROJECTS
          </div>
          <div
            className="ml-6 cursor-pointer hover:text-blue-600 transition duration-500"
            onClick={handleIllustrationsClick}
          >
            ILLUSTRATIONS
          </div>
          <div
            className="ml-6 cursor-pointer hover:text-amber-300 transition duration-500"
            onClick={handleContactClick}
          >
            CONTACT
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div
            className="flex flex-col px-4 py-2 text-xl"
            onClick={closeMobileMenu}
          >
            <div className="cursor-pointer" onClick={handleProjectsClick}>
              PROJECTS
            </div>
            <div
              className="cursor-pointer mt-2"
              onClick={handleIllustrationsClick}
            >
              ILLUSTRATIONS
            </div>
            <div className="cursor-pointer mt-2" onClick={handleContactClick}>
              CONTACT
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
