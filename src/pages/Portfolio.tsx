import React, { useEffect, useState } from "react";
import { Repo } from "../types.ts";
import { useLoading } from "../contexts/LoadingContext.tsx";
import RepositoryCard from "../components/RepositoryCard.tsx";
import RepoModal from "../components/RepoModal.tsx";

const Portfolio: React.FC = () => {
  const [featuredRepos, setFeaturedRepos] = useState<Repo[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null); 
  const { isLoading, setIsLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moreRepos, setMoreRepos] = useState<boolean>(true)
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

      setMoreRepos(data.length === perPage)

      setRepos((prevRepos: Repo[]) => [...prevRepos, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewMore = () => {
    setCurrentPage((prev: number) => prev + 1);

  };

  const handleCardClick = (repo: Repo) => {
    setSelectedRepo(repo)
  }

  const closeModal = () => {
    setSelectedRepo(null)
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <>
      <div className="portfolio">
        <div>
          <h1>My projects</h1>
          <h2 className="text-xs text-slate-500">
            <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28">
              Pulled from GitHub using GitHub API and octokit
            </a>
          </h2>
        </div>
        <div>
          <h2 className="pb-5">Featured Projects</h2>
          <div className="repos-container">
            {featuredRepos.map((repo: Repo) => (
              <RepositoryCard key={repo.id} repo={repo} onClick={() => handleCardClick(repo)} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="pb-5">All my repos</h2>
          <div className="repos-container">
            {repos.map((repo: Repo) => (<RepositoryCard key={repo.id} repo={repo} onClick={() => handleCardClick(repo)} />))}

          </div>
          {isLoading && (
            <div className="text-center mx-auto my-20">
              <p>Loading...</p>
            </div>
          )}
        </div>
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={handleViewMore}
            disabled={isLoading || !moreRepos}
          >
            {moreRepos ? "More repos!" : "I've run out of repos, to be continued!"}
          </button>
        </div>
      </div>
      {/* Repo details modal */}
      {selectedRepo && <RepoModal repo={selectedRepo} onClose={closeModal} />}
    </>
  );
};

export default Portfolio;
