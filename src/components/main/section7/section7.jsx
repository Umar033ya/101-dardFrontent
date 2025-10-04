import React from "react";
import "./section7.css";
import image2 from "../../../assets/images/Group 106.png";
function Section7() {
  return (
    <div className="body">
      <section className="sect-7">
        <div className="wrapper2">
          <div className="left">
            <img src={image2} alt="" />
          </div>
          <div className="right">
            <h1>
              One-on-One <span>Discussions</span>
            </h1>
            <p>
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section7;
