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
    <main className="flex flex-col">
      <div>
        <h1 className="text-5xl">Hello there!</h1>
        <h3 className="text-3xl">
          My name is <span className="text-sky-400">Daniel</span>
        </h3>
        <h4 className="text-2xl">
          I am a <span className="text-amber-400">Full-stack web developer!</span>
        </h4>
        <p className="text-gray-400">
          I love creating <span className="font-bold text-slate-100">interesting</span> and <span className="font-bold text-slate-100">intuitive</span> web solutions, cracking
          <span className="font-bold text-red-500"> challenges</span> and <span className=" font-bold text-purple-500">learning</span> new things!
        </p>
        <button>Test button</button>
      </div>

      <div className="my-5 p-2 border border-solid border-slate-400 rounded-lg w-1/2 mx-auto">
        <h2 className=" text-lg font-extrabold text-center">Have a look at what people think of this site!</h2>
        <p className="text-slate-400 text-sm text-center">Click the comments to see some details!</p>
        <div className="flex flex-col gap-5 my-4">
            {comments.map((comment: Comment) => {
              return (
                <Link
                  to={`/${comment.id}`}
                  key={comment.id}
                  className="comment"
                >
                  {comment.name}: {comment.message}
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
}
