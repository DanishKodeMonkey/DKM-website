// @ts-ignore: Deno hates images
import DKM from "../public/assets/WIZARDMONKEY.jpg";
import TechScroller from "../components/TechScroller.tsx";

export default function Index() {
  return (
    <>
      <div className="text-center responsive-text">
        <div className="flex flex-col lg:flex-row xl:mr-58 xl:mx-10">
          <div className="flex justify-center items-center p-1 bg-highlight-light dark:bg-secondary-light avatar relative clip-tr-bl shadow-lg shadow-highlight-light">
            <div className="crt clip-tr-bl">
              <img
                src={DKM}
                alt="danishKodeMonkey"
                className="max-lg:self-center clip-tr-bl"
              />
            </div>
            <span className="clip-img-label">danishKodeMonkey</span>
          </div>
          <div className="flex flex-col justify-end lg:justify-end xl:justify-normal xl:mt-52 text-center">
            <div className="flex justify-center">
              <h1>Hello there!</h1>
              <h1>👋</h1>
            </div>
            <h2>
              My name is <span className="highlight-blue">Daniel</span>
            </h2>
            <h3 className="pb-5">
              I am a{" "}
              <span className="highlight-amber">Full-stack web wizard!</span>
            </h3>
          </div>
        </div>

        <div>
          <p>
            I am on a eternal quest of{" "}
            <span className="highlight-green">continuous learning</span>.
          </p>
          <br className="mb-2" />
          <p>
            Fighting{"  "}<span className="highlight-pink">epic</span>{" "}
            battles against{" "}
            <span className="highlight-red">Errors and bugs</span>
            {" "}
          </p>
          <br className="mb-2" />
          <p>
            While crafting{" "}
            <span className="highlight-yellow">legendary websites</span>,{" "}
            <span className="highlight-green">backend servers</span>and{" "}
            <span className="highlight-red">restful-APIs!</span>
          </p>
          <div className="flex flex-col md:hidden">
            |<br />
            V
          </div>
        </div>

        <TechScroller />
      </div>
    </>
  );
}
