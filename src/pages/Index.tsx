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

        <div className="flex justify-center">
          <img src={DKM} alt="danishKodeMonkey" className="avatar" />
          <div className="flex-col mt-40">
            <h1>Hello there! 👋</h1>
            <h2>
              My name is <span className="highlight-blue">Daniel</span>
            </h2>
            <h3 className="pb-5">
              I am a{" "}
              <span className="highlight-amber">Full-stack web wizard!</span>
            </h3>
          </div>
        </div>

        <p>
          I am on a eternal quest of{" "}
          <span className="highlight-green">continuous learning</span>.
          <br />
          <span className="highlight-pink">Fighting epic battles</span> against <span className="highlight-red">Errors and bugs</span>{" "}
          <br />
          While crafting <span className="highlight-yellow">legendary websites</span>, <span className="highlight-green">backend servers </span>and <span className="highlight-red">restful-APIs!</span>
        </p>


        <TechScroller />


      </div>
    </>
  );
}
