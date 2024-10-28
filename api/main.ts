import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import "jsr:@std/dotenv/load"
import {Octokit} from '@octokit/rest'
import data from "./data.json" with { type: "json" };

/* Router  */
const router = new Router();
const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN")

const octokit = new Octokit({
  auth: GITHUB_TOKEN
})

/* Comments */
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

/* Github (portfolio) */
router.get("/api/repos", async(context) =>{
  try{
    // fetch user repos
    const response = await octokit.repos.listForAuthenticatedUser({per_page: 10,})
    context.response.body = response.data.map((repo) =>({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      created_at: repo.created_at, // parse to Date
      updated_at: repo.updated_at
      
    }))
  }catch(error){
    console.error("Error fetching GitHub repos: ", error)
    context.response.status = 500
    context.response.body = { error : "Failed to fetch repos"}
  }
})

/* App */
const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
