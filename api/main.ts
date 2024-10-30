import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import "jsr:@std/dotenv/load";
import { Octokit } from "@octokit/rest";
import data from "./data.json" with { type: "json" };
import { checkPreviewImageExists, getPreviewImageUrl } from "./utils.ts";

/* Router  */
const router = new Router();
const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

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
router.get("/api/repos", async (context) => {
  const page = parseInt(context.request.url.searchParams.get("page") || "1");
  const per_page = parseInt(
    context.request.url.searchParams.get("per_page") || "10",
  );

  try {
    console.log(`Attempting to fetch repos: page${page}, per_page${per_page}`);

    // fetch user repos
    const response = await octokit.repos.listForAuthenticatedUser({
      per_page,
      page,
    });
    /* preview image check */
    const repos = await Promise.all(response.data.map(async (repo) => {
      const previewUrl = getPreviewImageUrl(repo.owner.login, repo.name);
      const imageExists = await checkPreviewImageExists(previewUrl);
      return {
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        created_at: repo.created_at, // parse to Date
        updated_at: repo.updated_at,
        preview_image: imageExists ? previewUrl : null,
      };
    }));

    context.response.body = repos;
  } catch (error) {
    console.error("Error fetching GitHub repos: ", error);
    context.response.status = 500;
    context.response.body = { error: "Failed to fetch repos" };
  }
});

router.get("/api/repos/:repoName", async (context) => {
  const owner: string = "danishKodeMonkey";
  const repo: string = context.params.repoName;

  try {
    const response = await octokit.rest.repos.get({
      owner,
      repo,
    });
    const previewUrl = getPreviewImageUrl(owner, repo);
    const imageExists = await checkPreviewImageExists(previewUrl);

    context.response.body = {
      id: response.data.id,
      name: response.data.name,
      html_url: response.data.html_url,
      description: response.data.description,
      created_at: response.data.created_at, // parse to Date
      updated_at: response.data.updated_at,
      preview_image: imageExists ? previewUrl : null,
    };
  } catch (error) {
    console.error("Error fetching GitHub repo: ", error);
    context.response.status = 500;
    context.response.body = { error: "Failed to fetch repos" };
  }
});

/* App */
const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
