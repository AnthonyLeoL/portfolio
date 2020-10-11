import { lorem, dailyDetails } from "../resources/projectDescriptions.module";

import React from "react";
import ProjectDetails from "../components/ProjectDetails";

const dd = require("../resources/icons/dailydetails.JPG");
const OMP = require("../resources/icons/OMP.jpg");
const code = require("../resources/icons/code_icon.png");
const website = require("../resources/icons/website_icon.png");

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className="project">
      <ProjectDetails
        name="Daily Details"
        description={dailyDetails}
        imgPath={dd}
        bottomBar={[
          { icon: code, link: "https://github.com/AnthonyLeoL/Daily-Details" },
          { icon: website, link: "https://dailydetails.herokuapp.com/" },
        ]}
      />
      <ProjectDetails
        name="One Million Pounds"
        description={lorem}
        imgPath={OMP}
        bottomBar={[
          {
            icon: code,
            link: "https://github.com/AnthonyLeoL/One-million-pounds",
          },
          {
            icon: website,
            link:
              "https://play.google.com/store/apps/details?id=com.antapps.onemillionpounds",
          },
        ]}
      />
      <ProjectDetails
        name="Quizme"
        description={lorem}
        imgPath={dd}
        bottomBar={[
          {
            icon: code,
            link: "https://github.com/ShaneEverittM/quiz-frontend",
          },
        ]}
      />
    </div>
  );
};
export default Projects;
