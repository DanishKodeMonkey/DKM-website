// @ts-ignore: Deno hates images
import DKM2 from "../public/assets/WIZARDMONKEY2.jpg";

export default function ContactMe() {
  return (
    <main>
      <div className="flex flex-col text-center">
        <div className="flex justify-center">
          <img className="screenshot" src={DKM2} alt="tech wizard monkey" />
        </div>
        <h1 className="text-2xl mt-10 mb-1">It's dangerous out there!</h1>
        <h2 className="text-xl">If you ever need a tech wizard at your side</h2>
        <h3 className="text-lg mb-2">Dont hesitate to summon me by:</h3>
        <a href="mailto:daniel_runge_@hotmail.com">
          Email: Daniel_Runge_@hotmail.com
        </a>
        <a href="https://github.com/DanishKodeMonkey">
          DanishKodeMonkey on GitHub.com
        </a>
        <a href="https://www.linkedin.com/in/daniel-ljung-runge-3ba014a1">
          Daniel Ljung Runge on LinkedIn
        </a>
      </div>
    </main>
  );
}
