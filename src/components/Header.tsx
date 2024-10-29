import _React, { useState } from "react";
// @ts-ignore: Deno vite react hates image imports
import DKM from "../public/assets/mm12sSNz.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="flex items-center px-4">
        <img src={DKM} alt="logo" className="logo" />
        <h1 className="text-3xl  md:text-5xl lg:text-6xl  text-nowrap text-neutral-200">The danishKodeMonkey cave</h1>
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
          className={`absolute lg:relative right-0 mt-4 lg:ring-2 lg:ring-secondary-dark dark:lg:ring-secondary-light max-lg:rounded-b-lg max-lg:border-secondary-light max-lg:border-b max-lg:border-l max-lg:border-r dark:border-secondary-light dark:bg-secondary-dark bg-secondary max-sm:rounded-b-lg transition-all origin-top duration-300 ease-in-out transform ${
            isNavOpen
              ? "block scale-y-100 opacity-100"
              : "block scale-y-50 opacity-0"
          } lg:flex lg:items-center lg:opacity-100 lg:scale-100`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-right">
            <li>
              <Link to={"/"} className="text-5xl lg:text-xl">Home</Link>
            </li>
            <li>
              <Link to={"/contactMe"} className="text-5xl lg:text-xl">Contact</Link>
            </li>
            <li>
              <Link to={"/about"} className="text-5xl lg:text-xl">About</Link>
            </li>

            <li>
              <Link to={"/services"} className="text-5xl lg:text-xl">Services</Link>
            </li>
            <li>
              <Link to={"/portfolio"} className="text-5xl lg:text-xl">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
