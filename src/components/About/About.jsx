import React from "react";
import "./About.css";
import me from "../../img/me.png";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="a-head">
        About <span style={{ color: "var(--yellow)" }}>Me</span>
      </div>
      <div className="a-bodyContainer">
        <div className="a-body">
          <div className="a-bodyPic">
            <section className="picDiv">
              <svg style={{ position: "absolute", height: "14rem", width: "14rem", top: "2%" }} xmlns="http://www.w3.org/2000/svg">
                <image width={"14rem"} preserveAspectRatio="none" href={me} />
              </svg>
            </section>
          </div>
          <div className="a-bodyInfo">
            <p>
              Hi, I'm Nilesh Mukherjee, a self-taught passionate developer from India, currently pursuing Master of Computer Science. I like to build stuffs in my free time. I mainly use Javascript to code, but I like Python and C too. <br></br>
              <br></br>I love <b>Open-Source</b> Projects. Currently interning for Machine Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
