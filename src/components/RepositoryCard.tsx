import _React from "react";
import { Repo } from "../types.ts";

interface RepoCardProps {
  repo: Repo;
}

const RepositoryCard: React.FC<RepoCardProps> = ({ repo }) => (
  <div key={repo.id} className="card">
    <div className="p-4 flex-grow overflow-scroll">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="card-title">{repo.name}</h2>
          <p className=" text-sm card-description">
            {repo.description || "No description available"}
          </p>
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