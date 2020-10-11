import React from "react";
import "./ProjectDetails.css";

interface ProjectDeatilsProps {
  name: string;
  description: string;
  imgPath: string;
  bottomBar: {
    icon?: string;
    link?: string;
  }[];
}

const ProjectDetails: React.FC<ProjectDeatilsProps> = ({
  name,
  description,
  imgPath,
  bottomBar,
}) => {
  return (
    <div className="project-container">
      <span className="title">{name}</span>
      <div className="project-body">
        <img className="image" src={imgPath}></img>
        <p>{description}</p>{" "}
        <div className="bottom-bar">
          {bottomBar.map((item, i) => {
            return (
              <a key={i} href={item.link}>
                <img className="logo" src={item.icon}></img>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
