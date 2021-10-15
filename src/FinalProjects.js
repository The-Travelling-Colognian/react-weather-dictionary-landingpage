import React from "react";
import "./FinalProjects.css";

export default function FinalProjects() {
  return (
    <div className="FinalProjects">
      <div className="row">
        <div className="col-6 weatherApp">
          <a
            className="weatherApp btn btn-branding"
            href="https://competent-almeida-bddaf5.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React Weather App
          </a>
        </div>
        <div className="col-6 dictionaryApp">
          <a
            className="weatherApp btn btn-branding"
            href="https://infallible-visvesvaraya-096ea3.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React Dictionary App
          </a>
        </div>
      </div>
    </div>
  );
}
