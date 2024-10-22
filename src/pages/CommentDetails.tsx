import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Comment } from "../types.ts";

export default function CommentDetails() {
  const { selectedComment } = useParams();
  const [comment, setComment] = useState<Comment>({
    id: null,
    name: "",
    message: "",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/comments/${selectedComment}`);
      const comment = await response.json() as Comment;
      setComment(comment);
    })();
  }, [selectedComment]);

  return (
    <div>
      <h1>ID: {comment.id}</h1>
      <h1>Author: {comment.name}</h1>
      <h3>Message:</h3>
      <p>{comment.message}</p>

      <Link to={"/"}>Back to index</Link>
    </div>
  );
}
