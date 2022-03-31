import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="myContact">
      <div className="containerContact">
        <div className="email">
          <h2>frankie.tsoi.yh@gmail.com</h2>
        </div>
        <div className="linkedin">
          <img
            className="linkinlogo"
            src="assets/linkedin.svg"
            alt="linkedinLogo"
            onClick={() =>
              window.open(`https://www.linkedin.com/in/frankie-tsoi/`)
            }
          />
        </div>

        <div className="gitHub">
          <img
            className="gitHubLogo"
            src="assets/Github.svg"
            alt="linkedinLogo"
            onClick={() =>
              window.open(`https://github.com/nkie009?tab=repositories`)
            }
          />
        </div>
      </div>
      <p>frankie designed &copy;</p>
    </div>
  );
}
