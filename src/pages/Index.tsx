import { useEffect, useState } from "react";
// @ts-ignore: Deno hates images
import DKM from "../public/assets/mm12sSNz.jpg";

import { Link } from "react-router-dom";
import { Comment } from "../types.ts";
import { useLoading } from "../contexts/LoadingContext.tsx";
import TechScroller from "../components/TechScroller.tsx";

export default function Index() {
  const { setIsLoading } = useLoading();

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch("/api/comments/");

      const allComments = await response.json() as Comment[];
      setComments(allComments);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="text-center responsive-text">
        <h1>Hello there!</h1>
        <div className="flex align-middle justify-center">
          <img src={DKM} alt="danishKodeMonkey" className="avatar" />
        </div>
        <h3>
          My name is <span className="highlight-blue">Daniel</span>
        </h3>
        <h4>
          I am a{" "}
          <span className="highlight-amber">Full-stack web developer!</span>
        </h4>
        <p>
          I love creating{" "}
          <span className="font-bold highlight-green">interesting</span> and
          {" "}
          <span className="font-bold highlight-pink">intuitive</span>{" "}
          web solutions, cracking{" "}
          <span className="font-bold highlight-red">challenges</span> and{" "}
          <span className=" font-bold highlight-purple">learning</span>{" "}
          new things!
        </p>

        <TechScroller />


      </div>
    </>
  );
}
