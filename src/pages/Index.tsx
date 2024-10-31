import { useEffect, useState } from "react";
// @ts-ignore: Deno hates images
import DKM from "../public/assets/WIZARDMONKEY.jpg";
import { Comment } from "../types.ts";
import { useLoading } from "../contexts/LoadingContext.tsx";
import TechScroller from "../components/TechScroller.tsx";

export default function Index() {
  const { setIsLoading } = useLoading();


  return (
    <>
      <div className="text-center responsive-text">

        <div className="flex flex-col md:flex-row">
          <img src={DKM} alt="danishKodeMonkey" className="avatar max-md:self-center" />
          <div className="flex flex-col justify-end lg:justify-end xl:justify-normal xl:mt-52 text-center">
            <div className="flex justify-center">
              <h1>Hello there! </h1><h1>👋</h1>
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
          <p>Fighting  <span className="highlight-pink">epic</span>  battlesagainst <span className="highlight-red">Errors and bugs</span>{" "}</p>
          <br className="mb-2" />
          <p>
            While crafting <span className="highlight-yellow">legendary websites</span>, <span className="highlight-green">backend servers </span>and <span className="highlight-red">restful-APIs!</span>
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
