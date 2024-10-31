import _React from "react";

//@ts-ignore:deno hates images
import selfTaughtGif from '../public/assets/wired-outline-2344-poetry-hover-pinch.gif'
//@ts-ignore:deno hates images
import backEndGif from '../public/assets/wired-outline-58-servers-hover-pinch.gif'
//@ts-ignore:deno hates images
import frontEndGif from '../public/assets/wired-outline-1329-responsive-hover-responsive.gif'
//@ts-ignore:deno hates images
import foundationGif from '../public/assets/wired-outline-1321-html-5-code-language-hover-pinch.gif'
//@ts-ignore:deno hates images
import apiGif from '../public/assets/wired-outline-1330-rest-api-hover-machine.gif'
//@ts-ignore:deno hates images
import frameworksGif from '../public/assets/wired-outline-776-hammers-hover-pinch.gif'

export default function About() {
  return (
    <div className="text-center py-10">
      <div className="text-container">
        <h3>
          Hello! 👋 <br />
          My name is <span className="highlight-blue">Daniel</span>
        </h3>
        <h4>
          I am a{"  "}
          <span className="highlight-yellow">Full-stack developer</span>, going
          on 3 years. <br />{" "}
          I am on an eternal quest of continuos learning, With a focus on{"  "}
          <span className="highlight-green">
            web technologies and development
          </span>
        </h4>
      </div>
      <br />
      <div className="grid-layout gap-20">
        <div className="card about-me">
          <div className="flex justify-between mb-5">
            <h4 className="highlight-red">Self-taught</h4>
            <img src={selfTaughtGif} alt="self taught" className="about-gif" />
          </div>
          <p>
            Continuous self-learning and constant urge for improvement, keeping
            up with the latest industry tech
          </p>
        </div>
        <div className="card about-me">
          <div className="flex justify-between mb-5">
            <h4 className="highlight-purple">A solid foundation of</h4>
            <img src={foundationGif} alt="A solid foundation" className="about-gif" />
          </div>

          <p>Vast experience founded on vanilla JavaScript, CSS, and HTML</p>
        </div>
        <div className="card about-me">
          <div className="flex justify-between mb-5">
            <h4 className="highlight-teal">front-end</h4>
            <img src={frontEndGif} alt="Frontend" className="about-gif" />
          </div>
          <p>
            Developed and completed projects including, but not limited to,
            dashboards, blogs, and browser-based games.
          </p>
        </div>
        <div className="card about-me">
          <div className="flex justify-between mb-5">
            <h4 className="highlight-amber">back-end</h4>
            <img src={backEndGif} alt="Backend" className="about-gif" />
          </div>
          <p>
            Adept at processing data, managing authentication. and
            authorization, as well as serving views and pages with dynamic data
            from the server side.
          </p>
        </div>
        <div className="card about-me">
          <div className="flex justify-between mb-5">
            <h4 className="highlight-pink">RESTful APIs</h4>
            <img src={apiGif} alt="API" className="about-gif" />
          </div>
          <p>
            Effecient and safe management of data routing through tailored
            RESTful API solutions.
          </p>
        </div>
        <div className="card about-me">
          <div className="flex justify-between mb-5">
            <h4 className="highlight-orange">
              Frameworks, tools, libraries
            </h4>
            <img src={frameworksGif} alt="frameworks" className="about-gif" />
          </div>
          <p>
            Experience in various libraries and frameworks including, but not
            limited to, React, Express, and postgreSQL
          </p>
        </div>

      </div>
      <div className="w-1/2 mx-auto mt-20 p-5 border border-highlight-light rounded-lg shadow-inner shadow-highlight-light">
        <h4 className="text-lg font-bold mb-3">Fun Facts:</h4>
        <ul className="list-disc list-inside">
          <li className="highlight-green">Too passionate about Dinosaurs in code</li>
          <li className="highlight-yellow">Loves gaming, and breaking games</li>
          <li className="highlight-purple">Runs like a champ, until I trip into a swamp</li>
        </ul>
      </div>
    </div>
  );
}
