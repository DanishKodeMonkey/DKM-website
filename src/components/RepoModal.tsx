import React, { useState, useEffect } from "react";
import { Repo } from "../types.ts";

interface RepoModalProps {
    repo: Repo;
    onClose: () => void;
}

const RepoModal: React.FC<RepoModalProps> = ({ repo, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    /* set open on mount(appear) to trigger animations*/
    useEffect(() => {
        setIsOpen(true)
    }, [])

    const handleCloseModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 400)
    }
    return (
        <div className={`modal-overlay transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleCloseModal}>
            <div className={`modal-content transition-transform duration-200 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-80'}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={handleCloseModal}>x</button>
                <div className="flex justify-between max-sm:flex-col-reverse my-5 max-sm:items-center gap-4 h-full">
                    <div className="flex flex-col w-2/3 max-sm:my-5 max-sm:w-full">
                        <h3>{repo.name}</h3>
                        <div className="flex flex-col sm:flex-row border border-highlight-light p-1 text-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
                            <div className="flex-1">
                                <p className="text-sm">Created at:</p>
                                <p className="text-sm">{repo.created_at}</p>
                            </div>
                            <div className="hidden sm:block border-r border-highlight-light"></div>
                            <div className="flex-1">
                                <p className="text-sm">Last updated:</p>
                                <p className="text-sm">{repo.updated_at}</p>
                            </div>
                        </div>
                        <div className="border border-highlight-light px-2 py-5 h-full">
                            <p>{repo.description}</p>
                        </div>
                        <div className="border border-highlight-light p-2 mb-auto">

                            <p>{repo.languages}</p>
                        </div>

                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" >View on GitHub</a>
                    </div>
                    <img src={repo.preview_image} alt="preview image" className="modal-preview" />
                </div>
            </div>
        </div>
    )
};


export default RepoModal