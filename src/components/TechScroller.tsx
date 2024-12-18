import React from "react";
import { Tech } from "../types.ts";

/// <reference path="../images.d.ts" />
/// <reference path="../vite-env.d.ts" />
// @ts-self-types="../images.d.ts"

/* FIXME When Deno can play nice with svg imports, fix this */

// @ts-ignore: Deno hates image imports for now
import bootstrapIcon from "../public/assets/bootstrap.svg";
// @ts-ignore: Deno hates image imports for now
import css3Icon from "../public/assets/css3.svg";
// @ts-ignore: Deno hates image imports for now
import denoIcon from "../public/assets/deno.svg";
// @ts-ignore: Deno hates image imports for now
import dockerIcon from "../public/assets/docker.svg";
// @ts-ignore: Deno hates image imports for now
import expressIcon from "../public/assets/express.svg";
// @ts-ignore: Deno hates image imports for now
import flaskIcon from "../public/assets/flask.svg";
// @ts-ignore: Deno hates image imports for now
import gitIcon from "../public/assets/git.svg";
// @ts-ignore: Deno hates image imports for now
import html5Icon from "../public/assets/html5.svg";
// @ts-ignore: Deno hates image imports for now
import htmxIcon from "../public/assets/htmx.svg";
// @ts-ignore: Deno hates image imports for now
import javascriptIcon from "../public/assets/javascript.svg";
// @ts-ignore: Deno hates image imports for now
import mongodbIcon from "../public/assets/mongodb.svg";
// @ts-ignore: Deno hates image imports for now
import mongooseIcon from "../public/assets/mongoose.svg";
// @ts-ignore: Deno hates image imports for now
import nodedotjsIcon from "../public/assets/nodedotjs.svg";
// @ts-ignore: Deno hates image imports for now
import postgresqlIcon from "../public/assets/postgresql.svg";
// @ts-ignore: Deno hates image imports for now
import prismaIcon from "../public/assets/prisma.svg";
// @ts-ignore: Deno hates image imports for now
import pythonIcon from "../public/assets/python.svg";
// @ts-ignore: Deno hates image imports for now
import reactIcon from "../public/assets/react.svg";
// @ts-ignore: Deno hates image imports for now
import tailwindcssIcon from "../public/assets/tailwindcss.svg";
// @ts-ignore: Deno hates image imports for now
import typescriptIcon from "../public/assets/typescript.svg";
// @ts-ignore: Deno hates image imports for now
import viteIcon from "../public/assets/vite.svg";
// @ts-ignore: Deno hates image imports for now
import webpackIcon from "../public/assets/webpack.svg";

const FrameworksAndLibraries: Tech[] = [
  { src: bootstrapIcon, alt: "Bootstrap" },
  { src: dockerIcon, alt: "Docker" },
  { src: expressIcon, alt: "Express" },
  { src: flaskIcon, alt: "Flask" },
  { src: gitIcon, alt: "Git" },
  { src: htmxIcon, alt: "HTMX" },
  { src: mongodbIcon, alt: "MongoDB" },
  { src: mongooseIcon, alt: "Mongoose" },
  { src: postgresqlIcon, alt: "PostgreSQL" },
  { src: prismaIcon, alt: "Prisma" },
  { src: reactIcon, alt: "React" },
  { src: tailwindcssIcon, alt: "Tailwind CSS" },
  { src: viteIcon, alt: "Vite" },
  { src: webpackIcon, alt: "Webpack" },
];

const languages: Tech[] = [
  { src: css3Icon, alt: "CSS3" },
  { src: denoIcon, alt: "Deno" },
  { src: html5Icon, alt: "HTML5" },
  { src: javascriptIcon, alt: "JavaScript" },
  { src: nodedotjsIcon, alt: "Node.js" },
  { src: pythonIcon, alt: "Python" },
  { src: typescriptIcon, alt: "TypeScript" },
];

const TechItem: React.FC<Tech> = ({ src, alt }: Tech) => (
  <div className="tech-item" id={alt}>
    <p>{alt}</p>
    <img src={src} alt={alt} className="tech-icon" />
  </div>
);

const TechScroller: React.FC = () => {
  return (
    <>
      <h5 className="mt-12 mb-4">
        have a look at my bottomless, ever-expanding toolbox of magic swords! ⚔️
      </h5>
      <div id="tech-scroller">
        <span className="tech-scroll-title">
          Bottomless Toolbox (Do not feed)
        </span>
        <div
          className="tech-container animate-slide-left"
          id="lang-container"
        >
          {/* Infinite stack of languages */}
          {[
            ...languages,
            ...languages,
            ...languages,
            ...languages,
            ...languages,
          ]
            .map((tech, index) => (
              <TechItem key={index} src={tech.src} alt={tech.alt} />
            ))}
        </div>
        <div
          className="tech-container animate-slide-right"
          id="frameLib-container"
        >
          {/* Infinite stack of frameworks and libraries */}
          {[
            ...FrameworksAndLibraries,
            ...FrameworksAndLibraries,
            ...FrameworksAndLibraries,
            ...FrameworksAndLibraries,
          ].map(
            (tech, index) => (
              <TechItem key={index} src={tech.src} alt={tech.alt} />
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default TechScroller;
