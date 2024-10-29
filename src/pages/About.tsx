import _React from "react";
// @ts-ignore: Deno hates images
import DKM from "../public/assets/mm12sSNz.jpg";

export default function About() {
  return (
    <div className="text-center responsive-text py-10">
      <h1>About me:</h1>
      <div className="flex align-middle justify-center">
        <img src={DKM} alt="Danish kode Monkey" className="avatar" />
      </div>
      <h3>
        Hello! 👋 <br />
        My name is <span className="highlight-blue">Daniel</span>
      </h3>
      <h4>
        I am a{"  "}
        <span className="highlight-yellow">Full-stack developer</span>, going on 3
        years. <br /> I am on an eternal quest of continuos learning,
        With a focus on {" "}
        <span className="highlight-green">web technologies and development</span>


      </h4>
      <br />
      <div className="grid-layout">
        <div className="card about-me">
          <h4 className="highlight-red">Autodidact</h4>
          <p>experience creating web-based solutions across the full-stack spectrum.</p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-purple">A solid foundation of</h4>

          <p>vanilla JavaScript, CSS, and HTML</p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-teal">front-end</h4>
          <p>
            I have developed and
            completed projects including, but not limited to, dashboards, blogs, and
            browser-based games.
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-amber">back-end</h4>
          <p>
            I am adept at
            processing data, managing
            authentication.
            and
            authorization, as well as serving
            views and pages with dynamic data from the server side.
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-pink">RESTful APIs</h4>
          <p>
            Which allow me to
            efficiently and safely manage the routing of data, requests, and
            responses between the user and the server.
          </p>
        </div>
        <div className="card about-me">
          <h4 className="highlight-orange">
            Frameworks, tools, libraries
          </h4>
          <p>
            Ensuring optimal performance and user experiences in all my
            projects.
          </p>
        </div>
      </div>
      {/*       <div className="text-start">
        I have extensive ,
        all built on .
        <br /> <br />
        On the{" "}

        <br /> <br />
        On the{" "}

        <br /> <br />
        Additionally, I have experience building custom{" "}

        <br /> <br />
        My expertise extends to utilizing various{" "}

        <br /> <br />


        <br /> <br />
        In my spare time, I enjoy exploring new technologies, gaming, and
        nerding out about tech. <br />

        <br /> <br />
        If you ever need someone to explain the intricacies of code or to help
        troubleshoot your latest bug, I'm your go-to guy! ☕💻
      </div> */}
    </div>
  );
}
