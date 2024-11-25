// @ts-ignore: Deno hates images
import darkSvg from "../public/assets/moon-outline.svg";
// @ts-ignore: Deno hates images
import lightSvg from "../public/assets/sunny-outline.svg";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const htmlElement = document.documentElement;
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    if (storedTheme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (

      <button
      className="dark:bg-opacity-20 bg-opacity-20 lg:shadow-glowDark lg:dark:shadow-glowLight shadow-none bg-highlight-dark lg:bg-secondary-dark lg:dark:bg-highlight-dark hover:bg-secondary-light dark:hover:bg-highlight-light w-full h-8 ml-auto m-1 p-4 lg:w-9 lg:h-9 lg:m-1 lg:p-0 flex items-center justify-center cursor-pointer"
        id="theme-toggle"
        onClick={toggleDarkMode}
      >
        <img
          src={theme === "dark" ? lightSvg : darkSvg}
          alt="Toggle Theme"
          className="max-w-8"
        />
      </button>

  );
};

export default DarkModeButton;
