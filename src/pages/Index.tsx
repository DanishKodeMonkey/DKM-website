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
          My name is <span className="text-sky-400">Daniel</span>
        </h3>
        <h4>
          I am a{" "}
          <span className="text-amber-400">Full-stack web developer!</span>
        </h4>
        <p>
          I love creating{" "}
          <span className="font-bold text-slate-100">interesting</span> and{" "}
          <span className="font-bold text-slate-100">intuitive</span>{" "}
          web solutions, cracking{" "}
          <span className="font-bold text-red-500">challenges</span> and{" "}
          <span className=" font-bold text-purple-500">learning</span>{" "}
          new things!
        </p>
        <TechScroller />
      </div>
      <div className="container">
        <h3>
          Have a look at what people think of this site!
        </h3>
        <p>
          Click the comments to see some details!
        </p>
        <div className="flex flex-col gap-5 my-4">
          {comments.map((comment: Comment) => {
            return (
              <div className="card" key={comment.id}>
                <Link
                  to={`/comments/${comment.id}`}
                  className="comment"
                >
                  {comment.name}: {comment.message}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
