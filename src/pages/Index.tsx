import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Comment } from "../types.ts";

export default function Index() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/comments/");
      console.log(response);

      const allComments = await response.json() as Comment[];
      setComments(allComments);
    })();
  }, []);

  return (
    <main className="container">
      <div className="text-center responsive-text">
        <h1>Hello there!</h1>
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
          web solutions, cracking 
          <span className="font-bold text-red-500"> challenges</span> and{" "}
          <span className=" font-bold text-purple-500">learning</span>{" "}
          new things!
        </p>

      </div>
      <button>Test button</button>
      <div className="container">
        <h2>
          Have a look at what people think of this site!
        </h2>
        <p>
          Click the comments to see some details!
        </p>
        <div className="flex flex-col gap-5 my-4">
          {comments.map((comment: Comment) => {
            return (
              <div className="card">
                  <Link
                    to={`/${comment.id}`}
                    key={comment.id}
                    className="comment"
                  >
                    {comment.name}: {comment.message}
                  </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
