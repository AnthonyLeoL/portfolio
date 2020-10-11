import React from "react";
import "./ProjectDetails.css";
interface ProjectDeatilsProps {
  name: string;
  description: string;
  imgPath: string;
  bottomBar: [
    {
      icon?: string;
      link?: string;
    }
  ];
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
        {description}
        {bottomBar.map((item, i) => {
          return (
            <div className="bottom-bar" key={i}>
              <a href={item.link}>
                <img className="logo" src={item.icon}></img>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectDetails;
