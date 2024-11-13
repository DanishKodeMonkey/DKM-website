import React from "react";
import { Repo } from "../types.ts";

interface RepoModalProps {
    repo: Repo;
    onClose: () => void;
}

const RepoModal: React.FC<RepoModalProps> = ({ repo, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>x</button>
                <div className="flex justify-between max-sm:flex-col-reverse my-5 max-sm:items-center">
                    <div className="flex flex-col w-2/3 max-sm:my-5 gap-2 max-sm:w-full">
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <p>{repo.languages}</p>
                        <p>Created at: {repo.created_at}</p>
                        <p>Last updated: {repo.updated_at}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                    <img src={repo.preview_image} alt="preview image" className="modal-preview" />
                </div>
            </div>
        </div>
    )
};


export default RepoModal