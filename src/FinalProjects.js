import React from "react";
import "./FinalProjects.css";

export default function FinalProjects() {
  return (
    <div className="FinalProjects">
      <ul>
        <li>
          <a
            className="weatherApp btn btn-branding"
            href="https://competent-almeida-bddaf5.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React Weather App
          </a>
        </li>
        <li>
          <a
            className="weatherApp btn btn-branding"
            href="https://infallible-visvesvaraya-096ea3.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React Dictionary App
          </a>
        </li>
      </ul>
    </div>
  );
}
