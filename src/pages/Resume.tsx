import React from "react";

import "./Resume.css";
interface ResumeProps {}

const Resume: React.FC<ResumeProps> = ({}) => {
  return (
    <div className="resume-container">
      <iframe
        src="https://resume.creddle.io/embed/bo54krzggwh"
        width="850"
        height="1100"
        seamless
      ></iframe>
    </div>
  );
};
export default Resume;
