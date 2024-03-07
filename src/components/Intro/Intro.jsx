import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import telegram from '../../img/telegram.png'

const Intro = () => {
  return (
    <div className="intro" id='Intro'>
      <div className="i-left">
        <div className="i-name">
          <p style={{ fontSize: "1.25rem" }}>Hello, I'm</p>
          <p className="name">NILESH MUKHERJEE</p>
          <p className="i-info">Developer From India</p>
          <button>Download CV</button>
        </div>
        <div className="i-connect">
          <a href='https://github.com/itsNileshHere/' target="_blank" rel="noreferrer" style={{ padding: "15px" }}>
            <img src={github} alt="github" height={40} width={40} />
          </a>
          <a href='https://www.linkedin.com/in/nmukherjeecse/' target="_blank" rel="noreferrer" style={{ padding: "5px" }}>
            <img src={linkedin} alt="linkedin" height={60} width={60} />
          </a>
          <a href='https://t.me/DsntMtter' target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" height={70} width={70} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-shape">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox='0 0 725 990'>
            <path fill="#FCA61F" stroke="#FCA61F" d="M209.5 0H725v934.5L8 218.5q-3.5-4-2-13l2-4L209.5 0z"></path>
          </svg>
        </div>
        <div className='i-box'>
          <div>
            <p>
              1&nbsp;&nbsp;class <b>Person</b> {'{'}
            </p>
            <p>
              2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}
            </p>
            <p>
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "<b>Nilesh Mukherjee</b>";
            </p>
            <p>
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["<b>DEV</b>", "<b>DESIGN</b>"];
            </p>
            <p>
              5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new Date().getFullYear() - 2001;
            </p>
            <p>
              6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            </p>
            <p>
              7&nbsp;&nbsp;{'}'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro