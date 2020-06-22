import React from "react";
import "../css/Footer.css";

const Link = () => {
  return (
    <div className="class">
      <div className="about">
        <div className="about-app">
          <h3 className="history">About the App</h3>
          <h5 className="app">
            "No Thanks" takes the stress of going into a bad restaurant.
          </h5>
          <h5>
            We Are Dedicated To Ensure You Don't Have A Terrible Dining
            Experience.{" "}
          </h5>
          <h5>
            With Our Database, We Will Show You Exactly Where You Should NOT Go!
          </h5>
        </div>
      </div>
      <ul className="main-list">
        <div className="main-list__item">
          <h3 className="connect">Keep Connected</h3>
        </div>
        <h3 className="main-list__item">
          <a
            className="font"
            href="https://www.linkedin.com/in/rafid-hossain/"
            className="main-list__link"
          >
            Rafid Hossain
          </a>
        </h3>
        <h3 className="main-list__item">
          <a
            className="font"
            href="https://www.linkedin.com/in/marvinthompson36/"
            className="main-list__link"
          >
            Marvin Thompson
          </a>
        </h3>
        <h3 className="main-list__item">
          <a
            className="font"
            href="https://www.linkedin.com/in/dlaurent123/"
            className="main-list__link"
          >
            Danny Laurent
          </a>
        </h3>
      </ul>
    </div>
  );
};
export default Link;
