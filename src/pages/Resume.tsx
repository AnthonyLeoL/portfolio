import React from "react";

import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <a id="resume_alt" href="https://resume.creddle.io/embed/bo54krzggwh">
        Cannot display on your browser, click here to view
      </a>
      <iframe
        title="resume"
        src="https://resume.creddle.io/embed/bo54krzggwh"
        width="850"
        height="1100"
        seamless
      ></iframe>
    </div>
  );
};
export default Resume;
