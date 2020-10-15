import {
  dailyDetails,
  OMPdesc,
  quizMeDesc,
  hatDesc,
  teaDesc,
  thisSiteDesc,
} from "../resources/projectDescriptions.module";

import React from "react";
import ProjectDetails from "../components/ProjectDetails";

const dd = require("../resources/icons/dailydetails.JPG");
const OMP = require("../resources/icons/OMP1.jpg");
const code = require("../resources/icons/code_icon.png");
const website = require("../resources/icons/website_icon.png");
const quizme = require("../resources/icons/create_page_quizme.png");
const video_icon = require("../resources/icons/play_icon.png");
const hat = require("../resources/icons/hat.jpg");
const tea = require("../resources/icons/tea.png");
const this_site = require("../resources/icons/portfolio.JPG");

const Projects: React.FC = () => {
  return (
    <div className="project">
      <div className="text-container">
        <div className="text-break ">
          See github readmes for more techinal details and full descriptions.
          See resume for professional projects and experience
        </div>
      </div>
      <div className="project-page">
        <ProjectDetails
          name="Daily Details"
          description={dailyDetails}
          img={dd}
          bottomBar={[
            {
              icon: code,
              link: "https://github.com/AnthonyLeoL/Daily-Details",
            },
            { icon: website, link: "https://dailydetails.herokuapp.com/" },
          ]}
        />
        <ProjectDetails
          name="One Million Pounds"
          description={OMPdesc}
          img={OMP}
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
          name="QuizMe"
          description={quizMeDesc}
          img={quizme}
          bottomBar={[
            {
              icon: code,
              link: "https://github.com/ShaneEverittM/quiz-frontend",
            },
            {
              icon: code,
              link: "https://github.com/ShaneEverittM/quiz-backend",
            },
          ]}
        />{" "}
        <ProjectDetails
          name="This Site!"
          description={thisSiteDesc}
          img={this_site}
          bottomBar={[
            {
              icon: code,
              link: "https://github.com/AnthonyLeoL/portfolio",
            },
            {
              icon: website,
              link: "/projects",
            },
          ]}
        />
        <div className="text-container">
          <div className="text-break">Just for fun projects</div>
        </div>
        <ProjectDetails
          name="Graduation cap"
          description={hatDesc}
          img={hat}
          bottomBar={[
            { icon: video_icon, link: "https://youtu.be/pS5TCuoZrZo" },
          ]}
        />
        <ProjectDetails
          name="Automatic tea brewer"
          description={teaDesc}
          img={tea}
          bottomBar={[
            { icon: video_icon, link: "https://youtu.be/x8epoHnf6lo" },
          ]}
        />
      </div>
    </div>
  );
};
export default Projects;
