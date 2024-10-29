const Footer = () => {
  return (
    <footer className="flex-row justify-around">
      <div className="flex flex-col">
        <h4>You can find me at:</h4>
        <a href="mailto:daniel_runge_@hotmail.com">
          Daniel_Runge_@hotmail.com
        </a>

        <a href="https://github.com/DanishKodeMonkey">GitHub.com</a>

        <a href="www.linkedin.com/in/daniel-ljung-runge-3ba014a1">LinkedIn</a>
      </div>
      <div className="flex flex-col">
        <h4>This site is powered by:</h4>

        <a href="https://deno.com/">Deno 2.0</a>

        <a href="https://vite.dev/">Vite@React</a>

        <a href="https://tailwindcss.com/">TailwindCSS</a>
      </div>
    </footer>
  );
};

export default Footer;
