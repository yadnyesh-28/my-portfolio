import React from 'react'
import "./SkillCard.css"

export const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
            <div className="skill-icon">
                {iconUrl}
            </div>
            <span>{title}</span>

        </div>
    );
};
