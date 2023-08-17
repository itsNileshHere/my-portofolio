import React from "react";
import "./Contact.css";

const Contact = () => {
  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact" id="Contact">
      <div className="c-text">
        <p>Have Questions?</p>
        <p style={{ color: "var(--yellow)", marginTop: "0.5rem" }}>Contact Me</p>
      </div>
      <div className="c-form">
        <form>
          <input type="text" id="fName" className="c-user" placeholder="Your Full Name" />
          <input type="email" id="email" aria-describedby="emailHelp" className="c-user" placeholder="Your Email" />
          <textarea id="textArea" rows="3" className="c-user" placeholder="Your Message" style={{ height: 80 }}></textarea>
          <button onClick={submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
