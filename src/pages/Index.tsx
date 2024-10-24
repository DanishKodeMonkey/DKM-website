import { useEffect, useState } from "react";
// @ts-ignore: Deno ts hates image file imports
import DKM from "../public/assets/mm12sSNz.jpg";

import { Link } from "react-router-dom";
import { Comment } from "../types.ts";
import { useLoading } from "../contexts/LoadingContext.tsx";
import Loading from "../components/Loading.tsx";

export default function Index() {
  const { isLoading, setIsLoading } = useLoading();

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/comments/");

      const allComments = await response.json() as Comment[];
      setComments(allComments);
    })();
  }, []);

  return (
    <main className="container">
      {isLoading ? <Loading /> : (
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
              <span className="font-bold text-slate-100">interesting</span> and
              {" "}
              <span className="font-bold text-slate-100">intuitive</span>{" "}
              web solutions, cracking{" "}
              <span className="font-bold text-red-500">challenges</span> and
              {" "}
              <span className=" font-bold text-purple-500">learning</span>{" "}
              new things!
            </p>
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
                      to={`/${comment.id}`}
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
      )}
    </main>
  );
}
