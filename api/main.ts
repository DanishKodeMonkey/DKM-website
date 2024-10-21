import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import data from "./data.json" with { type: "json" };

/* Router  */
const router = new Router();

router.get("/api/comments", (context) => {
  context.response.body = data;
});

router.get("/api/comments/:commentId", (context) => {
  if (!context?.params?.commentId) {
    context.response.body = "No commend ID provided";
  }
  const comment = data.find((item) => item.id === context.params.commentId);

  context.response.body = comment ?? "no comment found";
});

/* App */
const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
