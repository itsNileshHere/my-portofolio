import React from "react";
import "./Skills.css";
import Cards from "../S_Cards/S_Cards";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="s-info">
        <div className="s-head">
          <p>
            My <span style={{ color: "#F5C32C", marginTop: "0.5rem" }}>SkillSet</span>{" "}
          </p>
        </div>
        <p className="s-body">Here are some languages and tools I tried. I mainly use Figma and GIMP for designing purposes</p>
      </div>
      <div className="s-card">
        <Cards header={"Frontend Developer"} l1={"HTML"} w1={"80%"} l2={"CSS"} w2={"70%"} l3={"Javascript"} w3={"65%"} l4={"React"} w4={"60%"} />
        <Cards header={"Backend Developer"} l1={"PHP"} w1={"70%"} l2={"NodeJS"} w2={"55%"} l3={"Firebase"} w3={"40%"} l4={"Python"} w4={"50%"} />
        <Cards header={"Designer"} l1={"Figma"} w1={"60%"} l2={"Sketch"} w2={"40%"} l3={"Blender"} w3={"45%"} l4={"GIMP"} w4={"75%"} />
      </div>
      <ParallaxProvider>
        <Parallax speed={-30}>
          <div className="s-innerWordCloud">
            <p>jQuery</p>
            <p>CSS3</p>
            <p>MongoDB</p>
            <p>Figma</p>
            <p>GIMP</p>
            <p>NodeJS</p>
            <p>Blender</p>
            <p>MySQL</p>
            <p>php</p>
            <p>HTML5</p>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default Skills;
