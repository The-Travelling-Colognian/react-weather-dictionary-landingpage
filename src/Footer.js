import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded 💻 with love ❤️ in Cologne by{" "}
      <a
        className="responsive-portfolio-website"
        href="https://modest-lamarr-257cde.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vanessa Schade
      </a>{" "}
      open-sourced on
      <a
        href="https://github.com/The-Travelling-Colognian/react-weather-dictionary-landingpage"
        target="_blank"
        rel="noreferrer noopener"
      >
        {" "}
        GitHub
      </a>
      , and hosted on{" "}
      <a
        href="https://romantic-leakey-5172b8.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {" "}
        Netlify
      </a>
    </div>
  );
}
