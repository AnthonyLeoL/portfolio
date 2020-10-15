import React from "react";

import headshot from "../resources/icons/einstein_quote.jpg";

import "./Tutoring.css";
const Tutoring: React.FC = () => {
  return (
    <div className="center-container">
      <div className="project-container longer">
        <div className="project-body">
          <img
            className="image"
            src={headshot}
            alt="Einstein quote: If you can't explain it simply, you don't understand it well enough"
          ></img>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I started tutoring math and
            english during my first semester in College at Los Angeles Pierce
            College. When studying I always found it helpful to imagine
            explaining the material to someone else.When I started tutoring and
            had to actually explain class material to other people, I found it
            came easy.
          </div>
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; After a few college courses in
            Computer Science, the head of the department approached me and asked
            if I had any interest in being an embedded tutor for introductory
            programming classes. The position was similar to a TA. I immediately
            accepted. I tutored two programming classes and several private
            students until I transferred schools in 2019..
          </div>
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the fall of 2018 the computer
            science department introduced an award for outstanding students, I
            was one three awarded with the accolade. As much as I wish I could
            say it was for my quality as a student (I was an A student, but
            nothing special beyond that), I was told that it was because of the
            kind things my students said about me and my tutoring. I continue to
            tutor and I never fail to enjoy it.
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            For private tutoring inquiry &nbsp;
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQGxn1WEwGuJmrh3EWI5MchICFKuuex3r10av4P-JGgKSFcA/viewform?usp=sf_link"
              about="blank"
            >
              Here
            </a>
            &nbsp; or send me a message on &nbsp;
            <a href="https://www.linkedin.com/in/anthony-lisa" about="blank">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tutoring;
