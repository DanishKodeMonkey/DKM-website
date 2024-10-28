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
      <div className="flex items-center">
        <img src={DKM} alt="logo" className="logo" />
        <h1>The danishKodeMonkey cave</h1>
      </div>

      <nav>
        <button
          onClick={toggleNav}
          className="lg:hidden flex flex-col items-center focus:outline-none h-10"
        >
          <span className="block w-8 h-1 mb-1"></span>
          <span className="block w-8 h-1 mb-1"></span>
          <span className="block w-8 h-1"></span>
        </button>

        <div
          className={`absolute lg:relative nav-burger right-0 mt-2 shadow-lg rounded-lg transition-all origin-top duration-300 ease-in-out transform ${
            isNavOpen
              ? "block scale-y-100 opacity-100"
              : "block scale-y-50 opacity-0"
          } lg:flex lg:items-center lg:opacity-100 lg:scale-100`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About me</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
