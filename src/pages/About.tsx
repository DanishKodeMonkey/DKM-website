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
        My name is <span className="text-sky-400">Daniel</span>
      </h3>
      <h4>
        I am a{"  "}
        <span className="text-amber-400">Full-stack developer</span>, going on 3
        years. <br />
        With a focus on{" "}
        <span className="text-green-500">web technologies and development</span>
      </h4>
      <br />
      <p className="text-start">
        I have extensive <span className="text-primary">self-taught</span>{" "}
        experience creating web-based solutions across the full-stack spectrum,
        all built on a solid foundation of{" "}
        <span className="text-sky-500">vanilla JavaScript, CSS, and HTML</span>.
        <br /> <br />
        On the{" "}
        <span className="text-primary">front-end</span>, I have developed and
        completed projects including, but not limited to, dashboards, blogs, and
        browser-based games.
        <br /> <br />
        On the{" "}
        <span className="text-secondary">back-end</span>, I am adept at
        processing data, managing{" "}
        <span className="text-red-700">authentication</span>
        and{" "}
        <span className="text-red-700">authorization</span>, as well as serving
        views and pages with dynamic data from the server side.
        <br /> <br />
        Additionally, I have experience building custom{" "}
        <span className="text-amber-300">RESTful APIs</span>, which allow me to
        efficiently and safely manage the routing of data, requests, and
        responses between the user and the server.
        <br /> <br />
        My expertise extends to utilizing various{" "}
        <span className="text-blue-400">
          modern frameworks, tools, and libraries
        </span>, ensuring optimal performance and user experiences in all my
        projects.
        <br /> <br />
        I am on a eternal quest of{" "}
        <span className="text-green-500">continuous learning</span>, keeping
        up-to-date with the latest industry tech, trends and best practices.
        {
          /*  I enjoy collaborating with teams to bring ideas to life and believe in the importance of creating <span className="text-primary">user-friendly</span>
                and <span className="text-primary">accessible</span> web applications.  */
        }
        <br /> <br />
        In my spare time, I enjoy exploring new technologies, gaming, and
        nerding out about tech. <br />
        {
          /*                 And yes, I may or may not have a secret stash of snacks
                that fuels my coding sessions—because whats a developer without a little fuel, right? 🍕 */
        }
        <br /> <br />
        If you ever need someone to explain the intricacies of code or to help
        troubleshoot your latest bug, I'm your go-to guy! ☕💻 {
          /* Just dont ask me to fix
                the coffee machine—last time, we had a *brew-tiful* disaster! */
        }
      </p>
    </div>
  );
}
