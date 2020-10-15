import React from "react";
import "./ProjectDetails.css";

interface ProjectDeatilsProps {
  name: string;
  description: string;
  img: string;
  bottomBar: {
    icon?: string;
    link?: string;
  }[];
}

const ProjectDetails: React.FC<ProjectDeatilsProps> = ({
  name,
  description,
  img,
  bottomBar,
}) => {
  return (
    <div className="project-container">
      <span className="title">{name}</span>
      <div className="project-body">
        <img className="image" src={img} alt="project preview"></img>
        <p>{description}</p>{" "}
        <div className="bottom-bar">
          {bottomBar.map(
            (
              item,
              i
            ): React.DetailedHTMLProps<
              React.AnchorHTMLAttributes<HTMLAnchorElement>,
              HTMLAnchorElement
            > => {
              return (
                <a key={i} href={item.link} target="blank">
                  <img
                    className="icon"
                    src={item.icon}
                    alt="project link"
                  ></img>
                </a>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
