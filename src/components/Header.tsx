import _React, { useEffect, useState } from "react";
// @ts-ignore: Deno vite react hates image imports

import { Link, useLocation } from "react-router-dom";
import DarkModeButton from "./DarkModeButton.tsx";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    const activeLink =
      currentPath.charAt(0).toLocaleUpperCase() + currentPath.slice(1) ||
      "Home";

    setSelectedLink(activeLink);
  }, [location.pathname]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link: string) => {
    toggleNav();
    setSelectedLink(link);
  };

  return (
    <header>
      <div className="flex justify-center px-4">
        <Link
          to={"home"}
          className="font-header text-4xl md:text-5xl lg:text-6xl  "
        >
          Daniel_Runge_
        </Link>
      </div>

      <nav>
        <button
          onClick={toggleNav}
          className="lg:hidden flex flex-col items-center focus:outline-none h-10"
        >
          <span className="block nav-burger w-8 h-1 mb-1"></span>
          <span className="block nav-burger w-8 h-1 mb-1"></span>
          <span className="block nav-burger w-8 h-1"></span>
        </button>

        <div
          className={`justify-center max-lg:dark:shadow-lg max-lg:dark:shadow-secondary-light max-lg:shadow-lg max-lg:shadow-highlight-light absolute z-50 lg:relative lg:justify-center right-0 max-md:mt-4 max-lg:mt-6 lg:ring-highlight-light dark:lg:ring-secondary-light max-lg:rounded-b-lg max-lg:border-highlight-light max-lg:border-b max-lg:border-l max-lg:border-r dark:border-secondary-light max-lg:dark:bg-secondary-dark max-lg:bg-highlight-dark max-sm:rounded-b-lg transition-all origin-top duration-300 ease-in-out transform ${
            isNavOpen
              ? "block scale-y-100 opacity-100"
              : "block scale-y-50 opacity-0"
          } lg:flex lg:items-center lg:opacity-100 lg:scale-100`}
        >
          <DarkModeButton />
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            {["Home", "Contact", "About", "Portfolio"].map((
              link,
            ) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`max-lg:w-full max-lg:text-right max-lg:block max-lg:rounded-lg text-2xl lg:text-xl py-2 transition-all duration-300 ${
                    selectedLink === link
                    ? "lg:shadow-glowLight lg:dark:shadow-glowDark px-24 lg:text-3xl lg:px-52 dark:bg-opacity-40 max-lg:ring-2 max-lg:py-0 max-lg:ring-highlight-light dark:max-lg:ring-secondary-light max-lg:rounded-lg border-t-2 border-l-2 border-r-2 pb-3 select-none border-highlight-light dark:border-secondary-light rounded-b-none bg-opacity-40 bg-highlight-dark dark:bg-secondary-dark  hover:text-neutral-dark dark:text-secondary-light text-highlight-light rounded-lg"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
