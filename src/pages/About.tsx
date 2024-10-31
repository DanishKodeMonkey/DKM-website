import _React from "react";

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
          <h4 className="highlight-red">Self-taught</h4>
          <p>
            Continuous self-learning and constant urge for improvement, keeping
            up with the latest industry tech
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-purple">A solid foundation of</h4>

          <p>Vast experience founded on vanilla JavaScript, CSS, and HTML</p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-teal">front-end</h4>
          <p>
            Developed and completed projects including, but not limited to,
            dashboards, blogs, and browser-based games.
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-amber">back-end</h4>
          <p>
            Adept at processing data, managing authentication. and
            authorization, as well as serving views and pages with dynamic data
            from the server side.
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-pink">RESTful APIs</h4>
          <p>
            Effecient and safe management of data routing through tailored
            RESTful API solutions.
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-orange">
            Frameworks, tools, libraries
          </h4>
          <p>
            Experience in various libraries and frameworks including, but not
            limited to, React, Express, and postgreSQL
          </p>
        </div>

      </div>
      <p className="w-1/2 mx-auto mt-20">
        Fun facts:
        <ul className="text-red-500">
          <li>Too passionate about Deno</li>
          <li>Loves gaming</li>
          <li>Runs like a champ</li>
          <li></li>
        </ul>
      </p>
    </div>
  );
}
