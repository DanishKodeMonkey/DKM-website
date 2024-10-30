import React, { useEffect, useState } from "react";
import { Repo } from "../types.ts";
import { useLoading } from "../contexts/LoadingContext.tsx";
import RepositoryCard from "../components/RepositoryCard.tsx";

const Portfolio: React.FC = () => {
  const [featuredRepos, setFeaturedRepos] = useState<Repo[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);
  const { isLoading, setIsLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  useEffect(() => {
    fetchFeaturedRepos();
  }, []);

  useEffect(() => {
    fetchRepos(currentPage);
  }, [currentPage]);

  const fetchFeaturedRepos = async () => {
    try {
      const featuredRepoNames = [
        "odin-file-uploader",
        "coffee-lovers-club-postgresql",
        "odin-inventory-application-postgreSQL",
      ];
      const fetchedFeaturedRepos = await Promise.all(
        featuredRepoNames.map(async (name) => {
          const response = await fetch(`/api/repos/${name}`);
          if (response.ok) {
            return response.json();
          } else {
            console.error("Failed to fetch featured repo: ", name);
            return null;
          }
        }),
      );
      setFeaturedRepos(
        fetchedFeaturedRepos.filter((repo): repo is Repo => repo !== null),
      );
    } catch (err) {
      console.error("Error fetching featured repos:", err);
    }
  };
  const fetchRepos = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/repos?page=${page}&per_page=${perPage}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repos");
      }
      const data = await response.json();

      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = () => {
    if (repos.length === perPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="portfolio padding-responsive">
        <div>
          <h1>My projects</h1>
          <h2 className="text-xs text-slate-500">
            <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28">
              Pulled from GitHub using GitHub API and octokit
            </a>
          </h2>
        </div>
        <div>
          <h2>Featured Projects</h2>
          <div className="repos-container">
            {featuredRepos.map((repo: Repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
        <div>
          <h2>All my repos</h2>
          <div className="repos-container">
            {isLoading ? <p>Loading...</p> : (
              repos.map((repo: Repo) => (
                <RepositoryCard key={repo.id} repo={repo} />
              ))
            )}
          </div>
        </div>
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="pagination-button"
            onClick={handleNextPage}
            disabled={repos.length < perPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
