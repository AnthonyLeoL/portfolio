import React from "react";

import headshot from "../resources/icons/einstein_quote.jpg";

import "./Tutoring.css";
interface TutoringProps {}
const Tutoring: React.FC<TutoringProps> = ({}) => {
  return (
    <div className="center-container">
      <div className="project-container longer">
        <div className="project-body">
          <img className="image" src={headshot}></img>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I started tutoring math and
            english during my first semester in College at Los Angeles Pierce
            College. When studying I always found it helpful to imagine
            explaining the material to someone else. When I actually was
            explaining topics to other people, it came easy from all the
            imaginary practice.
          </div>
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; After a few college courses in
            Computer Science, the head of the department approacched me and
            asked if I had any interest in being an embedded tutor for
            introductory programming classes. The position was similar to a TA.
            I immediately accepted. I tutored classes and privately until I
            transeferred schools in 2019.
          </div>
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the fall of 2018 the computer
            science department introduced an award for outstanding students, I
            was one three awared with the accolade. As much as I wish I could
            say it was for my quality as a student (I was an A student, but
            nothing incredibly impressive), I was told that it was because of
            the kind things my students said about me and my tutoring. I
            continue to tutor and I never fail to enjoy it.
          </div>
          <br />
          <div>
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
