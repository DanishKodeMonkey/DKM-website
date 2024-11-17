import React from 'react';

interface CpBtnProps {
    href: string;
    content: string;
    label: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
}

function randLabel(): string {
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter A-Z
    const digits = Math.floor(Math.random() * 100).toString().padStart(2, "0"); // Two-digit number
    return `${letter}${digits}`;
}

const CpBtn: React.FC<CpBtnProps> = ({
    href, label, content, target, rel
}) => {

    return (
        <a
            target={target}
            rel={rel}
            href={href}
            className="clip-btn"
        >
            <div className="clip-btn-content">
                {content}
            </div>
            <span className="clip-btn-label">{label ? label : randLabel()}</span>
        </a>
    )
}

export default CpBtn;