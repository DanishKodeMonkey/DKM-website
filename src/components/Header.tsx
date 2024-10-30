import _React, { useState } from "react";
// @ts-ignore: Deno vite react hates image imports

import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <header>
      <div className="flex justify-center px-4">
        <h1 className="font-header text-3xl  md:text-5xl lg:text-6xl  text-nowrap text-neutral-200">The danishKodeMonkey cave</h1>
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
          className={`absolute lg:relative lg:justify-center right-0 mt-4 lg:ring-2 lg:ring-highlight-light dark:lg:ring-highlight-light max-lg:rounded-b-lg max-lg:border-highlight-light max-lg:border-b max-lg:border-l max-lg:border-r dark:border-highlight-light dark:bg-highlight-dark bg-highlight max-sm:rounded-b-lg transition-all origin-top duration-300 ease-in-out transform ${
            isNavOpen
              ? "block scale-y-100 opacity-100"
            : "hidden scale-y-50 opacity-0"
          } lg:flex lg:items-center lg:opacity-100 lg:scale-100`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-right">
            {["Home", "Contact", "About", "Services", "Portfolio"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`text-5xl lg:text-xl px-2 transition-all duration-300 ${selectedLink === link ? "px-24 lg:text-3xl lg:px-52 bg-secondary-light dark:bg-secondary-dark hover:text-neutral-dark  ring-2 ring-secondary-light rounded-md" : ""
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
