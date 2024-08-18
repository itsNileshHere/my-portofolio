import React from "react";
import "./About.css";
// import me from "../../img/me.png";

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
                <image width={"14rem"} 
                  preserveAspectRatio="none" 
                  href="https://github.com/itsNileshHere.png" 
                  alt="GitHub Profile"  />
              </svg>
            </section>
          </div>
          <div className="a-bodyInfo">
            <p>
              Hi, I'm Nilesh Mukherjee, a self-taught developer with a passion for building projects in my free time. I'm currently pursuing a
              Master of Computer Science and enjoy working with JavaScript, though I have a fondness for Python and C as well. <br></br>
              <br></br>I'm an advocate of <b>Open-Source</b> projects and am currently interning in the field of <b>Machine Learning</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
