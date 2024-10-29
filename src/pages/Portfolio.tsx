import React, { useEffect, useState } from "react";
import { Repo } from "../types.ts";
import { useLoading } from "../contexts/LoadingContext.tsx";

const Portfolio: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const { setIsLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data = await response.json();
        console.log(data);

        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <div className="portfolio">
        <h1>My projects</h1>
        <h2 className="text-xs text-slate-500">
          <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28">
            Pulled from GitHub using GitHub API and octokit
          </a>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo: Repo) => (
            <div key={repo.id} className="card">
              <div className="p-4 flex-grow overflow-scroll">
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <h2 className="card-title">{repo.name}</h2>
                  </div>
                  <div className="repo-preview ring-2 flex items-center justify-center w-1/2">
                    {repo.preview_image
                      ? (
                        <img
                          src={repo.preview_image}
                          alt="Preview"
                          className="repo-preview-image"
                        />
                      )
                      : <p className="text-base">No Preview Available</p>}
                  </div>
                </div>
                <p className="card-date">
                  Created at: {new Date(repo.created_at).toLocaleDateString()}
                </p>
                <p className="card-date">
                  Updated at: {new Date(repo.updated_at).toLocaleDateString()}
                </p>

                <p className="card-description">
                  {repo.description || "No description available"}
                </p>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-button"
              >
                Check it out!
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
