import { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [opacity, setOpacity] = useState<number>(1); 

  useEffect(() => {
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; 
      const calculatedOpacity = Math.max(1 - scrollY / maxScroll, 0.6); 
      setOpacity(calculatedOpacity);
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav
      className="sticky top-0 z-50 h-18 bg-gradient-to-r from-transparent via-indigo-100 to-transparent"
      style={{ opacity }} 
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex mx-auto justify-between w-5/6 h-20">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16">
            {/* logo */}
            <div className="h-12">
              <a
                href="/"
                className="flex gap-1 font-medium text-gray-700 items-center h-12 text-2xl"
              >
                <AcademicCapIcon className="w-6 text-primary" />
                <span>
                  i<span className="text-[#FF0000]">Speak</span>
                  <span className="text-[#0000FF]">Anglo</span>
                </span>
              </a>
            </div>
            {/* primary */}
            <ul className="hidden lg:flex gap-12 ml-10 text-lg">
              <li
                className={`cursor-pointer ${
                  activeSection === "about" ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => handleSectionClick("about")}
              >
                <a href="#about">Pourquoi nous?</a>
              </li>

              <li
                className={`cursor-pointer ${
                  activeSection === "avantages"
                    ? "text-blue-500"
                    : "text-gray-700"
                }`}
                onClick={() => handleSectionClick("avantages")}
              >
                <a href="#avantages">Nos avantages</a>
              </li>

              <li
                className={`cursor-pointer ${
                  activeSection === "fierte" ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => handleSectionClick("fierte")}
              >
                <a href="#fierte">Notre fierté</a>
              </li>

              <li
                className={`cursor-pointer font-bold ${
                  activeSection === "reserver"
                    ? "text-blue-500"
                    : "text-gray-700"
                }`}
                onClick={() => handleSectionClick("reserver")}
              >
                <a href="#reserver">Réservez un cours maintenant !</a>
              </li>
            </ul>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
                <MoonIcon className="h-6 w-6 text-primary" />
                <SunIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#about">Pourquoi nous?</a>
            <a href="#avantages">Nos avantages</a>
            <a href="#fierte">Notre fierté</a>
            <a href="#reserver">Réservez un cours maintenant!</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
