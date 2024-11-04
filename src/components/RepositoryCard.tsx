import _React from "react";
import { Repo } from "../types.ts";

interface RepoCardProps {
  repo: Repo;
}

const RepositoryCard: React.FC<RepoCardProps> = ({ repo }) => (
  <div key={repo.id} className="card">
    <div className="p-4 flex-grow overflow-scroll">
      <div className="flex justify-around">
        <div className="">
          <h2 className="card-title">{repo.name}</h2>
          <p className="card-description">
            {repo.description || "No description available"}
          </p>
        </div>
        <div className="repo-preview min-h-full">
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
);

export default RepositoryCard;
