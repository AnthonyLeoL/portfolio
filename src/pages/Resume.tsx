import React from "react";

import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
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
