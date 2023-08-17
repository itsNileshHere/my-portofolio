import React from "react";
import "./Footer.css";
import github from "../../img/githubW.png";
import telegram from "../../img/telegramW.png";
import gmail from "../../img/gmail.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 142 900 309">
        <path fill="#F5C32C" strokeLinecap="round" d="M0 225l75 12.7c75 12.6 225 38 375 24.1C600 248 750 195 825 168.5l75-26.5v309H0z"></path>
      </svg>
      <div className="f-content">
        <a href="mailTo:nileshmukherjee1855@gmail.com" target="_blank" rel="noreferrer">
          <svg style={{ height: "4rem", width: "17rem" }}
              xmlns="http://www.w3.org/2000/svg">
              <image preserveAspectRatio = "none" href={gmail} />
            </svg>
        </a>
        <div className="f-icons">
          <a href="https://github.com/itsNileshHere/" target="_blank" rel="noreferrer">
            <img src={github} alt="github" className="f-github" />
          </a>
          <a href="https://t.me/DsntMtter" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" className="f-telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
