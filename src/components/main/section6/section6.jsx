import React from "react";
import "./section6.css";
import image1 from "../../../assets/images/Group 124.png";

function Section6() {
  return (
    <div className="body">
      <section className="sect-6">
        <div className="wrapper">
          <div className="left">
            <h1>
              Class Management <span>Tools for Educators</span>
            </h1>
            <p>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className="right">
            <img src={image1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section6;
