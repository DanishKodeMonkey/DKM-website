import _React from "react";
import { Repo } from "../types.ts";
import CpBtn from "./CpBtn.tsx";

interface RepoCardProps {
  repo: Repo;
  onClick: () => void;
}

const RepositoryCard: React.FC<RepoCardProps> = ({ repo, onClick }) => (
  <div key={repo.id} className="card" onClick={onClick}>
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

    <CpBtn target="_blank" rel="noopener noreferrer" href={repo.html_url} content="CHECK IT OUT_" />
  </div>
);

export default RepositoryCard;
